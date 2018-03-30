// Generated from ./src/Python3.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { Python3Listener } from './Python3Listener';

export class Python3Parser extends Parser {
	public static readonly T__0=1;
	public static readonly DEF=2;
	public static readonly RETURN=3;
	public static readonly RAISE=4;
	public static readonly FROM=5;
	public static readonly IMPORT=6;
	public static readonly AS=7;
	public static readonly GLOBAL=8;
	public static readonly NONLOCAL=9;
	public static readonly ASSERT=10;
	public static readonly IF=11;
	public static readonly ELIF=12;
	public static readonly ELSE=13;
	public static readonly WHILE=14;
	public static readonly FOR=15;
	public static readonly IN=16;
	public static readonly TRY=17;
	public static readonly FINALLY=18;
	public static readonly WITH=19;
	public static readonly EXCEPT=20;
	public static readonly LAMBDA=21;
	public static readonly OR=22;
	public static readonly AND=23;
	public static readonly NOT=24;
	public static readonly IS=25;
	public static readonly NONE=26;
	public static readonly TRUE=27;
	public static readonly FALSE=28;
	public static readonly CLASS=29;
	public static readonly YIELD=30;
	public static readonly DEL=31;
	public static readonly PASS=32;
	public static readonly CONTINUE=33;
	public static readonly BREAK=34;
	public static readonly NEWLINE=35;
	public static readonly NAME=36;
	public static readonly STRING_LITERAL=37;
	public static readonly BYTES_LITERAL=38;
	public static readonly DECIMAL_INTEGER=39;
	public static readonly OCT_INTEGER=40;
	public static readonly HEX_INTEGER=41;
	public static readonly BIN_INTEGER=42;
	public static readonly FLOAT_NUMBER=43;
	public static readonly IMAG_NUMBER=44;
	public static readonly DOT=45;
	public static readonly ELLIPSIS=46;
	public static readonly STAR=47;
	public static readonly OPEN_PAREN=48;
	public static readonly CLOSE_PAREN=49;
	public static readonly COMMA=50;
	public static readonly COLON=51;
	public static readonly SEMI_COLON=52;
	public static readonly POWER=53;
	public static readonly ASSIGN=54;
	public static readonly OPEN_BRACK=55;
	public static readonly CLOSE_BRACK=56;
	public static readonly OR_OP=57;
	public static readonly XOR=58;
	public static readonly AND_OP=59;
	public static readonly LEFT_SHIFT=60;
	public static readonly RIGHT_SHIFT=61;
	public static readonly ADD=62;
	public static readonly MINUS=63;
	public static readonly DIV=64;
	public static readonly MOD=65;
	public static readonly IDIV=66;
	public static readonly NOT_OP=67;
	public static readonly OPEN_BRACE=68;
	public static readonly CLOSE_BRACE=69;
	public static readonly LESS_THAN=70;
	public static readonly GREATER_THAN=71;
	public static readonly EQUALS=72;
	public static readonly GT_EQ=73;
	public static readonly LT_EQ=74;
	public static readonly NOT_EQ_1=75;
	public static readonly NOT_EQ_2=76;
	public static readonly AT=77;
	public static readonly ARROW=78;
	public static readonly ADD_ASSIGN=79;
	public static readonly SUB_ASSIGN=80;
	public static readonly MULT_ASSIGN=81;
	public static readonly AT_ASSIGN=82;
	public static readonly DIV_ASSIGN=83;
	public static readonly MOD_ASSIGN=84;
	public static readonly AND_ASSIGN=85;
	public static readonly OR_ASSIGN=86;
	public static readonly XOR_ASSIGN=87;
	public static readonly LEFT_SHIFT_ASSIGN=88;
	public static readonly RIGHT_SHIFT_ASSIGN=89;
	public static readonly POWER_ASSIGN=90;
	public static readonly IDIV_ASSIGN=91;
	public static readonly SKIP_=92;
	public static readonly UNKNOWN_CHAR=93;
	public static readonly INDENT=94;
	public static readonly DEDENT=95;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_decorator = 3;
	public static readonly RULE_decorators = 4;
	public static readonly RULE_decorated = 5;
	public static readonly RULE_funcdef = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_typedargslist = 8;
	public static readonly RULE_tfpdef = 9;
	public static readonly RULE_varargslist = 10;
	public static readonly RULE_vfpdef = 11;
	public static readonly RULE_block_stmt = 12;
	public static readonly RULE_stmt = 13;
	public static readonly RULE_simple_stmt = 14;
	public static readonly RULE_small_stmt = 15;
	public static readonly RULE_expr_stmt = 16;
	public static readonly RULE_testlist_star_expr = 17;
	public static readonly RULE_augassign = 18;
	public static readonly RULE_del_stmt = 19;
	public static readonly RULE_pass_stmt = 20;
	public static readonly RULE_flow_stmt = 21;
	public static readonly RULE_break_stmt = 22;
	public static readonly RULE_continue_stmt = 23;
	public static readonly RULE_return_stmt = 24;
	public static readonly RULE_yield_stmt = 25;
	public static readonly RULE_raise_stmt = 26;
	public static readonly RULE_import_stmt = 27;
	public static readonly RULE_import_name = 28;
	public static readonly RULE_import_from = 29;
	public static readonly RULE_import_as_name = 30;
	public static readonly RULE_dotted_as_name = 31;
	public static readonly RULE_import_as_names = 32;
	public static readonly RULE_dotted_as_names = 33;
	public static readonly RULE_dotted_name = 34;
	public static readonly RULE_global_stmt = 35;
	public static readonly RULE_nonlocal_stmt = 36;
	public static readonly RULE_assert_stmt = 37;
	public static readonly RULE_compound_stmt = 38;
	public static readonly RULE_if_stmt = 39;
	public static readonly RULE_while_stmt = 40;
	public static readonly RULE_for_stmt = 41;
	public static readonly RULE_try_stmt = 42;
	public static readonly RULE_with_stmt = 43;
	public static readonly RULE_with_item = 44;
	public static readonly RULE_except_clause = 45;
	public static readonly RULE_suite = 46;
	public static readonly RULE_test = 47;
	public static readonly RULE_test_nocond = 48;
	public static readonly RULE_lambdef = 49;
	public static readonly RULE_lambdef_nocond = 50;
	public static readonly RULE_or_test = 51;
	public static readonly RULE_and_test = 52;
	public static readonly RULE_not_test = 53;
	public static readonly RULE_comparison = 54;
	public static readonly RULE_comp_op = 55;
	public static readonly RULE_star_expr = 56;
	public static readonly RULE_expr = 57;
	public static readonly RULE_xor_expr = 58;
	public static readonly RULE_and_expr = 59;
	public static readonly RULE_shift_expr = 60;
	public static readonly RULE_arith_expr = 61;
	public static readonly RULE_term = 62;
	public static readonly RULE_factor = 63;
	public static readonly RULE_power = 64;
	public static readonly RULE_atom = 65;
	public static readonly RULE_testlist_comp = 66;
	public static readonly RULE_trailer = 67;
	public static readonly RULE_subscriptlist = 68;
	public static readonly RULE_subscript = 69;
	public static readonly RULE_sliceop = 70;
	public static readonly RULE_exprlist = 71;
	public static readonly RULE_testlist = 72;
	public static readonly RULE_dictorsetmaker = 73;
	public static readonly RULE_classdef = 74;
	public static readonly RULE_arglist = 75;
	public static readonly RULE_argument = 76;
	public static readonly RULE_comp_iter = 77;
	public static readonly RULE_comp_for = 78;
	public static readonly RULE_comp_if = 79;
	public static readonly RULE_yield_expr = 80;
	public static readonly RULE_yield_arg = 81;
	public static readonly RULE_str = 82;
	public static readonly RULE_number = 83;
	public static readonly RULE_integer = 84;
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "funcdef", "parameters", "typedargslist", "tfpdef", "varargslist", 
		"vfpdef", "block_stmt", "stmt", "simple_stmt", "small_stmt", "expr_stmt", 
		"testlist_star_expr", "augassign", "del_stmt", "pass_stmt", "flow_stmt", 
		"break_stmt", "continue_stmt", "return_stmt", "yield_stmt", "raise_stmt", 
		"import_stmt", "import_name", "import_from", "import_as_name", "dotted_as_name", 
		"import_as_names", "dotted_as_names", "dotted_name", "global_stmt", "nonlocal_stmt", 
		"assert_stmt", "compound_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", 
		"with_stmt", "with_item", "except_clause", "suite", "test", "test_nocond", 
		"lambdef", "lambdef_nocond", "or_test", "and_test", "not_test", "comparison", 
		"comp_op", "star_expr", "expr", "xor_expr", "and_expr", "shift_expr", 
		"arith_expr", "term", "factor", "power", "atom", "testlist_comp", "trailer", 
		"subscriptlist", "subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker", 
		"classdef", "arglist", "argument", "comp_iter", "comp_for", "comp_if", 
		"yield_expr", "yield_arg", "str", "number", "integer"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'end'", "'funcion'", "'retorno'", "'raise'", "'desde'", "'importar'", 
		"'as'", "'global'", "'nonlocal'", "'assert'", "'if'", "'elif'", "'else'", 
		"'while'", "'for'", "'in'", "'try'", "'finally'", "'with'", "'except'", 
		"'lambda'", "'||'", "'&&'", "'!'", "'is'", "'nil'", "'true'", "'false'", 
		"'class'", "'yield'", "'del'", "'pass'", "'continue'", "'break'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'.'", "'...'", "'*'", "'('", "')'", "','", "':'", 
		"';'", "'**'", "'='", "'['", "']'", "'|'", "'^'", "'&'", "'<<'", "'>>'", 
		"'+'", "'-'", "'/'", "'%'", "'//'", "'~'", "'{'", "'}'", "'<'", "'>'", 
		"'=='", "'>='", "'<='", "'<>'", "'!='", "'@'", "'->'", "'+='", "'-='", 
		"'*='", "'@='", "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", "'>>='", 
		"'**='", "'//='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", 
		"GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", 
		"IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", 
		"IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", 
		"BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", 
		"OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", 
		"DOT", "ELLIPSIS", "STAR", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", 
		"SEMI_COLON", "POWER", "ASSIGN", "OPEN_BRACK", "CLOSE_BRACK", "OR_OP", 
		"XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", "ADD", "MINUS", "DIV", "MOD", 
		"IDIV", "NOT_OP", "OPEN_BRACE", "CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", 
		"EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", "NOT_EQ_2", "AT", "ARROW", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MULT_ASSIGN", "AT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "LEFT_SHIFT_ASSIGN", "RIGHT_SHIFT_ASSIGN", 
		"POWER_ASSIGN", "IDIV_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python3Parser._LITERAL_NAMES, Python3Parser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Python3Parser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Python3.g4"; }

	@Override
	public get ruleNames(): string[] { return Python3Parser.ruleNames; }

	@Override
	public get serializedATN(): string { return Python3Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Python3Parser._ATN, this);
	}
	@RuleVersion(0)
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Python3Parser.RULE_single_input);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.compound_stmt();
				this.state = 173;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Python3Parser.RULE_file_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NEWLINE - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.NOT_OP - 67)) | (1 << (Python3Parser.OPEN_BRACE - 67)) | (1 << (Python3Parser.AT - 67)))) !== 0)) {
				{
				this.state = 179;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NEWLINE:
					{
					this.state = 177;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				case Python3Parser.DEF:
				case Python3Parser.RETURN:
				case Python3Parser.RAISE:
				case Python3Parser.FROM:
				case Python3Parser.IMPORT:
				case Python3Parser.GLOBAL:
				case Python3Parser.NONLOCAL:
				case Python3Parser.ASSERT:
				case Python3Parser.IF:
				case Python3Parser.WHILE:
				case Python3Parser.FOR:
				case Python3Parser.TRY:
				case Python3Parser.WITH:
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.CLASS:
				case Python3Parser.YIELD:
				case Python3Parser.DEL:
				case Python3Parser.PASS:
				case Python3Parser.CONTINUE:
				case Python3Parser.BREAK:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.BYTES_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.OCT_INTEGER:
				case Python3Parser.HEX_INTEGER:
				case Python3Parser.BIN_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.IMAG_NUMBER:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
				case Python3Parser.AT:
					{
					this.state = 178;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Python3Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.testlist();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.NEWLINE) {
				{
				{
				this.state = 187;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Python3Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(Python3Parser.AT);
			this.state = 196;
			this.dotted_name();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.OPEN_PAREN) {
				{
				this.state = 197;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (Python3Parser.POWER - 53)) | (1 << (Python3Parser.OPEN_BRACK - 53)) | (1 << (Python3Parser.ADD - 53)) | (1 << (Python3Parser.MINUS - 53)) | (1 << (Python3Parser.NOT_OP - 53)) | (1 << (Python3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 198;
					this.arglist();
					}
				}

				this.state = 201;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 204;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decorators(): DecoratorsContext {
		let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Python3Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 206;
				this.decorator();
				}
				}
				this.state = 209; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===Python3Parser.AT );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public decorated(): DecoratedContext {
		let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Python3Parser.RULE_decorated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.decorators();
			this.state = 214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.CLASS:
				{
				this.state = 212;
				this.classdef();
				}
				break;
			case Python3Parser.DEF:
				{
				this.state = 213;
				this.funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python3Parser.RULE_funcdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(Python3Parser.DEF);
			this.state = 217;
			this.match(Python3Parser.NAME);
			this.state = 218;
			this.parameters();
			this.state = 219;
			this.suite();
			this.state = 220;
			this.match(Python3Parser.T__0);
			this.state = 221;
			this.match(Python3Parser.DEF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.NAME - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 224;
				this.typedargslist();
				}
			}

			this.state = 227;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typedargslist(): TypedargslistContext {
		let _localctx: TypedargslistContext = new TypedargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Python3Parser.RULE_typedargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 294;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 229;
				this.tfpdef();
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ASSIGN) {
					{
					this.state = 230;
					this.match(Python3Parser.ASSIGN);
					this.state = 231;
					this.test();
					}
				}

				this.state = 242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 234;
						this.match(Python3Parser.COMMA);
						this.state = 235;
						this.tfpdef();
						this.state = 238;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 236;
							this.match(Python3Parser.ASSIGN);
							this.state = 237;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 244;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,11,this._ctx);
				}
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 245;
					this.match(Python3Parser.COMMA);
					this.state = 268;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 246;
						this.match(Python3Parser.STAR);
						this.state = 248;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.NAME) {
							{
							this.state = 247;
							this.tfpdef();
							}
						}

						this.state = 258;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
						while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
							if ( _alt===1 ) {
								{
								{
								this.state = 250;
								this.match(Python3Parser.COMMA);
								this.state = 251;
								this.tfpdef();
								this.state = 254;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===Python3Parser.ASSIGN) {
									{
									this.state = 252;
									this.match(Python3Parser.ASSIGN);
									this.state = 253;
									this.test();
									}
								}

								}
								} 
							}
							this.state = 260;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,14,this._ctx);
						}
						this.state = 264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.COMMA) {
							{
							this.state = 261;
							this.match(Python3Parser.COMMA);
							this.state = 262;
							this.match(Python3Parser.POWER);
							this.state = 263;
							this.tfpdef();
							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 266;
						this.match(Python3Parser.POWER);
						this.state = 267;
						this.tfpdef();
						}
						break;
					case Python3Parser.CLOSE_PAREN:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 272;
				this.match(Python3Parser.STAR);
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NAME) {
					{
					this.state = 273;
					this.tfpdef();
					}
				}

				this.state = 284;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 276;
						this.match(Python3Parser.COMMA);
						this.state = 277;
						this.tfpdef();
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 278;
							this.match(Python3Parser.ASSIGN);
							this.state = 279;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 286;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 287;
					this.match(Python3Parser.COMMA);
					this.state = 288;
					this.match(Python3Parser.POWER);
					this.state = 289;
					this.tfpdef();
					}
				}

				}
				break;
			case Python3Parser.POWER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 292;
				this.match(Python3Parser.POWER);
				this.state = 293;
				this.tfpdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tfpdef(): TfpdefContext {
		let _localctx: TfpdefContext = new TfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Python3Parser.RULE_tfpdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(Python3Parser.NAME);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COLON) {
				{
				this.state = 297;
				this.match(Python3Parser.COLON);
				this.state = 298;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.state = 366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 301;
				this.vfpdef();
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ASSIGN) {
					{
					this.state = 302;
					this.match(Python3Parser.ASSIGN);
					this.state = 303;
					this.test();
					}
				}

				this.state = 314;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 306;
						this.match(Python3Parser.COMMA);
						this.state = 307;
						this.vfpdef();
						this.state = 310;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 308;
							this.match(Python3Parser.ASSIGN);
							this.state = 309;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 316;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,26,this._ctx);
				}
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 317;
					this.match(Python3Parser.COMMA);
					this.state = 340;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 318;
						this.match(Python3Parser.STAR);
						this.state = 320;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.NAME) {
							{
							this.state = 319;
							this.vfpdef();
							}
						}

						this.state = 330;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
						while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
							if ( _alt===1 ) {
								{
								{
								this.state = 322;
								this.match(Python3Parser.COMMA);
								this.state = 323;
								this.vfpdef();
								this.state = 326;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===Python3Parser.ASSIGN) {
									{
									this.state = 324;
									this.match(Python3Parser.ASSIGN);
									this.state = 325;
									this.test();
									}
								}

								}
								} 
							}
							this.state = 332;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
						}
						this.state = 336;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.COMMA) {
							{
							this.state = 333;
							this.match(Python3Parser.COMMA);
							this.state = 334;
							this.match(Python3Parser.POWER);
							this.state = 335;
							this.vfpdef();
							}
						}

						}
						break;
					case Python3Parser.POWER:
						{
						this.state = 338;
						this.match(Python3Parser.POWER);
						this.state = 339;
						this.vfpdef();
						}
						break;
					case Python3Parser.COLON:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case Python3Parser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(Python3Parser.STAR);
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NAME) {
					{
					this.state = 345;
					this.vfpdef();
					}
				}

				this.state = 356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,35,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 348;
						this.match(Python3Parser.COMMA);
						this.state = 349;
						this.vfpdef();
						this.state = 352;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python3Parser.ASSIGN) {
							{
							this.state = 350;
							this.match(Python3Parser.ASSIGN);
							this.state = 351;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 358;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,35,this._ctx);
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 359;
					this.match(Python3Parser.COMMA);
					this.state = 360;
					this.match(Python3Parser.POWER);
					this.state = 361;
					this.vfpdef();
					}
				}

				}
				break;
			case Python3Parser.POWER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 364;
				this.match(Python3Parser.POWER);
				this.state = 365;
				this.vfpdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public vfpdef(): VfpdefContext {
		let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(Python3Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block_stmt(): Block_stmtContext {
		let _localctx: Block_stmtContext = new Block_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Python3Parser.RULE_block_stmt);
		let _la: number;
		try {
			this.state = 384;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 370;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 372; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 371;
					this.simple_stmt();
					}
					}
					this.state = 374; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || _la===Python3Parser.NOT_OP || _la===Python3Parser.OPEN_BRACE );
				this.state = 376;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 378;
				this.match(Python3Parser.NEWLINE);
				this.state = 379;
				this.match(Python3Parser.INDENT);
				this.state = 380;
				this.simple_stmt();
				this.state = 381;
				this.match(Python3Parser.NEWLINE);
				this.state = 382;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Python3Parser.RULE_stmt);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 386;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.WITH:
			case Python3Parser.CLASS:
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 387;
				this.compound_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python3Parser.RULE_simple_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.small_stmt();
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.SEMI_COLON) {
				{
				{
				this.state = 391;
				this.match(Python3Parser.SEMI_COLON);
				this.state = 392;
				this.small_stmt();
				}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Python3Parser.RULE_small_stmt);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 398;
				this.expr_stmt();
				}
				break;
			case Python3Parser.DEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.del_stmt();
				}
				break;
			case Python3Parser.PASS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 400;
				this.pass_stmt();
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.YIELD:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 401;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 402;
				this.import_stmt();
				}
				break;
			case Python3Parser.GLOBAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 403;
				this.global_stmt();
				}
				break;
			case Python3Parser.NONLOCAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 404;
				this.nonlocal_stmt();
				}
				break;
			case Python3Parser.ASSERT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 405;
				this.assert_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Python3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.testlist_star_expr();
			this.state = 424;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD_ASSIGN:
			case Python3Parser.SUB_ASSIGN:
			case Python3Parser.MULT_ASSIGN:
			case Python3Parser.AT_ASSIGN:
			case Python3Parser.DIV_ASSIGN:
			case Python3Parser.MOD_ASSIGN:
			case Python3Parser.AND_ASSIGN:
			case Python3Parser.OR_ASSIGN:
			case Python3Parser.XOR_ASSIGN:
			case Python3Parser.LEFT_SHIFT_ASSIGN:
			case Python3Parser.RIGHT_SHIFT_ASSIGN:
			case Python3Parser.POWER_ASSIGN:
			case Python3Parser.IDIV_ASSIGN:
				{
				this.state = 409;
				this.augassign();
				this.state = 412;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 410;
					this.yield_expr();
					}
					break;
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.BYTES_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.OCT_INTEGER:
				case Python3Parser.HEX_INTEGER:
				case Python3Parser.BIN_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.IMAG_NUMBER:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 411;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Python3Parser.EOF:
			case Python3Parser.T__0:
			case Python3Parser.DEF:
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.IF:
			case Python3Parser.ELSE:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.TRY:
			case Python3Parser.FINALLY:
			case Python3Parser.WITH:
			case Python3Parser.EXCEPT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.CLASS:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NEWLINE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.SEMI_COLON:
			case Python3Parser.ASSIGN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
			case Python3Parser.CLOSE_BRACE:
			case Python3Parser.AT:
			case Python3Parser.DEDENT:
				{
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.ASSIGN) {
					{
					{
					this.state = 414;
					this.match(Python3Parser.ASSIGN);
					this.state = 417;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.YIELD:
						{
						this.state = 415;
						this.yield_expr();
						}
						break;
					case Python3Parser.LAMBDA:
					case Python3Parser.NOT:
					case Python3Parser.NONE:
					case Python3Parser.TRUE:
					case Python3Parser.FALSE:
					case Python3Parser.NAME:
					case Python3Parser.STRING_LITERAL:
					case Python3Parser.BYTES_LITERAL:
					case Python3Parser.DECIMAL_INTEGER:
					case Python3Parser.OCT_INTEGER:
					case Python3Parser.HEX_INTEGER:
					case Python3Parser.BIN_INTEGER:
					case Python3Parser.FLOAT_NUMBER:
					case Python3Parser.IMAG_NUMBER:
					case Python3Parser.ELLIPSIS:
					case Python3Parser.STAR:
					case Python3Parser.OPEN_PAREN:
					case Python3Parser.OPEN_BRACK:
					case Python3Parser.ADD:
					case Python3Parser.MINUS:
					case Python3Parser.NOT_OP:
					case Python3Parser.OPEN_BRACE:
						{
						this.state = 416;
						this.testlist_star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 423;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public testlist_star_expr(): Testlist_star_exprContext {
		let _localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Python3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
			case 1:
				{
				this.state = 426;
				this.test();
				}
				break;

			case 2:
				{
				this.state = 427;
				this.star_expr();
				}
				break;
			}
			this.state = 437;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 430;
					this.match(Python3Parser.COMMA);
					this.state = 433;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
					case 1:
						{
						this.state = 431;
						this.test();
						}
						break;

					case 2:
						{
						this.state = 432;
						this.star_expr();
						}
						break;
					}
					}
					} 
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			}
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 440;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public augassign(): AugassignContext {
		let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			_la = this._input.LA(1);
			if ( !(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (Python3Parser.ADD_ASSIGN - 79)) | (1 << (Python3Parser.SUB_ASSIGN - 79)) | (1 << (Python3Parser.MULT_ASSIGN - 79)) | (1 << (Python3Parser.AT_ASSIGN - 79)) | (1 << (Python3Parser.DIV_ASSIGN - 79)) | (1 << (Python3Parser.MOD_ASSIGN - 79)) | (1 << (Python3Parser.AND_ASSIGN - 79)) | (1 << (Python3Parser.OR_ASSIGN - 79)) | (1 << (Python3Parser.XOR_ASSIGN - 79)) | (1 << (Python3Parser.LEFT_SHIFT_ASSIGN - 79)) | (1 << (Python3Parser.RIGHT_SHIFT_ASSIGN - 79)) | (1 << (Python3Parser.POWER_ASSIGN - 79)) | (1 << (Python3Parser.IDIV_ASSIGN - 79)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Python3Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(Python3Parser.DEL);
			this.state = 446;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Python3Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(Python3Parser.PASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Python3Parser.RULE_flow_stmt);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 450;
				this.break_stmt();
				}
				break;
			case Python3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				this.continue_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 452;
				this.return_stmt();
				}
				break;
			case Python3Parser.RAISE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 453;
				this.raise_stmt();
				}
				break;
			case Python3Parser.YIELD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 454;
				this.yield_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Python3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(Python3Parser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Python3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.match(Python3Parser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Python3Parser.RULE_return_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(Python3Parser.RETURN);
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,52,this._ctx) ) {
			case 1:
				{
				this.state = 462;
				this.testlist();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Python3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.yield_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Python3Parser.RULE_raise_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(Python3Parser.RAISE);
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,54,this._ctx) ) {
			case 1:
				{
				this.state = 468;
				this.test();
				this.state = 471;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
				case 1:
					{
					this.state = 469;
					this.match(Python3Parser.FROM);
					this.state = 470;
					this.test();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Python3Parser.RULE_import_stmt);
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 475;
				this.import_name();
				}
				break;
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.import_from();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(Python3Parser.IMPORT);
			this.state = 480;
			this.dotted_as_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Python3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(Python3Parser.FROM);
			this.state = 495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				{
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) {
					{
					{
					this.state = 483;
					_la = this._input.LA(1);
					if ( !(_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 488;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 489;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 491; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 490;
					_la = this._input.LA(1);
					if ( !(_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 493; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS );
				}
				break;
			}
			this.state = 497;
			this.match(Python3Parser.IMPORT);
			this.state = 504;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STAR:
				{
				this.state = 498;
				this.match(Python3Parser.STAR);
				}
				break;
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 499;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 500;
				this.import_as_names();
				this.state = 501;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 503;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(Python3Parser.NAME);
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 507;
				this.match(Python3Parser.AS);
				this.state = 508;
				this.match(Python3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Python3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.dotted_name();
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 512;
				this.match(Python3Parser.AS);
				this.state = 513;
				this.match(Python3Parser.NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Python3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.import_as_name();
			this.state = 521;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 517;
					this.match(Python3Parser.DOT);
					this.state = 518;
					this.import_as_name();
					}
					} 
				}
				this.state = 523;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			}
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.DOT) {
				{
				this.state = 524;
				this.match(Python3Parser.DOT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.dotted_as_name();
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.DOT) {
				{
				{
				this.state = 528;
				this.match(Python3Parser.DOT);
				this.state = 529;
				this.dotted_as_name();
				}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Python3Parser.RULE_dotted_name);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.match(Python3Parser.NAME);
			this.state = 540;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 536;
					this.match(Python3Parser.DOT);
					this.state = 537;
					this.match(Python3Parser.NAME);
					}
					} 
				}
				this.state = 542;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Python3Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(Python3Parser.GLOBAL);
			this.state = 544;
			this.match(Python3Parser.NAME);
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 545;
				this.match(Python3Parser.COMMA);
				this.state = 546;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let _localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Python3Parser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(Python3Parser.NONLOCAL);
			this.state = 553;
			this.match(Python3Parser.NAME);
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 554;
				this.match(Python3Parser.COMMA);
				this.state = 555;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python3Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(Python3Parser.ASSERT);
			this.state = 562;
			this.test();
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 563;
				this.match(Python3Parser.COMMA);
				this.state = 564;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 567;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 568;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 569;
				this.for_stmt();
				}
				break;
			case Python3Parser.TRY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 570;
				this.try_stmt();
				}
				break;
			case Python3Parser.WITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 571;
				this.with_stmt();
				}
				break;
			case Python3Parser.DEF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 572;
				this.funcdef();
				}
				break;
			case Python3Parser.CLASS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 573;
				this.classdef();
				}
				break;
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 574;
				this.decorated();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Python3Parser.RULE_if_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(Python3Parser.IF);
			this.state = 578;
			this.test();
			this.state = 579;
			this.block_stmt();
			this.state = 587;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 580;
					this.match(Python3Parser.ELSE);
					this.state = 581;
					this.match(Python3Parser.IF);
					this.state = 582;
					this.test();
					this.state = 583;
					this.block_stmt();
					}
					} 
				}
				this.state = 589;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			}
			this.state = 592;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ELSE) {
				{
				this.state = 590;
				this.match(Python3Parser.ELSE);
				this.state = 591;
				this.block_stmt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Python3Parser.RULE_while_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(Python3Parser.WHILE);
			this.state = 595;
			this.test();
			this.state = 596;
			this.block_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Python3Parser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(Python3Parser.FOR);
			this.state = 599;
			this.exprlist();
			this.state = 600;
			this.match(Python3Parser.IN);
			this.state = 601;
			this.testlist();
			this.state = 602;
			this.block_stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Python3Parser.RULE_try_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(Python3Parser.TRY);
			this.state = 605;
			this.match(Python3Parser.COLON);
			this.state = 606;
			this.suite();
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.EXCEPT:
				{
				this.state = 611; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 607;
					this.except_clause();
					this.state = 608;
					this.match(Python3Parser.COLON);
					this.state = 609;
					this.suite();
					}
					}
					this.state = 613; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.EXCEPT );
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ELSE) {
					{
					this.state = 615;
					this.match(Python3Parser.ELSE);
					this.state = 616;
					this.match(Python3Parser.COLON);
					this.state = 617;
					this.suite();
					}
				}

				this.state = 623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FINALLY) {
					{
					this.state = 620;
					this.match(Python3Parser.FINALLY);
					this.state = 621;
					this.match(Python3Parser.COLON);
					this.state = 622;
					this.suite();
					}
				}

				}
				break;
			case Python3Parser.FINALLY:
				{
				this.state = 625;
				this.match(Python3Parser.FINALLY);
				this.state = 626;
				this.match(Python3Parser.COLON);
				this.state = 627;
				this.suite();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Python3Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.match(Python3Parser.WITH);
			this.state = 631;
			this.with_item();
			this.state = 636;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 632;
				this.match(Python3Parser.COMMA);
				this.state = 633;
				this.with_item();
				}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 639;
			this.match(Python3Parser.COLON);
			this.state = 640;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Python3Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.test();
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 643;
				this.match(Python3Parser.AS);
				this.state = 644;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Python3Parser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(Python3Parser.EXCEPT);
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 648;
				this.test();
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.AS) {
					{
					this.state = 649;
					this.match(Python3Parser.AS);
					this.state = 650;
					this.match(Python3Parser.NAME);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Python3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 665;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.RETURN:
			case Python3Parser.RAISE:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.GLOBAL:
			case Python3Parser.NONLOCAL:
			case Python3Parser.ASSERT:
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.YIELD:
			case Python3Parser.DEL:
			case Python3Parser.PASS:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 655;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 656;
				this.match(Python3Parser.NEWLINE);
				this.state = 657;
				this.match(Python3Parser.INDENT);
				this.state = 659; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 658;
					this.stmt();
					}
					}
					this.state = 661; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.NOT_OP - 67)) | (1 << (Python3Parser.OPEN_BRACE - 67)) | (1 << (Python3Parser.AT - 67)))) !== 0) );
				this.state = 663;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Python3Parser.RULE_test);
		try {
			this.state = 676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.or_test();
				this.state = 673;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,82,this._ctx) ) {
				case 1:
					{
					this.state = 668;
					this.match(Python3Parser.IF);
					this.state = 669;
					this.or_test();
					this.state = 670;
					this.match(Python3Parser.ELSE);
					this.state = 671;
					this.test();
					}
					break;
				}
				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 675;
				this.lambdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public test_nocond(): Test_nocondContext {
		let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Python3Parser.RULE_test_nocond);
		try {
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 678;
				this.or_test();
				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 679;
				this.lambdef_nocond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdef(): LambdefContext {
		let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Python3Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.match(Python3Parser.LAMBDA);
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.NAME - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 683;
				this.varargslist();
				}
			}

			this.state = 686;
			this.match(Python3Parser.COLON);
			this.state = 687;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdef_nocond(): Lambdef_nocondContext {
		let _localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Python3Parser.RULE_lambdef_nocond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this.match(Python3Parser.LAMBDA);
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.NAME - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 690;
				this.varargslist();
				}
			}

			this.state = 693;
			this.match(Python3Parser.COLON);
			this.state = 694;
			this.test_nocond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public or_test(): Or_testContext {
		let _localctx: Or_testContext = new Or_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.and_test();
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR) {
				{
				{
				this.state = 697;
				this.match(Python3Parser.OR);
				this.state = 698;
				this.and_test();
				}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public and_test(): And_testContext {
		let _localctx: And_testContext = new And_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.not_test();
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND) {
				{
				{
				this.state = 705;
				this.match(Python3Parser.AND);
				this.state = 706;
				this.not_test();
				}
				}
				this.state = 711;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public not_test(): Not_testContext {
		let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Python3Parser.RULE_not_test);
		try {
			this.state = 715;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 712;
				this.match(Python3Parser.NOT);
				this.state = 713;
				this.not_test();
				}
				break;
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 714;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Python3Parser.RULE_comparison);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.star_expr();
			this.state = 723;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,90,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 718;
					this.comp_op();
					this.state = 719;
					this.star_expr();
					}
					} 
				}
				this.state = 725;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,90,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Python3Parser.RULE_comp_op);
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 726;
				this.match(Python3Parser.LESS_THAN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 727;
				this.match(Python3Parser.GREATER_THAN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 728;
				this.match(Python3Parser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 729;
				this.match(Python3Parser.GT_EQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 730;
				this.match(Python3Parser.LT_EQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 731;
				this.match(Python3Parser.NOT_EQ_1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 732;
				this.match(Python3Parser.NOT_EQ_2);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 733;
				this.match(Python3Parser.IN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 734;
				this.match(Python3Parser.NOT);
				this.state = 735;
				this.match(Python3Parser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 736;
				this.match(Python3Parser.IS);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 737;
				this.match(Python3Parser.IS);
				this.state = 738;
				this.match(Python3Parser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Python3Parser.RULE_star_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.STAR) {
				{
				this.state = 741;
				this.match(Python3Parser.STAR);
				}
			}

			this.state = 744;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Python3Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.xor_expr();
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR_OP) {
				{
				{
				this.state = 747;
				this.match(Python3Parser.OR_OP);
				this.state = 748;
				this.xor_expr();
				}
				}
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Python3Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.and_expr();
			this.state = 759;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.XOR) {
				{
				{
				this.state = 755;
				this.match(Python3Parser.XOR);
				this.state = 756;
				this.and_expr();
				}
				}
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Python3Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this.shift_expr();
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND_OP) {
				{
				{
				this.state = 763;
				this.match(Python3Parser.AND_OP);
				this.state = 764;
				this.shift_expr();
				}
				}
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Python3Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			this.arith_expr();
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.LEFT_SHIFT || _la===Python3Parser.RIGHT_SHIFT) {
				{
				this.state = 775;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.LEFT_SHIFT:
					{
					this.state = 771;
					this.match(Python3Parser.LEFT_SHIFT);
					this.state = 772;
					this.arith_expr();
					}
					break;
				case Python3Parser.RIGHT_SHIFT:
					{
					this.state = 773;
					this.match(Python3Parser.RIGHT_SHIFT);
					this.state = 774;
					this.arith_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arith_expr(): Arith_exprContext {
		let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Python3Parser.RULE_arith_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.term();
			this.state = 787;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,99,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 785;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.ADD:
						{
						this.state = 781;
						this.match(Python3Parser.ADD);
						this.state = 782;
						this.term();
						}
						break;
					case Python3Parser.MINUS:
						{
						this.state = 783;
						this.match(Python3Parser.MINUS);
						this.state = 784;
						this.term();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,99,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Python3Parser.RULE_term);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 790;
			this.factor();
			this.state = 803;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,101,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 801;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 791;
						this.match(Python3Parser.STAR);
						this.state = 792;
						this.factor();
						}
						break;
					case Python3Parser.DIV:
						{
						this.state = 793;
						this.match(Python3Parser.DIV);
						this.state = 794;
						this.factor();
						}
						break;
					case Python3Parser.MOD:
						{
						this.state = 795;
						this.match(Python3Parser.MOD);
						this.state = 796;
						this.factor();
						}
						break;
					case Python3Parser.IDIV:
						{
						this.state = 797;
						this.match(Python3Parser.IDIV);
						this.state = 798;
						this.factor();
						}
						break;
					case Python3Parser.AT:
						{
						this.state = 799;
						this.match(Python3Parser.AT);
						this.state = 800;
						this.factor();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 805;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,101,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Python3Parser.RULE_factor);
		try {
			this.state = 813;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 806;
				this.match(Python3Parser.ADD);
				this.state = 807;
				this.factor();
				}
				break;
			case Python3Parser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 808;
				this.match(Python3Parser.MINUS);
				this.state = 809;
				this.factor();
				}
				break;
			case Python3Parser.NOT_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 810;
				this.match(Python3Parser.NOT_OP);
				this.state = 811;
				this.factor();
				}
				break;
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 812;
				this.power();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Python3Parser.RULE_power);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.atom();
			this.state = 819;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,103,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 816;
					this.trailer();
					}
					} 
				}
				this.state = 821;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,103,this._ctx);
			}
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.POWER) {
				{
				this.state = 822;
				this.match(Python3Parser.POWER);
				this.state = 823;
				this.factor();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Python3Parser.RULE_atom);
		let _la: number;
		try {
			let _alt: number;
			this.state = 853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 826;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 829;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 827;
					this.yield_expr();
					}
					break;
				case Python3Parser.LAMBDA:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.BYTES_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.OCT_INTEGER:
				case Python3Parser.HEX_INTEGER:
				case Python3Parser.BIN_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.IMAG_NUMBER:
				case Python3Parser.ELLIPSIS:
				case Python3Parser.STAR:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.NOT_OP:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 828;
					this.testlist_comp();
					}
					break;
				case Python3Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 831;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 832;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 833;
					this.testlist_comp();
					}
				}

				this.state = 836;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 837;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 839;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 838;
					this.dictorsetmaker();
					}
				}

				this.state = 841;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 842;
				this.match(Python3Parser.NAME);
				}
				break;
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 843;
				this.number();
				}
				break;
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 845; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 844;
						this.str();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 847; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,108,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case Python3Parser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 849;
				this.match(Python3Parser.ELLIPSIS);
				}
				break;
			case Python3Parser.NONE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 850;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 851;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 852;
				this.match(Python3Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.test();
			this.state = 867;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				{
				this.state = 856;
				this.comp_for();
				}
				break;
			case Python3Parser.CLOSE_PAREN:
			case Python3Parser.COMMA:
			case Python3Parser.CLOSE_BRACK:
				{
				this.state = 861;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,110,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 857;
						this.match(Python3Parser.COMMA);
						this.state = 858;
						this.test();
						}
						} 
					}
					this.state = 863;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,110,this._ctx);
				}
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 864;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Python3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 880;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 869;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (Python3Parser.POWER - 53)) | (1 << (Python3Parser.OPEN_BRACK - 53)) | (1 << (Python3Parser.ADD - 53)) | (1 << (Python3Parser.MINUS - 53)) | (1 << (Python3Parser.NOT_OP - 53)) | (1 << (Python3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 870;
					this.arglist();
					}
				}

				this.state = 873;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 874;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 875;
				this.subscriptlist();
				this.state = 876;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 878;
				this.match(Python3Parser.DOT);
				this.state = 879;
				this.match(Python3Parser.NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.subscript();
			this.state = 887;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,115,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 883;
					this.match(Python3Parser.COMMA);
					this.state = 884;
					this.subscript();
					}
					} 
				}
				this.state = 889;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,115,this._ctx);
			}
			this.state = 891;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 890;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Python3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,120,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 893;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 894;
					this.test();
					}
				}

				this.state = 897;
				this.match(Python3Parser.COLON);
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 898;
					this.test();
					}
				}

				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COLON) {
					{
					this.state = 901;
					this.sliceop();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Python3Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(Python3Parser.COLON);
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 907;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 910;
			this.star_expr();
			this.state = 915;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 911;
					this.match(Python3Parser.COMMA);
					this.state = 912;
					this.star_expr();
					}
					} 
				}
				this.state = 917;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
			}
			this.state = 919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 918;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 921;
			this.test();
			this.state = 926;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,124,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 922;
					this.match(Python3Parser.COMMA);
					this.state = 923;
					this.test();
					}
					} 
				}
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,124,this._ctx);
			}
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 929;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.state = 965;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 932;
				this.test();
				this.state = 933;
				this.match(Python3Parser.COLON);
				this.state = 934;
				this.test();
				this.state = 949;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 935;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 943;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 936;
							this.match(Python3Parser.COMMA);
							this.state = 937;
							this.test();
							this.state = 938;
							this.match(Python3Parser.COLON);
							this.state = 939;
							this.test();
							}
							} 
						}
						this.state = 945;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
					}
					this.state = 947;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 946;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 951;
				this.test();
				this.state = 963;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 952;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 957;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,129,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 953;
							this.match(Python3Parser.COMMA);
							this.state = 954;
							this.test();
							}
							} 
						}
						this.state = 959;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,129,this._ctx);
					}
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 960;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Python3Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(Python3Parser.CLASS);
			this.state = 968;
			this.match(Python3Parser.NAME);
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.OPEN_PAREN) {
				{
				this.state = 969;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (Python3Parser.POWER - 53)) | (1 << (Python3Parser.OPEN_BRACK - 53)) | (1 << (Python3Parser.ADD - 53)) | (1 << (Python3Parser.MINUS - 53)) | (1 << (Python3Parser.NOT_OP - 53)) | (1 << (Python3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 970;
					this.arglist();
					}
				}

				this.state = 973;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 976;
			this.match(Python3Parser.COLON);
			this.state = 977;
			this.suite();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 984;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 979;
					this.argument();
					this.state = 980;
					this.match(Python3Parser.COMMA);
					}
					} 
				}
				this.state = 986;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			}
			this.state = 1007;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,139,this._ctx) ) {
			case 1:
				{
				this.state = 987;
				this.argument();
				this.state = 989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 988;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 991;
				this.match(Python3Parser.STAR);
				this.state = 992;
				this.test();
				this.state = 997;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 993;
						this.match(Python3Parser.COMMA);
						this.state = 994;
						this.argument();
						}
						} 
					}
					this.state = 999;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
				}
				this.state = 1003;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 1000;
					this.match(Python3Parser.COMMA);
					this.state = 1001;
					this.match(Python3Parser.POWER);
					this.state = 1002;
					this.test();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 1005;
				this.match(Python3Parser.POWER);
				this.state = 1006;
				this.test();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Python3Parser.RULE_argument);
		let _la: number;
		try {
			this.state = 1017;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,141,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.test();
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FOR) {
					{
					this.state = 1010;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.test();
				this.state = 1014;
				this.match(Python3Parser.ASSIGN);
				this.state = 1015;
				this.test();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Python3Parser.RULE_comp_iter);
		try {
			this.state = 1021;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1019;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1020;
				this.comp_if();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Python3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.match(Python3Parser.FOR);
			this.state = 1024;
			this.exprlist();
			this.state = 1025;
			this.match(Python3Parser.IN);
			this.state = 1026;
			this.or_test();
			this.state = 1028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 1027;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Python3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.match(Python3Parser.IF);
			this.state = 1031;
			this.test_nocond();
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 1032;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Python3Parser.RULE_yield_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(Python3Parser.YIELD);
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,145,this._ctx) ) {
			case 1:
				{
				this.state = 1036;
				this.yield_arg();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Python3Parser.RULE_yield_arg);
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1039;
				this.match(Python3Parser.FROM);
				this.state = 1040;
				this.test();
				}
				break;
			case Python3Parser.LAMBDA:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.IMAG_NUMBER:
			case Python3Parser.ELLIPSIS:
			case Python3Parser.STAR:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.NOT_OP:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1041;
				this.testlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Python3Parser.RULE_str);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			_la = this._input.LA(1);
			if ( !(_la===Python3Parser.STRING_LITERAL || _la===Python3Parser.BYTES_LITERAL) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Python3Parser.RULE_number);
		try {
			this.state = 1049;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1046;
				this.integer();
				}
				break;
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1047;
				this.match(Python3Parser.FLOAT_NUMBER);
				}
				break;
			case Python3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1048;
				this.match(Python3Parser.IMAG_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Python3Parser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			_la = this._input.LA(1);
			if ( !(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.DECIMAL_INTEGER - 39)) | (1 << (Python3Parser.OCT_INTEGER - 39)) | (1 << (Python3Parser.HEX_INTEGER - 39)) | (1 << (Python3Parser.BIN_INTEGER - 39)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03a\u0420\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x03\x02\x03"+
		"\x02\x03\x02\x03\x02\x03\x02\x05\x02\xB2\n\x02\x03\x03\x03\x03\x07\x03"+
		"\xB6\n\x03\f\x03\x0E\x03\xB9\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07"+
		"\x04\xBF\n\x04\f\x04\x0E\x04\xC2\v\x04\x03\x04\x03\x04\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x05\x05\xCA\n\x05\x03\x05\x05\x05\xCD\n\x05\x03\x05\x03"+
		"\x05\x03\x06\x06\x06\xD2\n\x06\r\x06\x0E\x06\xD3\x03\x07\x03\x07\x03\x07"+
		"\x05\x07\xD9\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03"+
		"\t\x05\t\xE4\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xEB\n\n\x03\n\x03"+
		"\n\x03\n\x03\n\x05\n\xF1\n\n\x07\n\xF3\n\n\f\n\x0E\n\xF6\v\n\x03\n\x03"+
		"\n\x03\n\x05\n\xFB\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0101\n\n\x07\n\u0103"+
		"\n\n\f\n\x0E\n\u0106\v\n\x03\n\x03\n\x03\n\x05\n\u010B\n\n\x03\n\x03\n"+
		"\x05\n\u010F\n\n\x05\n\u0111\n\n\x03\n\x03\n\x05\n\u0115\n\n\x03\n\x03"+
		"\n\x03\n\x03\n\x05\n\u011B\n\n\x07\n\u011D\n\n\f\n\x0E\n\u0120\v\n\x03"+
		"\n\x03\n\x03\n\x05\n\u0125\n\n\x03\n\x03\n\x05\n\u0129\n\n\x03\v\x03\v"+
		"\x03\v\x05\v\u012E\n\v\x03\f\x03\f\x03\f\x05\f\u0133\n\f\x03\f\x03\f\x03"+
		"\f\x03\f\x05\f\u0139\n\f\x07\f\u013B\n\f\f\f\x0E\f\u013E\v\f\x03\f\x03"+
		"\f\x03\f\x05\f\u0143\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u0149\n\f\x07\f"+
		"\u014B\n\f\f\f\x0E\f\u014E\v\f\x03\f\x03\f\x03\f\x05\f\u0153\n\f\x03\f"+
		"\x03\f\x05\f\u0157\n\f\x05\f\u0159\n\f\x03\f\x03\f\x05\f\u015D\n\f\x03"+
		"\f\x03\f\x03\f\x03\f\x05\f\u0163\n\f\x07\f\u0165\n\f\f\f\x0E\f\u0168\v"+
		"\f\x03\f\x03\f\x03\f\x05\f\u016D\n\f\x03\f\x03\f\x05\f\u0171\n\f\x03\r"+
		"\x03\r\x03\x0E\x03\x0E\x06\x0E\u0177\n\x0E\r\x0E\x0E\x0E\u0178\x03\x0E"+
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0183"+
		"\n\x0E\x03\x0F\x03\x0F\x05\x0F\u0187\n\x0F\x03\x10\x03\x10\x03\x10\x07"+
		"\x10\u018C\n\x10\f\x10\x0E\x10\u018F\v\x10\x03\x11\x03\x11\x03\x11\x03"+
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0199\n\x11\x03\x12\x03\x12"+
		"\x03\x12\x03\x12\x05\x12\u019F\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01A4"+
		"\n\x12\x07\x12\u01A6\n\x12\f\x12\x0E\x12\u01A9\v\x12\x05\x12\u01AB\n\x12"+
		"\x03\x13\x03\x13\x05\x13\u01AF\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01B4"+
		"\n\x13\x07\x13\u01B6\n\x13\f\x13\x0E\x13\u01B9\v\x13\x03\x13\x05\x13\u01BC"+
		"\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17"+
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u01CA\n\x17\x03\x18\x03\x18\x03"+
		"\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u01D2\n\x1A\x03\x1B\x03\x1B\x03\x1C"+
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01DA\n\x1C\x05\x1C\u01DC\n\x1C\x03\x1D"+
		"\x03\x1D\x05\x1D\u01E0\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07"+
		"\x1F\u01E7\n\x1F\f\x1F\x0E\x1F\u01EA\v\x1F\x03\x1F\x03\x1F\x06\x1F\u01EE"+
		"\n\x1F\r\x1F\x0E\x1F\u01EF\x05\x1F\u01F2\n\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01FB\n\x1F\x03 \x03 \x03 \x05"+
		" \u0200\n \x03!\x03!\x03!\x05!\u0205\n!\x03\"\x03\"\x03\"\x07\"\u020A"+
		"\n\"\f\"\x0E\"\u020D\v\"\x03\"\x05\"\u0210\n\"\x03#\x03#\x03#\x07#\u0215"+
		"\n#\f#\x0E#\u0218\v#\x03$\x03$\x03$\x07$\u021D\n$\f$\x0E$\u0220\v$\x03"+
		"%\x03%\x03%\x03%\x07%\u0226\n%\f%\x0E%\u0229\v%\x03&\x03&\x03&\x03&\x07"+
		"&\u022F\n&\f&\x0E&\u0232\v&\x03\'\x03\'\x03\'\x03\'\x05\'\u0238\n\'\x03"+
		"(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0242\n(\x03)\x03)\x03)\x03"+
		")\x03)\x03)\x03)\x03)\x07)\u024C\n)\f)\x0E)\u024F\v)\x03)\x03)\x05)\u0253"+
		"\n)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x06,\u0266\n,\r,\x0E,\u0267\x03,\x03,\x03,\x05,\u026D"+
		"\n,\x03,\x03,\x03,\x05,\u0272\n,\x03,\x03,\x03,\x05,\u0277\n,\x03-\x03"+
		"-\x03-\x03-\x07-\u027D\n-\f-\x0E-\u0280\v-\x03-\x03-\x03-\x03.\x03.\x03"+
		".\x05.\u0288\n.\x03/\x03/\x03/\x03/\x05/\u028E\n/\x05/\u0290\n/\x030\x03"+
		"0\x030\x030\x060\u0296\n0\r0\x0E0\u0297\x030\x030\x050\u029C\n0\x031\x03"+
		"1\x031\x031\x031\x031\x051\u02A4\n1\x031\x051\u02A7\n1\x032\x032\x052"+
		"\u02AB\n2\x033\x033\x053\u02AF\n3\x033\x033\x033\x034\x034\x054\u02B6"+
		"\n4\x034\x034\x034\x035\x035\x035\x075\u02BE\n5\f5\x0E5\u02C1\v5\x036"+
		"\x036\x036\x076\u02C6\n6\f6\x0E6\u02C9\v6\x037\x037\x037\x057\u02CE\n"+
		"7\x038\x038\x038\x038\x078\u02D4\n8\f8\x0E8\u02D7\v8\x039\x039\x039\x03"+
		"9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x059\u02E6\n9\x03:\x05"+
		":\u02E9\n:\x03:\x03:\x03;\x03;\x03;\x07;\u02F0\n;\f;\x0E;\u02F3\v;\x03"+
		"<\x03<\x03<\x07<\u02F8\n<\f<\x0E<\u02FB\v<\x03=\x03=\x03=\x07=\u0300\n"+
		"=\f=\x0E=\u0303\v=\x03>\x03>\x03>\x03>\x03>\x07>\u030A\n>\f>\x0E>\u030D"+
		"\v>\x03?\x03?\x03?\x03?\x03?\x07?\u0314\n?\f?\x0E?\u0317\v?\x03@\x03@"+
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x07@\u0324\n@\f@\x0E@\u0327"+
		"\v@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0330\nA\x03B\x03B\x07B\u0334"+
		"\nB\fB\x0EB\u0337\vB\x03B\x03B\x05B\u033B\nB\x03C\x03C\x03C\x05C\u0340"+
		"\nC\x03C\x03C\x03C\x05C\u0345\nC\x03C\x03C\x03C\x05C\u034A\nC\x03C\x03"+
		"C\x03C\x03C\x06C\u0350\nC\rC\x0EC\u0351\x03C\x03C\x03C\x03C\x05C\u0358"+
		"\nC\x03D\x03D\x03D\x03D\x07D\u035E\nD\fD\x0ED\u0361\vD\x03D\x05D\u0364"+
		"\nD\x05D\u0366\nD\x03E\x03E\x05E\u036A\nE\x03E\x03E\x03E\x03E\x03E\x03"+
		"E\x03E\x05E\u0373\nE\x03F\x03F\x03F\x07F\u0378\nF\fF\x0EF\u037B\vF\x03"+
		"F\x05F\u037E\nF\x03G\x03G\x05G\u0382\nG\x03G\x03G\x05G\u0386\nG\x03G\x05"+
		"G\u0389\nG\x05G\u038B\nG\x03H\x03H\x05H\u038F\nH\x03I\x03I\x03I\x07I\u0394"+
		"\nI\fI\x0EI\u0397\vI\x03I\x05I\u039A\nI\x03J\x03J\x03J\x07J\u039F\nJ\f"+
		"J\x0EJ\u03A2\vJ\x03J\x05J\u03A5\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K"+
		"\x03K\x03K\x07K\u03B0\nK\fK\x0EK\u03B3\vK\x03K\x05K\u03B6\nK\x05K\u03B8"+
		"\nK\x03K\x03K\x03K\x03K\x07K\u03BE\nK\fK\x0EK\u03C1\vK\x03K\x05K\u03C4"+
		"\nK\x05K\u03C6\nK\x05K\u03C8\nK\x03L\x03L\x03L\x03L\x05L\u03CE\nL\x03"+
		"L\x05L\u03D1\nL\x03L\x03L\x03L\x03M\x03M\x03M\x07M\u03D9\nM\fM\x0EM\u03DC"+
		"\vM\x03M\x03M\x05M\u03E0\nM\x03M\x03M\x03M\x03M\x07M\u03E6\nM\fM\x0EM"+
		"\u03E9\vM\x03M\x03M\x03M\x05M\u03EE\nM\x03M\x03M\x05M\u03F2\nM\x03N\x03"+
		"N\x05N\u03F6\nN\x03N\x03N\x03N\x03N\x05N\u03FC\nN\x03O\x03O\x05O\u0400"+
		"\nO\x03P\x03P\x03P\x03P\x03P\x05P\u0407\nP\x03Q\x03Q\x03Q\x05Q\u040C\n"+
		"Q\x03R\x03R\x05R\u0410\nR\x03S\x03S\x03S\x05S\u0415\nS\x03T\x03T\x03U"+
		"\x03U\x03U\x05U\u041C\nU\x03V\x03V\x03V\x02\x02\x02W\x02\x02\x04\x02\x06"+
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02"+
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02"+
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02"+
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02"+
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02"+
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02"+
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02"+
		"\xA8\x02\xAA\x02\x02\x06\x03\x02Q]\x03\x02/0\x03\x02\'(\x03\x02),\u048D"+
		"\x02\xB1\x03\x02\x02\x02\x04\xB7\x03\x02\x02\x02\x06\xBC\x03\x02\x02\x02"+
		"\b\xC5\x03\x02\x02\x02\n\xD1\x03\x02\x02\x02\f\xD5\x03\x02\x02\x02\x0E"+
		"\xDA\x03\x02\x02\x02\x10\xE1\x03\x02\x02\x02\x12\u0128\x03\x02\x02\x02"+
		"\x14\u012A\x03\x02\x02\x02\x16\u0170\x03\x02\x02\x02\x18\u0172\x03\x02"+
		"\x02\x02\x1A\u0182\x03\x02\x02\x02\x1C\u0186\x03\x02\x02\x02\x1E\u0188"+
		"\x03\x02\x02\x02 \u0198\x03\x02\x02\x02\"\u019A\x03\x02\x02\x02$\u01AE"+
		"\x03\x02\x02\x02&\u01BD\x03\x02\x02\x02(\u01BF\x03\x02\x02\x02*\u01C2"+
		"\x03\x02\x02\x02,\u01C9\x03\x02\x02\x02.\u01CB\x03\x02\x02\x020\u01CD"+
		"\x03\x02\x02\x022\u01CF\x03\x02\x02\x024\u01D3\x03\x02\x02\x026\u01D5"+
		"\x03\x02\x02\x028\u01DF\x03\x02\x02\x02:\u01E1\x03\x02\x02\x02<\u01E4"+
		"\x03\x02\x02\x02>\u01FC\x03\x02\x02\x02@\u0201\x03\x02\x02\x02B\u0206"+
		"\x03\x02\x02\x02D\u0211\x03\x02\x02\x02F\u0219\x03\x02\x02\x02H\u0221"+
		"\x03\x02\x02\x02J\u022A\x03\x02\x02\x02L\u0233\x03\x02\x02\x02N\u0241"+
		"\x03\x02\x02\x02P\u0243\x03\x02\x02\x02R\u0254\x03\x02\x02\x02T\u0258"+
		"\x03\x02\x02\x02V\u025E\x03\x02\x02\x02X\u0278\x03\x02\x02\x02Z\u0284"+
		"\x03\x02\x02\x02\\\u0289\x03\x02\x02\x02^\u029B\x03\x02\x02\x02`\u02A6"+
		"\x03\x02\x02\x02b\u02AA\x03\x02\x02\x02d\u02AC\x03\x02\x02\x02f\u02B3"+
		"\x03\x02\x02\x02h\u02BA\x03\x02\x02\x02j\u02C2\x03\x02\x02\x02l\u02CD"+
		"\x03\x02\x02\x02n\u02CF\x03\x02\x02\x02p\u02E5\x03\x02\x02\x02r\u02E8"+
		"\x03\x02\x02\x02t\u02EC\x03\x02\x02\x02v\u02F4\x03\x02\x02\x02x\u02FC"+
		"\x03\x02\x02\x02z\u0304\x03\x02\x02\x02|\u030E\x03\x02\x02\x02~\u0318"+
		"\x03\x02\x02\x02\x80\u032F\x03\x02\x02\x02\x82\u0331\x03\x02\x02\x02\x84"+
		"\u0357\x03\x02\x02\x02\x86\u0359\x03\x02\x02\x02\x88\u0372\x03\x02\x02"+
		"\x02\x8A\u0374\x03\x02\x02\x02\x8C\u038A\x03\x02\x02\x02\x8E\u038C\x03"+
		"\x02\x02\x02\x90\u0390\x03\x02\x02\x02\x92\u039B\x03\x02\x02\x02\x94\u03C7"+
		"\x03\x02\x02\x02\x96\u03C9\x03\x02\x02\x02\x98\u03DA\x03\x02\x02\x02\x9A"+
		"\u03FB\x03\x02\x02\x02\x9C\u03FF\x03\x02\x02\x02\x9E\u0401\x03\x02\x02"+
		"\x02\xA0\u0408\x03\x02\x02\x02\xA2\u040D\x03\x02\x02\x02\xA4\u0414\x03"+
		"\x02\x02\x02\xA6\u0416\x03\x02\x02\x02\xA8\u041B\x03\x02\x02\x02\xAA\u041D"+
		"\x03\x02\x02\x02\xAC\xB2\x07%\x02\x02\xAD\xB2\x05\x1E\x10\x02\xAE\xAF"+
		"\x05N(\x02\xAF\xB0\x07%\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAC\x03\x02"+
		"\x02\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB2\x03\x03\x02"+
		"\x02\x02\xB3\xB6\x07%\x02\x02\xB4\xB6\x05\x1C\x0F\x02\xB5\xB3\x03\x02"+
		"\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02"+
		"\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02"+
		"\x02\x02\xBA\xBB\x07\x02\x02\x03\xBB\x05\x03\x02\x02\x02\xBC\xC0\x05\x92"+
		"J\x02\xBD\xBF\x07%\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02"+
		"\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02"+
		"\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4\x07\x02\x02\x03\xC4\x07\x03\x02\x02"+
		"\x02\xC5\xC6\x07O\x02\x02\xC6\xCC\x05F$\x02\xC7\xC9\x072\x02\x02\xC8\xCA"+
		"\x05\x98M\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB"+
		"\x03\x02\x02\x02\xCB\xCD\x073\x02\x02\xCC\xC7\x03\x02\x02\x02\xCC\xCD"+
		"\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07%\x02\x02\xCF\t\x03"+
		"\x02\x02\x02\xD0\xD2\x05\b\x05\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03"+
		"\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\v\x03"+
		"\x02\x02\x02\xD5\xD8\x05\n\x06\x02\xD6\xD9\x05\x96L\x02\xD7\xD9\x05\x0E"+
		"\b\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\r\x03\x02\x02"+
		"\x02\xDA\xDB\x07\x04\x02\x02\xDB\xDC\x07&\x02\x02\xDC\xDD\x05\x10\t\x02"+
		"\xDD\xDE\x05^0\x02\xDE\xDF\x07\x03\x02\x02\xDF\xE0\x07\x04\x02\x02\xE0"+
		"\x0F\x03\x02\x02\x02\xE1\xE3\x072\x02\x02\xE2\xE4\x05\x12\n\x02\xE3\xE2"+
		"\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6"+
		"\x073\x02\x02\xE6\x11\x03\x02\x02\x02\xE7\xEA\x05\x14\v\x02\xE8\xE9\x07"+
		"8\x02\x02\xE9\xEB\x05`1\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02"+
		"\x02\xEB\xF4\x03\x02\x02\x02\xEC\xED\x074\x02\x02\xED\xF0\x05\x14\v\x02"+
		"\xEE\xEF\x078\x02\x02\xEF\xF1\x05`1\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1"+
		"\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xEC\x03\x02\x02\x02\xF3\xF6"+
		"\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\u0110"+
		"\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\u010E\x074\x02\x02\xF8\xFA"+
		"\x071\x02\x02\xF9\xFB\x05\x14\v\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03"+
		"\x02\x02\x02\xFB\u0104\x03\x02\x02\x02\xFC\xFD\x074\x02\x02\xFD\u0100"+
		"\x05\x14\v\x02\xFE\xFF\x078\x02\x02\xFF\u0101\x05`1\x02\u0100\xFE\x03"+
		"\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102"+
		"\xFC\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02"+
		"\x02\u0104\u0105\x03\x02\x02\x02\u0105\u010A\x03\x02\x02\x02\u0106\u0104"+
		"\x03\x02\x02\x02\u0107\u0108\x074\x02\x02\u0108\u0109\x077\x02\x02\u0109"+
		"\u010B\x05\x14\v\x02\u010A\u0107\x03\x02\x02\x02\u010A\u010B\x03\x02\x02"+
		"\x02\u010B\u010F\x03\x02\x02\x02\u010C\u010D\x077\x02\x02\u010D\u010F"+
		"\x05\x14\v\x02\u010E\xF8\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E"+
		"\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110\xF7\x03\x02\x02"+
		"\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0129\x03\x02\x02\x02\u0112\u0114"+
		"\x071\x02\x02\u0113\u0115\x05\x14\v\x02\u0114\u0113\x03\x02\x02\x02\u0114"+
		"\u0115\x03\x02\x02\x02\u0115\u011E\x03\x02\x02\x02\u0116\u0117\x074\x02"+
		"\x02\u0117\u011A\x05\x14\v\x02\u0118\u0119\x078\x02\x02\u0119\u011B\x05"+
		"`1\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011D"+
		"\x03\x02\x02\x02\u011C\u0116\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02"+
		"\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0124\x03"+
		"\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x074\x02\x02\u0122"+
		"\u0123\x077\x02\x02\u0123\u0125\x05\x14\v\x02\u0124\u0121\x03\x02\x02"+
		"\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0129\x03\x02\x02\x02\u0126\u0127"+
		"\x077\x02\x02\u0127\u0129\x05\x14\v\x02\u0128\xE7\x03\x02\x02\x02\u0128"+
		"\u0112\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\x13\x03\x02\x02"+
		"\x02\u012A\u012D\x07&\x02\x02\u012B\u012C\x075\x02\x02\u012C\u012E\x05"+
		"`1\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\x15"+
		"\x03\x02\x02\x02\u012F\u0132\x05\x18\r\x02\u0130\u0131\x078\x02\x02\u0131"+
		"\u0133\x05`1\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02"+
		"\u0133\u013C\x03\x02\x02\x02\u0134\u0135\x074\x02\x02\u0135\u0138\x05"+
		"\x18\r\x02\u0136\u0137\x078\x02\x02\u0137\u0139\x05`1\x02\u0138\u0136"+
		"\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02"+
		"\u013A\u0134\x03\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03"+
		"\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0158\x03\x02\x02\x02\u013E"+
		"\u013C\x03\x02\x02\x02\u013F\u0156\x074\x02\x02\u0140\u0142\x071\x02\x02"+
		"\u0141\u0143\x05\x18\r\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03"+
		"\x02\x02\x02\u0143\u014C\x03\x02\x02\x02\u0144\u0145\x074\x02\x02\u0145"+
		"\u0148\x05\x18\r\x02\u0146\u0147\x078\x02\x02\u0147\u0149\x05`1\x02\u0148"+
		"\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02"+
		"\x02\x02\u014A\u0144\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C"+
		"\u014A\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0152\x03\x02"+
		"\x02\x02\u014E\u014C\x03\x02\x02\x02\u014F\u0150\x074\x02\x02\u0150\u0151"+
		"\x077\x02\x02\u0151\u0153\x05\x18\r\x02\u0152\u014F\x03\x02\x02\x02\u0152"+
		"\u0153\x03\x02\x02\x02\u0153\u0157\x03\x02\x02\x02\u0154\u0155\x077\x02"+
		"\x02\u0155\u0157\x05\x18\r\x02\u0156\u0140\x03\x02\x02\x02\u0156\u0154"+
		"\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02"+
		"\u0158\u013F\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0171\x03"+
		"\x02\x02\x02\u015A\u015C\x071\x02\x02\u015B\u015D\x05\x18\r\x02\u015C"+
		"\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0166\x03\x02"+
		"\x02\x02\u015E\u015F\x074\x02\x02\u015F\u0162\x05\x18\r\x02\u0160\u0161"+
		"\x078\x02\x02\u0161\u0163\x05`1\x02\u0162\u0160\x03\x02\x02\x02\u0162"+
		"\u0163\x03\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u015E\x03\x02"+
		"\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166"+
		"\u0167\x03\x02\x02\x02\u0167\u016C\x03\x02\x02\x02\u0168\u0166\x03\x02"+
		"\x02\x02\u0169\u016A\x074\x02\x02\u016A\u016B\x077\x02\x02\u016B\u016D"+
		"\x05\x18\r\x02\u016C\u0169\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02"+
		"\u016D\u0171\x03\x02\x02\x02\u016E\u016F\x077\x02\x02\u016F\u0171\x05"+
		"\x18\r\x02\u0170\u012F\x03\x02\x02\x02\u0170\u015A\x03\x02\x02\x02\u0170"+
		"\u016E\x03\x02\x02\x02\u0171\x17\x03\x02\x02\x02\u0172\u0173\x07&\x02"+
		"\x02\u0173\x19\x03\x02\x02\x02\u0174\u0176\x07F\x02\x02\u0175\u0177\x05"+
		"\x1E\x10\x02\u0176\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178"+
		"\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x03\x02"+
		"\x02\x02\u017A\u017B\x07G\x02\x02\u017B\u0183\x03\x02\x02\x02\u017C\u017D"+
		"\x07%\x02\x02\u017D\u017E\x07`\x02\x02\u017E\u017F\x05\x1E\x10\x02\u017F"+
		"\u0180\x07%\x02\x02\u0180\u0181\x07a\x02\x02\u0181\u0183\x03\x02\x02\x02"+
		"\u0182\u0174\x03\x02\x02\x02\u0182\u017C\x03\x02\x02\x02\u0183\x1B\x03"+
		"\x02\x02\x02\u0184\u0187\x05\x1E\x10\x02\u0185\u0187\x05N(\x02\u0186\u0184"+
		"\x03\x02\x02\x02\u0186\u0185\x03\x02\x02\x02\u0187\x1D\x03\x02\x02\x02"+
		"\u0188\u018D\x05 \x11\x02\u0189\u018A\x076\x02\x02\u018A\u018C\x05 \x11"+
		"\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B"+
		"\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\x1F\x03\x02\x02\x02"+
		"\u018F\u018D\x03\x02\x02\x02\u0190\u0199\x05\"\x12\x02\u0191\u0199\x05"+
		"(\x15\x02\u0192\u0199\x05*\x16\x02\u0193\u0199\x05,\x17\x02\u0194\u0199"+
		"\x058\x1D\x02\u0195\u0199\x05H%\x02\u0196\u0199\x05J&\x02\u0197\u0199"+
		"\x05L\'\x02\u0198\u0190\x03\x02\x02\x02\u0198\u0191\x03\x02\x02\x02\u0198"+
		"\u0192\x03\x02\x02\x02\u0198\u0193\x03\x02\x02\x02\u0198\u0194\x03\x02"+
		"\x02\x02\u0198\u0195\x03\x02\x02\x02\u0198\u0196\x03\x02\x02\x02\u0198"+
		"\u0197\x03\x02\x02\x02\u0199!\x03\x02\x02\x02\u019A\u01AA\x05$\x13\x02"+
		"\u019B\u019E\x05&\x14\x02\u019C\u019F\x05\xA2R\x02\u019D\u019F\x05\x92"+
		"J\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F\u01AB"+
		"\x03\x02\x02\x02\u01A0\u01A3\x078\x02\x02\u01A1\u01A4\x05\xA2R\x02\u01A2"+
		"\u01A4\x05$\x13\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A2\x03\x02\x02"+
		"\x02\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A0\x03\x02\x02\x02\u01A6\u01A9"+
		"\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02"+
		"\u01A8\u01AB\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u019B\x03"+
		"\x02\x02\x02\u01AA\u01A7\x03\x02\x02\x02\u01AB#\x03\x02\x02\x02\u01AC"+
		"\u01AF\x05`1\x02\u01AD\u01AF\x05r:\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE"+
		"\u01AD\x03\x02\x02\x02\u01AF\u01B7\x03\x02\x02\x02\u01B0\u01B3\x074\x02"+
		"\x02\u01B1\u01B4\x05`1\x02\u01B2\u01B4\x05r:\x02\u01B3\u01B1\x03\x02\x02"+
		"\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B0"+
		"\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02"+
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BB\x03\x02\x02\x02\u01B9\u01B7\x03"+
		"\x02\x02\x02\u01BA\u01BC\x074";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC"+
		"%\x03\x02\x02\x02\u01BD\u01BE\t\x02\x02\x02\u01BE\'\x03\x02\x02\x02\u01BF"+
		"\u01C0\x07!\x02\x02\u01C0\u01C1\x05\x90I\x02\u01C1)\x03\x02\x02\x02\u01C2"+
		"\u01C3\x07\"\x02\x02\u01C3+\x03\x02\x02\x02\u01C4\u01CA\x05.\x18\x02\u01C5"+
		"\u01CA\x050\x19\x02\u01C6\u01CA\x052\x1A\x02\u01C7\u01CA\x056\x1C\x02"+
		"\u01C8\u01CA\x054\x1B\x02\u01C9\u01C4\x03\x02\x02\x02\u01C9\u01C5\x03"+
		"\x02\x02\x02\u01C9\u01C6\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9"+
		"\u01C8\x03\x02\x02\x02\u01CA-\x03\x02\x02\x02\u01CB\u01CC\x07$\x02\x02"+
		"\u01CC/\x03\x02\x02\x02\u01CD\u01CE\x07#\x02\x02\u01CE1\x03\x02\x02\x02"+
		"\u01CF\u01D1\x07\x05\x02\x02\u01D0\u01D2\x05\x92J\x02\u01D1\u01D0\x03"+
		"\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D23\x03\x02\x02\x02\u01D3"+
		"\u01D4\x05\xA2R\x02\u01D45\x03\x02\x02\x02\u01D5\u01DB\x07\x06\x02\x02"+
		"\u01D6\u01D9\x05`1\x02\u01D7\u01D8\x07\x07\x02\x02\u01D8\u01DA\x05`1\x02"+
		"\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03"+
		"\x02\x02\x02\u01DB\u01D6\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC"+
		"7\x03\x02\x02\x02\u01DD\u01E0\x05:\x1E\x02\u01DE\u01E0\x05<\x1F\x02\u01DF"+
		"\u01DD\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E09\x03\x02\x02"+
		"\x02\u01E1\u01E2\x07\b\x02\x02\u01E2\u01E3\x05D#\x02\u01E3;\x03\x02\x02"+
		"\x02\u01E4\u01F1\x07\x07\x02\x02\u01E5\u01E7\t\x03\x02\x02\u01E6\u01E5"+
		"\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02"+
		"\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E8\x03"+
		"\x02\x02\x02\u01EB\u01F2\x05F$\x02\u01EC\u01EE\t\x03\x02\x02\u01ED\u01EC"+
		"\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02"+
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01E8\x03"+
		"\x02\x02\x02\u01F1\u01ED\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3"+
		"\u01FA\x07\b\x02\x02\u01F4\u01FB\x071\x02\x02\u01F5\u01F6\x072\x02\x02"+
		"\u01F6\u01F7\x05B\"\x02\u01F7\u01F8\x073\x02\x02\u01F8\u01FB\x03\x02\x02"+
		"\x02\u01F9\u01FB\x05B\"\x02\u01FA\u01F4\x03\x02\x02\x02\u01FA\u01F5\x03"+
		"\x02\x02\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB=\x03\x02\x02\x02\u01FC"+
		"\u01FF\x07&\x02\x02\u01FD\u01FE\x07\t\x02\x02\u01FE\u0200\x07&\x02\x02"+
		"\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200?\x03\x02"+
		"\x02\x02\u0201\u0204\x05F$\x02\u0202\u0203\x07\t\x02\x02\u0203\u0205\x07"+
		"&\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205"+
		"A\x03\x02\x02\x02\u0206\u020B\x05> \x02\u0207\u0208\x07/\x02\x02\u0208"+
		"\u020A\x05> \x02\u0209\u0207\x03\x02\x02\x02\u020A\u020D\x03\x02\x02\x02"+
		"\u020B\u0209\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020F\x03"+
		"\x02\x02\x02\u020D\u020B\x03\x02\x02\x02\u020E\u0210\x07/\x02\x02\u020F"+
		"\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210C\x03\x02\x02"+
		"\x02\u0211\u0216\x05@!\x02\u0212\u0213\x07/\x02\x02\u0213\u0215\x05@!"+
		"\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214"+
		"\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217E\x03\x02\x02\x02\u0218"+
		"\u0216\x03\x02\x02\x02\u0219\u021E\x07&\x02\x02\u021A\u021B\x07/\x02\x02"+
		"\u021B\u021D\x07&\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0220\x03"+
		"\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F"+
		"G\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0222\x07\n\x02\x02"+
		"\u0222\u0227\x07&\x02\x02\u0223\u0224\x074\x02\x02\u0224\u0226\x07&\x02"+
		"\x02\u0225\u0223\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u0225"+
		"\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228I\x03\x02\x02\x02\u0229"+
		"\u0227\x03\x02\x02\x02\u022A\u022B\x07\v\x02\x02\u022B\u0230\x07&\x02"+
		"\x02\u022C\u022D\x074\x02\x02\u022D\u022F\x07&\x02\x02\u022E\u022C\x03"+
		"\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230"+
		"\u0231\x03\x02\x02\x02\u0231K\x03\x02\x02\x02\u0232\u0230\x03\x02\x02"+
		"\x02\u0233\u0234\x07\f\x02\x02\u0234\u0237\x05`1\x02\u0235\u0236\x074"+
		"\x02\x02\u0236\u0238\x05`1\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238"+
		"\x03\x02\x02\x02\u0238M\x03\x02\x02\x02\u0239\u0242\x05P)\x02\u023A\u0242"+
		"\x05R*\x02\u023B\u0242\x05T+\x02\u023C\u0242\x05V,\x02\u023D\u0242\x05"+
		"X-\x02\u023E\u0242\x05\x0E\b\x02\u023F\u0242\x05\x96L\x02\u0240\u0242"+
		"\x05\f\x07\x02\u0241\u0239\x03\x02\x02\x02\u0241\u023A\x03\x02\x02\x02"+
		"\u0241\u023B\x03\x02\x02\x02\u0241\u023C\x03\x02\x02\x02\u0241\u023D\x03"+
		"\x02\x02\x02\u0241\u023E\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02\u0241"+
		"\u0240\x03\x02\x02\x02\u0242O\x03\x02\x02\x02\u0243\u0244\x07\r\x02\x02"+
		"\u0244\u0245\x05`1\x02\u0245\u024D\x05\x1A\x0E\x02\u0246\u0247\x07\x0F"+
		"\x02\x02\u0247\u0248\x07\r\x02\x02\u0248\u0249\x05`1\x02\u0249\u024A\x05"+
		"\x1A\x0E\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0246\x03\x02\x02\x02\u024C"+
		"\u024F\x03\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024E\x03\x02"+
		"\x02\x02\u024E\u0252\x03\x02\x02\x02\u024F\u024D\x03\x02\x02\x02\u0250"+
		"\u0251\x07\x0F\x02\x02\u0251\u0253\x05\x1A\x0E\x02\u0252\u0250\x03\x02"+
		"\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253Q\x03\x02\x02\x02\u0254\u0255"+
		"\x07\x10\x02\x02\u0255\u0256\x05`1\x02\u0256\u0257\x05\x1A\x0E\x02\u0257"+
		"S\x03\x02\x02\x02\u0258\u0259\x07\x11\x02\x02\u0259\u025A\x05\x90I\x02"+
		"\u025A\u025B\x07\x12\x02\x02\u025B\u025C\x05\x92J\x02\u025C\u025D\x05"+
		"\x1A\x0E\x02\u025DU\x03\x02\x02\x02\u025E\u025F\x07\x13\x02\x02\u025F"+
		"\u0260\x075\x02\x02\u0260\u0276\x05^0\x02\u0261\u0262\x05\\/\x02\u0262"+
		"\u0263\x075\x02\x02\u0263\u0264\x05^0\x02\u0264\u0266\x03\x02\x02\x02"+
		"\u0265\u0261\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0265\x03"+
		"\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026C\x03\x02\x02\x02\u0269"+
		"\u026A\x07\x0F\x02\x02\u026A\u026B\x075\x02\x02\u026B\u026D\x05^0\x02"+
		"\u026C\u0269\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u0271\x03"+
		"\x02\x02\x02\u026E\u026F\x07\x14\x02\x02\u026F\u0270\x075\x02\x02\u0270"+
		"\u0272\x05^0\x02\u0271\u026E\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02"+
		"\u0272\u0277\x03\x02\x02\x02\u0273\u0274\x07\x14\x02\x02\u0274\u0275\x07"+
		"5\x02\x02\u0275\u0277\x05^0\x02\u0276\u0265\x03\x02\x02\x02\u0276\u0273"+
		"\x03\x02\x02\x02\u0277W\x03\x02\x02\x02\u0278\u0279\x07\x15\x02\x02\u0279"+
		"\u027E\x05Z.\x02\u027A\u027B\x074\x02\x02\u027B\u027D\x05Z.\x02\u027C"+
		"\u027A\x03\x02\x02\x02\u027D\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02"+
		"\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280"+
		"\u027E\x03\x02\x02\x02\u0281\u0282\x075\x02\x02\u0282\u0283\x05^0\x02"+
		"\u0283Y\x03\x02\x02\x02\u0284\u0287\x05`1\x02\u0285\u0286\x07\t\x02\x02"+
		"\u0286\u0288\x05t;\x02\u0287\u0285\x03\x02\x02\x02\u0287\u0288\x03\x02"+
		"\x02\x02\u0288[\x03\x02\x02\x02\u0289\u028F\x07\x16\x02\x02\u028A\u028D"+
		"\x05`1\x02\u028B\u028C\x07\t\x02\x02\u028C\u028E\x07&\x02\x02\u028D\u028B"+
		"\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u0290\x03\x02\x02\x02"+
		"\u028F\u028A\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290]\x03\x02"+
		"\x02\x02\u0291\u029C\x05\x1E\x10\x02\u0292\u0293\x07%\x02\x02\u0293\u0295"+
		"\x07`\x02\x02\u0294\u0296\x05\x1C\x0F\x02\u0295\u0294\x03\x02\x02\x02"+
		"\u0296\u0297\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297\u0298\x03"+
		"\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029A\x07a\x02\x02\u029A"+
		"\u029C\x03\x02\x02\x02\u029B\u0291\x03\x02\x02\x02\u029B\u0292\x03\x02"+
		"\x02\x02\u029C_\x03\x02\x02\x02\u029D\u02A3\x05h5\x02\u029E\u029F\x07"+
		"\r\x02\x02\u029F\u02A0\x05h5\x02\u02A0\u02A1\x07\x0F\x02\x02\u02A1\u02A2"+
		"\x05`1\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3\u029E\x03\x02\x02\x02\u02A3"+
		"\u02A4\x03\x02\x02\x02\u02A4\u02A7\x03\x02\x02\x02\u02A5\u02A7\x05d3\x02"+
		"\u02A6\u029D\x03\x02\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7a\x03\x02"+
		"\x02\x02\u02A8\u02AB\x05h5\x02\u02A9\u02AB\x05f4\x02\u02AA\u02A8\x03\x02"+
		"\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02ABc\x03\x02\x02\x02\u02AC\u02AE"+
		"\x07\x17\x02\x02\u02AD\u02AF\x05\x16\f\x02\u02AE\u02AD\x03\x02\x02\x02"+
		"\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B1\x07"+
		"5\x02\x02\u02B1\u02B2\x05`1\x02\u02B2e\x03\x02\x02\x02\u02B3\u02B5\x07"+
		"\x17\x02\x02\u02B4\u02B6\x05\x16\f\x02\u02B5\u02B4\x03\x02\x02\x02\u02B5"+
		"\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x075\x02"+
		"\x02\u02B8\u02B9\x05b2\x02\u02B9g\x03\x02\x02\x02\u02BA\u02BF\x05j6\x02"+
		"\u02BB\u02BC\x07\x18\x02\x02\u02BC\u02BE\x05j6\x02\u02BD\u02BB\x03\x02"+
		"\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02BF"+
		"\u02C0\x03\x02\x02\x02\u02C0i\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02"+
		"\x02\u02C2\u02C7\x05l7\x02\u02C3\u02C4\x07\x19\x02\x02\u02C4\u02C6\x05"+
		"l7\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5"+
		"\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8k\x03\x02\x02\x02\u02C9"+
		"\u02C7\x03\x02\x02\x02\u02CA\u02CB\x07\x1A\x02\x02\u02CB\u02CE\x05l7\x02"+
		"\u02CC\u02CE\x05n8\x02\u02CD\u02CA\x03\x02\x02\x02\u02CD\u02CC\x03\x02"+
		"\x02\x02\u02CEm\x03\x02\x02\x02\u02CF\u02D5\x05r:\x02\u02D0\u02D1\x05"+
		"p9\x02\u02D1\u02D2\x05r:\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3\u02D0\x03"+
		"\x02\x02\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5"+
		"\u02D6\x03\x02\x02\x02\u02D6o\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02"+
		"\x02\u02D8\u02E6\x07H\x02\x02\u02D9\u02E6\x07I\x02\x02\u02DA\u02E6\x07"+
		"J\x02\x02\u02DB\u02E6\x07K\x02\x02\u02DC\u02E6\x07L\x02\x02\u02DD\u02E6"+
		"\x07M\x02\x02\u02DE\u02E6\x07N\x02\x02\u02DF\u02E6\x07\x12\x02\x02\u02E0"+
		"\u02E1\x07\x1A\x02\x02\u02E1\u02E6\x07\x12\x02\x02\u02E2\u02E6\x07\x1B"+
		"\x02\x02\u02E3\u02E4\x07\x1B\x02\x02\u02E4\u02E6\x07\x1A\x02\x02\u02E5"+
		"\u02D8\x03\x02\x02\x02\u02E5\u02D9\x03\x02\x02\x02\u02E5\u02DA\x03\x02"+
		"\x02\x02\u02E5\u02DB\x03\x02\x02\x02\u02E5\u02DC\x03\x02\x02\x02\u02E5"+
		"\u02DD\x03\x02\x02\x02\u02E5\u02DE\x03\x02\x02\x02\u02E5\u02DF\x03\x02"+
		"\x02\x02\u02E5\u02E0\x03\x02\x02\x02\u02E5\u02E2\x03\x02\x02\x02\u02E5"+
		"\u02E3\x03\x02\x02\x02\u02E6q\x03\x02\x02\x02\u02E7\u02E9\x071\x02\x02"+
		"\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9\u02EA\x03"+
		"\x02\x02\x02\u02EA\u02EB\x05t;\x02\u02EBs\x03\x02\x02\x02\u02EC\u02F1"+
		"\x05v<\x02\u02ED\u02EE\x07;\x02\x02\u02EE\u02F0\x05v<\x02\u02EF\u02ED"+
		"\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02"+
		"\u02F1\u02F2\x03\x02\x02\x02\u02F2u\x03\x02\x02\x02\u02F3\u02F1\x03\x02"+
		"\x02\x02\u02F4\u02F9\x05x=\x02\u02F5\u02F6\x07<\x02\x02\u02F6\u02F8\x05"+
		"x=\x02\u02F7\u02F5\x03\x02\x02\x02\u02F8\u02FB\x03\x02\x02\x02\u02F9\u02F7"+
		"\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FAw\x03\x02\x02\x02\u02FB"+
		"\u02F9\x03\x02\x02\x02\u02FC\u0301\x05z>\x02\u02FD\u02FE\x07=\x02\x02"+
		"\u02FE\u0300\x05z>\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0303\x03\x02"+
		"\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302"+
		"y\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0304\u030B\x05|?\x02\u0305"+
		"\u0306\x07>\x02\x02\u0306\u030A\x05|?\x02\u0307\u0308\x07?\x02\x02\u0308"+
		"\u030A\x05|?\x02\u0309\u0305\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02"+
		"\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C\x03"+
		"\x02\x02\x02\u030C{\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02\u030E"+
		"\u0315\x05~@\x02\u030F\u0310\x07@\x02\x02\u0310\u0314\x05~@\x02\u0311"+
		"\u0312\x07A\x02\x02\u0312\u0314\x05~@\x02\u0313\u030F\x03\x02\x02\x02"+
		"\u0313\u0311\x03\x02\x02\x02\u0314\u0317\x03\x02\x02\x02\u0315\u0313\x03"+
		"\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316}\x03\x02\x02\x02\u0317"+
		"\u0315\x03\x02\x02\x02\u0318\u0325\x05\x80A\x02\u0319\u031A\x071\x02\x02"+
		"\u031A\u0324\x05\x80A\x02\u031B\u031C\x07B\x02\x02\u031C\u0324\x05\x80"+
		"A\x02\u031D\u031E\x07C\x02\x02\u031E\u0324\x05\x80A\x02\u031F\u0320\x07"+
		"D\x02\x02\u0320\u0324\x05\x80A\x02\u0321\u0322\x07O\x02\x02\u0322\u0324"+
		"\x05\x80A\x02\u0323\u0319\x03\x02\x02\x02\u0323\u031B\x03\x02\x02\x02"+
		"\u0323\u031D\x03\x02\x02\x02\u0323\u031F\x03\x02\x02\x02\u0323\u0321\x03"+
		"\x02\x02\x02\u0324\u0327\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0325"+
		"\u0326\x03\x02\x02\x02\u0326\x7F\x03\x02\x02\x02\u0327\u0325\x03\x02\x02"+
		"\x02\u0328\u0329\x07@\x02\x02\u0329\u0330\x05\x80A\x02\u032A\u032B\x07"+
		"A\x02\x02\u032B\u0330\x05\x80A\x02\u032C\u032D\x07E\x02\x02\u032D\u0330"+
		"\x05\x80A\x02\u032E\u0330\x05\x82B\x02\u032F\u0328\x03\x02\x02\x02\u032F"+
		"\u032A\x03\x02\x02\x02\u032F\u032C\x03\x02\x02\x02\u032F\u032E\x03\x02"+
		"\x02\x02\u0330\x81\x03\x02\x02\x02\u0331\u0335\x05\x84C\x02\u0332\u0334"+
		"\x05\x88E\x02\u0333\u0332\x03\x02\x02\x02\u0334\u0337\x03\x02\x02\x02"+
		"\u0335\u0333\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u033A\x03"+
		"\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0338\u0339\x077\x02\x02\u0339"+
		"\u033B\x05\x80A\x02\u033A\u0338\x03\x02\x02\x02\u033A\u033B\x03\x02\x02"+
		"\x02\u033B\x83\x03\x02\x02\x02\u033C\u033F\x072\x02\x02\u033D\u0340\x05"+
		"\xA2R\x02\u033E\u0340\x05\x86D\x02\u033F\u033D\x03\x02\x02\x02\u033F\u033E"+
		"\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02"+
		"\u0341\u0358\x073\x02\x02\u0342\u0344\x079\x02\x02\u0343\u0345\x05\x86"+
		"D\x02\u0344\u0343\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0346"+
		"\x03\x02\x02\x02\u0346\u0358\x07:\x02\x02\u0347\u0349\x07F\x02\x02\u0348"+
		"\u034A\x05\x94K\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A\x03\x02\x02"+
		"\x02\u034A\u034B\x03\x02\x02\x02\u034B\u0358\x07G\x02\x02\u034C\u0358"+
		"\x07&\x02\x02\u034D\u0358\x05\xA8U\x02\u034E\u0350\x05\xA6T\x02\u034F"+
		"\u034E\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351\u034F\x03\x02"+
		"\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0358\x03\x02\x02\x02\u0353"+
		"\u0358\x070\x02\x02\u0354\u0358\x07\x1C\x02\x02\u0355\u0358\x07\x1D\x02"+
		"\x02\u0356\u0358\x07\x1E\x02\x02\u0357\u033C\x03\x02\x02\x02\u0357\u0342"+
		"\x03\x02\x02\x02\u0357\u0347\x03\x02\x02\x02\u0357\u034C\x03\x02\x02\x02"+
		"\u0357\u034D\x03\x02\x02\x02\u0357\u034F\x03\x02\x02\x02\u0357\u0353\x03"+
		"\x02\x02\x02\u0357\u0354\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357"+
		"\u0356\x03\x02\x02\x02\u0358\x85\x03\x02\x02\x02\u0359\u0365\x05`1\x02"+
		"\u035A\u0366\x05\x9EP\x02\u035B\u035C\x074\x02\x02\u035C\u035E\x05`1\x02"+
		"\u035D\u035B\x03\x02\x02\x02\u035E\u0361\x03\x02\x02\x02\u035F\u035D\x03"+
		"\x02\x02\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361"+
		"\u035F\x03\x02\x02\x02\u0362\u0364\x074\x02\x02\u0363\u0362\x03\x02\x02"+
		"\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0366\x03\x02\x02\x02\u0365\u035A"+
		"\x03\x02\x02\x02\u0365\u035F\x03\x02\x02\x02\u0366\x87\x03\x02\x02\x02"+
		"\u0367\u0369\x072\x02\x02\u0368\u036A\x05\x98M\x02\u0369\u0368\x03\x02"+
		"\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B"+
		"\u0373\x073\x02\x02\u036C\u036D\x079\x02\x02\u036D\u036E\x05\x8AF\x02"+
		"\u036E\u036F\x07:\x02\x02\u036F\u0373\x03\x02\x02\x02\u0370\u0371\x07"+
		"/\x02\x02\u0371\u0373\x07&\x02\x02\u0372\u0367\x03\x02\x02\x02\u0372\u036C"+
		"\x03\x02\x02\x02\u0372\u0370\x03\x02\x02\x02\u0373\x89\x03\x02\x02\x02"+
		"\u0374\u0379\x05\x8CG\x02\u0375\u0376\x074\x02\x02\u0376\u0378\x05\x8C"+
		"G\x02\u0377\u0375\x03\x02\x02\x02\u0378\u037B\x03\x02\x02\x02\u0379\u0377"+
		"\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02"+
		"\u037B\u0379\x03\x02\x02\x02\u037C\u037E\x074\x02\x02\u037D\u037C\x03"+
		"\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E\x8B\x03\x02\x02\x02\u037F"+
		"\u038B\x05`1\x02\u0380\u0382\x05`1\x02\u0381\u0380\x03\x02\x02\x02\u0381"+
		"\u0382\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0385\x075\x02"+
		"\x02\u0384\u0386\x05`1\x02\u0385\u0384\x03\x02\x02\x02\u0385\u0386\x03"+
		"\x02\x02\x02\u0386\u0388\x03\x02\x02\x02\u0387\u0389\x05\x8EH\x02\u0388"+
		"\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038B\x03\x02"+
		"\x02\x02\u038A\u037F\x03\x02\x02\x02\u038A\u0381\x03\x02\x02\x02\u038B"+
		"\x8D\x03\x02\x02\x02\u038C\u038E\x075\x02\x02\u038D\u038F\x05`1\x02\u038E"+
		"\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\x8F\x03\x02\x02"+
		"\x02\u0390\u0395\x05r:\x02\u0391\u0392\x074\x02\x02\u0392\u0394\x05r:"+
		"\x02\u0393\u0391\x03\x02\x02\x02\u0394\u0397\x03\x02\x02\x02\u0395\u0393"+
		"\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0399\x03\x02\x02\x02"+
		"\u0397\u0395\x03\x02\x02\x02\u0398\u039A\x074\x02\x02\u0399\u0398\x03"+
		"\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A\x91\x03\x02\x02\x02\u039B"+
		"\u03A0\x05`1\x02\u039C\u039D\x074\x02\x02\u039D\u039F\x05`1\x02\u039E"+
		"\u039C\x03\x02\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02"+
		"\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A4\x03\x02\x02\x02\u03A2"+
		"\u03A0\x03\x02\x02\x02\u03A3\u03A5\x074\x02\x02\u03A4\u03A3\x03\x02\x02"+
		"\x02\u03A4\u03A5\x03\x02\x02\x02\u03A5\x93\x03\x02\x02\x02\u03A6\u03A7"+
		"\x05`1\x02\u03A7\u03A8\x075\x02\x02\u03A8\u03B7\x05`1\x02\u03A9\u03B8"+
		"\x05\x9EP\x02\u03AA\u03AB\x074\x02\x02\u03AB\u03AC\x05`1\x02\u03AC\u03AD"+
		"\x075\x02\x02\u03AD\u03AE\x05`1\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF"+
		"\u03AA\x03\x02\x02\x02\u03B0\u03B3\x03\x02\x02\x02\u03B1\u03AF\x03\x02"+
		"\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3"+
		"\u03B1\x03\x02\x02\x02\u03B4\u03B6\x074\x02\x02\u03B5\u03B4\x03\x02\x02"+
		"\x02\u03B5\u03B6\x03\x02\x02\x02\u03B6\u03B8\x03\x02\x02\x02\u03B7\u03A9"+
		"\x03\x02\x02\x02\u03B7\u03B1\x03\x02\x02\x02\u03B8\u03C8\x03\x02\x02\x02"+
		"\u03B9\u03C5\x05`1\x02\u03BA\u03C6\x05\x9EP\x02\u03BB\u03BC\x074\x02\x02"+
		"\u03BC\u03BE\x05`1\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03C1\x03\x02"+
		"\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0"+
		"\u03C3\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C4\x074\x02"+
		"\x02\u03C3\u03C2\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C6"+
		"\x03\x02\x02\x02\u03C5\u03BA\x03\x02\x02\x02\u03C5\u03BF\x03\x02\x02\x02"+
		"\u03C6\u03C8\x03\x02\x02\x02\u03C7\u03A6\x03\x02\x02\x02\u03C7\u03B9\x03"+
		"\x02\x02\x02\u03C8\x95\x03\x02\x02\x02\u03C9\u03CA\x07\x1F\x02\x02\u03CA"+
		"\u03D0\x07&\x02\x02\u03CB\u03CD\x072\x02\x02\u03CC\u03CE\x05\x98M\x02"+
		"\u03CD\u03CC\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03"+
		"\x02\x02\x02\u03CF\u03D1\x073\x02\x02\u03D0\u03CB\x03\x02\x02\x02\u03D0"+
		"\u03D1\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\u03D3\x075\x02"+
		"\x02\u03D3\u03D4\x05^0\x02\u03D4\x97\x03\x02\x02\x02\u03D5\u03D6\x05\x9A"+
		"N\x02\u03D6\u03D7\x074\x02\x02\u03D7\u03D9\x03\x02\x02\x02\u03D8\u03D5"+
		"\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02"+
		"\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03F1\x03\x02\x02\x02\u03DC\u03DA\x03"+
		"\x02\x02\x02\u03DD\u03DF\x05\x9AN\x02\u03DE\u03E0\x074\x02\x02\u03DF\u03DE"+
		"\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03F2\x03\x02\x02\x02"+
		"\u03E1\u03E2\x071\x02\x02\u03E2\u03E7\x05`1\x02\u03E3\u03E4\x074\x02\x02"+
		"\u03E4\u03E6\x05\x9AN\x02\u03E5\u03E3\x03\x02\x02\x02\u03E6\u03E9\x03"+
		"\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8"+
		"\u03ED\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02\u03EA\u03EB\x074\x02"+
		"\x02\u03EB\u03EC\x077\x02\x02\u03EC\u03EE\x05`1\x02\u03ED\u03EA\x03\x02"+
		"\x02\x02\u03ED\u03EE\x03\x02\x02\x02\u03EE\u03F2\x03\x02\x02\x02\u03EF"+
		"\u03F0\x077\x02\x02\u03F0\u03F2\x05`1\x02\u03F1\u03DD\x03\x02\x02\x02"+
		"\u03F1\u03E1\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2\x99\x03"+
		"\x02\x02\x02\u03F3\u03F5\x05`1\x02\u03F4\u03F6\x05\x9EP\x02\u03F5\u03F4"+
		"\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u03FC\x03\x02\x02\x02"+
		"\u03F7\u03F8\x05`1\x02\u03F8\u03F9\x078\x02\x02\u03F9\u03FA\x05`1\x02"+
		"\u03FA\u03FC\x03\x02\x02\x02\u03FB\u03F3\x03\x02\x02\x02\u03FB\u03F7\x03"+
		"\x02\x02\x02\u03FC\x9B\x03\x02\x02\x02\u03FD\u0400\x05\x9EP\x02\u03FE"+
		"\u0400\x05\xA0Q\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u03FE\x03\x02\x02"+
		"\x02\u0400\x9D\x03\x02\x02\x02\u0401\u0402\x07\x11\x02\x02\u0402\u0403"+
		"\x05\x90I\x02\u0403\u0404\x07\x12\x02\x02\u0404\u0406\x05h5\x02\u0405"+
		"\u0407\x05\x9CO\x02\u0406\u0405\x03\x02\x02\x02\u0406\u0407\x03\x02\x02"+
		"\x02\u0407\x9F\x03\x02\x02\x02\u0408\u0409\x07\r\x02\x02\u0409\u040B\x05"+
		"b2\x02\u040A\u040C\x05\x9CO\x02\u040B\u040A\x03\x02\x02\x02\u040B\u040C"+
		"\x03\x02\x02\x02\u040C\xA1\x03\x02\x02\x02\u040D\u040F\x07 \x02\x02\u040E"+
		"\u0410\x05\xA4S\x02\u040F\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02"+
		"\x02\u0410\xA3\x03\x02\x02\x02\u0411\u0412\x07\x07\x02\x02\u0412\u0415"+
		"\x05`1\x02\u0413\u0415\x05\x92J\x02\u0414\u0411\x03\x02\x02\x02\u0414"+
		"\u0413\x03\x02\x02\x02\u0415\xA5\x03\x02\x02\x02\u0416\u0417\t\x04\x02"+
		"\x02\u0417\xA7\x03\x02\x02\x02\u0418\u041C\x05\xAAV\x02\u0419\u041C\x07"+
		"-\x02\x02\u041A\u041C\x07.\x02\x02\u041B\u0418\x03\x02\x02\x02\u041B\u0419"+
		"\x03\x02\x02\x02\u041B\u041A\x03\x02\x02\x02\u041C\xA9\x03\x02\x02\x02"+
		"\u041D\u041E\t\x05\x02\x02\u041E\xAB\x03\x02\x02\x02\x96\xB1\xB5\xB7\xC0"+
		"\xC9\xCC\xD3\xD8\xE3\xEA\xF0\xF4\xFA\u0100\u0104\u010A\u010E\u0110\u0114"+
		"\u011A\u011E\u0124\u0128\u012D\u0132\u0138\u013C\u0142\u0148\u014C\u0152"+
		"\u0156\u0158\u015C\u0162\u0166\u016C\u0170\u0178\u0182\u0186\u018D\u0198"+
		"\u019E\u01A3\u01A7\u01AA\u01AE\u01B3\u01B7\u01BB\u01C9\u01D1\u01D9\u01DB"+
		"\u01DF\u01E8\u01EF\u01F1\u01FA\u01FF\u0204\u020B\u020F\u0216\u021E\u0227"+
		"\u0230\u0237\u0241\u024D\u0252\u0267\u026C\u0271\u0276\u027E\u0287\u028D"+
		"\u028F\u0297\u029B\u02A3\u02A6\u02AA\u02AE\u02B5\u02BF\u02C7\u02CD\u02D5"+
		"\u02E5\u02E8\u02F1\u02F9\u0301\u0309\u030B\u0313\u0315\u0323\u0325\u032F"+
		"\u0335\u033A\u033F\u0344\u0349\u0351\u0357\u035F\u0363\u0365\u0369\u0372"+
		"\u0379\u037D\u0381\u0385\u0388\u038A\u038E\u0395\u0399\u03A0\u03A4\u03B1"+
		"\u03B5\u03B7\u03BF\u03C3\u03C5\u03C7\u03CD\u03D0\u03DA\u03DF\u03E7\u03ED"+
		"\u03F1\u03F5\u03FB\u03FF\u0406\u040B\u040F\u0414\u041B";
	public static readonly _serializedATN: string = Utils.join(
		[
			Python3Parser._serializedATNSegment0,
			Python3Parser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Parser.__ATN) {
			Python3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python3Parser._serializedATN));
		}

		return Python3Parser.__ATN;
	}

}

export class Single_inputContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_single_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSingle_input) listener.enterSingle_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSingle_input) listener.exitSingle_input(this);
	}
}


export class File_inputContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_file_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFile_input) listener.enterFile_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFile_input) listener.exitFile_input(this);
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public EOF(): TerminalNode { return this.getToken(Python3Parser.EOF, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_eval_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterEval_input) listener.enterEval_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitEval_input) listener.exitEval_input(this);
	}
}


export class DecoratorContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_decorator; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorator) listener.enterDecorator(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorator) listener.exitDecorator(this);
	}
}


export class DecoratorsContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_decorators; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorators) listener.enterDecorators(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorators) listener.exitDecorators(this);
	}
}


export class DecoratedContext extends ParserRuleContext {
	public decorators(): DecoratorsContext {
		return this.getRuleContext(0, DecoratorsContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_decorated; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDecorated) listener.enterDecorated(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDecorated) listener.exitDecorated(this);
	}
}


export class FuncdefContext extends ParserRuleContext {
	public DEF(): TerminalNode[];
	public DEF(i: number): TerminalNode;
	public DEF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.DEF);
		} else {
			return this.getToken(Python3Parser.DEF, i);
		}
	}
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_funcdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFuncdef) listener.enterFuncdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFuncdef) listener.exitFuncdef(this);
	}
}


export class ParametersContext extends ParserRuleContext {
	public typedargslist(): TypedargslistContext | undefined {
		return this.tryGetRuleContext(0, TypedargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_parameters; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterParameters) listener.enterParameters(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitParameters) listener.exitParameters(this);
	}
}


export class TypedargslistContext extends ParserRuleContext {
	public tfpdef(): TfpdefContext[];
	public tfpdef(i: number): TfpdefContext;
	public tfpdef(i?: number): TfpdefContext | TfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TfpdefContext);
		} else {
			return this.getRuleContext(i, TfpdefContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_typedargslist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTypedargslist) listener.enterTypedargslist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTypedargslist) listener.exitTypedargslist(this);
	}
}


export class TfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_tfpdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTfpdef) listener.enterTfpdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTfpdef) listener.exitTfpdef(this);
	}
}


export class VarargslistContext extends ParserRuleContext {
	public vfpdef(): VfpdefContext[];
	public vfpdef(i: number): VfpdefContext;
	public vfpdef(i?: number): VfpdefContext | VfpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VfpdefContext);
		} else {
			return this.getRuleContext(i, VfpdefContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_varargslist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVarargslist) listener.enterVarargslist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVarargslist) listener.exitVarargslist(this);
	}
}


export class VfpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_vfpdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterVfpdef) listener.enterVfpdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitVfpdef) listener.exitVfpdef(this);
	}
}


export class Block_stmtContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACE, 0); }
	public simple_stmt(): Simple_stmtContext[];
	public simple_stmt(i: number): Simple_stmtContext;
	public simple_stmt(i?: number): Simple_stmtContext | Simple_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Simple_stmtContext);
		} else {
			return this.getRuleContext(i, Simple_stmtContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NEWLINE);
		} else {
			return this.getToken(Python3Parser.NEWLINE, i);
		}
	}
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DEDENT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_block_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterBlock_stmt) listener.enterBlock_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitBlock_stmt) listener.exitBlock_stmt(this);
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStmt) listener.enterStmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStmt) listener.exitStmt(this);
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_simple_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSimple_stmt) listener.enterSimple_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSimple_stmt) listener.exitSimple_stmt(this);
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public del_stmt(): Del_stmtContext | undefined {
		return this.tryGetRuleContext(0, Del_stmtContext);
	}
	public pass_stmt(): Pass_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pass_stmtContext);
	}
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public global_stmt(): Global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Global_stmtContext);
	}
	public nonlocal_stmt(): Nonlocal_stmtContext | undefined {
		return this.tryGetRuleContext(0, Nonlocal_stmtContext);
	}
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_small_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSmall_stmt) listener.enterSmall_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSmall_stmt) listener.exitSmall_stmt(this);
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public testlist_star_expr(): Testlist_star_exprContext[];
	public testlist_star_expr(i: number): Testlist_star_exprContext;
	public testlist_star_expr(i?: number): Testlist_star_exprContext | Testlist_star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Testlist_star_exprContext);
		} else {
			return this.getRuleContext(i, Testlist_star_exprContext);
		}
	}
	public augassign(): AugassignContext | undefined {
		return this.tryGetRuleContext(0, AugassignContext);
	}
	public yield_expr(): Yield_exprContext[];
	public yield_expr(i: number): Yield_exprContext;
	public yield_expr(i?: number): Yield_exprContext | Yield_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Yield_exprContext);
		} else {
			return this.getRuleContext(i, Yield_exprContext);
		}
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_expr_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr_stmt) listener.enterExpr_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr_stmt) listener.exitExpr_stmt(this);
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_testlist_star_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_star_expr) listener.enterTestlist_star_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_star_expr) listener.exitTestlist_star_expr(this);
	}
}


export class AugassignContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_augassign; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAugassign) listener.enterAugassign(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAugassign) listener.exitAugassign(this);
	}
}


export class Del_stmtContext extends ParserRuleContext {
	public DEL(): TerminalNode { return this.getToken(Python3Parser.DEL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_del_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDel_stmt) listener.enterDel_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDel_stmt) listener.exitDel_stmt(this);
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	public PASS(): TerminalNode { return this.getToken(Python3Parser.PASS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_pass_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPass_stmt) listener.enterPass_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPass_stmt) listener.exitPass_stmt(this);
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public raise_stmt(): Raise_stmtContext | undefined {
		return this.tryGetRuleContext(0, Raise_stmtContext);
	}
	public yield_stmt(): Yield_stmtContext | undefined {
		return this.tryGetRuleContext(0, Yield_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_flow_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFlow_stmt) listener.enterFlow_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFlow_stmt) listener.exitFlow_stmt(this);
	}
}


export class Break_stmtContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(Python3Parser.BREAK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_break_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterBreak_stmt) listener.enterBreak_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitBreak_stmt) listener.exitBreak_stmt(this);
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(Python3Parser.CONTINUE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_continue_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterContinue_stmt) listener.enterContinue_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitContinue_stmt) listener.exitContinue_stmt(this);
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Python3Parser.RETURN, 0); }
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_return_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterReturn_stmt) listener.enterReturn_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitReturn_stmt) listener.exitReturn_stmt(this);
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_yield_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_stmt) listener.enterYield_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_stmt) listener.exitYield_stmt(this);
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	public RAISE(): TerminalNode { return this.getToken(Python3Parser.RAISE, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_raise_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterRaise_stmt) listener.enterRaise_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitRaise_stmt) listener.exitRaise_stmt(this);
	}
}


export class Import_stmtContext extends ParserRuleContext {
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_from(): Import_fromContext | undefined {
		return this.tryGetRuleContext(0, Import_fromContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_stmt) listener.enterImport_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_stmt) listener.exitImport_stmt(this);
	}
}


export class Import_nameContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(Python3Parser.IMPORT, 0); }
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_name) listener.enterImport_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_name) listener.exitImport_name(this);
	}
}


export class Import_fromContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(Python3Parser.FROM, 0); }
	public IMPORT(): TerminalNode { return this.getToken(Python3Parser.IMPORT, 0); }
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_from; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_from) listener.enterImport_from(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_from) listener.exitImport_from(this);
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_as_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_name) listener.enterImport_as_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_name) listener.exitImport_as_name(this);
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_name) listener.enterDotted_as_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_name) listener.exitDotted_as_name(this);
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_import_as_names; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterImport_as_names) listener.enterImport_as_names(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitImport_as_names) listener.exitImport_as_names(this);
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dotted_as_names; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_as_names) listener.enterDotted_as_names(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_as_names) listener.exitDotted_as_names(this);
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dotted_name; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDotted_name) listener.enterDotted_name(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDotted_name) listener.exitDotted_name(this);
	}
}


export class Global_stmtContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(Python3Parser.GLOBAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_global_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterGlobal_stmt) listener.enterGlobal_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitGlobal_stmt) listener.exitGlobal_stmt(this);
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	public NONLOCAL(): TerminalNode { return this.getToken(Python3Parser.NONLOCAL, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.NAME);
		} else {
			return this.getToken(Python3Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_nonlocal_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNonlocal_stmt) listener.enterNonlocal_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNonlocal_stmt) listener.exitNonlocal_stmt(this);
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public ASSERT(): TerminalNode { return this.getToken(Python3Parser.ASSERT, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_assert_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAssert_stmt) listener.enterAssert_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAssert_stmt) listener.exitAssert_stmt(this);
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public try_stmt(): Try_stmtContext | undefined {
		return this.tryGetRuleContext(0, Try_stmtContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public decorated(): DecoratedContext | undefined {
		return this.tryGetRuleContext(0, DecoratedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_compound_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterCompound_stmt) listener.enterCompound_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitCompound_stmt) listener.exitCompound_stmt(this);
	}
}


export class If_stmtContext extends ParserRuleContext {
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.IF);
		} else {
			return this.getToken(Python3Parser.IF, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public block_stmt(): Block_stmtContext[];
	public block_stmt(i: number): Block_stmtContext;
	public block_stmt(i?: number): Block_stmtContext | Block_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Block_stmtContext);
		} else {
			return this.getRuleContext(i, Block_stmtContext);
		}
	}
	public ELSE(): TerminalNode[];
	public ELSE(i: number): TerminalNode;
	public ELSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.ELSE);
		} else {
			return this.getToken(Python3Parser.ELSE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_if_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterIf_stmt) listener.enterIf_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitIf_stmt) listener.exitIf_stmt(this);
	}
}


export class While_stmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Python3Parser.WHILE, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public block_stmt(): Block_stmtContext {
		return this.getRuleContext(0, Block_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_while_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWhile_stmt) listener.enterWhile_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWhile_stmt) listener.exitWhile_stmt(this);
	}
}


export class For_stmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public block_stmt(): Block_stmtContext {
		return this.getRuleContext(0, Block_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_for_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFor_stmt) listener.enterFor_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFor_stmt) listener.exitFor_stmt(this);
	}
}


export class Try_stmtContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(Python3Parser.TRY, 0); }
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FINALLY, 0); }
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_try_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTry_stmt) listener.enterTry_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTry_stmt) listener.exitTry_stmt(this);
	}
}


export class With_stmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(Python3Parser.WITH, 0); }
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_with_stmt; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_stmt) listener.enterWith_stmt(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_stmt) listener.exitWith_stmt(this);
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_with_item; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterWith_item) listener.enterWith_item(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitWith_item) listener.exitWith_item(this);
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public EXCEPT(): TerminalNode { return this.getToken(Python3Parser.EXCEPT, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.AS, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_except_clause; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExcept_clause) listener.enterExcept_clause(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExcept_clause) listener.exitExcept_clause(this);
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_suite; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSuite) listener.enterSuite(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSuite) listener.exitSuite(this);
	}
}


export class TestContext extends ParserRuleContext {
	public or_test(): Or_testContext[];
	public or_test(i: number): Or_testContext;
	public or_test(i?: number): Or_testContext | Or_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_testContext);
		} else {
			return this.getRuleContext(i, Or_testContext);
		}
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.ELSE, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public lambdef(): LambdefContext | undefined {
		return this.tryGetRuleContext(0, LambdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest) listener.enterTest(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest) listener.exitTest(this);
	}
}


export class Test_nocondContext extends ParserRuleContext {
	public or_test(): Or_testContext | undefined {
		return this.tryGetRuleContext(0, Or_testContext);
	}
	public lambdef_nocond(): Lambdef_nocondContext | undefined {
		return this.tryGetRuleContext(0, Lambdef_nocondContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_test_nocond; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTest_nocond) listener.enterTest_nocond(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTest_nocond) listener.exitTest_nocond(this);
	}
}


export class LambdefContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_lambdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef) listener.enterLambdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef) listener.exitLambdef(this);
	}
}


export class Lambdef_nocondContext extends ParserRuleContext {
	public LAMBDA(): TerminalNode { return this.getToken(Python3Parser.LAMBDA, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_lambdef_nocond; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterLambdef_nocond) listener.enterLambdef_nocond(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitLambdef_nocond) listener.exitLambdef_nocond(this);
	}
}


export class Or_testContext extends ParserRuleContext {
	public and_test(): And_testContext[];
	public and_test(i: number): And_testContext;
	public and_test(i?: number): And_testContext | And_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_testContext);
		} else {
			return this.getRuleContext(i, And_testContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OR);
		} else {
			return this.getToken(Python3Parser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_or_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterOr_test) listener.enterOr_test(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitOr_test) listener.exitOr_test(this);
	}
}


export class And_testContext extends ParserRuleContext {
	public not_test(): Not_testContext[];
	public not_test(i: number): Not_testContext;
	public not_test(i?: number): Not_testContext | Not_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Not_testContext);
		} else {
			return this.getRuleContext(i, Not_testContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.AND);
		} else {
			return this.getToken(Python3Parser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_and_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_test) listener.enterAnd_test(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_test) listener.exitAnd_test(this);
	}
}


export class Not_testContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public not_test(): Not_testContext | undefined {
		return this.tryGetRuleContext(0, Not_testContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_not_test; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNot_test) listener.enterNot_test(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNot_test) listener.exitNot_test(this);
	}
}


export class ComparisonContext extends ParserRuleContext {
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comparison; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComparison) listener.enterComparison(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComparison) listener.exitComparison(this);
	}
}


export class Comp_opContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NOT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_op; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_op) listener.enterComp_op(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_op) listener.exitComp_op(this);
	}
}


export class Star_exprContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_star_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStar_expr) listener.enterStar_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStar_expr) listener.exitStar_expr(this);
	}
}


export class ExprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExpr) listener.enterExpr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExpr) listener.exitExpr(this);
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_xor_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterXor_expr) listener.enterXor_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitXor_expr) listener.exitXor_expr(this);
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_and_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAnd_expr) listener.enterAnd_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAnd_expr) listener.exitAnd_expr(this);
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext[];
	public arith_expr(i: number): Arith_exprContext;
	public arith_expr(i?: number): Arith_exprContext | Arith_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arith_exprContext);
		} else {
			return this.getRuleContext(i, Arith_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_shift_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterShift_expr) listener.enterShift_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitShift_expr) listener.exitShift_expr(this);
	}
}


export class Arith_exprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_arith_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArith_expr) listener.enterArith_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArith_expr) listener.exitArith_expr(this);
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_term; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTerm) listener.enterTerm(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTerm) listener.exitTerm(this);
	}
}


export class FactorContext extends ParserRuleContext {
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_factor; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterFactor) listener.enterFactor(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitFactor) listener.exitFactor(this);
	}
}


export class PowerContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_power; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterPower) listener.enterPower(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitPower) listener.exitPower(this);
	}
}


export class AtomContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public str(): StrContext[];
	public str(i: number): StrContext;
	public str(i?: number): StrContext | StrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrContext);
		} else {
			return this.getRuleContext(i, StrContext);
		}
	}
	public NONE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NONE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FALSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_atom; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterAtom) listener.enterAtom(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitAtom) listener.exitAtom(this);
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_testlist_comp; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist_comp) listener.enterTestlist_comp(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist_comp) listener.exitTestlist_comp(this);
	}
}


export class TrailerContext extends ParserRuleContext {
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_trailer; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTrailer) listener.enterTrailer(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTrailer) listener.exitTrailer(this);
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_subscriptlist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscriptlist) listener.enterSubscriptlist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscriptlist) listener.exitSubscriptlist(this);
	}
}


export class SubscriptContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_subscript; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSubscript) listener.enterSubscript(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSubscript) listener.exitSubscript(this);
	}
}


export class SliceopContext extends ParserRuleContext {
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_sliceop; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterSliceop) listener.enterSliceop(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitSliceop) listener.exitSliceop(this);
	}
}


export class ExprlistContext extends ParserRuleContext {
	public star_expr(): Star_exprContext[];
	public star_expr(i: number): Star_exprContext;
	public star_expr(i?: number): Star_exprContext | Star_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Star_exprContext);
		} else {
			return this.getRuleContext(i, Star_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_exprlist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterExprlist) listener.enterExprlist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitExprlist) listener.exitExprlist(this);
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_testlist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTestlist) listener.enterTestlist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTestlist) listener.exitTestlist(this);
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_dictorsetmaker; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterDictorsetmaker) listener.enterDictorsetmaker(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitDictorsetmaker) listener.exitDictorsetmaker(this);
	}
}


export class ClassdefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(Python3Parser.CLASS, 0); }
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_classdef; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterClassdef) listener.enterClassdef(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitClassdef) listener.exitClassdef(this);
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_arglist; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArglist) listener.enterArglist(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArglist) listener.exitArglist(this);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_argument; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterArgument) listener.enterArgument(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitArgument) listener.exitArgument(this);
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public comp_if(): Comp_ifContext | undefined {
		return this.tryGetRuleContext(0, Comp_ifContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_iter; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_iter) listener.enterComp_iter(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_iter) listener.exitComp_iter(this);
	}
}


export class Comp_forContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Python3Parser.FOR, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public IN(): TerminalNode { return this.getToken(Python3Parser.IN, 0); }
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_for; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_for) listener.enterComp_for(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_for) listener.exitComp_for(this);
	}
}


export class Comp_ifContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Python3Parser.IF, 0); }
	public test_nocond(): Test_nocondContext {
		return this.getRuleContext(0, Test_nocondContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_comp_if; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterComp_if) listener.enterComp_if(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitComp_if) listener.exitComp_if(this);
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public YIELD(): TerminalNode { return this.getToken(Python3Parser.YIELD, 0); }
	public yield_arg(): Yield_argContext | undefined {
		return this.tryGetRuleContext(0, Yield_argContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_yield_expr; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_expr) listener.enterYield_expr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_expr) listener.exitYield_expr(this);
	}
}


export class Yield_argContext extends ParserRuleContext {
	public FROM(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FROM, 0); }
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_yield_arg; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterYield_arg) listener.enterYield_arg(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitYield_arg) listener.exitYield_arg(this);
	}
}


export class StrContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.STRING_LITERAL, 0); }
	public BYTES_LITERAL(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.BYTES_LITERAL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_str; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterStr) listener.enterStr(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitStr) listener.exitStr(this);
	}
}


export class NumberContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public FLOAT_NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.FLOAT_NUMBER, 0); }
	public IMAG_NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.IMAG_NUMBER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_number; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterNumber) listener.enterNumber(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitNumber) listener.exitNumber(this);
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.DECIMAL_INTEGER, 0); }
	public OCT_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OCT_INTEGER, 0); }
	public HEX_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.HEX_INTEGER, 0); }
	public BIN_INTEGER(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.BIN_INTEGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python3Parser.RULE_integer; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterInteger) listener.enterInteger(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitInteger) listener.exitInteger(this);
	}
}


