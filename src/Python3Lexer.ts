// Generated from ./src/Python3.g4 by ANTLR 4.6-SNAPSHOT


  import { Token } from 'antlr4ts/Token';
  import { CommonToken } from 'antlr4ts/CommonToken';
  import { Python3Parser } from './Python3Parser';


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class Python3Lexer extends Lexer {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly READ=3;
	public static readonly LOG=4;
	public static readonly DEF=5;
	public static readonly RETURN=6;
	public static readonly RAISE=7;
	public static readonly FROM=8;
	public static readonly IMPORT=9;
	public static readonly AS=10;
	public static readonly GLOBAL=11;
	public static readonly NONLOCAL=12;
	public static readonly ASSERT=13;
	public static readonly IF=14;
	public static readonly ELIF=15;
	public static readonly ELSE=16;
	public static readonly WHILE=17;
	public static readonly FOR=18;
	public static readonly IN=19;
	public static readonly TRY=20;
	public static readonly FINALLY=21;
	public static readonly WITH=22;
	public static readonly EXCEPT=23;
	public static readonly LAMBDA=24;
	public static readonly OR=25;
	public static readonly AND=26;
	public static readonly NOT=27;
	public static readonly IS=28;
	public static readonly NONE=29;
	public static readonly TRUE=30;
	public static readonly FALSE=31;
	public static readonly CLASS=32;
	public static readonly YIELD=33;
	public static readonly DEL=34;
	public static readonly PASS=35;
	public static readonly CONTINUE=36;
	public static readonly BREAK=37;
	public static readonly NEWLINE=38;
	public static readonly NAME=39;
	public static readonly STRING_LITERAL=40;
	public static readonly DECIMAL_INTEGER=41;
	public static readonly FLOAT_NUMBER=42;
	public static readonly IMAG_NUMBER=43;
	public static readonly DOT=44;
	public static readonly OPEN_PAREN=45;
	public static readonly CLOSE_PAREN=46;
	public static readonly COMMA=47;
	public static readonly COLON=48;
	public static readonly POWER=49;
	public static readonly ASSIGN=50;
	public static readonly OPEN_BRACK=51;
	public static readonly CLOSE_BRACK=52;
	public static readonly ADD=53;
	public static readonly MINUS=54;
	public static readonly DIV=55;
	public static readonly MOD=56;
	public static readonly OPEN_BRACE=57;
	public static readonly CLOSE_BRACE=58;
	public static readonly LESS_THAN=59;
	public static readonly GREATER_THAN=60;
	public static readonly EQUALS=61;
	public static readonly GT_EQ=62;
	public static readonly LT_EQ=63;
	public static readonly NOT_EQ_2=64;
	public static readonly ADD_ASSIGN=65;
	public static readonly SUB_ASSIGN=66;
	public static readonly MULT_ASSIGN=67;
	public static readonly DIV_ASSIGN=68;
	public static readonly MOD_ASSIGN=69;
	public static readonly POWER_ASSIGN=70;
	public static readonly SKIP_=71;
	public static readonly UNKNOWN_CHAR=72;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "READ", "LOG", "DEF", "RETURN", "RAISE", "FROM", "IMPORT", 
		"AS", "GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", 
		"IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", 
		"IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", 
		"BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "DECIMAL_INTEGER", "FLOAT_NUMBER", 
		"IMAG_NUMBER", "DOT", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "POWER", 
		"ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "ADD", "MINUS", "DIV", "MOD", "OPEN_BRACE", 
		"CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", 
		"NOT_EQ_2", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"POWER_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "SHORT_STRING", "STRING_ESCAPE_SEQ", 
		"NON_ZERO_DIGIT", "DIGIT", "POINT_FLOAT", "INT_PART", "FRACTION", "SPACES", 
		"COMMENT", "ID_START", "ID_CONTINUE"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'end'", "'*'", "'leer'", "'log'", "'funcion'", "'retorno'", 
		"'raise'", "'desde'", "'importar'", "'as'", "'global'", "'nonlocal'", 
		"'assert'", "'if'", "'elif'", "'else'", "'while'", "'for'", "'in'", "'try'", 
		"'finally'", "'with'", "'except'", "'lambda'", "'||'", "'&&'", "'!'", 
		"'is'", "'nil'", "'true'", "'false'", "'class'", "'yield'", "'del'", "'pass'", 
		"'continue'", "'break'", undefined, undefined, undefined, undefined, undefined, 
		undefined, "'.'", "'('", "')'", "','", "':'", "'^'", "'='", "'['", "']'", 
		"'+'", "'-'", "'/'", "'%'", "'{'", "'}'", "'<'", "'>'", "'=='", "'>='", 
		"'<='", "'!='", "'+='", "'-='", "'*='", "'/='", "'%='", "'^='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, "READ", "LOG", "DEF", "RETURN", "RAISE", 
		"FROM", "IMPORT", "AS", "GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", 
		"ELSE", "WHILE", "FOR", "IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", 
		"OR", "AND", "NOT", "IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", 
		"PASS", "CONTINUE", "BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "DECIMAL_INTEGER", 
		"FLOAT_NUMBER", "IMAG_NUMBER", "DOT", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", 
		"COLON", "POWER", "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "ADD", "MINUS", 
		"DIV", "MOD", "OPEN_BRACE", "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", 
		"EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_2", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", 
		"DIV_ASSIGN", "MOD_ASSIGN", "POWER_ASSIGN", "SKIP_", "UNKNOWN_CHAR"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python3Lexer._LITERAL_NAMES, Python3Lexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Python3Lexer.VOCABULARY;
	}


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


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(Python3Lexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Python3.g4"; }

	@Override
	public get ruleNames(): string[] { return Python3Lexer.ruleNames; }

	@Override
	public get serializedATN(): string { return Python3Lexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return Python3Lexer.modeNames; }

	@Override
	action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 44:
			this.OPEN_PAREN_action(_localctx, actionIndex);
			break;

		case 45:
			this.CLOSE_PAREN_action(_localctx, actionIndex);
			break;

		case 50:
			this.OPEN_BRACK_action(_localctx, actionIndex);
			break;

		case 51:
			this.CLOSE_BRACK_action(_localctx, actionIndex);
			break;

		case 56:
			this.OPEN_BRACE_action(_localctx, actionIndex);
			break;

		case 57:
			this.CLOSE_BRACE_action(_localctx, actionIndex);
			break;
		}
	}
	private OPEN_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.opened++;
			break;
		}
	}
	private CLOSE_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened--;
			break;
		}
	}
	private OPEN_BRACK_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACK_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened--;
			break;
		}
	}
	private OPEN_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened--;
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02J\u022A\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t"+
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t"+
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04"+
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x03\x02\x03"+
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03"+
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03"+
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t"+
		"\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03"+
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E"+
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10"+
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12"+
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14"+
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19"+
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B"+
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03"+
		" \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\""+
		"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03"+
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x05"+
		"\'\u0170\n\'\x03\'\x03\'\x05\'\u0174\n\'\x03(\x03(\x07(\u0178\n(\f(\x0E"+
		"(\u017B\v(\x03)\x05)\u017E\n)\x03)\x05)\u0181\n)\x03)\x03)\x03*\x03*\x07"+
		"*\u0187\n*\f*\x0E*\u018A\v*\x03*\x06*\u018D\n*\r*\x0E*\u018E\x05*\u0191"+
		"\n*\x03+\x03+\x03,\x03,\x05,\u0197\n,\x03,\x03,\x03-\x03-\x03.\x03.\x03"+
		".\x03/\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x034\x03"+
		"4\x035\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03"+
		":\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x03?\x03?\x03?\x03"+
		"@\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x03"+
		"D\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03G\x03H\x03H\x05H\u01E3\n"+
		"H\x03H\x03H\x03I\x03I\x03J\x03J\x03J\x07J\u01EC\nJ\fJ\x0EJ\u01EF\vJ\x03"+
		"J\x03J\x03J\x03J\x07J\u01F5\nJ\fJ\x0EJ\u01F8\vJ\x03J\x05J\u01FB\nJ\x03"+
		"K\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x05N\u0205\nN\x03N\x03N\x03N\x03"+
		"N\x05N\u020B\nN\x03O\x06O\u020E\nO\rO\x0EO\u020F\x03P\x03P\x06P\u0214"+
		"\nP\rP\x0EP\u0215\x03Q\x06Q\u0219\nQ\rQ\x0EQ\u021A\x03R\x03R\x07R\u021F"+
		"\nR\fR\x0ER\u0222\vR\x03S\x05S\u0225\nS\x03T\x03T\x05T\u0229\nT\x02\x02"+
		"\x02U\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b"+
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02"+
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02"+
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02"+
		"\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02("+
		"O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02"+
		"4g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02"+
		"@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02"+
		"H\x8F\x02I\x91\x02J\x93\x02\x02\x95\x02\x02\x97\x02\x02\x99\x02\x02\x9B"+
		"\x02\x02\x9D\x02\x02\x9F\x02\x02\xA1\x02\x02\xA3\x02\x02\xA5\x02\x02\xA7"+
		"\x02\x02\x03\x02\f\x04\x02WWww\x04\x02TTtt\x04\x02LLll\x06\x02\f\f\x0F"+
		"\x0F))^^\x06\x02\f\f\x0F\x0F$$^^\x03\x023;\x03\x022;\x04\x02\v\v\"\"\x04"+
		"\x02\f\f\x0F\x0F\x05\x02C\\aac|\u0234\x02\x03\x03\x02\x02\x02\x02\x05"+
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03"+
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03"+
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03"+
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03"+
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02"+
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02"+
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03"+
		"\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02"+
		"\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02"+
		"?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02"+
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02"+
		"\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03"+
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02"+
		"\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02"+
		"a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02"+
		"\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02"+
		"\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03"+
		"\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02"+
		"\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02"+
		"\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02"+
		"\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02"+
		"\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x03\xA9\x03\x02\x02"+
		"\x02\x05\xAD\x03\x02\x02\x02\x07\xAF\x03\x02\x02\x02\t\xB4\x03\x02\x02"+
		"\x02\v\xB8\x03\x02\x02\x02\r\xC0\x03\x02\x02\x02\x0F\xC8\x03\x02\x02\x02"+
		"\x11\xCE\x03\x02\x02\x02\x13\xD4\x03\x02\x02\x02\x15\xDD\x03\x02\x02\x02"+
		"\x17\xE0\x03\x02\x02\x02\x19\xE7\x03\x02\x02\x02\x1B\xF0\x03\x02\x02\x02"+
		"\x1D\xF7\x03\x02\x02\x02\x1F\xFA\x03\x02\x02\x02!\xFF\x03\x02\x02\x02"+
		"#\u0104\x03\x02\x02\x02%\u010A\x03\x02\x02\x02\'\u010E\x03\x02\x02\x02"+
		")\u0111\x03\x02\x02\x02+\u0115\x03\x02\x02\x02-\u011D\x03\x02\x02\x02"+
		"/\u0122\x03\x02\x02\x021\u0129\x03\x02\x02\x023\u0130\x03\x02\x02\x02"+
		"5\u0133\x03\x02\x02\x027\u0136\x03\x02\x02\x029\u0138\x03\x02\x02\x02"+
		";\u013B\x03\x02\x02\x02=\u013F\x03\x02\x02\x02?\u0144\x03\x02\x02\x02"+
		"A\u014A\x03\x02\x02\x02C\u0150\x03\x02\x02\x02E\u0156\x03\x02\x02\x02"+
		"G\u015A\x03\x02\x02\x02I\u015F\x03\x02\x02\x02K\u0168\x03\x02\x02\x02"+
		"M\u0173\x03\x02\x02\x02O\u0175\x03\x02\x02\x02Q\u017D\x03\x02\x02\x02"+
		"S\u0190\x03\x02\x02\x02U\u0192\x03\x02\x02\x02W\u0196\x03\x02\x02\x02"+
		"Y\u019A\x03\x02\x02\x02[\u019C\x03\x02\x02\x02]\u019F\x03\x02\x02\x02"+
		"_\u01A2\x03\x02\x02\x02a\u01A4\x03\x02\x02\x02c\u01A6\x03\x02\x02\x02"+
		"e\u01A8\x03\x02\x02\x02g\u01AA\x03\x02\x02\x02i\u01AD\x03\x02\x02\x02"+
		"k\u01B0\x03\x02\x02\x02m\u01B2\x03\x02\x02\x02o\u01B4\x03\x02\x02\x02"+
		"q\u01B6\x03\x02\x02\x02s\u01B8\x03\x02\x02\x02u\u01BB\x03\x02\x02\x02"+
		"w\u01BE\x03\x02\x02\x02y\u01C0\x03\x02\x02\x02{\u01C2\x03\x02\x02\x02"+
		"}\u01C5\x03\x02\x02\x02\x7F\u01C8\x03\x02\x02\x02\x81\u01CB\x03\x02\x02"+
		"\x02\x83\u01CE\x03\x02\x02\x02\x85\u01D1\x03\x02\x02\x02\x87\u01D4\x03"+
		"\x02\x02\x02\x89\u01D7\x03\x02\x02\x02\x8B\u01DA\x03\x02\x02\x02\x8D\u01DD"+
		"\x03\x02\x02\x02\x8F\u01E2\x03\x02\x02\x02\x91\u01E6\x03\x02\x02\x02\x93"+
		"\u01FA\x03\x02\x02\x02\x95\u01FC\x03\x02\x02\x02\x97\u01FF\x03\x02\x02"+
		"\x02\x99\u0201\x03\x02\x02\x02\x9B\u020A\x03\x02\x02\x02\x9D\u020D\x03"+
		"\x02\x02\x02\x9F\u0211\x03\x02\x02\x02\xA1\u0218\x03\x02\x02\x02\xA3\u021C"+
		"\x03\x02\x02\x02\xA5\u0224\x03\x02\x02\x02\xA7\u0228\x03\x02\x02\x02\xA9"+
		"\xAA\x07g\x02\x02\xAA\xAB\x07p\x02\x02\xAB\xAC\x07f\x02\x02\xAC\x04\x03"+
		"\x02\x02\x02\xAD\xAE\x07,\x02\x02\xAE\x06\x03\x02\x02\x02\xAF\xB0\x07"+
		"n\x02\x02\xB0\xB1\x07g\x02\x02\xB1\xB2\x07g\x02\x02\xB2\xB3\x07t\x02\x02"+
		"\xB3\b\x03\x02\x02\x02\xB4\xB5\x07n\x02\x02\xB5\xB6\x07q\x02\x02\xB6\xB7"+
		"\x07i\x02\x02\xB7\n\x03\x02\x02\x02\xB8\xB9\x07h\x02\x02\xB9\xBA\x07w"+
		"\x02\x02\xBA\xBB\x07p\x02\x02\xBB\xBC\x07e\x02\x02\xBC\xBD\x07k\x02\x02"+
		"\xBD\xBE\x07q\x02\x02\xBE\xBF\x07p\x02\x02\xBF\f\x03\x02\x02\x02\xC0\xC1"+
		"\x07t\x02\x02\xC1\xC2\x07g\x02\x02\xC2\xC3\x07v\x02\x02\xC3\xC4\x07q\x02"+
		"\x02\xC4\xC5\x07t\x02\x02\xC5\xC6\x07p\x02\x02\xC6\xC7\x07q\x02\x02\xC7"+
		"\x0E\x03\x02\x02\x02\xC8\xC9\x07t\x02\x02\xC9\xCA\x07c\x02\x02\xCA\xCB"+
		"\x07k\x02\x02\xCB\xCC\x07u\x02\x02\xCC\xCD\x07g\x02\x02\xCD\x10\x03\x02"+
		"\x02\x02\xCE\xCF\x07f\x02\x02\xCF\xD0\x07g\x02\x02\xD0\xD1\x07u\x02\x02"+
		"\xD1\xD2\x07f\x02\x02\xD2\xD3\x07g\x02\x02\xD3\x12\x03\x02\x02\x02\xD4"+
		"\xD5\x07k\x02\x02\xD5\xD6\x07o\x02\x02\xD6\xD7\x07r\x02\x02\xD7\xD8\x07"+
		"q\x02\x02\xD8\xD9\x07t\x02\x02\xD9\xDA\x07v\x02\x02\xDA\xDB\x07c\x02\x02"+
		"\xDB\xDC\x07t\x02\x02\xDC\x14\x03\x02\x02\x02\xDD\xDE\x07c\x02\x02\xDE"+
		"\xDF\x07u\x02\x02\xDF\x16\x03\x02\x02\x02\xE0\xE1\x07i\x02\x02\xE1\xE2"+
		"\x07n\x02\x02\xE2\xE3\x07q\x02\x02\xE3\xE4\x07d\x02\x02\xE4\xE5\x07c\x02"+
		"\x02\xE5\xE6\x07n\x02\x02\xE6\x18\x03\x02\x02\x02\xE7\xE8\x07p\x02\x02"+
		"\xE8\xE9\x07q\x02\x02\xE9\xEA\x07p\x02\x02\xEA\xEB\x07n\x02\x02\xEB\xEC"+
		"\x07q\x02\x02\xEC\xED\x07e\x02\x02\xED\xEE\x07c\x02\x02\xEE\xEF\x07n\x02"+
		"\x02\xEF\x1A\x03\x02\x02\x02\xF0\xF1\x07c\x02\x02\xF1\xF2\x07u\x02\x02"+
		"\xF2\xF3\x07u\x02\x02\xF3\xF4\x07g\x02\x02\xF4\xF5\x07t\x02\x02\xF5\xF6"+
		"\x07v\x02\x02\xF6\x1C\x03\x02\x02\x02\xF7\xF8\x07k\x02\x02\xF8\xF9\x07"+
		"h\x02\x02\xF9\x1E\x03\x02\x02\x02\xFA\xFB\x07g\x02\x02\xFB\xFC\x07n\x02"+
		"\x02\xFC\xFD\x07k\x02\x02\xFD\xFE\x07h\x02\x02\xFE \x03\x02\x02\x02\xFF"+
		"\u0100\x07g\x02\x02\u0100\u0101\x07n\x02\x02\u0101\u0102\x07u\x02\x02"+
		"\u0102\u0103\x07g\x02\x02\u0103\"\x03\x02\x02\x02\u0104\u0105\x07y\x02"+
		"\x02\u0105\u0106\x07j\x02\x02\u0106\u0107\x07k\x02\x02\u0107\u0108\x07"+
		"n\x02\x02\u0108\u0109\x07g\x02\x02\u0109$\x03\x02\x02\x02\u010A\u010B"+
		"\x07h\x02\x02\u010B\u010C\x07q\x02\x02\u010C\u010D\x07t\x02\x02\u010D"+
		"&\x03\x02\x02\x02\u010E\u010F\x07k\x02\x02\u010F\u0110\x07p\x02\x02\u0110"+
		"(\x03\x02\x02\x02\u0111\u0112\x07v\x02\x02\u0112\u0113\x07t\x02\x02\u0113"+
		"\u0114\x07{\x02\x02\u0114*\x03\x02\x02\x02\u0115\u0116\x07h\x02\x02\u0116"+
		"\u0117\x07k\x02\x02\u0117\u0118\x07p\x02\x02\u0118\u0119\x07c\x02\x02"+
		"\u0119\u011A\x07n\x02\x02\u011A\u011B\x07n\x02\x02\u011B\u011C\x07{\x02"+
		"\x02\u011C,\x03\x02\x02\x02\u011D\u011E\x07y\x02\x02\u011E\u011F\x07k"+
		"\x02\x02\u011F\u0120\x07v\x02\x02\u0120\u0121\x07j\x02\x02\u0121.\x03"+
		"\x02\x02\x02\u0122\u0123\x07g\x02\x02\u0123\u0124\x07z\x02\x02\u0124\u0125"+
		"\x07e\x02\x02\u0125\u0126\x07g\x02\x02\u0126\u0127\x07r\x02\x02\u0127"+
		"\u0128\x07v\x02\x02\u01280\x03\x02\x02\x02\u0129\u012A\x07n\x02\x02\u012A"+
		"\u012B\x07c\x02\x02\u012B\u012C\x07o\x02\x02\u012C\u012D\x07d\x02\x02"+
		"\u012D\u012E\x07f\x02\x02\u012E\u012F\x07c\x02\x02\u012F2\x03\x02\x02"+
		"\x02\u0130\u0131\x07~\x02\x02\u0131\u0132\x07~\x02\x02\u01324\x03\x02"+
		"\x02\x02\u0133\u0134\x07(\x02\x02\u0134\u0135\x07(\x02\x02\u01356\x03"+
		"\x02\x02\x02\u0136\u0137\x07#\x02\x02\u01378\x03\x02\x02\x02\u0138\u0139"+
		"\x07k\x02\x02\u0139\u013A\x07u\x02\x02\u013A:\x03\x02\x02\x02\u013B\u013C"+
		"\x07p\x02\x02\u013C\u013D\x07k\x02\x02\u013D\u013E\x07n\x02\x02\u013E"+
		"<\x03\x02\x02\x02\u013F\u0140\x07v\x02\x02\u0140\u0141\x07t\x02\x02\u0141"+
		"\u0142\x07w\x02\x02\u0142\u0143\x07g\x02\x02\u0143>\x03\x02\x02\x02\u0144"+
		"\u0145\x07h\x02\x02\u0145\u0146\x07c\x02\x02\u0146\u0147\x07n\x02\x02"+
		"\u0147\u0148\x07u\x02\x02\u0148\u0149\x07g\x02\x02\u0149@\x03\x02\x02"+
		"\x02\u014A\u014B\x07e\x02\x02\u014B\u014C\x07n\x02\x02\u014C\u014D\x07"+
		"c\x02\x02\u014D\u014E\x07u\x02\x02\u014E\u014F\x07u\x02\x02\u014FB\x03"+
		"\x02\x02\x02\u0150\u0151\x07{\x02\x02\u0151\u0152\x07k\x02\x02\u0152\u0153"+
		"\x07g\x02\x02\u0153\u0154\x07n\x02\x02\u0154\u0155\x07f\x02\x02\u0155"+
		"D\x03\x02\x02\x02\u0156\u0157\x07f\x02\x02\u0157\u0158\x07g\x02\x02\u0158"+
		"\u0159\x07n\x02\x02\u0159F\x03\x02\x02\x02\u015A\u015B\x07r\x02\x02\u015B"+
		"\u015C\x07c\x02\x02\u015C\u015D\x07u\x02\x02\u015D\u015E\x07u\x02\x02"+
		"\u015EH\x03\x02\x02\x02\u015F\u0160\x07e\x02\x02\u0160\u0161\x07q\x02"+
		"\x02\u0161\u0162\x07p\x02\x02\u0162\u0163\x07v\x02\x02\u0163\u0164\x07"+
		"k\x02\x02\u0164\u0165\x07p\x02\x02\u0165\u0166\x07w\x02\x02\u0166\u0167"+
		"\x07g\x02\x02\u0167J\x03\x02\x02\x02\u0168\u0169\x07d\x02\x02\u0169\u016A"+
		"\x07t\x02\x02\u016A\u016B\x07g\x02\x02\u016B\u016C\x07c\x02\x02\u016C"+
		"\u016D\x07m\x02\x02\u016DL\x03\x02\x02\x02\u016E\u0170\x07\x0F\x02\x02"+
		"\u016F\u016E\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03"+
		"\x02\x02\x02\u0171\u0174\x07\f\x02\x02\u0172\u0174\x07\x0F\x02\x02\u0173"+
		"\u016F\x03\x02\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174N\x03\x02\x02"+
		"\x02\u0175\u0179\x05\xA5S\x02\u0176\u0178\x05\xA7T\x02\u0177\u0176\x03"+
		"\x02\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179"+
		"\u017A\x03\x02\x02\x02\u017AP\x03\x02\x02\x02\u017B\u0179\x03\x02\x02"+
		"\x02\u017C\u017E\t\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E"+
		"\x03\x02\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F\u0181\t\x03\x02\x02"+
		"\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03"+
		"\x02\x02\x02\u0182\u0183\x05\x93J\x02\u0183R\x03\x02\x02\x02\u0184\u0188"+
		"\x05\x97L\x02\u0185\u0187\x05\x99M\x02\u0186\u0185\x03\x02\x02\x02\u0187"+
		"\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02"+
		"\x02\x02\u0189\u0191\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B"+
		"\u018D\x072\x02\x02\u018C\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02"+
		"\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191"+
		"\x03\x02\x02\x02\u0190\u0184\x03\x02\x02\x02\u0190\u018C\x03\x02\x02\x02"+
		"\u0191T\x03\x02\x02\x02\u0192\u0193\x05\x9BN\x02\u0193V\x03\x02\x02\x02"+
		"\u0194\u0197\x05U+\x02\u0195\u0197\x05\x9DO\x02\u0196\u0194\x03\x02\x02"+
		"\x02\u0196\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199"+
		"\t\x04\x02\x02\u0199X\x03\x02\x02\x02\u019A\u019B\x070\x02\x02\u019BZ"+
		"\x03\x02\x02\x02\u019C\u019D\x07*\x02\x02\u019D\u019E\b.\x02\x02\u019E"+
		"\\\x03\x02\x02\x02\u019F\u01A0\x07+\x02\x02\u01A0\u01A1\b/\x03\x02\u01A1"+
		"^\x03\x02\x02\x02\u01A2\u01A3\x07.\x02\x02\u01A3`\x03\x02\x02\x02\u01A4"+
		"\u01A5\x07<\x02\x02\u01A5b\x03\x02\x02\x02\u01A6\u01A7\x07`\x02\x02\u01A7"+
		"d\x03\x02\x02\x02\u01A8\u01A9\x07?\x02\x02\u01A9f\x03\x02\x02\x02\u01AA"+
		"\u01AB\x07]\x02\x02\u01AB\u01AC\b4\x04\x02\u01ACh\x03\x02\x02\x02\u01AD"+
		"\u01AE\x07_\x02\x02\u01AE\u01AF\b5\x05\x02\u01AFj\x03\x02\x02\x02\u01B0"+
		"\u01B1\x07-\x02\x02\u01B1l\x03\x02\x02\x02\u01B2\u01B3\x07/\x02\x02\u01B3"+
		"n\x03\x02\x02\x02\u01B4\u01B5\x071\x02\x02\u01B5p\x03\x02\x02\x02\u01B6"+
		"\u01B7\x07\'\x02\x02\u01B7r\x03\x02\x02\x02\u01B8\u01B9\x07}\x02\x02\u01B9"+
		"\u01BA\b:\x06\x02\u01BAt\x03\x02\x02\x02\u01BB\u01BC\x07\x7F\x02\x02\u01BC"+
		"\u01BD\b;\x07\x02\u01BDv\x03\x02\x02\x02\u01BE\u01BF\x07>\x02\x02\u01BF"+
		"x\x03\x02\x02\x02\u01C0\u01C1\x07@\x02\x02\u01C1z\x03\x02\x02\x02\u01C2"+
		"\u01C3\x07?\x02\x02\u01C3\u01C4\x07?\x02\x02\u01C4|\x03\x02\x02\x02\u01C5"+
		"\u01C6\x07@\x02\x02\u01C6\u01C7\x07?\x02\x02\u01C7~\x03\x02\x02\x02\u01C8"+
		"\u01C9\x07>\x02\x02\u01C9\u01CA\x07?\x02\x02\u01CA\x80\x03\x02\x02\x02"+
		"\u01CB\u01CC\x07#\x02\x02\u01CC\u01CD\x07?\x02\x02\u01CD\x82\x03\x02\x02"+
		"\x02\u01CE\u01CF\x07-\x02\x02\u01CF\u01D0\x07?\x02\x02\u01D0\x84\x03\x02"+
		"\x02\x02\u01D1\u01D2\x07/\x02\x02\u01D2\u01D3\x07?\x02\x02\u01D3\x86\x03"+
		"\x02\x02\x02\u01D4\u01D5\x07,\x02\x02\u01D5\u01D6\x07?\x02\x02\u01D6\x88"+
		"\x03\x02\x02\x02\u01D7\u01D8\x071\x02\x02\u01D8\u01D9\x07?\x02\x02\u01D9"+
		"\x8A\x03\x02\x02\x02\u01DA\u01DB\x07\'\x02\x02\u01DB\u01DC\x07?\x02\x02"+
		"\u01DC\x8C\x03\x02\x02\x02\u01DD\u01DE\x07`\x02\x02\u01DE\u01DF\x07?\x02"+
		"\x02\u01DF\x8E\x03\x02\x02\x02\u01E0\u01E3\x05\xA1Q\x02\u01E1\u01E3\x05"+
		"\xA3R\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3"+
		"\u01E4\x03\x02\x02\x02\u01E4\u01E5\bH\b\x02\u01E5\x90\x03\x02\x02\x02"+
		"\u01E6\u01E7\v\x02\x02\x02\u01E7\x92\x03\x02\x02\x02\u01E8\u01ED\x07)"+
		"\x02\x02\u01E9\u01EC\x05\x95K\x02\u01EA\u01EC\n\x05\x02\x02\u01EB\u01E9"+
		"\x03\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02"+
		"\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01F0\x03"+
		"\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01FB\x07)\x02\x02\u01F1"+
		"\u01F6\x07$\x02\x02\u01F2\u01F5\x05\x95K\x02\u01F3\u01F5\n\x06\x02\x02"+
		"\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F8\x03"+
		"\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7"+
		"\u01F9\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FB\x07$\x02"+
		"\x02\u01FA\u01E8\x03\x02\x02\x02\u01FA\u01F1\x03\x02\x02\x02\u01FB\x94"+
		"\x03\x02\x02\x02\u01FC\u01FD\x07^\x02\x02\u01FD\u01FE\v\x02\x02\x02\u01FE"+
		"\x96\x03\x02\x02\x02\u01FF\u0200\t\x07\x02\x02\u0200\x98\x03\x02\x02\x02"+
		"\u0201\u0202\t\b\x02\x02\u0202\x9A\x03\x02\x02\x02\u0203\u0205\x05\x9D"+
		"O\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0206"+
		"\x03\x02\x02\x02\u0206\u020B\x05\x9FP\x02\u0207\u0208\x05\x9DO\x02\u0208"+
		"\u0209\x070\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u0204\x03\x02\x02"+
		"\x02\u020A\u0207\x03\x02\x02\x02\u020B\x9C\x03\x02\x02\x02\u020C\u020E"+
		"\x05\x99M\x02\u020D\u020C\x03\x02\x02\x02\u020E\u020F\x03\x02\x02\x02"+
		"\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\x9E\x03"+
		"\x02\x02\x02\u0211\u0213\x070\x02\x02\u0212\u0214\x05\x99M\x02\u0213\u0212"+
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02"+
		"\u0215\u0216\x03\x02\x02\x02\u0216\xA0\x03\x02\x02\x02\u0217\u0219\t\t"+
		"\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A"+
		"\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\xA2\x03\x02\x02"+
		"\x02\u021C\u0220\x07%\x02\x02\u021D\u021F\n\n\x02\x02\u021E\u021D\x03"+
		"\x02\x02\x02\u021F\u0222\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0220"+
		"\u0221\x03\x02\x02\x02\u0221\xA4\x03\x02\x02\x02\u0222\u0220\x03\x02\x02"+
		"\x02\u0223\u0225\t\v\x02\x02\u0224\u0223\x03\x02\x02\x02\u0225\xA6\x03"+
		"\x02\x02\x02\u0226\u0229\x05\xA5S\x02\u0227\u0229\t\b\x02\x02\u0228\u0226"+
		"\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\xA8\x03\x02\x02\x02"+
		"\x1A\x02\u016F\u0173\u0179\u017D\u0180\u0188\u018E\u0190\u0196\u01E2\u01EB"+
		"\u01ED\u01F4\u01F6\u01FA\u0204\u020A\u020F\u0215\u021A\u0220\u0224\u0228"+
		"\t\x03.\x02\x03/\x03\x034\x04\x035\x05\x03:\x06\x03;\x07\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Lexer.__ATN) {
			Python3Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python3Lexer._serializedATN));
		}

		return Python3Lexer.__ATN;
	}

}

