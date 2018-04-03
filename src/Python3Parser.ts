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
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly DEF=16;
	public static readonly RETURN=17;
	public static readonly RAISE=18;
	public static readonly FROM=19;
	public static readonly IMPORT=20;
	public static readonly AS=21;
	public static readonly GLOBAL=22;
	public static readonly NONLOCAL=23;
	public static readonly ASSERT=24;
	public static readonly IF=25;
	public static readonly ELIF=26;
	public static readonly ELSE=27;
	public static readonly WHILE=28;
	public static readonly FOR=29;
	public static readonly IN=30;
	public static readonly TRY=31;
	public static readonly FINALLY=32;
	public static readonly WITH=33;
	public static readonly EXCEPT=34;
	public static readonly LAMBDA=35;
	public static readonly OR=36;
	public static readonly AND=37;
	public static readonly NOT=38;
	public static readonly IS=39;
	public static readonly NONE=40;
	public static readonly TRUE=41;
	public static readonly FALSE=42;
	public static readonly CLASS=43;
	public static readonly YIELD=44;
	public static readonly DEL=45;
	public static readonly PASS=46;
	public static readonly CONTINUE=47;
	public static readonly BREAK=48;
	public static readonly NEWLINE=49;
	public static readonly NAME=50;
	public static readonly STRING_LITERAL=51;
	public static readonly BYTES_LITERAL=52;
	public static readonly DECIMAL_INTEGER=53;
	public static readonly OCT_INTEGER=54;
	public static readonly HEX_INTEGER=55;
	public static readonly BIN_INTEGER=56;
	public static readonly FLOAT_NUMBER=57;
	public static readonly IMAG_NUMBER=58;
	public static readonly DOT=59;
	public static readonly OPEN_PAREN=60;
	public static readonly CLOSE_PAREN=61;
	public static readonly COMMA=62;
	public static readonly COLON=63;
	public static readonly POWER=64;
	public static readonly ASSIGN=65;
	public static readonly OPEN_BRACK=66;
	public static readonly CLOSE_BRACK=67;
	public static readonly ADD=68;
	public static readonly MINUS=69;
	public static readonly DIV=70;
	public static readonly MOD=71;
	public static readonly IDIV=72;
	public static readonly OPEN_BRACE=73;
	public static readonly CLOSE_BRACE=74;
	public static readonly LESS_THAN=75;
	public static readonly GREATER_THAN=76;
	public static readonly EQUALS=77;
	public static readonly GT_EQ=78;
	public static readonly LT_EQ=79;
	public static readonly NOT_EQ_2=80;
	public static readonly ADD_ASSIGN=81;
	public static readonly SUB_ASSIGN=82;
	public static readonly MULT_ASSIGN=83;
	public static readonly DIV_ASSIGN=84;
	public static readonly MOD_ASSIGN=85;
	public static readonly POWER_ASSIGN=86;
	public static readonly SKIP_=87;
	public static readonly UNKNOWN_CHAR=88;
	public static readonly INDENT=89;
	public static readonly DEDENT=90;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_funcdef = 3;
	public static readonly RULE_parameters = 4;
	public static readonly RULE_varargslist = 5;
	public static readonly RULE_vfpdef = 6;
	public static readonly RULE_block_stmt = 7;
	public static readonly RULE_stmt = 8;
	public static readonly RULE_simple_stmt = 9;
	public static readonly RULE_small_stmt = 10;
	public static readonly RULE_expr_stmt = 11;
	public static readonly RULE_testlist_star_expr = 12;
	public static readonly RULE_augassign = 13;
	public static readonly RULE_flow_stmt = 14;
	public static readonly RULE_break_stmt = 15;
	public static readonly RULE_continue_stmt = 16;
	public static readonly RULE_return_stmt = 17;
	public static readonly RULE_import_stmt = 18;
	public static readonly RULE_import_name = 19;
	public static readonly RULE_import_from = 20;
	public static readonly RULE_import_as_name = 21;
	public static readonly RULE_dotted_as_name = 22;
	public static readonly RULE_import_as_names = 23;
	public static readonly RULE_dotted_as_names = 24;
	public static readonly RULE_dotted_name = 25;
	public static readonly RULE_compound_stmt = 26;
	public static readonly RULE_if_stmt = 27;
	public static readonly RULE_while_stmt = 28;
	public static readonly RULE_for_stmt = 29;
	public static readonly RULE_suite = 30;
	public static readonly RULE_test = 31;
	public static readonly RULE_test_nocond = 32;
	public static readonly RULE_or_test = 33;
	public static readonly RULE_and_test = 34;
	public static readonly RULE_not_test = 35;
	public static readonly RULE_comparison = 36;
	public static readonly RULE_comp_op = 37;
	public static readonly RULE_star_expr = 38;
	public static readonly RULE_expr = 39;
	public static readonly RULE_xor_expr = 40;
	public static readonly RULE_and_expr = 41;
	public static readonly RULE_shift_expr = 42;
	public static readonly RULE_arith_expr = 43;
	public static readonly RULE_term = 44;
	public static readonly RULE_factor = 45;
	public static readonly RULE_power = 46;
	public static readonly RULE_atom = 47;
	public static readonly RULE_testlist_comp = 48;
	public static readonly RULE_trailer = 49;
	public static readonly RULE_subscriptlist = 50;
	public static readonly RULE_subscript = 51;
	public static readonly RULE_exprlist = 52;
	public static readonly RULE_testlist = 53;
	public static readonly RULE_dictorsetmaker = 54;
	public static readonly RULE_arglist = 55;
	public static readonly RULE_argument = 56;
	public static readonly RULE_comp_iter = 57;
	public static readonly RULE_comp_for = 58;
	public static readonly RULE_comp_if = 59;
	public static readonly RULE_str = 60;
	public static readonly RULE_number = 61;
	public static readonly RULE_integer = 62;
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "funcdef", "parameters", "varargslist", 
		"vfpdef", "block_stmt", "stmt", "simple_stmt", "small_stmt", "expr_stmt", 
		"testlist_star_expr", "augassign", "flow_stmt", "break_stmt", "continue_stmt", 
		"return_stmt", "import_stmt", "import_name", "import_from", "import_as_name", 
		"dotted_as_name", "import_as_names", "dotted_as_names", "dotted_name", 
		"compound_stmt", "if_stmt", "while_stmt", "for_stmt", "suite", "test", 
		"test_nocond", "or_test", "and_test", "not_test", "comparison", "comp_op", 
		"star_expr", "expr", "xor_expr", "and_expr", "shift_expr", "arith_expr", 
		"term", "factor", "power", "atom", "testlist_comp", "trailer", "subscriptlist", 
		"subscript", "exprlist", "testlist", "dictorsetmaker", "arglist", "argument", 
		"comp_iter", "comp_for", "comp_if", "str", "number", "integer"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'end'", "'@='", "'&='", "'|='", "'<<='", "'>>='", "'**='", 
		"'//='", "'...'", "'*'", "'<>'", "'|'", "'&'", "'<<'", "'>>'", "'funcion'", 
		"'retorno'", "'raise'", "'desde'", "'importar'", "'as'", "'global'", "'nonlocal'", 
		"'assert'", "'if'", "'elif'", "'else'", "'while'", "'for'", "'in'", "'try'", 
		"'finally'", "'with'", "'except'", "'lambda'", "'||'", "'&&'", "'!'", 
		"'is'", "'nil'", "'true'", "'false'", "'class'", "'yield'", "'del'", "'pass'", 
		"'continue'", "'break'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'.'", "'('", "')'", 
		"','", "':'", "'^'", "'='", "'['", "']'", "'+'", "'-'", "'/'", "'%'", 
		"'//'", "'{'", "'}'", "'<'", "'>'", "'=='", "'>='", "'<='", "'!='", "'+='", 
		"'-='", "'*='", "'/='", "'%='", "'^='"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "DEF", "RETURN", "RAISE", "FROM", "IMPORT", "AS", 
		"GLOBAL", "NONLOCAL", "ASSERT", "IF", "ELIF", "ELSE", "WHILE", "FOR", 
		"IN", "TRY", "FINALLY", "WITH", "EXCEPT", "LAMBDA", "OR", "AND", "NOT", 
		"IS", "NONE", "TRUE", "FALSE", "CLASS", "YIELD", "DEL", "PASS", "CONTINUE", 
		"BREAK", "NEWLINE", "NAME", "STRING_LITERAL", "BYTES_LITERAL", "DECIMAL_INTEGER", 
		"OCT_INTEGER", "HEX_INTEGER", "BIN_INTEGER", "FLOAT_NUMBER", "IMAG_NUMBER", 
		"DOT", "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "POWER", "ASSIGN", 
		"OPEN_BRACK", "CLOSE_BRACK", "ADD", "MINUS", "DIV", "MOD", "IDIV", "OPEN_BRACE", 
		"CLOSE_BRACE", "LESS_THAN", "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", 
		"NOT_EQ_2", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", 
		"POWER_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "INDENT", "DEDENT"
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
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			case Python3Parser.T__8:
			case Python3Parser.T__9:
			case Python3Parser.RETURN:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.compound_stmt();
				this.state = 129;
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
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.T__8) | (1 << Python3Parser.T__9) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.CONTINUE - 38)) | (1 << (Python3Parser.BREAK - 38)) | (1 << (Python3Parser.NEWLINE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
				{
				this.state = 135;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.NEWLINE:
					{
					this.state = 133;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				case Python3Parser.T__8:
				case Python3Parser.T__9:
				case Python3Parser.DEF:
				case Python3Parser.RETURN:
				case Python3Parser.FROM:
				case Python3Parser.IMPORT:
				case Python3Parser.IF:
				case Python3Parser.WHILE:
				case Python3Parser.FOR:
				case Python3Parser.NOT:
				case Python3Parser.NONE:
				case Python3Parser.TRUE:
				case Python3Parser.FALSE:
				case Python3Parser.CONTINUE:
				case Python3Parser.BREAK:
				case Python3Parser.NAME:
				case Python3Parser.STRING_LITERAL:
				case Python3Parser.DECIMAL_INTEGER:
				case Python3Parser.FLOAT_NUMBER:
				case Python3Parser.OPEN_PAREN:
				case Python3Parser.OPEN_BRACK:
				case Python3Parser.ADD:
				case Python3Parser.MINUS:
				case Python3Parser.OPEN_BRACE:
					{
					this.state = 134;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 140;
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
			this.state = 142;
			this.testlist();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.NEWLINE) {
				{
				{
				this.state = 143;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
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
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Python3Parser.RULE_funcdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(Python3Parser.DEF);
			this.state = 152;
			this.match(Python3Parser.NAME);
			this.state = 153;
			this.parameters();
			this.state = 154;
			this.suite();
			this.state = 155;
			this.match(Python3Parser.T__0);
			this.state = 156;
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
		this.enterRule(_localctx, 8, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.NAME) {
				{
				this.state = 159;
				this.varargslist();
				}
			}

			this.state = 162;
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
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.vfpdef();
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 165;
				this.match(Python3Parser.COMMA);
				this.state = 166;
				this.vfpdef();
				}
				}
				this.state = 171;
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
	public vfpdef(): VfpdefContext {
		let _localctx: VfpdefContext = new VfpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
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
		this.enterRule(_localctx, 14, Python3Parser.RULE_block_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.simple_stmt();
				}
				break;

			case 2:
				{
				this.state = 175;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 176;
				this.suite();
				this.state = 177;
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
		this.enterRule(_localctx, 16, Python3Parser.RULE_stmt);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.T__8:
			case Python3Parser.T__9:
			case Python3Parser.RETURN:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 181;
				this.simple_stmt();
				}
				break;
			case Python3Parser.DEF:
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
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
		this.enterRule(_localctx, 18, Python3Parser.RULE_simple_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.small_stmt();
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
		this.enterRule(_localctx, 20, Python3Parser.RULE_small_stmt);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.T__8:
			case Python3Parser.T__9:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.expr_stmt();
				}
				break;
			case Python3Parser.RETURN:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 189;
				this.import_stmt();
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
		this.enterRule(_localctx, 22, Python3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.testlist_star_expr();
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.T__1:
			case Python3Parser.T__2:
			case Python3Parser.T__3:
			case Python3Parser.T__4:
			case Python3Parser.T__5:
			case Python3Parser.T__6:
			case Python3Parser.T__7:
			case Python3Parser.ADD_ASSIGN:
			case Python3Parser.SUB_ASSIGN:
			case Python3Parser.MULT_ASSIGN:
			case Python3Parser.DIV_ASSIGN:
			case Python3Parser.MOD_ASSIGN:
			case Python3Parser.POWER_ASSIGN:
				{
				this.state = 193;
				this.augassign();
				{
				this.state = 194;
				this.testlist();
				}
				}
				break;
			case Python3Parser.EOF:
			case Python3Parser.T__0:
			case Python3Parser.T__8:
			case Python3Parser.T__9:
			case Python3Parser.DEF:
			case Python3Parser.RETURN:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.IF:
			case Python3Parser.ELSE:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NEWLINE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.ASSIGN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.OPEN_BRACE:
			case Python3Parser.CLOSE_BRACE:
			case Python3Parser.DEDENT:
				{
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.ASSIGN) {
					{
					{
					this.state = 196;
					this.match(Python3Parser.ASSIGN);
					{
					this.state = 197;
					this.testlist_star_expr();
					}
					}
					}
					this.state = 202;
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
		this.enterRule(_localctx, 24, Python3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
			case 1:
				{
				this.state = 205;
				this.test();
				}
				break;

			case 2:
				{
				this.state = 206;
				this.star_expr();
				}
				break;
			}
			this.state = 216;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 209;
					this.match(Python3Parser.COMMA);
					this.state = 212;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,12,this._ctx) ) {
					case 1:
						{
						this.state = 210;
						this.test();
						}
						break;

					case 2:
						{
						this.state = 211;
						this.star_expr();
						}
						break;
					}
					}
					} 
				}
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			}
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 219;
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
		this.enterRule(_localctx, 26, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.T__1) | (1 << Python3Parser.T__2) | (1 << Python3Parser.T__3) | (1 << Python3Parser.T__4) | (1 << Python3Parser.T__5) | (1 << Python3Parser.T__6) | (1 << Python3Parser.T__7))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (Python3Parser.ADD_ASSIGN - 81)) | (1 << (Python3Parser.SUB_ASSIGN - 81)) | (1 << (Python3Parser.MULT_ASSIGN - 81)) | (1 << (Python3Parser.DIV_ASSIGN - 81)) | (1 << (Python3Parser.MOD_ASSIGN - 81)) | (1 << (Python3Parser.POWER_ASSIGN - 81)))) !== 0)) ) {
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
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python3Parser.RULE_flow_stmt);
		try {
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				this.break_stmt();
				}
				break;
			case Python3Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 225;
				this.continue_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 226;
				this.return_stmt();
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
		this.enterRule(_localctx, 30, Python3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
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
		this.enterRule(_localctx, 32, Python3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
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
		this.enterRule(_localctx, 34, Python3Parser.RULE_return_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(Python3Parser.RETURN);
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				{
				this.state = 234;
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
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python3Parser.RULE_import_stmt);
		try {
			this.state = 239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.import_name();
				}
				break;
			case Python3Parser.FROM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 238;
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
		this.enterRule(_localctx, 38, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(Python3Parser.IMPORT);
			this.state = 242;
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
		this.enterRule(_localctx, 40, Python3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(Python3Parser.FROM);
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.T__8 || _la===Python3Parser.DOT) {
					{
					{
					this.state = 245;
					_la = this._input.LA(1);
					if ( !(_la===Python3Parser.T__8 || _la===Python3Parser.DOT) ) {
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
					this.state = 250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 251;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 253; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 252;
					_la = this._input.LA(1);
					if ( !(_la===Python3Parser.T__8 || _la===Python3Parser.DOT) ) {
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
					this.state = 255; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python3Parser.T__8 || _la===Python3Parser.DOT );
				}
				break;
			}
			this.state = 259;
			this.match(Python3Parser.IMPORT);
			this.state = 266;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.T__9:
				{
				this.state = 260;
				this.match(Python3Parser.T__9);
				}
				break;
			case Python3Parser.OPEN_PAREN:
				{
				this.state = 261;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 262;
				this.import_as_names();
				this.state = 263;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.NAME:
				{
				this.state = 265;
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
		this.enterRule(_localctx, 42, Python3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(Python3Parser.NAME);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 269;
				this.match(Python3Parser.AS);
				this.state = 270;
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
		this.enterRule(_localctx, 44, Python3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.dotted_name();
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.AS) {
				{
				this.state = 274;
				this.match(Python3Parser.AS);
				this.state = 275;
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
		this.enterRule(_localctx, 46, Python3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.import_as_name();
			this.state = 283;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 279;
					this.match(Python3Parser.DOT);
					this.state = 280;
					this.import_as_name();
					}
					} 
				}
				this.state = 285;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,24,this._ctx);
			}
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.DOT) {
				{
				this.state = 286;
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
		this.enterRule(_localctx, 48, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.dotted_as_name();
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.DOT) {
				{
				{
				this.state = 290;
				this.match(Python3Parser.DOT);
				this.state = 291;
				this.dotted_as_name();
				}
				}
				this.state = 296;
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
		this.enterRule(_localctx, 50, Python3Parser.RULE_dotted_name);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(Python3Parser.NAME);
			this.state = 302;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 298;
					this.match(Python3Parser.DOT);
					this.state = 299;
					this.match(Python3Parser.NAME);
					}
					} 
				}
				this.state = 304;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,27,this._ctx);
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
		this.enterRule(_localctx, 52, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 305;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 306;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 307;
				this.for_stmt();
				}
				break;
			case Python3Parser.DEF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 308;
				this.funcdef();
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
		this.enterRule(_localctx, 54, Python3Parser.RULE_if_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(Python3Parser.IF);
			this.state = 312;
			this.test();
			this.state = 313;
			this.block_stmt();
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 314;
					this.match(Python3Parser.ELSE);
					this.state = 315;
					this.match(Python3Parser.IF);
					this.state = 316;
					this.test();
					this.state = 317;
					this.block_stmt();
					}
					} 
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
			}
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.ELSE) {
				{
				this.state = 324;
				this.match(Python3Parser.ELSE);
				this.state = 325;
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
		this.enterRule(_localctx, 56, Python3Parser.RULE_while_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(Python3Parser.WHILE);
			this.state = 329;
			this.test();
			this.state = 330;
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
		this.enterRule(_localctx, 58, Python3Parser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(Python3Parser.FOR);
			this.state = 333;
			this.exprlist();
			this.state = 334;
			this.match(Python3Parser.IN);
			this.state = 335;
			this.testlist();
			this.state = 336;
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
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.T__8:
			case Python3Parser.T__9:
			case Python3Parser.RETURN:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
			case Python3Parser.NOT:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.CONTINUE:
			case Python3Parser.BREAK:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.simple_stmt();
				}
				break;
			case Python3Parser.NEWLINE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 339;
				this.match(Python3Parser.NEWLINE);
				this.state = 340;
				this.match(Python3Parser.INDENT);
				this.state = 342; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 341;
					this.stmt();
					}
					}
					this.state = 344; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.T__8) | (1 << Python3Parser.T__9) | (1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.CONTINUE - 38)) | (1 << (Python3Parser.BREAK - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE );
				this.state = 346;
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
		this.enterRule(_localctx, 62, Python3Parser.RULE_test);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.or_test();
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				{
				this.state = 351;
				this.match(Python3Parser.IF);
				this.state = 352;
				this.or_test();
				this.state = 353;
				this.match(Python3Parser.ELSE);
				this.state = 354;
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
	public test_nocond(): Test_nocondContext {
		let _localctx: Test_nocondContext = new Test_nocondContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Python3Parser.RULE_test_nocond);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.or_test();
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
		this.enterRule(_localctx, 66, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.and_test();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR) {
				{
				{
				this.state = 361;
				this.match(Python3Parser.OR);
				this.state = 362;
				this.and_test();
				}
				}
				this.state = 367;
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
		this.enterRule(_localctx, 68, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.not_test();
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND) {
				{
				{
				this.state = 369;
				this.match(Python3Parser.AND);
				this.state = 370;
				this.not_test();
				}
				}
				this.state = 375;
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
		this.enterRule(_localctx, 70, Python3Parser.RULE_not_test);
		try {
			this.state = 379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 376;
				this.match(Python3Parser.NOT);
				this.state = 377;
				this.not_test();
				}
				break;
			case Python3Parser.T__8:
			case Python3Parser.T__9:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.ADD:
			case Python3Parser.MINUS:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 378;
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
		this.enterRule(_localctx, 72, Python3Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.star_expr();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.T__10 || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (Python3Parser.LESS_THAN - 75)) | (1 << (Python3Parser.GREATER_THAN - 75)) | (1 << (Python3Parser.EQUALS - 75)) | (1 << (Python3Parser.GT_EQ - 75)) | (1 << (Python3Parser.LT_EQ - 75)) | (1 << (Python3Parser.NOT_EQ_2 - 75)))) !== 0)) {
				{
				{
				this.state = 382;
				this.comp_op();
				this.state = 383;
				this.star_expr();
				}
				}
				this.state = 389;
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
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python3Parser.RULE_comp_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			_la = this._input.LA(1);
			if ( !(_la===Python3Parser.T__10 || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (Python3Parser.LESS_THAN - 75)) | (1 << (Python3Parser.GREATER_THAN - 75)) | (1 << (Python3Parser.EQUALS - 75)) | (1 << (Python3Parser.GT_EQ - 75)) | (1 << (Python3Parser.LT_EQ - 75)) | (1 << (Python3Parser.NOT_EQ_2 - 75)))) !== 0)) ) {
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
	public star_expr(): Star_exprContext {
		let _localctx: Star_exprContext = new Star_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Python3Parser.RULE_star_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.T__9) {
				{
				this.state = 392;
				this.match(Python3Parser.T__9);
				}
			}

			this.state = 395;
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
		this.enterRule(_localctx, 78, Python3Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.xor_expr();
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.T__11) {
				{
				{
				this.state = 398;
				this.match(Python3Parser.T__11);
				this.state = 399;
				this.xor_expr();
				}
				}
				this.state = 404;
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
		this.enterRule(_localctx, 80, Python3Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.and_expr();
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.POWER) {
				{
				{
				this.state = 406;
				this.match(Python3Parser.POWER);
				this.state = 407;
				this.and_expr();
				}
				}
				this.state = 412;
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
		this.enterRule(_localctx, 82, Python3Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.shift_expr();
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.T__12) {
				{
				{
				this.state = 414;
				this.match(Python3Parser.T__12);
				this.state = 415;
				this.shift_expr();
				}
				}
				this.state = 420;
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
		this.enterRule(_localctx, 84, Python3Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.arith_expr();
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.T__13 || _la===Python3Parser.T__14) {
				{
				this.state = 426;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.T__13:
					{
					this.state = 422;
					this.match(Python3Parser.T__13);
					this.state = 423;
					this.arith_expr();
					}
					break;
				case Python3Parser.T__14:
					{
					this.state = 424;
					this.match(Python3Parser.T__14);
					this.state = 425;
					this.arith_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 430;
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
		this.enterRule(_localctx, 86, Python3Parser.RULE_arith_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.term();
			this.state = 438;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,45,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 436;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.ADD:
						{
						this.state = 432;
						this.match(Python3Parser.ADD);
						this.state = 433;
						this.term();
						}
						break;
					case Python3Parser.MINUS:
						{
						this.state = 434;
						this.match(Python3Parser.MINUS);
						this.state = 435;
						this.term();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,45,this._ctx);
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
		this.enterRule(_localctx, 88, Python3Parser.RULE_term);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.factor();
			this.state = 450;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 448;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.T__9:
						{
						this.state = 442;
						this.match(Python3Parser.T__9);
						this.state = 443;
						this.factor();
						}
						break;
					case Python3Parser.DIV:
						{
						this.state = 444;
						this.match(Python3Parser.DIV);
						this.state = 445;
						this.factor();
						}
						break;
					case Python3Parser.MOD:
						{
						this.state = 446;
						this.match(Python3Parser.MOD);
						this.state = 447;
						this.factor();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 452;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
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
		this.enterRule(_localctx, 90, Python3Parser.RULE_factor);
		try {
			this.state = 458;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 453;
				this.match(Python3Parser.ADD);
				this.state = 454;
				this.factor();
				}
				break;
			case Python3Parser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.match(Python3Parser.MINUS);
				this.state = 456;
				this.factor();
				}
				break;
			case Python3Parser.T__8:
			case Python3Parser.NONE:
			case Python3Parser.TRUE:
			case Python3Parser.FALSE:
			case Python3Parser.NAME:
			case Python3Parser.STRING_LITERAL:
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
			case Python3Parser.OPEN_PAREN:
			case Python3Parser.OPEN_BRACK:
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 457;
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
		this.enterRule(_localctx, 92, Python3Parser.RULE_power);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.atom();
			this.state = 464;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 461;
					this.trailer();
					}
					} 
				}
				this.state = 466;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,49,this._ctx);
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
		this.enterRule(_localctx, 94, Python3Parser.RULE_atom);
		let _la: number;
		try {
			let _alt: number;
			this.state = 493;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.T__8 || _la===Python3Parser.T__9 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
					{
					this.state = 468;
					this.testlist_comp();
					}
				}

				this.state = 471;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.T__8 || _la===Python3Parser.T__9 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
					{
					this.state = 473;
					this.testlist_comp();
					}
				}

				this.state = 476;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 477;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.T__8 || _la===Python3Parser.T__9 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
					{
					this.state = 478;
					this.dictorsetmaker();
					}
				}

				this.state = 481;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 482;
				this.match(Python3Parser.NAME);
				}
				break;
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 483;
				this.number();
				}
				break;
			case Python3Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 485; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 484;
						this.str();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 487; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,53,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case Python3Parser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 489;
				this.match(Python3Parser.T__8);
				}
				break;
			case Python3Parser.NONE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 490;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 491;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 492;
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
		this.enterRule(_localctx, 96, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.test();
			this.state = 507;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				{
				this.state = 496;
				this.comp_for();
				}
				break;
			case Python3Parser.CLOSE_PAREN:
			case Python3Parser.COMMA:
			case Python3Parser.CLOSE_BRACK:
				{
				this.state = 501;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,55,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 497;
						this.match(Python3Parser.COMMA);
						this.state = 498;
						this.test();
						}
						} 
					}
					this.state = 503;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,55,this._ctx);
				}
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.COMMA) {
					{
					this.state = 504;
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
		this.enterRule(_localctx, 98, Python3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 511;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.T__8 || _la===Python3Parser.T__9 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
					{
					this.state = 510;
					this.arglist();
					}
				}

				this.state = 513;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 515;
				this.subscriptlist();
				this.state = 516;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 518;
				this.match(Python3Parser.DOT);
				this.state = 519;
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
		this.enterRule(_localctx, 100, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.subscript();
			this.state = 527;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,60,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 523;
					this.match(Python3Parser.COMMA);
					this.state = 524;
					this.subscript();
					}
					} 
				}
				this.state = 529;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,60,this._ctx);
			}
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 530;
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
		this.enterRule(_localctx, 102, Python3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 533;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.T__8 || _la===Python3Parser.T__9 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
					{
					this.state = 534;
					this.test();
					}
				}

				this.state = 537;
				this.match(Python3Parser.COLON);
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.T__8 || _la===Python3Parser.T__9 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NOT - 38)) | (1 << (Python3Parser.NONE - 38)) | (1 << (Python3Parser.TRUE - 38)) | (1 << (Python3Parser.FALSE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)))) !== 0) || _la===Python3Parser.OPEN_BRACE) {
					{
					this.state = 538;
					this.test();
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
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.star_expr();
			this.state = 548;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 544;
					this.match(Python3Parser.COMMA);
					this.state = 545;
					this.star_expr();
					}
					} 
				}
				this.state = 550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
			}
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 551;
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
		this.enterRule(_localctx, 106, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.test();
			this.state = 559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,67,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 555;
					this.match(Python3Parser.COMMA);
					this.state = 556;
					this.test();
					}
					} 
				}
				this.state = 561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,67,this._ctx);
			}
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 562;
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
		this.enterRule(_localctx, 108, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.state = 598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,75,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				this.test();
				this.state = 566;
				this.match(Python3Parser.COLON);
				this.state = 567;
				this.test();
				this.state = 582;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 568;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 576;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 569;
							this.match(Python3Parser.COMMA);
							this.state = 570;
							this.test();
							this.state = 571;
							this.match(Python3Parser.COLON);
							this.state = 572;
							this.test();
							}
							} 
						}
						this.state = 578;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
					}
					this.state = 580;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 579;
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
				this.state = 584;
				this.test();
				this.state = 596;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.FOR:
					{
					this.state = 585;
					this.comp_for();
					}
					break;
				case Python3Parser.COMMA:
				case Python3Parser.CLOSE_BRACE:
					{
					this.state = 590;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,72,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 586;
							this.match(Python3Parser.COMMA);
							this.state = 587;
							this.test();
							}
							} 
						}
						this.state = 592;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,72,this._ctx);
					}
					this.state = 594;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python3Parser.COMMA) {
						{
						this.state = 593;
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
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 600;
			this.argument();
			}
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 601;
				this.match(Python3Parser.COMMA);
				this.state = 602;
				this.argument();
				}
				}
				this.state = 607;
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
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Python3Parser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
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
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Python3Parser.RULE_comp_iter);
		try {
			this.state = 612;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 610;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 611;
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
		this.enterRule(_localctx, 116, Python3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(Python3Parser.FOR);
			this.state = 615;
			this.exprlist();
			this.state = 616;
			this.match(Python3Parser.IN);
			this.state = 617;
			this.or_test();
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 618;
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
		this.enterRule(_localctx, 118, Python3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(Python3Parser.IF);
			this.state = 622;
			this.test_nocond();
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.IF || _la===Python3Parser.FOR) {
				{
				this.state = 623;
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
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Python3Parser.RULE_str);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(Python3Parser.STRING_LITERAL);
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
		this.enterRule(_localctx, 122, Python3Parser.RULE_number);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DECIMAL_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 628;
				this.integer();
				}
				break;
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 629;
				this.match(Python3Parser.FLOAT_NUMBER);
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
		this.enterRule(_localctx, 124, Python3Parser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(Python3Parser.DECIMAL_INTEGER);
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
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\\\u027D\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05"+
		"\x02\x86\n\x02\x03\x03\x03\x03\x07\x03\x8A\n\x03\f\x03\x0E\x03\x8D\v\x03"+
		"\x03\x03\x03\x03\x03\x04\x03\x04\x07\x04\x93\n\x04\f\x04\x0E\x04\x96\v"+
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03"+
		"\x05\x03\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06\x03\x06\x03\x07\x03\x07"+
		"\x03\x07\x07\x07\xAA\n\x07\f\x07\x0E\x07\xAD\v\x07\x03\b\x03\b\x03\t\x03"+
		"\t\x03\t\x03\t\x03\t\x05\t\xB6\n\t\x03\n\x03\n\x05\n\xBA\n\n\x03\v\x03"+
		"\v\x03\f\x03\f\x03\f\x05\f\xC1\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r"+
		"\x07\r\xC9\n\r\f\r\x0E\r\xCC\v\r\x05\r\xCE\n\r\x03\x0E\x03\x0E\x05\x0E"+
		"\xD2\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD7\n\x0E\x07\x0E\xD9\n\x0E"+
		"\f\x0E\x0E\x0E\xDC\v\x0E\x03\x0E\x05\x0E\xDF\n\x0E\x03\x0F\x03\x0F\x03"+
		"\x10\x03\x10\x03\x10\x05\x10\xE6\n\x10\x03\x11\x03\x11\x03\x12\x03\x12"+
		"\x03\x13\x03\x13\x05\x13\xEE\n\x13\x03\x14\x03\x14\x05\x14\xF2\n\x14\x03"+
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\xF9\n\x16\f\x16\x0E\x16\xFC"+
		"\v\x16\x03\x16\x03\x16\x06\x16\u0100\n\x16\r\x16\x0E\x16\u0101\x05\x16"+
		"\u0104\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05"+
		"\x16\u010D\n\x16\x03\x17\x03\x17\x03\x17\x05\x17\u0112\n\x17\x03\x18\x03"+
		"\x18\x03\x18\x05\x18\u0117\n\x18\x03\x19\x03\x19\x03\x19\x07\x19\u011C"+
		"\n\x19\f\x19\x0E\x19\u011F\v\x19\x03\x19\x05\x19\u0122\n\x19\x03\x1A\x03"+
		"\x1A\x03\x1A\x07\x1A\u0127\n\x1A\f\x1A\x0E\x1A\u012A\v\x1A\x03\x1B\x03"+
		"\x1B\x03\x1B\x07\x1B\u012F\n\x1B\f\x1B\x0E\x1B\u0132\v\x1B\x03\x1C\x03"+
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0138\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D"+
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0142\n\x1D\f\x1D\x0E\x1D\u0145"+
		"\v\x1D\x03\x1D\x03\x1D\x05\x1D\u0149\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03"+
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03"+
		" \x06 \u0159\n \r \x0E \u015A\x03 \x03 \x05 \u015F\n \x03!\x03!\x03!\x03"+
		"!\x03!\x03!\x05!\u0167\n!\x03\"\x03\"\x03#\x03#\x03#\x07#\u016E\n#\f#"+
		"\x0E#\u0171\v#\x03$\x03$\x03$\x07$\u0176\n$\f$\x0E$\u0179\v$\x03%\x03"+
		"%\x03%\x05%\u017E\n%\x03&\x03&\x03&\x03&\x07&\u0184\n&\f&\x0E&\u0187\v"+
		"&\x03\'\x03\'\x03(\x05(\u018C\n(\x03(\x03(\x03)\x03)\x03)\x07)\u0193\n"+
		")\f)\x0E)\u0196\v)\x03*\x03*\x03*\x07*\u019B\n*\f*\x0E*\u019E\v*\x03+"+
		"\x03+\x03+\x07+\u01A3\n+\f+\x0E+\u01A6\v+\x03,\x03,\x03,\x03,\x03,\x07"+
		",\u01AD\n,\f,\x0E,\u01B0\v,\x03-\x03-\x03-\x03-\x03-\x07-\u01B7\n-\f-"+
		"\x0E-\u01BA\v-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u01C3\n.\f.\x0E"+
		".\u01C6\v.\x03/\x03/\x03/\x03/\x03/\x05/\u01CD\n/\x030\x030\x070\u01D1"+
		"\n0\f0\x0E0\u01D4\v0\x031\x031\x051\u01D8\n1\x031\x031\x031\x051\u01DD"+
		"\n1\x031\x031\x031\x051\u01E2\n1\x031\x031\x031\x031\x061\u01E8\n1\r1"+
		"\x0E1\u01E9\x031\x031\x031\x031\x051\u01F0\n1\x032\x032\x032\x032\x07"+
		"2\u01F6\n2\f2\x0E2\u01F9\v2\x032\x052\u01FC\n2\x052\u01FE\n2\x033\x03"+
		"3\x053\u0202\n3\x033\x033\x033\x033\x033\x033\x033\x053\u020B\n3\x034"+
		"\x034\x034\x074\u0210\n4\f4\x0E4\u0213\v4\x034\x054\u0216\n4\x035\x03"+
		"5\x055\u021A\n5\x035\x035\x055\u021E\n5\x055\u0220\n5\x036\x036\x036\x07"+
		"6\u0225\n6\f6\x0E6\u0228\v6\x036\x056\u022B\n6\x037\x037\x037\x077\u0230"+
		"\n7\f7\x0E7\u0233\v7\x037\x057\u0236\n7\x038\x038\x038\x038\x038\x038"+
		"\x038\x038\x038\x078\u0241\n8\f8\x0E8\u0244\v8\x038\x058\u0247\n8\x05"+
		"8\u0249\n8\x038\x038\x038\x038\x078\u024F\n8\f8\x0E8\u0252\v8\x038\x05"+
		"8\u0255\n8\x058\u0257\n8\x058\u0259\n8\x039\x039\x039\x079\u025E\n9\f"+
		"9\x0E9\u0261\v9\x03:\x03:\x03;\x03;\x05;\u0267\n;\x03<\x03<\x03<\x03<"+
		"\x03<\x05<\u026E\n<\x03=\x03=\x03=\x05=\u0273\n=\x03>\x03>\x03?\x03?\x05"+
		"?\u0279\n?\x03@\x03@\x03@\x02\x02\x02A\x02\x02\x04\x02\x06\x02\b\x02\n"+
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C"+
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026"+
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02"+
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02"+
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x02\x05\x04\x02\x04\nSX"+
		"\x04\x02\v\v==\x04\x02\r\rMR\u029F\x02\x85\x03\x02\x02\x02\x04\x8B\x03"+
		"\x02\x02\x02\x06\x90\x03\x02\x02\x02\b\x99\x03\x02\x02\x02\n\xA0\x03\x02"+
		"\x02\x02\f\xA6\x03\x02\x02\x02\x0E\xAE\x03\x02\x02\x02\x10\xB5\x03\x02"+
		"\x02\x02\x12\xB9\x03\x02\x02\x02\x14\xBB\x03\x02\x02\x02\x16\xC0\x03\x02"+
		"\x02\x02\x18\xC2\x03\x02\x02\x02\x1A\xD1\x03\x02\x02\x02\x1C\xE0\x03\x02"+
		"\x02\x02\x1E\xE5\x03\x02\x02\x02 \xE7\x03\x02\x02\x02\"\xE9\x03\x02\x02"+
		"\x02$\xEB\x03\x02\x02\x02&\xF1\x03\x02\x02\x02(\xF3\x03\x02\x02\x02*\xF6"+
		"\x03\x02\x02\x02,\u010E\x03\x02\x02\x02.\u0113\x03\x02\x02\x020\u0118"+
		"\x03\x02\x02\x022\u0123\x03\x02\x02\x024\u012B\x03\x02\x02\x026\u0137"+
		"\x03\x02\x02\x028\u0139\x03\x02\x02\x02:\u014A\x03\x02\x02\x02<\u014E"+
		"\x03\x02\x02\x02>\u015E\x03\x02\x02\x02@\u0160\x03\x02\x02\x02B\u0168"+
		"\x03\x02\x02\x02D\u016A\x03\x02\x02\x02F\u0172\x03\x02\x02\x02H\u017D"+
		"\x03\x02\x02\x02J\u017F\x03\x02\x02\x02L\u0188\x03\x02\x02\x02N\u018B"+
		"\x03\x02\x02\x02P\u018F\x03\x02\x02\x02R\u0197\x03\x02\x02\x02T\u019F"+
		"\x03\x02\x02\x02V\u01A7\x03\x02\x02\x02X\u01B1\x03\x02\x02\x02Z\u01BB"+
		"\x03\x02\x02\x02\\\u01CC\x03\x02\x02\x02^\u01CE\x03\x02\x02\x02`\u01EF"+
		"\x03\x02\x02\x02b\u01F1\x03\x02\x02\x02d\u020A\x03\x02\x02\x02f\u020C"+
		"\x03\x02\x02\x02h\u021F\x03\x02\x02\x02j\u0221\x03\x02\x02\x02l\u022C"+
		"\x03\x02\x02\x02n\u0258\x03\x02\x02\x02p\u025A\x03\x02\x02\x02r\u0262"+
		"\x03\x02\x02\x02t\u0266\x03\x02\x02\x02v\u0268\x03\x02\x02\x02x\u026F"+
		"\x03\x02\x02\x02z\u0274\x03\x02\x02\x02|\u0278\x03\x02\x02\x02~\u027A"+
		"\x03\x02\x02\x02\x80\x86\x073\x02\x02\x81\x86\x05\x14\v\x02\x82\x83\x05"+
		"6\x1C\x02\x83\x84\x073\x02\x02\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02"+
		"\x02\x02\x85\x81\x03\x02\x02\x02\x85\x82\x03\x02\x02\x02\x86\x03\x03\x02"+
		"\x02\x02\x87\x8A\x073\x02\x02\x88\x8A\x05\x12\n\x02\x89\x87\x03\x02\x02"+
		"\x02\x89\x88\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02"+
		"\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8B\x03\x02\x02"+
		"\x02\x8E\x8F\x07\x02\x02\x03\x8F\x05\x03\x02\x02\x02\x90\x94\x05l7\x02"+
		"\x91\x93\x073\x02\x02\x92\x91\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02"+
		"\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02"+
		"\x96\x94\x03\x02\x02\x02\x97\x98\x07\x02\x02\x03\x98\x07\x03\x02\x02\x02"+
		"\x99\x9A\x07\x12\x02\x02\x9A\x9B\x074\x02\x02\x9B\x9C\x05\n\x06\x02\x9C"+
		"\x9D\x05> \x02\x9D\x9E\x07\x03\x02\x02\x9E\x9F\x07\x12\x02\x02\x9F\t\x03"+
		"\x02\x02\x02\xA0\xA2\x07>\x02\x02\xA1\xA3\x05\f\x07\x02\xA2\xA1\x03\x02"+
		"\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07?"+
		"\x02\x02\xA5\v\x03\x02\x02\x02\xA6\xAB\x05\x0E\b\x02\xA7\xA8\x07@\x02"+
		"\x02\xA8\xAA\x05\x0E\b\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02\x02"+
		"\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\r\x03\x02\x02"+
		"\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x074\x02\x02\xAF\x0F\x03\x02\x02"+
		"\x02\xB0\xB6\x05\x14\v\x02\xB1\xB2\x07K\x02\x02\xB2\xB3\x05> \x02\xB3"+
		"\xB4\x07L\x02\x02\xB4\xB6\x03\x02\x02\x02\xB5\xB0\x03\x02\x02\x02\xB5"+
		"\xB1\x03\x02\x02\x02\xB6\x11\x03\x02\x02\x02\xB7\xBA\x05\x14\v\x02\xB8"+
		"\xBA\x056\x1C\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA"+
		"\x13\x03\x02\x02\x02\xBB\xBC\x05\x16\f\x02\xBC\x15\x03\x02\x02\x02\xBD"+
		"\xC1\x05\x18\r\x02\xBE\xC1\x05\x1E\x10\x02\xBF\xC1\x05&\x14\x02\xC0\xBD"+
		"\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\x17"+
		"\x03\x02\x02\x02\xC2\xCD\x05\x1A\x0E\x02\xC3\xC4\x05\x1C\x0F\x02\xC4\xC5"+
		"\x05l7\x02\xC5\xCE\x03\x02\x02\x02\xC6\xC7\x07C\x02\x02\xC7\xC9\x05\x1A"+
		"\x0E\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02"+
		"\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02"+
		"\x02\x02\xCD\xC3\x03\x02\x02\x02\xCD\xCA\x03\x02\x02\x02\xCE\x19\x03\x02"+
		"\x02\x02\xCF\xD2\x05@!\x02\xD0\xD2\x05N(\x02\xD1\xCF\x03\x02\x02\x02\xD1"+
		"\xD0\x03\x02\x02\x02\xD2\xDA\x03\x02\x02\x02\xD3\xD6\x07@\x02\x02\xD4"+
		"\xD7\x05@!\x02\xD5\xD7\x05N(\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5\x03\x02"+
		"\x02\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD3\x03\x02\x02\x02\xD9\xDC\x03\x02"+
		"\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDE\x03\x02"+
		"\x02\x02\xDC\xDA\x03\x02\x02\x02\xDD\xDF\x07@\x02\x02\xDE\xDD\x03\x02"+
		"\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\x1B\x03\x02\x02\x02\xE0\xE1\t\x02"+
		"\x02\x02\xE1\x1D\x03\x02\x02\x02\xE2\xE6\x05 \x11\x02\xE3\xE6\x05\"\x12"+
		"\x02\xE4\xE6\x05$\x13\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03\x02\x02"+
		"\x02\xE5\xE4\x03\x02\x02\x02\xE6\x1F\x03\x02\x02\x02\xE7\xE8\x072\x02"+
		"\x02\xE8!\x03\x02\x02\x02\xE9\xEA\x071\x02\x02\xEA#\x03\x02\x02\x02\xEB"+
		"\xED\x07\x13\x02\x02\xEC\xEE\x05l7\x02\xED\xEC\x03\x02\x02\x02\xED\xEE"+
		"\x03\x02\x02\x02\xEE%\x03\x02\x02\x02\xEF\xF2\x05(\x15\x02\xF0\xF2\x05"+
		"*\x16\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF0\x03\x02\x02\x02\xF2\'\x03\x02"+
		"\x02\x02\xF3\xF4\x07\x16\x02\x02\xF4\xF5\x052\x1A\x02\xF5)\x03\x02\x02"+
		"\x02\xF6\u0103\x07\x15\x02\x02\xF7\xF9\t\x03\x02\x02\xF8\xF7\x03\x02\x02"+
		"\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02"+
		"\x02\xFB\xFD\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0104\x054\x1B"+
		"\x02\xFE\u0100\t\x03\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02"+
		"\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0104"+
		"\x03\x02\x02\x02\u0103\xFA\x03\x02\x02\x02\u0103\xFF\x03\x02\x02\x02\u0104"+
		"\u0105\x03\x02\x02\x02\u0105\u010C\x07\x16\x02\x02\u0106\u010D\x07\f\x02"+
		"\x02\u0107\u0108\x07>\x02\x02\u0108\u0109\x050\x19\x02\u0109\u010A\x07"+
		"?\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u010D\x050\x19\x02\u010C\u0106"+
		"\x03\x02\x02\x02\u010C\u0107\x03\x02\x02\x02\u010C\u010B\x03\x02\x02\x02"+
		"\u010D+\x03\x02\x02\x02\u010E\u0111\x074\x02\x02\u010F\u0110\x07\x17\x02"+
		"\x02\u0110\u0112\x074\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112"+
		"\x03\x02\x02\x02\u0112-\x03\x02\x02\x02\u0113\u0116\x054\x1B\x02\u0114"+
		"\u0115\x07\x17\x02\x02\u0115\u0117\x074\x02\x02\u0116\u0114\x03\x02\x02"+
		"\x02\u0116\u0117\x03\x02\x02\x02\u0117/\x03\x02\x02\x02\u0118\u011D\x05"+
		",\x17\x02\u0119\u011A\x07=\x02\x02\u011A\u011C\x05,\x17\x02\u011B\u0119"+
		"\x03\x02\x02\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02"+
		"\u011D\u011E\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03"+
		"\x02\x02\x02\u0120\u0122\x07=\x02\x02\u0121\u0120\x03\x02\x02\x02\u0121"+
		"\u0122\x03\x02\x02\x02\u01221\x03\x02\x02\x02\u0123\u0128\x05.\x18\x02"+
		"\u0124\u0125\x07=\x02\x02\u0125\u0127\x05.\x18\x02\u0126\u0124\x03\x02"+
		"\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128"+
		"\u0129\x03\x02\x02\x02\u01293\x03\x02\x02\x02\u012A\u0128\x03\x02\x02"+
		"\x02\u012B\u0130\x074\x02\x02\u012C\u012D\x07=\x02\x02\u012D\u012F\x07"+
		"4\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130"+
		"\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u01315\x03\x02\x02"+
		"\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0138\x058\x1D\x02\u0134\u0138"+
		"\x05:\x1E\x02\u0135\u0138\x05<\x1F\x02\u0136\u0138\x05\b\x05\x02\u0137"+
		"\u0133\x03\x02\x02\x02\u0137\u0134\x03\x02\x02\x02\u0137\u0135\x03\x02"+
		"\x02\x02\u0137\u0136\x03\x02\x02\x02\u01387\x03\x02\x02\x02\u0139\u013A"+
		"\x07\x1B\x02\x02\u013A\u013B\x05@!\x02\u013B\u0143\x05\x10\t\x02\u013C"+
		"\u013D\x07\x1D\x02\x02\u013D\u013E\x07\x1B\x02\x02\u013E\u013F\x05@!\x02"+
		"\u013F\u0140\x05\x10\t\x02\u0140\u0142\x03\x02\x02\x02\u0141\u013C\x03"+
		"\x02\x02\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143"+
		"\u0144\x03\x02\x02\x02\u0144\u0148\x03\x02\x02\x02\u0145\u0143\x03\x02"+
		"\x02\x02\u0146\u0147\x07\x1D\x02\x02\u0147\u0149\x05\x10\t\x02\u0148\u0146"+
		"\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u01499\x03\x02\x02\x02\u014A"+
		"\u014B\x07\x1E\x02\x02\u014B\u014C\x05@!\x02\u014C\u014D\x05\x10\t\x02"+
		"\u014D;\x03\x02\x02\x02\u014E\u014F\x07\x1F\x02\x02\u014F\u0150\x05j6"+
		"\x02\u0150\u0151\x07 \x02\x02\u0151\u0152\x05l7\x02\u0152\u0153\x05\x10"+
		"\t\x02\u0153=\x03\x02\x02\x02\u0154\u015F\x05\x14\v\x02\u0155\u0156\x07"+
		"3\x02\x02\u0156\u0158\x07[\x02\x02\u0157\u0159\x05\x12\n\x02\u0158\u0157"+
		"\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02"+
		"\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x07"+
		"\\\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u0154\x03\x02\x02\x02\u015E"+
		"\u0155\x03\x02\x02\x02\u015F?\x03\x02\x02\x02\u0160\u0166\x05D#\x02\u0161"+
		"\u0162\x07\x1B\x02\x02\u0162\u0163\x05D#\x02\u0163\u0164\x07\x1D\x02\x02"+
		"\u0164\u0165\x05@!\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0161\x03\x02"+
		"\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167A\x03\x02\x02\x02\u0168\u0169"+
		"\x05D#\x02\u0169C\x03\x02\x02\x02\u016A\u016F\x05F$\x02\u016B\u016C\x07"+
		"&\x02\x02\u016C\u016E\x05F$\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0171"+
		"\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02"+
		"\u0170E\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0177\x05H%"+
		"\x02\u0173\u0174\x07\'\x02\x02\u0174\u0176\x05H%\x02\u0175\u0173\x03\x02"+
		"\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177"+
		"\u0178\x03\x02\x02\x02\u0178G\x03\x02\x02\x02\u0179\u0177\x03\x02\x02"+
		"\x02\u017A\u017B\x07(\x02\x02\u017B\u017E\x05H%\x02\u017C\u017E\x05J&"+
		"\x02\u017D\u017A\x03\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017EI\x03"+
		"\x02\x02\x02\u017F\u0185\x05N(\x02\u0180\u0181\x05L\'\x02\u0181\u0182"+
		"\x05N(\x02\u0182\u0184\x03\x02\x02\x02\u0183\u0180\x03\x02\x02\x02\u0184"+
		"\u0187\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02"+
		"\x02\x02\u0186K\x03\x02\x02\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189"+
		"\t\x04\x02\x02\u0189M\x03\x02\x02\x02\u018A\u018C\x07\f\x02\x02\u018B"+
		"\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u018D\x03\x02"+
		"\x02\x02\u018D\u018E\x05P)\x02\u018EO\x03\x02\x02\x02\u018F\u0194\x05"+
		"R*\x02\u0190\u0191\x07\x0E\x02\x02\u0191\u0193\x05R*\x02\u0192\u0190\x03"+
		"\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194"+
		"\u0195\x03\x02\x02\x02\u0195Q\x03\x02\x02\x02\u0196\u0194\x03\x02\x02"+
		"\x02\u0197\u019C\x05T+\x02\u0198\u0199\x07B\x02\x02\u0199\u019B\x05T+"+
		"\x02\u019A\u0198\x03\x02\x02\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019A"+
		"\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019DS\x03\x02\x02\x02\u019E"+
		"\u019C\x03\x02\x02\x02\u019F\u01A4\x05V,\x02\u01A0\u01A1\x07\x0F\x02\x02"+
		"\u01A1\u01A3\x05V,\x02\u01A2\u01A0\x03\x02\x02\x02\u01A3\u01A6\x03\x02"+
		"\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5"+
		"U\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01AE\x05X-\x02\u01A8"+
		"\u01A9\x07\x10\x02\x02\u01A9\u01AD\x05X-\x02\u01AA\u01AB\x07\x11\x02\x02"+
		"\u01AB\u01AD\x05X-\x02\u01AC\u01A8\x03\x02\x02\x02\u01AC\u01AA\x03\x02"+
		"\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE"+
		"\u01AF\x03\x02\x02\x02\u01AFW\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02"+
		"\x02\u01B1\u01B8\x05Z.\x02\u01B2\u01B3\x07F\x02\x02\u01B3\u01B7\x05Z."+
		"\x02\u01B4\u01B5\x07G\x02\x02\u01B5\u01B7\x05Z.\x02\u01B6\u01B2\x03\x02"+
		"\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8"+
		"\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9Y\x03\x02\x02"+
		"\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01C4\x05\\/\x02\u01BC\u01BD\x07"+
		"\f\x02\x02\u01BD\u01C3\x05\\/\x02\u01BE\u01BF\x07H\x02\x02\u01BF\u01C3"+
		"\x05\\/\x02\u01C0\u01C1\x07I\x02\x02\u01C1\u01C3\x05\\/\x02\u01C2\u01BC"+
		"\x03\x02\x02\x02\u01C2\u01BE\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02"+
		"\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03"+
		"\x02\x02\x02\u01C5[\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7"+
		"\u01C8\x07F\x02\x02\u01C8\u01CD\x05\\/\x02\u01C9\u01CA\x07G\x02\x02\u01CA"+
		"\u01CD\x05\\/\x02\u01CB\u01CD\x05^0\x02\u01CC\u01C7\x03\x02\x02\x02\u01CC"+
		"\u01C9\x03\x02\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD]\x03\x02\x02"+
		"\x02\u01CE\u01D2\x05`1\x02\u01CF\u01D1\x05d3\x02\u01D0\u01CF\x03\x02\x02"+
		"\x02\u01D1\u01D4\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3"+
		"\x03\x02\x02\x02\u01D3_\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5"+
		"\u01D7\x07>\x02\x02\u01D6\u01D8\x05b2\x02\u01D7\u01D6\x03\x02\x02\x02"+
		"\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01F0\x07"+
		"?\x02\x02\u01DA\u01DC\x07D\x02\x02\u01DB\u01DD\x05b2\x02\u01DC\u01DB\x03"+
		"\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE"+
		"\u01F0\x07E\x02\x02\u01DF\u01E1\x07K\x02\x02\u01E0\u01E2\x05n8\x02\u01E1"+
		"\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02"+
		"\x02\x02\u01E3\u01F0\x07L\x02\x02\u01E4\u01F0\x074\x02\x02\u01E5\u01F0"+
		"\x05|?\x02\u01E6\u01E8\x05z>\x02\u01E7\u01E6\x03\x02\x02\x02\u01E8\u01E9"+
		"\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02"+
		"\u01EA\u01F0\x03\x02\x02\x02\u01EB\u01F0\x07\v\x02\x02\u01EC\u01F0\x07"+
		"*\x02\x02\u01ED\u01F0\x07+\x02\x02\u01EE\u01F0\x07,\x02\x02\u01EF\u01D5"+
		"\x03\x02\x02\x02\u01EF\u01DA\x03\x02\x02\x02\u01EF\u01DF\x03\x02\x02\x02"+
		"\u01EF\u01E4\x03\x02\x02\x02\u01EF\u01E5\x03\x02\x02\x02\u01EF\u01E7\x03"+
		"\x02\x02\x02\u01EF\u01EB\x03\x02\x02\x02\u01EF\u01EC\x03\x02\x02\x02\u01EF"+
		"\u01ED\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0a\x03\x02\x02"+
		"\x02\u01F1\u01FD\x05@!\x02\u01F2\u01FE\x05v<\x02\u01F3\u01F4\x07@\x02"+
		"\x02\u01F4\u01F6\x05@!\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F9\x03"+
		"\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8"+
		"\u01FB\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA\u01FC\x07@\x02"+
		"\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FE"+
		"\x03\x02\x02\x02\u01FD\u01F2\x03\x02\x02\x02\u01FD\u01F7\x03\x02\x02\x02"+
		"\u01FEc\x03\x02\x02\x02\u01FF\u0201\x07>\x02\x02\u0200\u0202\x05p9\x02"+
		"\u0201\u0200\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x03"+
		"\x02\x02\x02\u0203\u020B\x07?\x02\x02\u0204\u0205\x07D\x02\x02\u0205\u0206"+
		"\x05f4\x02\u0206\u0207\x07E\x02\x02\u0207\u020B\x03\x02\x02\x02\u0208"+
		"\u0209\x07=\x02\x02\u0209\u020B\x074\x02\x02\u020A\u01FF\x03\x02\x02\x02"+
		"\u020A\u0204\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020Be\x03\x02"+
		"\x02\x02\u020C\u0211\x05h5\x02\u020D\u020E\x07@\x02\x02\u020E\u0210\x05"+
		"h5\x02\u020F\u020D\x03\x02\x02\x02\u0210\u0213\x03\x02\x02\x02\u0211\u020F"+
		"\x03\x02\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0215\x03\x02\x02\x02"+
		"\u0213\u0211\x03\x02\x02\x02\u0214\u0216\x07@\x02\x02\u0215\u0214\x03"+
		"\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216g\x03\x02\x02\x02\u0217"+
		"\u0220\x05@!\x02\u0218\u021A\x05@!\x02\u0219\u0218\x03\x02\x02\x02\u0219"+
		"\u021A\x03\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x07A\x02"+
		"\x02\u021C\u021E\x05@!\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03"+
		"\x02\x02\x02\u021E\u0220\x03\x02\x02\x02\u021F\u0217\x03\x02\x02\x02\u021F"+
		"\u0219\x03\x02\x02\x02\u0220i\x03\x02\x02\x02\u0221\u0226\x05N(\x02\u0222"+
		"\u0223\x07@\x02\x02\u0223\u0225\x05N(\x02\u0224\u0222\x03\x02\x02\x02"+
		"\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03"+
		"\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02\x02\x02\u0229"+
		"\u022B\x07@\x02\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B\x03\x02\x02"+
		"\x02\u022Bk\x03\x02\x02\x02\u022C\u0231\x05@!\x02\u022D\u022E\x07@";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u022E\u0230\x05@!\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0233"+
		"\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02"+
		"\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234\u0236\x07"+
		"@\x02\x02\u0235\u0234\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236"+
		"m\x03\x02\x02\x02\u0237\u0238\x05@!\x02\u0238\u0239\x07A\x02\x02\u0239"+
		"\u0248\x05@!\x02\u023A\u0249\x05v<\x02\u023B\u023C\x07@\x02\x02\u023C"+
		"\u023D\x05@!\x02\u023D\u023E\x07A\x02\x02\u023E\u023F\x05@!\x02\u023F"+
		"\u0241\x03\x02\x02\x02\u0240\u023B\x03\x02\x02\x02\u0241\u0244\x03\x02"+
		"\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243"+
		"\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0247\x07@\x02"+
		"\x02\u0246\u0245\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0249"+
		"\x03\x02\x02\x02\u0248\u023A\x03\x02\x02\x02\u0248\u0242\x03\x02\x02\x02"+
		"\u0249\u0259\x03\x02\x02\x02\u024A\u0256\x05@!\x02\u024B\u0257\x05v<\x02"+
		"\u024C\u024D\x07@\x02\x02\u024D\u024F\x05@!\x02\u024E\u024C\x03\x02\x02"+
		"\x02\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0250\u0251"+
		"\x03\x02\x02\x02\u0251\u0254\x03\x02\x02\x02\u0252\u0250\x03\x02\x02\x02"+
		"\u0253\u0255\x07@\x02\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03"+
		"\x02\x02\x02\u0255\u0257\x03\x02\x02\x02\u0256\u024B\x03\x02\x02\x02\u0256"+
		"\u0250\x03\x02\x02\x02\u0257\u0259\x03\x02\x02\x02\u0258\u0237\x03\x02"+
		"\x02\x02\u0258\u024A\x03\x02\x02\x02\u0259o\x03\x02\x02\x02\u025A\u025F"+
		"\x05r:\x02\u025B\u025C\x07@\x02\x02\u025C\u025E\x05r:\x02\u025D\u025B"+
		"\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02"+
		"\u025F\u0260\x03\x02\x02\x02\u0260q\x03\x02\x02\x02\u0261\u025F\x03\x02"+
		"\x02\x02\u0262\u0263\x05@!\x02\u0263s\x03\x02\x02\x02\u0264\u0267\x05"+
		"v<\x02\u0265\u0267\x05x=\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0265\x03"+
		"\x02\x02\x02\u0267u\x03\x02\x02\x02\u0268\u0269\x07\x1F\x02\x02\u0269"+
		"\u026A\x05j6\x02\u026A\u026B\x07 \x02\x02\u026B\u026D\x05D#\x02\u026C"+
		"\u026E\x05t;\x02\u026D\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02"+
		"\u026Ew\x03\x02\x02\x02\u026F\u0270\x07\x1B\x02\x02\u0270\u0272\x05B\""+
		"\x02\u0271\u0273\x05t;\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273\x03"+
		"\x02\x02\x02\u0273y\x03\x02\x02\x02\u0274\u0275\x075\x02\x02\u0275{\x03"+
		"\x02\x02\x02\u0276\u0279\x05~@\x02\u0277\u0279\x07;\x02\x02\u0278\u0276"+
		"\x03\x02\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279}\x03\x02\x02\x02\u027A"+
		"\u027B\x077\x02\x02\u027B\x7F\x03\x02\x02\x02S\x85\x89\x8B\x94\xA2\xAB"+
		"\xB5\xB9\xC0\xCA\xCD\xD1\xD6\xDA\xDE\xE5\xED\xF1\xFA\u0101\u0103\u010C"+
		"\u0111\u0116\u011D\u0121\u0128\u0130\u0137\u0143\u0148\u015A\u015E\u0166"+
		"\u016F\u0177\u017D\u0185\u018B\u0194\u019C\u01A4\u01AC\u01AE\u01B6\u01B8"+
		"\u01C2\u01C4\u01CC\u01D2\u01D7\u01DC\u01E1\u01E9\u01EF\u01F7\u01FB\u01FD"+
		"\u0201\u020A\u0211\u0215\u0219\u021D\u021F\u0226\u022A\u0231\u0235\u0242"+
		"\u0246\u0248\u0250\u0254\u0256\u0258\u025F\u0266\u026D\u0272\u0278";
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
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
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
	public small_stmt(): Small_stmtContext {
		return this.getRuleContext(0, Small_stmtContext);
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
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
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
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
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
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
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
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
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


export class StrContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(Python3Parser.STRING_LITERAL, 0); }
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
	public DECIMAL_INTEGER(): TerminalNode { return this.getToken(Python3Parser.DECIMAL_INTEGER, 0); }
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


