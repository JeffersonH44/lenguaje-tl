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
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,38,this._ctx) ) {
			case 1:
				{
				this.state = 370;
				this.simple_stmt();
				}
				break;

			case 2:
				{
				this.state = 371;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 372;
				this.suite();
				this.state = 373;
				this.match(Python3Parser.CLOSE_BRACE);
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Python3Parser.RULE_stmt);
		try {
			this.state = 379;
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
				this.state = 377;
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
				this.state = 378;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.small_stmt();
			this.state = 386;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,40,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 382;
					this.match(Python3Parser.SEMI_COLON);
					this.state = 383;
					this.small_stmt();
					}
					} 
				}
				this.state = 388;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,40,this._ctx);
			}
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.SEMI_COLON) {
				{
				this.state = 389;
				this.match(Python3Parser.SEMI_COLON);
				}
			}

			this.state = 392;
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
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Python3Parser.RULE_small_stmt);
		try {
			this.state = 402;
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
				this.state = 394;
				this.expr_stmt();
				}
				break;
			case Python3Parser.DEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 395;
				this.del_stmt();
				}
				break;
			case Python3Parser.PASS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 396;
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
				this.state = 397;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 398;
				this.import_stmt();
				}
				break;
			case Python3Parser.GLOBAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 399;
				this.global_stmt();
				}
				break;
			case Python3Parser.NONLOCAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 400;
				this.nonlocal_stmt();
				}
				break;
			case Python3Parser.ASSERT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 401;
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
			this.state = 404;
			this.testlist_star_expr();
			this.state = 420;
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
				this.state = 405;
				this.augassign();
				this.state = 408;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 406;
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
					this.state = 407;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Python3Parser.NEWLINE:
			case Python3Parser.SEMI_COLON:
			case Python3Parser.ASSIGN:
				{
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.ASSIGN) {
					{
					{
					this.state = 410;
					this.match(Python3Parser.ASSIGN);
					this.state = 413;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.YIELD:
						{
						this.state = 411;
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
						this.state = 412;
						this.testlist_star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 419;
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
			this.state = 424;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
			case 1:
				{
				this.state = 422;
				this.test();
				}
				break;

			case 2:
				{
				this.state = 423;
				this.star_expr();
				}
				break;
			}
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 426;
					this.match(Python3Parser.COMMA);
					this.state = 429;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,48,this._ctx) ) {
					case 1:
						{
						this.state = 427;
						this.test();
						}
						break;

					case 2:
						{
						this.state = 428;
						this.star_expr();
						}
						break;
					}
					}
					} 
				}
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			}
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 436;
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
			this.state = 439;
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
			this.state = 441;
			this.match(Python3Parser.DEL);
			this.state = 442;
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
			this.state = 444;
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
			this.state = 451;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 446;
				this.break_stmt();
				}
				break;
			case Python3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 447;
				this.continue_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 448;
				this.return_stmt();
				}
				break;
			case Python3Parser.RAISE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 449;
				this.raise_stmt();
				}
				break;
			case Python3Parser.YIELD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 450;
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
			this.state = 453;
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
			this.state = 455;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(Python3Parser.RETURN);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 458;
				this.testlist();
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
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Python3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(Python3Parser.RAISE);
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 464;
				this.test();
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FROM) {
					{
					this.state = 465;
					this.match(Python3Parser.FROM);
					this.state = 466;
					this.test();
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
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Python3Parser.RULE_import_stmt);
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.import_name();
				}
				break;
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
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
			this.state = 475;
			this.match(Python3Parser.IMPORT);
			this.state = 476;
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
			this.state = 478;
			this.match(Python3Parser.FROM);
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				{
				this.state = 482;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS) {
					{
					{
					this.state = 479;
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
					this.state = 484;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 485;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 487; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 486;
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
					this.state = 489; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.DOT || _la===Python3Parser.ELLIPSIS );
				}
				break;
			}
			this.state = 493;
			this.match(Python3Parser.IMPORT);
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.STAR:
				{
				this.state = 494;
				this.match(Python3Parser.STAR);
				}
				break;
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 495;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 496;
				this.import_as_names();
				this.state = 497;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 499;
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
			this.state = 502;
			this.match(Python3Parser.NAME);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 503;
				this.match(Python3Parser.AS);
				this.state = 504;
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
			this.state = 507;
			this.dotted_name();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 508;
				this.match(Python3Parser.AS);
				this.state = 509;
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
			this.state = 512;
			this.import_as_name();
			this.state = 517;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 513;
					this.match(Python3Parser.DOT);
					this.state = 514;
					this.import_as_name();
					}
					} 
				}
				this.state = 519;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			}
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.DOT) {
				{
				this.state = 520;
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
			this.state = 523;
			this.dotted_as_name();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.DOT) {
				{
				{
				this.state = 524;
				this.match(Python3Parser.DOT);
				this.state = 525;
				this.dotted_as_name();
				}
				}
				this.state = 530;
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
			this.state = 531;
			this.match(Python3Parser.NAME);
			this.state = 536;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 532;
					this.match(Python3Parser.DOT);
					this.state = 533;
					this.match(Python3Parser.NAME);
					}
					} 
				}
				this.state = 538;
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
			this.state = 539;
			this.match(Python3Parser.GLOBAL);
			this.state = 540;
			this.match(Python3Parser.NAME);
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 541;
				this.match(Python3Parser.COMMA);
				this.state = 542;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 547;
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
			this.state = 548;
			this.match(Python3Parser.NONLOCAL);
			this.state = 549;
			this.match(Python3Parser.NAME);
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 550;
				this.match(Python3Parser.COMMA);
				this.state = 551;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 556;
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
			this.state = 557;
			this.match(Python3Parser.ASSERT);
			this.state = 558;
			this.test();
			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 559;
				this.match(Python3Parser.COMMA);
				this.state = 560;
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
			this.state = 571;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 563;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 564;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 565;
				this.for_stmt();
				}
				break;
			case Python3Parser.TRY:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 566;
				this.try_stmt();
				}
				break;
			case Python3Parser.WITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 567;
				this.with_stmt();
				}
				break;
			case Python3Parser.DEF:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 568;
				this.funcdef();
				}
				break;
			case Python3Parser.CLASS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 569;
				this.classdef();
				}
				break;
			case Python3Parser.AT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 570;
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
			this.state = 573;
			this.match(Python3Parser.IF);
			this.state = 574;
			this.test();
			this.state = 575;
			this.block_stmt();
			this.state = 583;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 576;
					this.match(Python3Parser.ELSE);
					this.state = 577;
					this.match(Python3Parser.IF);
					this.state = 578;
					this.test();
					this.state = 579;
					this.block_stmt();
					}
					} 
				}
				this.state = 585;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,70,this._ctx);
			}
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ELSE) {
				{
				this.state = 586;
				this.match(Python3Parser.ELSE);
				this.state = 587;
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
			this.state = 590;
			this.match(Python3Parser.WHILE);
			this.state = 591;
			this.test();
			this.state = 592;
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
			this.state = 594;
			this.match(Python3Parser.FOR);
			this.state = 595;
			this.exprlist();
			this.state = 596;
			this.match(Python3Parser.IN);
			this.state = 597;
			this.testlist();
			this.state = 598;
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
			this.state = 600;
			this.match(Python3Parser.TRY);
			this.state = 601;
			this.match(Python3Parser.COLON);
			this.state = 602;
			this.suite();
			this.state = 624;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.EXCEPT:
				{
				this.state = 607; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 603;
					this.except_clause();
					this.state = 604;
					this.match(Python3Parser.COLON);
					this.state = 605;
					this.suite();
					}
					}
					this.state = 609; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.EXCEPT );
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.ELSE) {
					{
					this.state = 611;
					this.match(Python3Parser.ELSE);
					this.state = 612;
					this.match(Python3Parser.COLON);
					this.state = 613;
					this.suite();
					}
				}

				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FINALLY) {
					{
					this.state = 616;
					this.match(Python3Parser.FINALLY);
					this.state = 617;
					this.match(Python3Parser.COLON);
					this.state = 618;
					this.suite();
					}
				}

				}
				break;
			case Python3Parser.FINALLY:
				{
				this.state = 621;
				this.match(Python3Parser.FINALLY);
				this.state = 622;
				this.match(Python3Parser.COLON);
				this.state = 623;
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
			this.state = 626;
			this.match(Python3Parser.WITH);
			this.state = 627;
			this.with_item();
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 628;
				this.match(Python3Parser.COMMA);
				this.state = 629;
				this.with_item();
				}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 635;
			this.match(Python3Parser.COLON);
			this.state = 636;
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
			this.state = 638;
			this.test();
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 639;
				this.match(Python3Parser.AS);
				this.state = 640;
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
			this.state = 643;
			this.match(Python3Parser.EXCEPT);
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 644;
				this.test();
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.AS) {
					{
					this.state = 645;
					this.match(Python3Parser.AS);
					this.state = 646;
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
			this.state = 661;
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
				this.state = 651;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 652;
				this.match(Python3Parser.NEWLINE);
				this.state = 653;
				this.match(Python3Parser.INDENT);
				this.state = 655; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 654;
					this.stmt();
					}
					}
					this.state = 657; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.RAISE) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.GLOBAL) | (1 << Python3Parser.NONLOCAL) | (1 << Python3Parser.ASSERT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.TRY) | (1 << Python3Parser.WITH) | (1 << Python3Parser.LAMBDA) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.CLASS) | (1 << Python3Parser.YIELD) | (1 << Python3Parser.DEL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Python3Parser.PASS - 32)) | (1 << (Python3Parser.CONTINUE - 32)) | (1 << (Python3Parser.BREAK - 32)) | (1 << (Python3Parser.NAME - 32)) | (1 << (Python3Parser.STRING_LITERAL - 32)) | (1 << (Python3Parser.BYTES_LITERAL - 32)) | (1 << (Python3Parser.DECIMAL_INTEGER - 32)) | (1 << (Python3Parser.OCT_INTEGER - 32)) | (1 << (Python3Parser.HEX_INTEGER - 32)) | (1 << (Python3Parser.BIN_INTEGER - 32)) | (1 << (Python3Parser.FLOAT_NUMBER - 32)) | (1 << (Python3Parser.IMAG_NUMBER - 32)) | (1 << (Python3Parser.ELLIPSIS - 32)) | (1 << (Python3Parser.STAR - 32)) | (1 << (Python3Parser.OPEN_PAREN - 32)) | (1 << (Python3Parser.OPEN_BRACK - 32)) | (1 << (Python3Parser.ADD - 32)) | (1 << (Python3Parser.MINUS - 32)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (Python3Parser.NOT_OP - 67)) | (1 << (Python3Parser.OPEN_BRACE - 67)) | (1 << (Python3Parser.AT - 67)))) !== 0) );
				this.state = 659;
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
		let _la: number;
		try {
			this.state = 672;
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
				this.state = 663;
				this.or_test();
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.IF) {
					{
					this.state = 664;
					this.match(Python3Parser.IF);
					this.state = 665;
					this.or_test();
					this.state = 666;
					this.match(Python3Parser.ELSE);
					this.state = 667;
					this.test();
					}
				}

				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 671;
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
				this.state = 674;
				this.or_test();
				}
				break;
			case Python3Parser.LAMBDA:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 675;
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
			this.state = 678;
			this.match(Python3Parser.LAMBDA);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.NAME - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 679;
				this.varargslist();
				}
			}

			this.state = 682;
			this.match(Python3Parser.COLON);
			this.state = 683;
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
			this.state = 685;
			this.match(Python3Parser.LAMBDA);
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (Python3Parser.NAME - 36)) | (1 << (Python3Parser.STAR - 36)) | (1 << (Python3Parser.POWER - 36)))) !== 0)) {
				{
				this.state = 686;
				this.varargslist();
				}
			}

			this.state = 689;
			this.match(Python3Parser.COLON);
			this.state = 690;
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
			this.state = 692;
			this.and_test();
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR) {
				{
				{
				this.state = 693;
				this.match(Python3Parser.OR);
				this.state = 694;
				this.and_test();
				}
				}
				this.state = 699;
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
			this.state = 700;
			this.not_test();
			this.state = 705;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND) {
				{
				{
				this.state = 701;
				this.match(Python3Parser.AND);
				this.state = 702;
				this.not_test();
				}
				}
				this.state = 707;
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
			this.state = 711;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 708;
				this.match(Python3Parser.NOT);
				this.state = 709;
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
				this.state = 710;
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
			this.state = 713;
			this.star_expr();
			this.state = 719;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,90,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 714;
					this.comp_op();
					this.state = 715;
					this.star_expr();
					}
					} 
				}
				this.state = 721;
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
			this.state = 735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 722;
				this.match(Python3Parser.LESS_THAN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
				this.match(Python3Parser.GREATER_THAN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 724;
				this.match(Python3Parser.EQUALS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 725;
				this.match(Python3Parser.GT_EQ);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 726;
				this.match(Python3Parser.LT_EQ);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 727;
				this.match(Python3Parser.NOT_EQ_1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 728;
				this.match(Python3Parser.NOT_EQ_2);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 729;
				this.match(Python3Parser.IN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 730;
				this.match(Python3Parser.NOT);
				this.state = 731;
				this.match(Python3Parser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 732;
				this.match(Python3Parser.IS);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 733;
				this.match(Python3Parser.IS);
				this.state = 734;
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
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.STAR) {
				{
				this.state = 737;
				this.match(Python3Parser.STAR);
				}
			}

			this.state = 740;
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
			this.state = 742;
			this.xor_expr();
			this.state = 747;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR_OP) {
				{
				{
				this.state = 743;
				this.match(Python3Parser.OR_OP);
				this.state = 744;
				this.xor_expr();
				}
				}
				this.state = 749;
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
			this.state = 750;
			this.and_expr();
			this.state = 755;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.XOR) {
				{
				{
				this.state = 751;
				this.match(Python3Parser.XOR);
				this.state = 752;
				this.and_expr();
				}
				}
				this.state = 757;
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
			this.state = 758;
			this.shift_expr();
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND_OP) {
				{
				{
				this.state = 759;
				this.match(Python3Parser.AND_OP);
				this.state = 760;
				this.shift_expr();
				}
				}
				this.state = 765;
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
			this.state = 766;
			this.arith_expr();
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.LEFT_SHIFT || _la===Python3Parser.RIGHT_SHIFT) {
				{
				this.state = 771;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.LEFT_SHIFT:
					{
					this.state = 767;
					this.match(Python3Parser.LEFT_SHIFT);
					this.state = 768;
					this.arith_expr();
					}
					break;
				case Python3Parser.RIGHT_SHIFT:
					{
					this.state = 769;
					this.match(Python3Parser.RIGHT_SHIFT);
					this.state = 770;
					this.arith_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 775;
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
			this.state = 776;
			this.term();
			this.state = 783;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,99,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 781;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.ADD:
						{
						this.state = 777;
						this.match(Python3Parser.ADD);
						this.state = 778;
						this.term();
						}
						break;
					case Python3Parser.MINUS:
						{
						this.state = 779;
						this.match(Python3Parser.MINUS);
						this.state = 780;
						this.term();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 785;
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
			this.state = 786;
			this.factor();
			this.state = 799;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,101,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 797;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.STAR:
						{
						this.state = 787;
						this.match(Python3Parser.STAR);
						this.state = 788;
						this.factor();
						}
						break;
					case Python3Parser.DIV:
						{
						this.state = 789;
						this.match(Python3Parser.DIV);
						this.state = 790;
						this.factor();
						}
						break;
					case Python3Parser.MOD:
						{
						this.state = 791;
						this.match(Python3Parser.MOD);
						this.state = 792;
						this.factor();
						}
						break;
					case Python3Parser.IDIV:
						{
						this.state = 793;
						this.match(Python3Parser.IDIV);
						this.state = 794;
						this.factor();
						}
						break;
					case Python3Parser.AT:
						{
						this.state = 795;
						this.match(Python3Parser.AT);
						this.state = 796;
						this.factor();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 801;
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
			this.state = 809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 802;
				this.match(Python3Parser.ADD);
				this.state = 803;
				this.factor();
				}
				break;
			case Python3Parser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 804;
				this.match(Python3Parser.MINUS);
				this.state = 805;
				this.factor();
				}
				break;
			case Python3Parser.NOT_OP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 806;
				this.match(Python3Parser.NOT_OP);
				this.state = 807;
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
				this.state = 808;
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
			this.state = 811;
			this.atom();
			this.state = 815;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,103,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 812;
					this.trailer();
					}
					} 
				}
				this.state = 817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,103,this._ctx);
			}
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.POWER) {
				{
				this.state = 818;
				this.match(Python3Parser.POWER);
				this.state = 819;
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
			this.state = 849;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 822;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 825;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.YIELD:
					{
					this.state = 823;
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
					this.state = 824;
					this.testlist_comp();
					}
					break;
				case Python3Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 827;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 828;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 829;
					this.testlist_comp();
					}
				}

				this.state = 832;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 833;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 834;
					this.dictorsetmaker();
					}
				}

				this.state = 837;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 838;
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
				this.state = 839;
				this.number();
				}
				break;
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.BYTES_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 841; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 840;
						this.str();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 843; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,108,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case Python3Parser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 845;
				this.match(Python3Parser.ELLIPSIS);
				}
				break;
			case Python3Parser.NONE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 846;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 847;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 848;
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
			this.state = 851;
			this.test();
			this.state = 863;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				{
				this.state = 852;
				this.comp_for();
				}
				break;
			case Python3Parser.CLOSE_PAREN:
			case Python3Parser.COMMA:
			case Python3Parser.CLOSE_BRACK:
				{
				this.state = 857;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,110,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 853;
						this.match(Python3Parser.COMMA);
						this.state = 854;
						this.test();
						}
						} 
					}
					this.state = 859;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,110,this._ctx);
				}
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 860;
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
			this.state = 876;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 865;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (Python3Parser.POWER - 53)) | (1 << (Python3Parser.OPEN_BRACK - 53)) | (1 << (Python3Parser.ADD - 53)) | (1 << (Python3Parser.MINUS - 53)) | (1 << (Python3Parser.NOT_OP - 53)) | (1 << (Python3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 866;
					this.arglist();
					}
				}

				this.state = 869;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 870;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 871;
				this.subscriptlist();
				this.state = 872;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 874;
				this.match(Python3Parser.DOT);
				this.state = 875;
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
			this.state = 878;
			this.subscript();
			this.state = 883;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,115,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 879;
					this.match(Python3Parser.COMMA);
					this.state = 880;
					this.subscript();
					}
					} 
				}
				this.state = 885;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,115,this._ctx);
			}
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 886;
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
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,120,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 889;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 890;
					this.test();
					}
				}

				this.state = 893;
				this.match(Python3Parser.COLON);
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
					{
					this.state = 894;
					this.test();
					}
				}

				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COLON) {
					{
					this.state = 897;
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
			this.state = 902;
			this.match(Python3Parser.COLON);
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (Python3Parser.OPEN_BRACK - 55)) | (1 << (Python3Parser.ADD - 55)) | (1 << (Python3Parser.MINUS - 55)) | (1 << (Python3Parser.NOT_OP - 55)) | (1 << (Python3Parser.OPEN_BRACE - 55)))) !== 0)) {
				{
				this.state = 903;
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
			this.state = 906;
			this.star_expr();
			this.state = 911;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 907;
					this.match(Python3Parser.COMMA);
					this.state = 908;
					this.star_expr();
					}
					} 
				}
				this.state = 913;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,122,this._ctx);
			}
			this.state = 915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 914;
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
			this.state = 917;
			this.test();
			this.state = 922;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,124,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 918;
					this.match(Python3Parser.COMMA);
					this.state = 919;
					this.test();
					}
					} 
				}
				this.state = 924;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,124,this._ctx);
			}
			this.state = 926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 925;
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
			this.state = 961;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 928;
				this.test();
				this.state = 929;
				this.match(Python3Parser.COLON);
				this.state = 930;
				this.test();
				this.state = 945;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 931;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 939;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 932;
							this.match(Python3Parser.COMMA);
							this.state = 933;
							this.test();
							this.state = 934;
							this.match(Python3Parser.COLON);
							this.state = 935;
							this.test();
							}
							} 
						}
						this.state = 941;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
					}
					this.state = 943;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 942;
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
				this.state = 947;
				this.test();
				this.state = 959;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 948;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 953;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,129,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 949;
							this.match(Python3Parser.COMMA);
							this.state = 950;
							this.test();
							}
							} 
						}
						this.state = 955;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,129,this._ctx);
					}
					this.state = 957;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 956;
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
			this.state = 963;
			this.match(Python3Parser.CLASS);
			this.state = 964;
			this.match(Python3Parser.NAME);
			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.OPEN_PAREN) {
				{
				this.state = 965;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & ((1 << (Python3Parser.LAMBDA - 21)) | (1 << (Python3Parser.NOT - 21)) | (1 << (Python3Parser.NONE - 21)) | (1 << (Python3Parser.TRUE - 21)) | (1 << (Python3Parser.FALSE - 21)) | (1 << (Python3Parser.NAME - 21)) | (1 << (Python3Parser.STRING_LITERAL - 21)) | (1 << (Python3Parser.BYTES_LITERAL - 21)) | (1 << (Python3Parser.DECIMAL_INTEGER - 21)) | (1 << (Python3Parser.OCT_INTEGER - 21)) | (1 << (Python3Parser.HEX_INTEGER - 21)) | (1 << (Python3Parser.BIN_INTEGER - 21)) | (1 << (Python3Parser.FLOAT_NUMBER - 21)) | (1 << (Python3Parser.IMAG_NUMBER - 21)) | (1 << (Python3Parser.ELLIPSIS - 21)) | (1 << (Python3Parser.STAR - 21)) | (1 << (Python3Parser.OPEN_PAREN - 21)))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (Python3Parser.POWER - 53)) | (1 << (Python3Parser.OPEN_BRACK - 53)) | (1 << (Python3Parser.ADD - 53)) | (1 << (Python3Parser.MINUS - 53)) | (1 << (Python3Parser.NOT_OP - 53)) | (1 << (Python3Parser.OPEN_BRACE - 53)))) !== 0)) {
					{
					this.state = 966;
					this.arglist();
					}
				}

				this.state = 969;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 972;
			this.match(Python3Parser.COLON);
			this.state = 973;
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
			this.state = 980;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 975;
					this.argument();
					this.state = 976;
					this.match(Python3Parser.COMMA);
					}
					} 
				}
				this.state = 982;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,135,this._ctx);
			}
			this.state = 1003;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,139,this._ctx) ) {
			case 1:
				{
				this.state = 983;
				this.argument();
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 984;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 987;
				this.match(Python3Parser.STAR);
				this.state = 988;
				this.test();
				this.state = 993;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 989;
						this.match(Python3Parser.COMMA);
						this.state = 990;
						this.argument();
						}
						} 
					}
					this.state = 995;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,137,this._ctx);
				}
				this.state = 999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 996;
					this.match(Python3Parser.COMMA);
					this.state = 997;
					this.match(Python3Parser.POWER);
					this.state = 998;
					this.test();
					}
				}

				}
				break;

			case 3:
				{
				this.state = 1001;
				this.match(Python3Parser.POWER);
				this.state = 1002;
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
			this.state = 1013;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,141,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1005;
				this.test();
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.FOR) {
					{
					this.state = 1006;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1009;
				this.test();
				this.state = 1010;
				this.match(Python3Parser.ASSIGN);
				this.state = 1011;
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
			this.state = 1017;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1015;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1016;
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
			this.state = 1019;
			this.match(Python3Parser.FOR);
			this.state = 1020;
			this.exprlist();
			this.state = 1021;
			this.match(Python3Parser.IN);
			this.state = 1022;
			this.or_test();
			this.state = 1024;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 1023;
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
			this.state = 1026;
			this.match(Python3Parser.IF);
			this.state = 1027;
			this.test_nocond();
			this.state = 1029;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 1028;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.match(Python3Parser.YIELD);
			this.state = 1033;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & ((1 << (Python3Parser.FROM - 5)) | (1 << (Python3Parser.LAMBDA - 5)) | (1 << (Python3Parser.NOT - 5)) | (1 << (Python3Parser.NONE - 5)) | (1 << (Python3Parser.TRUE - 5)) | (1 << (Python3Parser.FALSE - 5)) | (1 << (Python3Parser.NAME - 5)))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Python3Parser.STRING_LITERAL - 37)) | (1 << (Python3Parser.BYTES_LITERAL - 37)) | (1 << (Python3Parser.DECIMAL_INTEGER - 37)) | (1 << (Python3Parser.OCT_INTEGER - 37)) | (1 << (Python3Parser.HEX_INTEGER - 37)) | (1 << (Python3Parser.BIN_INTEGER - 37)) | (1 << (Python3Parser.FLOAT_NUMBER - 37)) | (1 << (Python3Parser.IMAG_NUMBER - 37)) | (1 << (Python3Parser.ELLIPSIS - 37)) | (1 << (Python3Parser.STAR - 37)) | (1 << (Python3Parser.OPEN_PAREN - 37)) | (1 << (Python3Parser.OPEN_BRACK - 37)) | (1 << (Python3Parser.ADD - 37)) | (1 << (Python3Parser.MINUS - 37)) | (1 << (Python3Parser.NOT_OP - 37)) | (1 << (Python3Parser.OPEN_BRACE - 37)))) !== 0)) {
				{
				this.state = 1032;
				this.yield_arg();
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
	public yield_arg(): Yield_argContext {
		let _localctx: Yield_argContext = new Yield_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Python3Parser.RULE_yield_arg);
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.match(Python3Parser.FROM);
				this.state = 1036;
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
				this.state = 1037;
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
			this.state = 1040;
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
			this.state = 1045;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.OCT_INTEGER:
			case Python3Parser.HEX_INTEGER:
			case Python3Parser.BIN_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1042;
				this.integer();
				}
				break;
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1043;
				this.match(Python3Parser.FLOAT_NUMBER);
				}
				break;
			case Python3Parser.IMAG_NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1044;
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
			this.state = 1047;
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03a\u041C\x04\x02"+
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
		"\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u017A\n\x0E\x03"+
		"\x0F\x03\x0F\x05\x0F\u017E\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0183"+
		"\n\x10\f\x10\x0E\x10\u0186\v\x10\x03\x10\x05\x10\u0189\n\x10\x03\x10\x03"+
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05"+
		"\x11\u0195\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u019B\n\x12\x03"+
		"\x12\x03\x12\x03\x12\x05\x12\u01A0\n\x12\x07\x12\u01A2\n\x12\f\x12\x0E"+
		"\x12\u01A5\v\x12\x05\x12\u01A7\n\x12\x03\x13\x03\x13\x05\x13\u01AB\n\x13"+
		"\x03\x13\x03\x13\x03\x13\x05\x13\u01B0\n\x13\x07\x13\u01B2\n\x13\f\x13"+
		"\x0E\x13\u01B5\v\x13\x03\x13\x05\x13\u01B8\n\x13\x03\x14\x03\x14\x03\x15"+
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17"+
		"\x05\x17\u01C6\n\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x05"+
		"\x1A\u01CE\n\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C"+
		"\u01D6\n\x1C\x05\x1C\u01D8\n\x1C\x03\x1D\x03\x1D\x05\x1D\u01DC\n\x1D\x03"+
		"\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x07\x1F\u01E3\n\x1F\f\x1F\x0E\x1F"+
		"\u01E6\v\x1F\x03\x1F\x03\x1F\x06\x1F\u01EA\n\x1F\r\x1F\x0E\x1F\u01EB\x05"+
		"\x1F\u01EE\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F"+
		"\x05\x1F\u01F7\n\x1F\x03 \x03 \x03 \x05 \u01FC\n \x03!\x03!\x03!\x05!"+
		"\u0201\n!\x03\"\x03\"\x03\"\x07\"\u0206\n\"\f\"\x0E\"\u0209\v\"\x03\""+
		"\x05\"\u020C\n\"\x03#\x03#\x03#\x07#\u0211\n#\f#\x0E#\u0214\v#\x03$\x03"+
		"$\x03$\x07$\u0219\n$\f$\x0E$\u021C\v$\x03%\x03%\x03%\x03%\x07%\u0222\n"+
		"%\f%\x0E%\u0225\v%\x03&\x03&\x03&\x03&\x07&\u022B\n&\f&\x0E&\u022E\v&"+
		"\x03\'\x03\'\x03\'\x03\'\x05\'\u0234\n\'\x03(\x03(\x03(\x03(\x03(\x03"+
		"(\x03(\x03(\x05(\u023E\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07"+
		")\u0248\n)\f)\x0E)\u024B\v)\x03)\x03)\x05)\u024F\n)\x03*\x03*\x03*\x03"+
		"*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x06"+
		",\u0262\n,\r,\x0E,\u0263\x03,\x03,\x03,\x05,\u0269\n,\x03,\x03,\x03,\x05"+
		",\u026E\n,\x03,\x03,\x03,\x05,\u0273\n,\x03-\x03-\x03-\x03-\x07-\u0279"+
		"\n-\f-\x0E-\u027C\v-\x03-\x03-\x03-\x03.\x03.\x03.\x05.\u0284\n.\x03/"+
		"\x03/\x03/\x03/\x05/\u028A\n/\x05/\u028C\n/\x030\x030\x030\x030\x060\u0292"+
		"\n0\r0\x0E0\u0293\x030\x030\x050\u0298\n0\x031\x031\x031\x031\x031\x03"+
		"1\x051\u02A0\n1\x031\x051\u02A3\n1\x032\x032\x052\u02A7\n2\x033\x033\x05"+
		"3\u02AB\n3\x033\x033\x033\x034\x034\x054\u02B2\n4\x034\x034\x034\x035"+
		"\x035\x035\x075\u02BA\n5\f5\x0E5\u02BD\v5\x036\x036\x036\x076\u02C2\n"+
		"6\f6\x0E6\u02C5\v6\x037\x037\x037\x057\u02CA\n7\x038\x038\x038\x038\x07"+
		"8\u02D0\n8\f8\x0E8\u02D3\v8\x039\x039\x039\x039\x039\x039\x039\x039\x03"+
		"9\x039\x039\x039\x039\x059\u02E2\n9\x03:\x05:\u02E5\n:\x03:\x03:\x03;"+
		"\x03;\x03;\x07;\u02EC\n;\f;\x0E;\u02EF\v;\x03<\x03<\x03<\x07<\u02F4\n"+
		"<\f<\x0E<\u02F7\v<\x03=\x03=\x03=\x07=\u02FC\n=\f=\x0E=\u02FF\v=\x03>"+
		"\x03>\x03>\x03>\x03>\x07>\u0306\n>\f>\x0E>\u0309\v>\x03?\x03?\x03?\x03"+
		"?\x03?\x07?\u0310\n?\f?\x0E?\u0313\v?\x03@\x03@\x03@\x03@\x03@\x03@\x03"+
		"@\x03@\x03@\x03@\x03@\x07@\u0320\n@\f@\x0E@\u0323\v@\x03A\x03A\x03A\x03"+
		"A\x03A\x03A\x03A\x05A\u032C\nA\x03B\x03B\x07B\u0330\nB\fB\x0EB\u0333\v"+
		"B\x03B\x03B\x05B\u0337\nB\x03C\x03C\x03C\x05C\u033C\nC\x03C\x03C\x03C"+
		"\x05C\u0341\nC\x03C\x03C\x03C\x05C\u0346\nC\x03C\x03C\x03C\x03C\x06C\u034C"+
		"\nC\rC\x0EC\u034D\x03C\x03C\x03C\x03C\x05C\u0354\nC\x03D\x03D\x03D\x03"+
		"D\x07D\u035A\nD\fD\x0ED\u035D\vD\x03D\x05D\u0360\nD\x05D\u0362\nD\x03"+
		"E\x03E\x05E\u0366\nE\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05E\u036F\nE"+
		"\x03F\x03F\x03F\x07F\u0374\nF\fF\x0EF\u0377\vF\x03F\x05F\u037A\nF\x03"+
		"G\x03G\x05G\u037E\nG\x03G\x03G\x05G\u0382\nG\x03G\x05G\u0385\nG\x05G\u0387"+
		"\nG\x03H\x03H\x05H\u038B\nH\x03I\x03I\x03I\x07I\u0390\nI\fI\x0EI\u0393"+
		"\vI\x03I\x05I\u0396\nI\x03J\x03J\x03J\x07J\u039B\nJ\fJ\x0EJ\u039E\vJ\x03"+
		"J\x05J\u03A1\nJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x07K\u03AC"+
		"\nK\fK\x0EK\u03AF\vK\x03K\x05K\u03B2\nK\x05K\u03B4\nK\x03K\x03K\x03K\x03"+
		"K\x07K\u03BA\nK\fK\x0EK\u03BD\vK\x03K\x05K\u03C0\nK\x05K\u03C2\nK\x05"+
		"K\u03C4\nK\x03L\x03L\x03L\x03L\x05L\u03CA\nL\x03L\x05L\u03CD\nL\x03L\x03"+
		"L\x03L\x03M\x03M\x03M\x07M\u03D5\nM\fM\x0EM\u03D8\vM\x03M\x03M\x05M\u03DC"+
		"\nM\x03M\x03M\x03M\x03M\x07M\u03E2\nM\fM\x0EM\u03E5\vM\x03M\x03M\x03M"+
		"\x05M\u03EA\nM\x03M\x03M\x05M\u03EE\nM\x03N\x03N\x05N\u03F2\nN\x03N\x03"+
		"N\x03N\x03N\x05N\u03F8\nN\x03O\x03O\x05O\u03FC\nO\x03P\x03P\x03P\x03P"+
		"\x03P\x05P\u0403\nP\x03Q\x03Q\x03Q\x05Q\u0408\nQ\x03R\x03R\x05R\u040C"+
		"\nR\x03S\x03S\x03S\x05S\u0411\nS\x03T\x03T\x03U\x03U\x03U\x05U\u0418\n"+
		"U\x03V\x03V\x03V\x02\x02\x02W\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02"+
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02"+
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02"+
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02"+
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02"+
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02"+
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02"+
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\x02\x06"+
		"\x03\x02Q]\x03\x02/0\x03\x02\'(\x03\x02),\u0489\x02\xB1\x03\x02\x02\x02"+
		"\x04\xB7\x03\x02\x02\x02\x06\xBC\x03\x02\x02\x02\b\xC5\x03\x02\x02\x02"+
		"\n\xD1\x03\x02\x02\x02\f\xD5\x03\x02\x02\x02\x0E\xDA\x03\x02\x02\x02\x10"+
		"\xE1\x03\x02\x02\x02\x12\u0128\x03\x02\x02\x02\x14\u012A\x03\x02\x02\x02"+
		"\x16\u0170\x03\x02\x02\x02\x18\u0172\x03\x02\x02\x02\x1A\u0179\x03\x02"+
		"\x02\x02\x1C\u017D\x03\x02\x02\x02\x1E\u017F\x03\x02\x02\x02 \u0194\x03"+
		"\x02\x02\x02\"\u0196\x03\x02\x02\x02$\u01AA\x03\x02\x02\x02&\u01B9\x03"+
		"\x02\x02\x02(\u01BB\x03\x02\x02\x02*\u01BE\x03\x02\x02\x02,\u01C5\x03"+
		"\x02\x02\x02.\u01C7\x03\x02\x02\x020\u01C9\x03\x02\x02\x022\u01CB\x03"+
		"\x02\x02\x024\u01CF\x03\x02\x02\x026\u01D1\x03\x02\x02\x028\u01DB\x03"+
		"\x02\x02\x02:\u01DD\x03\x02\x02\x02<\u01E0\x03\x02\x02\x02>\u01F8\x03"+
		"\x02\x02\x02@\u01FD\x03\x02\x02\x02B\u0202\x03\x02\x02\x02D\u020D\x03"+
		"\x02\x02\x02F\u0215\x03\x02\x02\x02H\u021D\x03\x02\x02\x02J\u0226\x03"+
		"\x02\x02\x02L\u022F\x03\x02\x02\x02N\u023D\x03\x02\x02\x02P\u023F\x03"+
		"\x02\x02\x02R\u0250\x03\x02\x02\x02T\u0254\x03\x02\x02\x02V\u025A\x03"+
		"\x02\x02\x02X\u0274\x03\x02\x02\x02Z\u0280\x03\x02\x02\x02\\\u0285\x03"+
		"\x02\x02\x02^\u0297\x03\x02\x02\x02`\u02A2\x03\x02\x02\x02b\u02A6\x03"+
		"\x02\x02\x02d\u02A8\x03\x02\x02\x02f\u02AF\x03\x02\x02\x02h\u02B6\x03"+
		"\x02\x02\x02j\u02BE\x03\x02\x02\x02l\u02C9\x03\x02\x02\x02n\u02CB\x03"+
		"\x02\x02\x02p\u02E1\x03\x02\x02\x02r\u02E4\x03\x02\x02\x02t\u02E8\x03"+
		"\x02\x02\x02v\u02F0\x03\x02\x02\x02x\u02F8\x03\x02\x02\x02z\u0300\x03"+
		"\x02\x02\x02|\u030A\x03\x02\x02\x02~\u0314\x03\x02\x02\x02\x80\u032B\x03"+
		"\x02\x02\x02\x82\u032D\x03\x02\x02\x02\x84\u0353\x03\x02\x02\x02\x86\u0355"+
		"\x03\x02\x02\x02\x88\u036E\x03\x02\x02\x02\x8A\u0370\x03\x02\x02\x02\x8C"+
		"\u0386\x03\x02\x02\x02\x8E\u0388\x03\x02\x02\x02\x90\u038C\x03\x02\x02"+
		"\x02\x92\u0397\x03\x02\x02\x02\x94\u03C3\x03\x02\x02\x02\x96\u03C5\x03"+
		"\x02\x02\x02\x98\u03D6\x03\x02\x02\x02\x9A\u03F7\x03\x02\x02\x02\x9C\u03FB"+
		"\x03\x02\x02\x02\x9E\u03FD\x03\x02\x02\x02\xA0\u0404\x03\x02\x02\x02\xA2"+
		"\u0409\x03\x02\x02\x02\xA4\u0410\x03\x02\x02\x02\xA6\u0412\x03\x02\x02"+
		"\x02\xA8\u0417\x03\x02\x02\x02\xAA\u0419\x03\x02\x02\x02\xAC\xB2\x07%"+
		"\x02\x02\xAD\xB2\x05\x1E\x10\x02\xAE\xAF\x05N(\x02\xAF\xB0\x07%\x02\x02"+
		"\xB0\xB2\x03\x02\x02\x02\xB1\xAC\x03\x02\x02\x02\xB1\xAD\x03\x02\x02\x02"+
		"\xB1\xAE\x03\x02\x02\x02\xB2\x03\x03\x02\x02\x02\xB3\xB6\x07%\x02\x02"+
		"\xB4\xB6\x05\x1C\x0F\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02"+
		"\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02"+
		"\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x07\x02\x02\x03"+
		"\xBB\x05\x03\x02\x02\x02\xBC\xC0\x05\x92J\x02\xBD\xBF\x07%\x02\x02\xBE"+
		"\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0"+
		"\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3"+
		"\xC4\x07\x02\x02\x03\xC4\x07\x03\x02\x02\x02\xC5\xC6\x07O\x02\x02\xC6"+
		"\xCC\x05F$\x02\xC7\xC9\x072\x02\x02\xC8\xCA\x05\x98M\x02\xC9\xC8\x03\x02"+
		"\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x073"+
		"\x02\x02\xCC\xC7\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02"+
		"\x02\x02\xCE\xCF\x07%\x02\x02\xCF\t\x03\x02\x02\x02\xD0\xD2\x05\b\x05"+
		"\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD1\x03\x02\x02"+
		"\x02\xD3\xD4\x03\x02\x02\x02\xD4\v\x03\x02\x02\x02\xD5\xD8\x05\n\x06\x02"+
		"\xD6\xD9\x05\x96L\x02\xD7\xD9\x05\x0E\b\x02\xD8\xD6\x03\x02\x02\x02\xD8"+
		"\xD7\x03\x02\x02\x02\xD9\r\x03\x02\x02\x02\xDA\xDB\x07\x04\x02\x02\xDB"+
		"\xDC\x07&\x02\x02\xDC\xDD\x05\x10\t\x02\xDD\xDE\x05^0\x02\xDE\xDF\x07"+
		"\x03\x02\x02\xDF\xE0\x07\x04\x02\x02\xE0\x0F\x03\x02\x02\x02\xE1\xE3\x07"+
		"2\x02\x02\xE2\xE4\x05\x12\n\x02\xE3\xE2\x03\x02\x02\x02\xE3\xE4\x03\x02"+
		"\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x073\x02\x02\xE6\x11\x03\x02"+
		"\x02\x02\xE7\xEA\x05\x14\v\x02\xE8\xE9\x078\x02\x02\xE9\xEB\x05`1\x02"+
		"\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xF4\x03\x02\x02\x02"+
		"\xEC\xED\x074\x02\x02\xED\xF0\x05\x14\v\x02\xEE\xEF\x078\x02\x02\xEF\xF1"+
		"\x05`1\x02\xF0\xEE\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03"+
		"\x02\x02\x02\xF2\xEC\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03"+
		"\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\u0110\x03\x02\x02\x02\xF6\xF4"+
		"\x03\x02\x02\x02\xF7\u010E\x074\x02\x02\xF8\xFA\x071\x02\x02\xF9\xFB\x05"+
		"\x14\v\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\u0104\x03"+
		"\x02\x02\x02\xFC\xFD\x074\x02\x02\xFD\u0100\x05\x14\v\x02\xFE\xFF\x07"+
		"8\x02\x02\xFF\u0101\x05`1\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03"+
		"\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\xFC\x03\x02\x02\x02\u0103"+
		"\u0106\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02"+
		"\x02\x02\u0105\u010A\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107"+
		"\u0108\x074\x02\x02\u0108\u0109\x077\x02\x02\u0109\u010B\x05\x14\v\x02"+
		"\u010A\u0107\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010F\x03"+
		"\x02\x02\x02\u010C\u010D\x077\x02\x02\u010D\u010F\x05\x14\v\x02\u010E"+
		"\xF8\x03\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02"+
		"\x02\u010F\u0111\x03\x02\x02\x02\u0110\xF7\x03\x02\x02\x02\u0110\u0111"+
		"\x03\x02\x02\x02\u0111\u0129\x03\x02\x02\x02\u0112\u0114\x071\x02\x02"+
		"\u0113\u0115\x05\x14\v\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03"+
		"\x02\x02\x02\u0115\u011E\x03\x02\x02\x02\u0116\u0117\x074\x02\x02\u0117"+
		"\u011A\x05\x14\v\x02\u0118\u0119\x078\x02\x02\u0119\u011B\x05`1\x02\u011A"+
		"\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x03\x02"+
		"\x02\x02\u011C\u0116\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E"+
		"\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0124\x03\x02"+
		"\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x074\x02\x02\u0122\u0123"+
		"\x077\x02\x02\u0123\u0125\x05\x14\v\x02\u0124\u0121\x03\x02\x02\x02\u0124"+
		"\u0125\x03\x02\x02\x02\u0125\u0129\x03\x02\x02\x02\u0126\u0127\x077\x02"+
		"\x02\u0127\u0129\x05\x14\v\x02\u0128\xE7\x03\x02\x02\x02\u0128\u0112\x03"+
		"\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\x13\x03\x02\x02\x02\u012A"+
		"\u012D\x07&\x02\x02\u012B\u012C\x075\x02\x02\u012C\u012E\x05`1\x02\u012D"+
		"\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\x15\x03\x02\x02"+
		"\x02\u012F\u0132\x05\x18\r\x02\u0130\u0131\x078\x02\x02\u0131\u0133\x05"+
		"`1\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u013C"+
		"\x03\x02\x02\x02\u0134\u0135\x074\x02\x02\u0135\u0138\x05\x18\r\x02\u0136"+
		"\u0137\x078\x02\x02\u0137\u0139\x05`1\x02\u0138\u0136\x03\x02\x02\x02"+
		"\u0138\u0139\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u0134\x03"+
		"\x02\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C"+
		"\u013D\x03\x02\x02\x02\u013D\u0158\x03\x02\x02\x02\u013E\u013C\x03\x02"+
		"\x02\x02\u013F\u0156\x074\x02\x02\u0140\u0142\x071\x02\x02\u0141\u0143"+
		"\x05\x18\r\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02"+
		"\u0143\u014C\x03\x02\x02\x02\u0144\u0145\x074\x02\x02\u0145\u0148\x05"+
		"\x18\r\x02\u0146\u0147\x078\x02\x02\u0147\u0149\x05`1\x02\u0148\u0146"+
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014B\x03\x02\x02\x02"+
		"\u014A\u0144\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03"+
		"\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D\u0152\x03\x02\x02\x02\u014E"+
		"\u014C\x03\x02\x02\x02\u014F\u0150\x074\x02\x02\u0150\u0151\x077\x02\x02"+
		"\u0151\u0153\x05\x18\r\x02\u0152\u014F\x03\x02\x02\x02\u0152\u0153\x03"+
		"\x02\x02\x02\u0153\u0157\x03\x02\x02\x02\u0154\u0155\x077\x02\x02\u0155"+
		"\u0157\x05\x18\r\x02\u0156\u0140\x03\x02\x02\x02\u0156\u0154\x03\x02\x02"+
		"\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u013F"+
		"\x03\x02\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u0171\x03\x02\x02\x02"+
		"\u015A\u015C\x071\x02\x02\u015B\u015D\x05\x18\r\x02\u015C\u015B\x03\x02"+
		"\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u0166\x03\x02\x02\x02\u015E"+
		"\u015F\x074\x02\x02\u015F\u0162\x05\x18\r\x02\u0160\u0161\x078\x02\x02"+
		"\u0161\u0163\x05`1\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02"+
		"\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u015E\x03\x02\x02\x02\u0165"+
		"\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02"+
		"\x02\x02\u0167\u016C\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169"+
		"\u016A\x074\x02\x02\u016A\u016B\x077\x02\x02\u016B\u016D\x05\x18\r\x02"+
		"\u016C\u0169\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u0171\x03"+
		"\x02\x02\x02\u016E\u016F\x077\x02\x02\u016F\u0171\x05\x18\r\x02\u0170"+
		"\u012F\x03\x02\x02\x02\u0170\u015A\x03\x02\x02\x02\u0170\u016E\x03\x02"+
		"\x02\x02\u0171\x17\x03\x02\x02\x02\u0172\u0173\x07&\x02\x02\u0173\x19"+
		"\x03\x02\x02\x02\u0174\u017A\x05\x1E\x10\x02\u0175\u0176\x07F\x02\x02"+
		"\u0176\u0177\x05^0\x02\u0177\u0178\x07G\x02\x02\u0178\u017A\x03\x02\x02"+
		"\x02\u0179\u0174\x03\x02\x02\x02\u0179\u0175\x03\x02\x02\x02\u017A\x1B"+
		"\x03\x02\x02\x02\u017B\u017E\x05\x1E\x10\x02\u017C\u017E\x05N(\x02\u017D"+
		"\u017B\x03\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\x1D\x03\x02\x02"+
		"\x02\u017F\u0184\x05 \x11\x02\u0180\u0181\x076\x02\x02\u0181\u0183\x05"+
		" \x11\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02\u0184"+
		"\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0188\x03\x02"+
		"\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u0189\x076\x02\x02\u0188\u0187"+
		"\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02"+
		"\u018A\u018B\x07%\x02\x02\u018B\x1F\x03\x02\x02\x02\u018C\u0195\x05\""+
		"\x12\x02\u018D\u0195\x05(\x15\x02\u018E\u0195\x05*\x16\x02\u018F\u0195"+
		"\x05,\x17\x02\u0190\u0195\x058\x1D\x02\u0191\u0195\x05H%\x02\u0192\u0195"+
		"\x05J&\x02\u0193\u0195\x05L\'\x02\u0194\u018C\x03\x02\x02\x02\u0194\u018D"+
		"\x03\x02\x02\x02\u0194\u018E\x03\x02\x02\x02\u0194\u018F\x03\x02\x02\x02"+
		"\u0194\u0190\x03\x02\x02\x02\u0194\u0191\x03\x02\x02\x02\u0194\u0192\x03"+
		"\x02\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195!\x03\x02\x02\x02\u0196"+
		"\u01A6\x05$\x13\x02\u0197\u019A\x05&\x14\x02\u0198\u019B\x05\xA2R\x02"+
		"\u0199\u019B\x05\x92J\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03"+
		"\x02\x02\x02\u019B\u01A7\x03\x02\x02\x02\u019C\u019F\x078\x02\x02\u019D"+
		"\u01A0\x05\xA2R\x02\u019E\u01A0\x05$\x13\x02\u019F\u019D\x03\x02\x02\x02"+
		"\u019F\u019E\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1\u019C\x03"+
		"\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3"+
		"\u01A4\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02"+
		"\x02\x02\u01A6\u0197\x03\x02\x02\x02\u01A6\u01A3\x03\x02\x02\x02\u01A7"+
		"#\x03\x02\x02\x02\u01A8\u01AB\x05`1\x02\u01A9\u01AB\x05r:\x02\u01AA\u01A8"+
		"\x03\x02\x02\x02\u01AA\u01A9\x03\x02\x02\x02\u01AB\u01B3\x03\x02\x02\x02"+
		"\u01AC\u01AF\x074\x02\x02\u01AD\u01B0\x05`1\x02\u01AE\u01B0\x05r:\x02"+
		"\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\u01B2\x03"+
		"\x02\x02\x02\u01B1\u01AC\x03\x02\x02\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3"+
		"\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B7\x03\x02"+
		"\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B8\x074\x02\x02\u01B7\u01B6"+
		"\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8%\x03\x02\x02\x02\u01B9"+
		"\u01BA\t\x02\x02\x02\u01BA\'\x03\x02\x02\x02\u01BB";
	private static readonly _serializedATNSegment1: string =
		"\u01BC\x07!\x02\x02\u01BC\u01BD\x05\x90I\x02\u01BD)\x03\x02\x02\x02\u01BE"+
		"\u01BF\x07\"\x02\x02\u01BF+\x03\x02\x02\x02\u01C0\u01C6\x05.\x18\x02\u01C1"+
		"\u01C6\x050\x19\x02\u01C2\u01C6\x052\x1A\x02\u01C3\u01C6\x056\x1C\x02"+
		"\u01C4\u01C6\x054\x1B\x02\u01C5\u01C0\x03\x02\x02\x02\u01C5\u01C1\x03"+
		"\x02\x02\x02\u01C5\u01C2\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5"+
		"\u01C4\x03\x02\x02\x02\u01C6-\x03\x02\x02\x02\u01C7\u01C8\x07$\x02\x02"+
		"\u01C8/\x03\x02\x02\x02\u01C9\u01CA\x07#\x02\x02\u01CA1\x03\x02\x02\x02"+
		"\u01CB\u01CD\x07\x05\x02\x02\u01CC\u01CE\x05\x92J\x02\u01CD\u01CC\x03"+
		"\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE3\x03\x02\x02\x02\u01CF"+
		"\u01D0\x05\xA2R\x02\u01D05\x03\x02\x02\x02\u01D1\u01D7\x07\x06\x02\x02"+
		"\u01D2\u01D5\x05`1\x02\u01D3\u01D4\x07\x07\x02\x02\u01D4\u01D6\x05`1\x02"+
		"\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D8\x03"+
		"\x02\x02\x02\u01D7\u01D2\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8"+
		"7\x03\x02\x02\x02\u01D9\u01DC\x05:\x1E\x02\u01DA\u01DC\x05<\x1F\x02\u01DB"+
		"\u01D9\x03\x02\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC9\x03\x02\x02"+
		"\x02\u01DD\u01DE\x07\b\x02\x02\u01DE\u01DF\x05D#\x02\u01DF;\x03\x02\x02"+
		"\x02\u01E0\u01ED\x07\x07\x02\x02\u01E1\u01E3\t\x03\x02\x02\u01E2\u01E1"+
		"\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02"+
		"\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E7\x03\x02\x02\x02\u01E6\u01E4\x03"+
		"\x02\x02\x02\u01E7\u01EE\x05F$\x02\u01E8\u01EA\t\x03\x02\x02\u01E9\u01E8"+
		"\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02"+
		"\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E4\x03"+
		"\x02\x02\x02\u01ED\u01E9\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF"+
		"\u01F6\x07\b\x02\x02\u01F0\u01F7\x071\x02\x02\u01F1\u01F2\x072\x02\x02"+
		"\u01F2\u01F3\x05B\"\x02\u01F3\u01F4\x073\x02\x02\u01F4\u01F7\x03\x02\x02"+
		"\x02\u01F5\u01F7\x05B\"\x02\u01F6\u01F0\x03\x02\x02\x02\u01F6\u01F1\x03"+
		"\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7=\x03\x02\x02\x02\u01F8"+
		"\u01FB\x07&\x02\x02\u01F9\u01FA\x07\t\x02\x02\u01FA\u01FC\x07&\x02\x02"+
		"\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC?\x03\x02"+
		"\x02\x02\u01FD\u0200\x05F$\x02\u01FE\u01FF\x07\t\x02\x02\u01FF\u0201\x07"+
		"&\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201"+
		"A\x03\x02\x02\x02\u0202\u0207\x05> \x02\u0203\u0204\x07/\x02\x02\u0204"+
		"\u0206\x05> \x02\u0205\u0203\x03\x02\x02\x02\u0206\u0209\x03\x02\x02\x02"+
		"\u0207\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u020B\x03"+
		"\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u020A\u020C\x07/\x02\x02\u020B"+
		"\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020CC\x03\x02\x02"+
		"\x02\u020D\u0212\x05@!\x02\u020E\u020F\x07/\x02\x02\u020F\u0211\x05@!"+
		"\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212\u0210"+
		"\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213E\x03\x02\x02\x02\u0214"+
		"\u0212\x03\x02\x02\x02\u0215\u021A\x07&\x02\x02\u0216\u0217\x07/\x02\x02"+
		"\u0217\u0219\x07&\x02\x02\u0218\u0216\x03\x02\x02\x02\u0219\u021C\x03"+
		"\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B"+
		"G\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021D\u021E\x07\n\x02\x02"+
		"\u021E\u0223\x07&\x02\x02\u021F\u0220\x074\x02\x02\u0220\u0222\x07&\x02"+
		"\x02\u0221\u021F\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02\u0223\u0221"+
		"\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224I\x03\x02\x02\x02\u0225"+
		"\u0223\x03\x02\x02\x02\u0226\u0227\x07\v\x02\x02\u0227\u022C\x07&\x02"+
		"\x02\u0228\u0229\x074\x02\x02\u0229\u022B\x07&\x02\x02\u022A\u0228\x03"+
		"\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C"+
		"\u022D\x03\x02\x02\x02\u022DK\x03\x02\x02\x02\u022E\u022C\x03\x02\x02"+
		"\x02\u022F\u0230\x07\f\x02\x02\u0230\u0233\x05`1\x02\u0231\u0232\x074"+
		"\x02\x02\u0232\u0234\x05`1\x02\u0233\u0231\x03\x02\x02\x02\u0233\u0234"+
		"\x03\x02\x02\x02\u0234M\x03\x02\x02\x02\u0235\u023E\x05P)\x02\u0236\u023E"+
		"\x05R*\x02\u0237\u023E\x05T+\x02\u0238\u023E\x05V,\x02\u0239\u023E\x05"+
		"X-\x02\u023A\u023E\x05\x0E\b\x02\u023B\u023E\x05\x96L\x02\u023C\u023E"+
		"\x05\f\x07\x02\u023D\u0235\x03\x02\x02\x02\u023D\u0236\x03\x02\x02\x02"+
		"\u023D\u0237\x03\x02\x02\x02\u023D\u0238\x03\x02\x02\x02\u023D\u0239\x03"+
		"\x02\x02\x02\u023D\u023A\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D"+
		"\u023C\x03\x02\x02\x02\u023EO\x03\x02\x02\x02\u023F\u0240\x07\r\x02\x02"+
		"\u0240\u0241\x05`1\x02\u0241\u0249\x05\x1A\x0E\x02\u0242\u0243\x07\x0F"+
		"\x02\x02\u0243\u0244\x07\r\x02\x02\u0244\u0245\x05`1\x02\u0245\u0246\x05"+
		"\x1A\x0E\x02\u0246\u0248\x03\x02\x02\x02\u0247\u0242\x03\x02\x02\x02\u0248"+
		"\u024B\x03\x02\x02\x02\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02"+
		"\x02\x02\u024A\u024E\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C"+
		"\u024D\x07\x0F\x02\x02\u024D\u024F\x05\x1A\x0E\x02\u024E\u024C\x03\x02"+
		"\x02\x02\u024E\u024F\x03\x02\x02\x02\u024FQ\x03\x02\x02\x02\u0250\u0251"+
		"\x07\x10\x02\x02\u0251\u0252\x05`1\x02\u0252\u0253\x05\x1A\x0E\x02\u0253"+
		"S\x03\x02\x02\x02\u0254\u0255\x07\x11\x02\x02\u0255\u0256\x05\x90I\x02"+
		"\u0256\u0257\x07\x12\x02\x02\u0257\u0258\x05\x92J\x02\u0258\u0259\x05"+
		"\x1A\x0E\x02\u0259U\x03\x02\x02\x02\u025A\u025B\x07\x13\x02\x02\u025B"+
		"\u025C\x075\x02\x02\u025C\u0272\x05^0\x02\u025D\u025E\x05\\/\x02\u025E"+
		"\u025F\x075\x02\x02\u025F\u0260\x05^0\x02\u0260\u0262\x03\x02\x02\x02"+
		"\u0261\u025D\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0261\x03"+
		"\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0268\x03\x02\x02\x02\u0265"+
		"\u0266\x07\x0F\x02\x02\u0266\u0267\x075\x02\x02\u0267\u0269\x05^0\x02"+
		"\u0268\u0265\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026D\x03"+
		"\x02\x02\x02\u026A\u026B\x07\x14\x02\x02\u026B\u026C\x075\x02\x02\u026C"+
		"\u026E\x05^0\x02\u026D\u026A\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02"+
		"\u026E\u0273\x03\x02\x02\x02\u026F\u0270\x07\x14\x02\x02\u0270\u0271\x07"+
		"5\x02\x02\u0271\u0273\x05^0\x02\u0272\u0261\x03\x02\x02\x02\u0272\u026F"+
		"\x03\x02\x02\x02\u0273W\x03\x02\x02\x02\u0274\u0275\x07\x15\x02\x02\u0275"+
		"\u027A\x05Z.\x02\u0276\u0277\x074\x02\x02\u0277\u0279\x05Z.\x02\u0278"+
		"\u0276\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02"+
		"\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C"+
		"\u027A\x03\x02\x02\x02\u027D\u027E\x075\x02\x02\u027E\u027F\x05^0\x02"+
		"\u027FY\x03\x02\x02\x02\u0280\u0283\x05`1\x02\u0281\u0282\x07\t\x02\x02"+
		"\u0282\u0284\x05t;\x02\u0283\u0281\x03\x02\x02\x02\u0283\u0284\x03\x02"+
		"\x02\x02\u0284[\x03\x02\x02\x02\u0285\u028B\x07\x16\x02\x02\u0286\u0289"+
		"\x05`1\x02\u0287\u0288\x07\t\x02\x02\u0288\u028A\x07&\x02\x02\u0289\u0287"+
		"\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028C\x03\x02\x02\x02"+
		"\u028B\u0286\x03\x02\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C]\x03\x02"+
		"\x02\x02\u028D\u0298\x05\x1E\x10\x02\u028E\u028F\x07%\x02\x02\u028F\u0291"+
		"\x07`\x02\x02\u0290\u0292\x05\x1C\x0F\x02\u0291\u0290\x03\x02\x02\x02"+
		"\u0292\u0293\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293\u0294\x03"+
		"\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x07a\x02\x02\u0296"+
		"\u0298\x03\x02\x02\x02\u0297\u028D\x03\x02\x02\x02\u0297\u028E\x03\x02"+
		"\x02\x02\u0298_\x03\x02\x02\x02\u0299\u029F\x05h5\x02\u029A\u029B\x07"+
		"\r\x02\x02\u029B\u029C\x05h5\x02\u029C\u029D\x07\x0F\x02\x02\u029D\u029E"+
		"\x05`1\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u029A\x03\x02\x02\x02\u029F"+
		"\u02A0\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1\u02A3\x05d3\x02"+
		"\u02A2\u0299\x03\x02\x02\x02\u02A2\u02A1\x03\x02\x02\x02\u02A3a\x03\x02"+
		"\x02\x02\u02A4\u02A7\x05h5\x02\u02A5\u02A7\x05f4\x02\u02A6\u02A4\x03\x02"+
		"\x02\x02\u02A6\u02A5\x03\x02\x02\x02\u02A7c\x03\x02\x02\x02\u02A8\u02AA"+
		"\x07\x17\x02\x02\u02A9\u02AB\x05\x16\f\x02\u02AA\u02A9\x03\x02\x02\x02"+
		"\u02AA\u02AB\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x07"+
		"5\x02\x02\u02AD\u02AE\x05`1\x02\u02AEe\x03\x02\x02\x02\u02AF\u02B1\x07"+
		"\x17\x02\x02\u02B0\u02B2\x05\x16\f\x02\u02B1\u02B0\x03\x02\x02\x02\u02B1"+
		"\u02B2\x03\x02\x02\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x075\x02"+
		"\x02\u02B4\u02B5\x05b2\x02\u02B5g\x03\x02\x02\x02\u02B6\u02BB\x05j6\x02"+
		"\u02B7\u02B8\x07\x18\x02\x02\u02B8\u02BA\x05j6\x02\u02B9\u02B7\x03\x02"+
		"\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB"+
		"\u02BC\x03\x02\x02\x02\u02BCi\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02"+
		"\x02\u02BE\u02C3\x05l7\x02\u02BF\u02C0\x07\x19\x02\x02\u02C0\u02C2\x05"+
		"l7\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1"+
		"\x03\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4k\x03\x02\x02\x02\u02C5"+
		"\u02C3\x03\x02\x02\x02\u02C6\u02C7\x07\x1A\x02\x02\u02C7\u02CA\x05l7\x02"+
		"\u02C8\u02CA\x05n8\x02\u02C9\u02C6\x03\x02\x02\x02\u02C9\u02C8\x03\x02"+
		"\x02\x02\u02CAm\x03\x02\x02\x02\u02CB\u02D1\x05r:\x02\u02CC\u02CD\x05"+
		"p9\x02\u02CD\u02CE\x05r:\x02\u02CE\u02D0\x03\x02\x02\x02\u02CF\u02CC\x03"+
		"\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03\x02\x02\x02\u02D1"+
		"\u02D2\x03\x02\x02\x02\u02D2o\x03\x02\x02\x02\u02D3\u02D1\x03\x02\x02"+
		"\x02\u02D4\u02E2\x07H\x02\x02\u02D5\u02E2\x07I\x02\x02\u02D6\u02E2\x07"+
		"J\x02\x02\u02D7\u02E2\x07K\x02\x02\u02D8\u02E2\x07L\x02\x02\u02D9\u02E2"+
		"\x07M\x02\x02\u02DA\u02E2\x07N\x02\x02\u02DB\u02E2\x07\x12\x02\x02\u02DC"+
		"\u02DD\x07\x1A\x02\x02\u02DD\u02E2\x07\x12\x02\x02\u02DE\u02E2\x07\x1B"+
		"\x02\x02\u02DF\u02E0\x07\x1B\x02\x02\u02E0\u02E2\x07\x1A\x02\x02\u02E1"+
		"\u02D4\x03\x02\x02\x02\u02E1\u02D5\x03\x02\x02\x02\u02E1\u02D6\x03\x02"+
		"\x02\x02\u02E1\u02D7\x03\x02\x02\x02\u02E1\u02D8\x03\x02\x02\x02\u02E1"+
		"\u02D9\x03\x02\x02\x02\u02E1\u02DA\x03\x02\x02\x02\u02E1\u02DB\x03\x02"+
		"\x02\x02\u02E1\u02DC\x03\x02\x02\x02\u02E1\u02DE\x03\x02\x02\x02\u02E1"+
		"\u02DF\x03\x02\x02\x02\u02E2q\x03\x02\x02\x02\u02E3\u02E5\x071\x02\x02"+
		"\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x03"+
		"\x02\x02\x02\u02E6\u02E7\x05t;\x02\u02E7s\x03\x02\x02\x02\u02E8\u02ED"+
		"\x05v<\x02\u02E9\u02EA\x07;\x02\x02\u02EA\u02EC\x05v<\x02\u02EB\u02E9"+
		"\x03\x02\x02\x02\u02EC\u02EF\x03\x02\x02\x02\u02ED\u02EB\x03\x02\x02\x02"+
		"\u02ED\u02EE\x03\x02\x02\x02\u02EEu\x03\x02\x02\x02\u02EF\u02ED\x03\x02"+
		"\x02\x02\u02F0\u02F5\x05x=\x02\u02F1\u02F2\x07<\x02\x02\u02F2\u02F4\x05"+
		"x=\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\u02F7\x03\x02\x02\x02\u02F5\u02F3"+
		"\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6w\x03\x02\x02\x02\u02F7"+
		"\u02F5\x03\x02\x02\x02\u02F8\u02FD\x05z>\x02\u02F9\u02FA\x07=\x02\x02"+
		"\u02FA\u02FC\x05z>\x02\u02FB\u02F9\x03\x02\x02\x02\u02FC\u02FF\x03\x02"+
		"\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE"+
		"y\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0307\x05|?\x02\u0301"+
		"\u0302\x07>\x02\x02\u0302\u0306\x05|?\x02\u0303\u0304\x07?\x02\x02\u0304"+
		"\u0306\x05|?\x02\u0305\u0301\x03\x02\x02\x02\u0305\u0303\x03\x02\x02\x02"+
		"\u0306\u0309\x03\x02\x02\x02\u0307\u0305\x03\x02\x02\x02\u0307\u0308\x03"+
		"\x02\x02\x02\u0308{\x03\x02\x02\x02\u0309\u0307\x03\x02\x02\x02\u030A"+
		"\u0311\x05~@\x02\u030B\u030C\x07@\x02\x02\u030C\u0310\x05~@\x02\u030D"+
		"\u030E\x07A\x02\x02\u030E\u0310\x05~@\x02\u030F\u030B\x03\x02\x02\x02"+
		"\u030F\u030D\x03\x02\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311\u030F\x03"+
		"\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312}\x03\x02\x02\x02\u0313"+
		"\u0311\x03\x02\x02\x02\u0314\u0321\x05\x80A\x02\u0315\u0316\x071\x02\x02"+
		"\u0316\u0320\x05\x80A\x02\u0317\u0318\x07B\x02\x02\u0318\u0320\x05\x80"+
		"A\x02\u0319\u031A\x07C\x02\x02\u031A\u0320\x05\x80A\x02\u031B\u031C\x07"+
		"D\x02\x02\u031C\u0320\x05\x80A\x02\u031D\u031E\x07O\x02\x02\u031E\u0320"+
		"\x05\x80A\x02\u031F\u0315\x03\x02\x02\x02\u031F\u0317\x03\x02\x02\x02"+
		"\u031F\u0319\x03\x02\x02\x02\u031F\u031B\x03\x02\x02\x02\u031F\u031D\x03"+
		"\x02\x02\x02\u0320\u0323\x03\x02\x02\x02\u0321\u031F\x03\x02\x02\x02\u0321"+
		"\u0322\x03\x02\x02\x02\u0322\x7F\x03\x02\x02\x02\u0323\u0321\x03\x02\x02"+
		"\x02\u0324\u0325\x07@\x02\x02\u0325\u032C\x05\x80A\x02\u0326\u0327\x07"+
		"A\x02\x02\u0327\u032C\x05\x80A\x02\u0328\u0329\x07E\x02\x02\u0329\u032C"+
		"\x05\x80A\x02\u032A\u032C\x05\x82B\x02\u032B\u0324\x03\x02\x02\x02\u032B"+
		"\u0326\x03\x02\x02\x02\u032B\u0328\x03\x02\x02\x02\u032B\u032A\x03\x02"+
		"\x02\x02\u032C\x81\x03\x02\x02\x02\u032D\u0331\x05\x84C\x02\u032E\u0330"+
		"\x05\x88E\x02\u032F\u032E\x03\x02\x02\x02\u0330\u0333\x03\x02\x02\x02"+
		"\u0331\u032F\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332\u0336\x03"+
		"\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0334\u0335\x077\x02\x02\u0335"+
		"\u0337\x05\x80A\x02\u0336\u0334\x03\x02\x02\x02\u0336\u0337\x03\x02\x02"+
		"\x02\u0337\x83\x03\x02\x02\x02\u0338\u033B\x072\x02\x02\u0339\u033C\x05"+
		"\xA2R\x02\u033A\u033C\x05\x86D\x02\u033B\u0339\x03\x02\x02\x02\u033B\u033A"+
		"\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02"+
		"\u033D\u0354\x073\x02\x02\u033E\u0340\x079\x02\x02\u033F\u0341\x05\x86"+
		"D\x02\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0342"+
		"\x03\x02\x02\x02\u0342\u0354\x07:\x02\x02\u0343\u0345\x07F\x02\x02\u0344"+
		"\u0346\x05\x94K\x02\u0345\u0344\x03\x02\x02\x02\u0345\u0346\x03\x02\x02"+
		"\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0354\x07G\x02\x02\u0348\u0354"+
		"\x07&\x02\x02\u0349\u0354\x05\xA8U\x02\u034A\u034C\x05\xA6T\x02\u034B"+
		"\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034B\x03\x02"+
		"\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0354\x03\x02\x02\x02\u034F"+
		"\u0354\x070\x02\x02\u0350\u0354\x07\x1C\x02\x02\u0351\u0354\x07\x1D\x02"+
		"\x02\u0352\u0354\x07\x1E\x02\x02\u0353\u0338\x03\x02\x02\x02\u0353\u033E"+
		"\x03\x02\x02\x02\u0353\u0343\x03\x02\x02\x02\u0353\u0348\x03\x02\x02\x02"+
		"\u0353\u0349\x03\x02\x02\x02\u0353\u034B\x03\x02\x02\x02\u0353\u034F\x03"+
		"\x02\x02\x02\u0353\u0350\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353"+
		"\u0352\x03\x02\x02\x02\u0354\x85\x03\x02\x02\x02\u0355\u0361\x05`1\x02"+
		"\u0356\u0362\x05\x9EP\x02\u0357\u0358\x074\x02\x02\u0358\u035A\x05`1\x02"+
		"\u0359\u0357\x03\x02\x02\x02\u035A\u035D\x03\x02\x02\x02\u035B\u0359\x03"+
		"\x02\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035F\x03\x02\x02\x02\u035D"+
		"\u035B\x03\x02\x02\x02\u035E\u0360\x074\x02\x02\u035F\u035E\x03\x02\x02"+
		"\x02\u035F\u0360\x03\x02\x02\x02\u0360\u0362\x03\x02\x02\x02\u0361\u0356"+
		"\x03\x02\x02\x02\u0361\u035B\x03\x02\x02\x02\u0362\x87\x03\x02\x02\x02"+
		"\u0363\u0365\x072\x02\x02\u0364\u0366\x05\x98M\x02\u0365\u0364\x03\x02"+
		"\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367"+
		"\u036F\x073\x02\x02\u0368\u0369\x079\x02\x02\u0369\u036A\x05\x8AF\x02"+
		"\u036A\u036B\x07:\x02\x02\u036B\u036F\x03\x02\x02\x02\u036C\u036D\x07"+
		"/\x02\x02\u036D\u036F\x07&\x02\x02\u036E\u0363\x03\x02\x02\x02\u036E\u0368"+
		"\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036F\x89\x03\x02\x02\x02"+
		"\u0370\u0375\x05\x8CG\x02\u0371\u0372\x074\x02\x02\u0372\u0374\x05\x8C"+
		"G\x02\u0373\u0371\x03\x02\x02\x02\u0374\u0377\x03\x02\x02\x02\u0375\u0373"+
		"\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u0379\x03\x02\x02\x02"+
		"\u0377\u0375\x03\x02\x02\x02\u0378\u037A\x074\x02\x02\u0379\u0378\x03"+
		"\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\x8B\x03\x02\x02\x02\u037B"+
		"\u0387\x05`1\x02\u037C\u037E\x05`1\x02\u037D\u037C\x03\x02\x02\x02\u037D"+
		"\u037E\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0381\x075\x02"+
		"\x02\u0380\u0382\x05`1\x02\u0381\u0380\x03\x02\x02\x02\u0381\u0382\x03"+
		"\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0385\x05\x8EH\x02\u0384"+
		"\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0387\x03\x02"+
		"\x02\x02\u0386\u037B\x03\x02\x02\x02\u0386\u037D\x03\x02\x02\x02\u0387"+
		"\x8D\x03\x02\x02\x02\u0388\u038A\x075\x02\x02\u0389\u038B\x05`1\x02\u038A"+
		"\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\x8F\x03\x02\x02"+
		"\x02\u038C\u0391\x05r:\x02\u038D\u038E\x074\x02\x02\u038E\u0390\x05r:"+
		"\x02\u038F\u038D\x03\x02\x02\x02\u0390\u0393\x03\x02\x02\x02\u0391\u038F"+
		"\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0395\x03\x02\x02\x02"+
		"\u0393\u0391\x03\x02\x02\x02\u0394\u0396\x074\x02\x02\u0395\u0394\x03"+
		"\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\x91\x03\x02\x02\x02\u0397"+
		"\u039C\x05`1\x02\u0398\u0399\x074\x02\x02\u0399\u039B\x05`1\x02\u039A"+
		"\u0398\x03\x02\x02\x02\u039B\u039E\x03\x02\x02\x02\u039C\u039A\x03\x02"+
		"\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u03A0\x03\x02\x02\x02\u039E"+
		"\u039C\x03\x02\x02\x02\u039F\u03A1\x074\x02\x02\u03A0\u039F\x03\x02\x02"+
		"\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\x93\x03\x02\x02\x02\u03A2\u03A3"+
		"\x05`1\x02\u03A3\u03A4\x075\x02\x02\u03A4\u03B3\x05`1\x02\u03A5\u03B4"+
		"\x05\x9EP\x02\u03A6\u03A7\x074\x02\x02\u03A7\u03A8\x05`1\x02\u03A8\u03A9"+
		"\x075\x02\x02\u03A9\u03AA\x05`1\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB"+
		"\u03A6\x03\x02\x02\x02\u03AC\u03AF\x03\x02\x02\x02\u03AD\u03AB\x03\x02"+
		"\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF"+
		"\u03AD\x03\x02\x02\x02\u03B0\u03B2\x074\x02\x02\u03B1\u03B0\x03\x02\x02"+
		"\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B4\x03\x02\x02\x02\u03B3\u03A5"+
		"\x03\x02\x02\x02\u03B3\u03AD\x03\x02\x02\x02\u03B4\u03C4\x03\x02\x02\x02"+
		"\u03B5\u03C1\x05`1\x02\u03B6\u03C2\x05\x9EP\x02\u03B7\u03B8\x074\x02\x02"+
		"\u03B8\u03BA\x05`1\x02\u03B9\u03B7\x03\x02\x02\x02\u03BA\u03BD\x03\x02"+
		"\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC"+
		"\u03BF\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03C0\x074\x02"+
		"\x02\u03BF\u03BE\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0\u03C2"+
		"\x03\x02\x02\x02\u03C1\u03B6\x03\x02\x02\x02\u03C1\u03BB\x03\x02\x02\x02"+
		"\u03C2\u03C4\x03\x02\x02\x02\u03C3\u03A2\x03\x02\x02\x02\u03C3\u03B5\x03"+
		"\x02\x02\x02\u03C4\x95\x03\x02\x02\x02\u03C5\u03C6\x07\x1F\x02\x02\u03C6"+
		"\u03CC\x07&\x02\x02\u03C7\u03C9\x072\x02\x02\u03C8\u03CA\x05\x98M\x02"+
		"\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03"+
		"\x02\x02\x02\u03CB\u03CD\x073\x02\x02\u03CC\u03C7\x03\x02\x02\x02\u03CC"+
		"\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x075\x02"+
		"\x02\u03CF\u03D0\x05^0\x02\u03D0\x97\x03\x02\x02\x02\u03D1\u03D2\x05\x9A"+
		"N\x02\u03D2\u03D3\x074\x02\x02\u03D3\u03D5\x03\x02\x02\x02\u03D4\u03D1"+
		"\x03\x02\x02\x02\u03D5\u03D8\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02"+
		"\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03ED\x03\x02\x02\x02\u03D8\u03D6\x03"+
		"\x02\x02\x02\u03D9\u03DB\x05\x9AN\x02\u03DA\u03DC\x074\x02\x02\u03DB\u03DA"+
		"\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03EE\x03\x02\x02\x02"+
		"\u03DD\u03DE\x071\x02\x02\u03DE\u03E3\x05`1\x02\u03DF\u03E0\x074\x02\x02"+
		"\u03E0\u03E2\x05\x9AN\x02\u03E1\u03DF\x03\x02\x02\x02\u03E2\u03E5\x03"+
		"\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4"+
		"\u03E9\x03\x02\x02\x02\u03E5\u03E3\x03\x02\x02\x02\u03E6\u03E7\x074\x02"+
		"\x02\u03E7\u03E8\x077\x02\x02\u03E8\u03EA\x05`1\x02\u03E9\u03E6\x03\x02"+
		"\x02\x02\u03E9\u03EA\x03\x02\x02\x02\u03EA\u03EE\x03\x02\x02\x02\u03EB"+
		"\u03EC\x077\x02\x02\u03EC\u03EE\x05`1\x02\u03ED\u03D9\x03\x02\x02\x02"+
		"\u03ED\u03DD\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\x99\x03"+
		"\x02\x02\x02\u03EF\u03F1\x05`1\x02\u03F0\u03F2\x05\x9EP\x02\u03F1\u03F0"+
		"\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F8\x03\x02\x02\x02"+
		"\u03F3\u03F4\x05`1\x02\u03F4\u03F5\x078\x02\x02\u03F5\u03F6\x05`1\x02"+
		"\u03F6\u03F8\x03\x02\x02\x02\u03F7\u03EF\x03\x02\x02\x02\u03F7\u03F3\x03"+
		"\x02\x02\x02\u03F8\x9B\x03\x02\x02\x02\u03F9\u03FC\x05\x9EP\x02\u03FA"+
		"\u03FC\x05\xA0Q\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FA\x03\x02\x02"+
		"\x02\u03FC\x9D\x03\x02\x02\x02\u03FD\u03FE\x07\x11\x02\x02\u03FE\u03FF"+
		"\x05\x90I\x02\u03FF\u0400\x07\x12\x02\x02\u0400\u0402\x05h5\x02\u0401"+
		"\u0403\x05\x9CO\x02\u0402\u0401\x03\x02\x02\x02\u0402\u0403\x03\x02\x02"+
		"\x02\u0403\x9F\x03\x02\x02\x02\u0404\u0405\x07\r\x02\x02\u0405\u0407\x05"+
		"b2\x02\u0406\u0408\x05\x9CO\x02\u0407\u0406\x03\x02\x02\x02\u0407\u0408"+
		"\x03\x02\x02\x02\u0408\xA1\x03\x02\x02\x02\u0409\u040B\x07 \x02\x02\u040A"+
		"\u040C\x05\xA4S\x02\u040B\u040A\x03\x02\x02\x02\u040B\u040C\x03\x02\x02"+
		"\x02\u040C\xA3\x03\x02\x02\x02\u040D\u040E\x07\x07\x02\x02\u040E\u0411"+
		"\x05`1\x02\u040F\u0411\x05\x92J\x02\u0410\u040D\x03\x02\x02\x02\u0410"+
		"\u040F\x03\x02\x02\x02\u0411\xA5\x03\x02\x02\x02\u0412\u0413\t\x04\x02"+
		"\x02\u0413\xA7\x03\x02\x02\x02\u0414\u0418\x05\xAAV\x02\u0415\u0418\x07"+
		"-\x02\x02\u0416\u0418\x07.\x02\x02\u0417\u0414\x03\x02\x02\x02\u0417\u0415"+
		"\x03\x02\x02\x02\u0417\u0416\x03\x02\x02\x02\u0418\xA9\x03\x02\x02\x02"+
		"\u0419\u041A\t\x05\x02\x02\u041A\xAB\x03\x02\x02\x02\x96\xB1\xB5\xB7\xC0"+
		"\xC9\xCC\xD3\xD8\xE3\xEA\xF0\xF4\xFA\u0100\u0104\u010A\u010E\u0110\u0114"+
		"\u011A\u011E\u0124\u0128\u012D\u0132\u0138\u013C\u0142\u0148\u014C\u0152"+
		"\u0156\u0158\u015C\u0162\u0166\u016C\u0170\u0179\u017D\u0184\u0188\u0194"+
		"\u019A\u019F\u01A3\u01A6\u01AA\u01AF\u01B3\u01B7\u01C5\u01CD\u01D5\u01D7"+
		"\u01DB\u01E4\u01EB\u01ED\u01F6\u01FB\u0200\u0207\u020B\u0212\u021A\u0223"+
		"\u022C\u0233\u023D\u0249\u024E\u0263\u0268\u026D\u0272\u027A\u0283\u0289"+
		"\u028B\u0293\u0297\u029F\u02A2\u02A6\u02AA\u02B1\u02BB\u02C3\u02C9\u02D1"+
		"\u02E1\u02E4\u02ED\u02F5\u02FD\u0305\u0307\u030F\u0311\u031F\u0321\u032B"+
		"\u0331\u0336\u033B\u0340\u0345\u034D\u0353\u035B\u035F\u0361\u0365\u036E"+
		"\u0375\u0379\u037D\u0381\u0384\u0386\u038A\u0391\u0395\u039C\u03A0\u03AD"+
		"\u03B1\u03B3\u03BB\u03BF\u03C1\u03C3\u03C9\u03CC\u03D6\u03DB\u03E3\u03E9"+
		"\u03ED\u03F1\u03F7\u03FB\u0402\u0407\u040B\u0410\u0417";
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
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACE, 0); }
	public suite(): SuiteContext | undefined {
		return this.tryGetRuleContext(0, SuiteContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.CLOSE_BRACE, 0); }
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
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
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


