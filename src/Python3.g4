
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 by Bart Kiers
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * Project      : python3-parser; an ANTLR4 grammar for Python 3
 *                https://github.com/bkiers/python3-parser
 * Developed by : Bart Kiers, bart@big-o.nl
 */
grammar Python3;

// All comments that start with "///" are copy-pasted from
// The Python Language Reference: https://docs.python.org/3.3/reference/grammar.html

tokens { INDENT, DEDENT }

@lexer::header {
  import { Token } from 'antlr4ts/Token';
  import { CommonToken } from 'antlr4ts/CommonToken';
  import { Python3Parser } from './Python3Parser';
}

@lexer::members {
  private token_queue: Token[] = [];
  private indents: number[] = [];
  private opened: number = 0;
  private last_token: Token|undefined = undefined;
  @Override
  public reset(): void {
    // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
    this.token_queue = [];
    // The stack that keeps track of the indentation level.
    this.indents = [];
    // The amount of opened braces, brackets and parenthesis.
    this.opened = 0;
    super.reset();
  };

  @Override
  public emit(token?: Token): Token {
    if (token) {
      token = super.emit(token);
    } else {
      token = super.emit();
    }
    this.token_queue.push(token);
    return token;
  };

  /**
   * Return the next token from the character stream and records this last
   * token in case it resides on the default channel. This recorded token
   * is used to determine when the lexer could possibly match a regex
   * literal.
   *
   */
  @Override
  public nextToken(): Token {
    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
    if (this.inputStream.LA(1) === Python3Parser.EOF && this.indents.length) {
      // Remove any trailing EOF tokens from our buffer.
      this.token_queue = this.token_queue.filter(function(val) {
        return val.type !== Python3Parser.EOF;
      });

      // First emit an extra line break that serves as the end of the statement.
      this.emit(this.commonToken(Python3Parser.NEWLINE, "\n"));

      // Now emit as much DEDENT tokens as needed.
      while (this.indents.length) {
        this.emit(this.createDedent());
        this.indents.pop();
      }

      // Put the EOF back on the token stream.
      this.emit(this.commonToken(Python3Parser.EOF, "<EOF>"));
    }

    let next = super.nextToken();

    if (next.channel == Token.DEFAULT_CHANNEL) {
      // Keep track of the last token on the default channel.
      this.last_token = next;
    }

    return this.token_queue.shift() || next;
  }

  private createDedent(): Token {
    let dedent = this.commonToken(Python3Parser.DEDENT, "");
    if (this.last_token) {
      dedent.line = this.last_token.line;
    }
    return dedent;
  }

  private commonToken(type: number, text: string): CommonToken {
    let stop: number = this.charIndex - 1;
    let start: number = text.length ? stop - text.length + 1 : stop;
    return new CommonToken(type, text, this._tokenFactorySourcePair, Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
  }

  // Calculates the indentation of the provided spaces, taking the
  // following rules into account:
  //
  // "Tabs are replaced (from left to right) by one to eight spaces
  //  such that the total number of characters up to and including
  //  the replacement is a multiple of eight [...]"
  //
  //  -- https://docs.python.org/3.1/reference/lexical_analysis.html#indentation
  private getIndentationCount(whitespace: string): number {
    let count = 0;
    for (let i = 0; i < whitespace.length; i++) {
      if (whitespace[i] === '\t') {
        count += 8 - count % 8;
      } else {
        count++;
      }
    }
    return count;
  }

  private atStartOfInput(): boolean {
    return this.charIndex === 0;
  }
}

/*
 * parser rules
 */

 tl_input
 : NEWLINE* (import_stmt NEWLINE*)* (funcdef NEWLINE*)* (stmt NEWLINE*)* EOF
 ;

/// funcdef: 'def' NAME parameters ['->' test] ':' suite
funcdef
 : DEF NAME parameters NEWLINE suite 'end' DEF
 ;

/// parameters: '(' [typedargslist] ')'
parameters
 : '(' varargslist? ')'
 ;

/// typedargslist: (tfpdef ['=' test] (',' tfpdef ['=' test])* [','
///                ['*' [tfpdef] (',' tfpdef ['=' test])* [',' '**' tfpdef] | '**' tfpdef]]
///              |  '*' [tfpdef] (',' tfpdef ['=' test])* [',' '**' tfpdef] | '**' tfpdef)
/*typedargslist
 : tfpdef? ( ',' tfpdef )*
 ;

/// tfpdef: NAME [':' test]
tfpdef
 : NAME
 ;*/

/// varargslist: (vfpdef ['=' test] (',' vfpdef ['=' test])* [','
///       ['*' [vfpdef] (',' vfpdef ['=' test])* [',' '**' vfpdef] | '**' vfpdef]]
///     |  '*' [vfpdef] (',' vfpdef ['=' test])* [',' '**' vfpdef] | '**' vfpdef)
varargslist
 : vfpdef ( ',' vfpdef )* 
 ;
/// vfpdef: NAME
vfpdef
 : NAME
 ;

block_stmt
 : NEWLINE? stmt 
 | OPEN_BRACE NEWLINE? (stmt | NEWLINE)+ CLOSE_BRACE NEWLINE?
 ;

/// stmt: simple_stmt | compound_stmt
stmt
 : simple_stmt
 | compound_stmt
 ;

/// simple_stmt: small_stmt (';' small_stmt)* [';'] NEWLINE
simple_stmt
 : small_stmt NEWLINE? // ( ';' small_stmt )* ';'? NEWLINE
 ;

/// small_stmt: (expr_stmt | del_stmt | pass_stmt | flow_stmt |
///              import_stmt | global_stmt | nonlocal_stmt | assert_stmt)
small_stmt
 : (READ | LOG) '(' argument NEWLINE? ')'
 | expr_stmt
 | flow_stmt
 | import_stmt
 ;

/// expr_stmt: testlist_star_expr (augassign (yield_expr|testlist) |
///                      ('=' (yield_expr|testlist_star_expr))*)
expr_stmt
 : testlist_star_expr ( augassign ( testlist )
                      | ( '=' ( testlist_star_expr ) )*
                      )
 ;

/// testlist_star_expr: (test|star_expr) (',' (test|star_expr))* [',']
testlist_star_expr
 : ( test_nocond )
 ;

/// augassign: ('+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=' |
///             '<<=' | '>>=' | '**=' | '//=')
augassign
 : '+='
 | '-='
 | '*='
 | '/='
 | '%='
 | '^='
 ;

/// flow_stmt: break_stmt | continue_stmt | return_stmt | raise_stmt | yield_stmt
flow_stmt
 : return_stmt
 ;

/// return_stmt: 'return' [testlist]
return_stmt
 : RETURN '(' testlist? ')'
 ;

/// import_stmt: import_name | import_from
import_stmt
 : import_name
 | import_from
 ;

/// import_name: 'import' dotted_as_names
import_name
 : IMPORT dotted_as_names NEWLINE
 ;

/// # note below: the ('.' | '...') is necessary because '...' is tokenized as ELLIPSIS
/// import_from: ('from' (('.' | '...')* dotted_name | ('.' | '...')+)
///               'import' ('*' | '(' import_as_names ')' | import_as_names))
import_from
 : FROM NAME import_name
 ;

/// dotted_as_names: dotted_as_name ('.' dotted_as_name)*
dotted_as_names
 : NAME ( '.' NAME )*
 ;

/// compound_stmt: if_stmt | while_stmt | for_stmt | try_stmt | with_stmt | funcdef | classdef | decorated
compound_stmt
 : if_stmt
 | while_stmt
 | for_stmt
 // | funcdef
 ;

/// if_stmt: 'if' test ':' suite ('elif' test ':' suite)* ['else' ':' suite]
if_stmt
 : IF OPEN_PAREN test CLOSE_PAREN block_stmt ( ELSE IF OPEN_PAREN test CLOSE_PAREN block_stmt )* ( ELSE block_stmt )?
 ;

/// while_stmt: 'while' test ':' suite ['else' ':' suite]
while_stmt
 : WHILE test block_stmt
 ;

/// for_stmt: 'for' exprlist 'in' testlist ':' suite ['else' ':' suite]
for_stmt
 : FOR exprlist IN testlist block_stmt
 ;

/// suite: simple_stmt | NEWLINE INDENT stmt+ DEDENT
suite
 : simple_stmt 
 | stmt+
 ;

/// test: or_test ['if' or_test 'else' test] | lambdef
test
 : or_test ( IF or_test ELSE test )?
 ;

/// test_nocond: or_test | lambdef_nocond
test_nocond
 : or_test
 ;

/// or_test: and_test ('or' and_test)*
or_test
 : and_test ( OR and_test )*
 ;

/// and_test: not_test ('and' not_test)*
and_test
 : not_test ( AND not_test )*
 ;

/// not_test: 'not' not_test | comparison
not_test
 : NOT not_test
 | comparison
 ;

/// comparison: star_expr (comp_op star_expr)*
comparison
 : expr ( comp_op expr )*
 ;

/// # <> isn't actually a valid comparison operator in Python. It's here for the
/// # sake of a __future__ import described in PEP 401
/// comp_op: '<'|'>'|'=='|'>='|'<='|'<>'|'!='|'in'|'not' 'in'|'is'|'is' 'not'
comp_op
 : '<'
 | '>'
 | '=='
 | '>='
 | '<='
 | '!='
 ;

/// star_expr: ['*'] expr
expr
 : arith_expr
 ;

/// arith_expr: term (('+'|'-') term)*
arith_expr
 : term ( '+' term
        | '-' term
        )*
 ;

/// term: factor (('*'|'/'|'%'|'//') factor)*
term
 : factor ( '*' factor
          | '/' factor
          | '%' factor
          )*
 ;

/// factor: ('+'|'-'|'~') factor | power
factor
 : '+' factor
 | '-' factor
 | power
 ;

/// power: atom trailer* ['^' factor]
power
 : atom trailer* ( '^' factor )?
 ;

/// atom: ('(' [yield_expr|testlist_comp] ')' |
///        '[' [testlist_comp] ']' |
///        '{' [dictorsetmaker] '}' |
///        NAME | NUMBER | STRING+ | '...' | 'None' | 'True' | 'False')
atom
 : '(' testlist_comp? ')'
 | '[' testlist_comp? ']'
 | '{' NEWLINE? dictorsetmaker? NEWLINE? '}'
 | NAME
 | number
 | str+
 | NONE
 | TRUE
 | FALSE
 ;

/// testlist_comp: test ( comp_for | (',' test)* [','] )
testlist_comp
 : test ( ',' test)*
 ;

/// trailer: '(' [arglist] ')' | '[' subscriptlist ']' | '.' NAME
trailer
 : '(' arglist? NEWLINE? ')'
 | '[' subscriptlist ']'
 | '.' NAME
 ;

/// subscriptlist: subscript (',' subscript)* [',']
subscriptlist
 : subscript ( ',' subscript )* ','?
 ;

/// subscript: test | [test] ':' [test] [sliceop]
subscript
 : test
 | test? ':' test?
 ;

/// exprlist: star_expr (',' star_expr)* [',']
exprlist
 : expr ( ',' expr )* ','?
 ;

/// testlist: test (',' test)* [',']
testlist
 : test ( ',' test )* ','?
 ;

/// dictorsetmaker: ( (test ':' test (comp_for | (',' test ':' test)* [','])) |
///                   (test (comp_for | (',' test)* [','])) )
dictorsetmaker
 : test ':' test ( ',' NEWLINE? test ':' test )*
 ;
/// arglist: (argument ',')* (argument [',']
///                          |'*' test (',' argument)* [',' '**' test]
///                          |'**' test)
arglist
 : argument (',' argument)*
 ;

/// # The reason that keywords are test nodes instead of NAME is that using NAME
/// # results in an ambiguity. ast.c makes sure it's a NAME.
/// argument: test [comp_for] | test '=' test  # Really [keyword '='] test
argument
 : test
 ;

/// comp_iter: comp_for | comp_if
comp_iter
 : comp_for
 | comp_if
 ;

/// comp_for: 'for' exprlist 'in' or_test [comp_iter]
comp_for
 : FOR exprlist IN or_test comp_iter?
 ;

/// comp_if: 'if' test_nocond [comp_iter]
comp_if
 : IF test_nocond comp_iter?
 ;

str
 : STRING_LITERAL
 ;

number
 : integer
 | FLOAT_NUMBER
 ;

/// integer        ::=  decimalinteger | octinteger | hexinteger | bininteger
integer
 : DECIMAL_INTEGER
 ;

/*
 * lexer rules
 */
READ : 'leer';
LOG: 'log';
DEF : 'funcion';
RETURN : 'retorno';
RAISE : 'raise';
FROM : 'desde';
IMPORT : 'importar';
AS : 'as';
GLOBAL : 'global';
NONLOCAL : 'nonlocal';
ASSERT : 'assert';
IF : 'if';
ELIF : 'elif';
ELSE : 'else';
WHILE : 'while';
FOR : 'for';
IN : 'in';
TRY : 'try';
FINALLY : 'finally';
WITH : 'with';
EXCEPT : 'except';
LAMBDA : 'lambda';
OR : '||';
AND : '&&';
NOT : '!';
IS : 'is';
NONE : 'nil';
TRUE : 'true';
FALSE : 'false';
CLASS : 'class';
YIELD : 'yield';
DEL : 'del';
PASS : 'pass';
CONTINUE : 'continue';
BREAK : 'break';

NEWLINE
 : '\r'? '\n' 
 | '\r'
 ;

/// identifier   ::=  id_start id_continue*
NAME
 : ID_START ID_CONTINUE*
 ;

/// stringliteral   ::=  [stringprefix](shortstring | longstring)
/// stringprefix    ::=  "r" | "R"
STRING_LITERAL
 : [uU]? [rR]? ( SHORT_STRING )
 ;

/// decimalinteger ::=  nonzerodigit digit* | "0"+
DECIMAL_INTEGER
 : NON_ZERO_DIGIT DIGIT*
 | '0'+
 ;

/// floatnumber   ::=  pointfloat | exponentfloat
FLOAT_NUMBER
 : POINT_FLOAT
 ;

/// imagnumber ::=  (floatnumber | intpart) ("j" | "J")
IMAG_NUMBER
 : ( FLOAT_NUMBER | INT_PART ) [jJ]
 ;

DOT : '.';
OPEN_PAREN : '(' {this.opened++;};
CLOSE_PAREN : ')' {this.opened--;};
COMMA : ',';
COLON : ':';
POWER : '^';
ASSIGN : '=';
OPEN_BRACK : '[' {this.opened++;};
CLOSE_BRACK : ']' {this.opened--;};
ADD : '+';
MINUS : '-';
DIV : '/';
MOD : '%';
OPEN_BRACE : '{' {this.opened++;};
CLOSE_BRACE : '}' {this.opened--;};
LESS_THAN : '<';
GREATER_THAN : '>';
EQUALS : '==';
GT_EQ : '>=';
LT_EQ : '<=';
NOT_EQ_2 : '!=';
ADD_ASSIGN : '+=';
SUB_ASSIGN : '-=';
MULT_ASSIGN : '*=';
DIV_ASSIGN : '/=';
MOD_ASSIGN : '%=';
POWER_ASSIGN : '^=';

SKIP_
 : ( SPACES | COMMENT ) -> skip
 ;

UNKNOWN_CHAR
 : .
 ;

/*
 * fragments
 */

/// shortstring     ::=  "'" shortstringitem* "'" | '"' shortstringitem* '"'
/// shortstringitem ::=  shortstringchar | stringescapeseq
/// shortstringchar ::=  <any source character except "\" or newline or the quote>
fragment SHORT_STRING
 : '\'' ( STRING_ESCAPE_SEQ | ~[\\\r\n'] )* '\''
 | '"' ( STRING_ESCAPE_SEQ | ~[\\\r\n"] )* '"'
 ;

/// stringescapeseq ::=  "\" <any source character>
fragment STRING_ESCAPE_SEQ
 : '\\' .
 ;

/// nonzerodigit   ::=  "1"..."9"
fragment NON_ZERO_DIGIT
 : [1-9]
 ;

/// digit          ::=  "0"..."9"
fragment DIGIT
 : [0-9]
 ;

/// pointfloat    ::=  [intpart] fraction | intpart "."
fragment POINT_FLOAT
 : INT_PART? FRACTION
 | INT_PART '.'
 ;

/// intpart       ::=  digit+
fragment INT_PART
 : DIGIT+
 ;

/// fraction      ::=  "." digit+
fragment FRACTION
 : '.' DIGIT+
 ;

fragment SPACES
 : [ \t]+
 ;

fragment COMMENT
 : '#' ~[\r\n]*
 ;

/// id_start     ::=  <all characters in general categories Lu, Ll, Lt, Lm, Lo, Nl, the underscore, and characters with the Other_ID_Start property>
fragment ID_START
 : '_'
 | [A-Z]
 | [a-z]
 ;

/// id_continue  ::=  <all characters in id_start, plus characters in the categories Mn, Mc, Nd, Pc and others with the Other_ID_Continue property>
fragment ID_CONTINUE
 : ID_START
 | [0-9]
 ;
