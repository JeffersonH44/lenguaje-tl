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
	public static readonly INDENT=73;
	public static readonly DEDENT=74;
	public static readonly RULE_tl_input = 0;
	public static readonly RULE_funcdef = 1;
	public static readonly RULE_parameters = 2;
	public static readonly RULE_varargslist = 3;
	public static readonly RULE_vfpdef = 4;
	public static readonly RULE_block_stmt = 5;
	public static readonly RULE_stmt = 6;
	public static readonly RULE_simple_stmt = 7;
	public static readonly RULE_small_stmt = 8;
	public static readonly RULE_expr_stmt = 9;
	public static readonly RULE_testlist_star_expr = 10;
	public static readonly RULE_augassign = 11;
	public static readonly RULE_flow_stmt = 12;
	public static readonly RULE_return_stmt = 13;
	public static readonly RULE_import_stmt = 14;
	public static readonly RULE_import_name = 15;
	public static readonly RULE_import_from = 16;
	public static readonly RULE_dotted_as_names = 17;
	public static readonly RULE_compound_stmt = 18;
	public static readonly RULE_if_stmt = 19;
	public static readonly RULE_while_stmt = 20;
	public static readonly RULE_for_stmt = 21;
	public static readonly RULE_suite = 22;
	public static readonly RULE_test = 23;
	public static readonly RULE_test_nocond = 24;
	public static readonly RULE_or_test = 25;
	public static readonly RULE_and_test = 26;
	public static readonly RULE_not_test = 27;
	public static readonly RULE_comparison = 28;
	public static readonly RULE_comp_op = 29;
	public static readonly RULE_expr = 30;
	public static readonly RULE_arith_expr = 31;
	public static readonly RULE_term = 32;
	public static readonly RULE_factor = 33;
	public static readonly RULE_power = 34;
	public static readonly RULE_atom = 35;
	public static readonly RULE_testlist_comp = 36;
	public static readonly RULE_trailer = 37;
	public static readonly RULE_subscriptlist = 38;
	public static readonly RULE_subscript = 39;
	public static readonly RULE_exprlist = 40;
	public static readonly RULE_testlist = 41;
	public static readonly RULE_dictorsetmaker = 42;
	public static readonly RULE_arglist = 43;
	public static readonly RULE_argument = 44;
	public static readonly RULE_comp_iter = 45;
	public static readonly RULE_comp_for = 46;
	public static readonly RULE_comp_if = 47;
	public static readonly RULE_str = 48;
	public static readonly RULE_number = 49;
	public static readonly RULE_integer = 50;
	public static readonly ruleNames: string[] = [
		"tl_input", "funcdef", "parameters", "varargslist", "vfpdef", "block_stmt", 
		"stmt", "simple_stmt", "small_stmt", "expr_stmt", "testlist_star_expr", 
		"augassign", "flow_stmt", "return_stmt", "import_stmt", "import_name", 
		"import_from", "dotted_as_names", "compound_stmt", "if_stmt", "while_stmt", 
		"for_stmt", "suite", "test", "test_nocond", "or_test", "and_test", "not_test", 
		"comparison", "comp_op", "expr", "arith_expr", "term", "factor", "power", 
		"atom", "testlist_comp", "trailer", "subscriptlist", "subscript", "exprlist", 
		"testlist", "dictorsetmaker", "arglist", "argument", "comp_iter", "comp_for", 
		"comp_if", "str", "number", "integer"
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
		"DIV_ASSIGN", "MOD_ASSIGN", "POWER_ASSIGN", "SKIP_", "UNKNOWN_CHAR", "INDENT", 
		"DEDENT"
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
	public tl_input(): Tl_inputContext {
		let _localctx: Tl_inputContext = new Tl_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Python3Parser.RULE_tl_input);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.NEWLINE) {
				{
				{
				this.state = 102;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 117;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 108;
					this.import_stmt();
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===Python3Parser.NEWLINE) {
						{
						{
						this.state = 109;
						this.match(Python3Parser.NEWLINE);
						}
						}
						this.state = 114;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					} 
				}
				this.state = 119;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			}
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.DEF) {
				{
				{
				this.state = 120;
				this.funcdef();
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.NEWLINE) {
					{
					{
					this.state = 121;
					this.match(Python3Parser.NEWLINE);
					}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.READ) | (1 << Python3Parser.LOG) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.STRING_LITERAL - 39)) | (1 << (Python3Parser.DECIMAL_INTEGER - 39)) | (1 << (Python3Parser.FLOAT_NUMBER - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)) | (1 << (Python3Parser.OPEN_BRACE - 39)))) !== 0)) {
				{
				{
				this.state = 132;
				this.stmt();
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.NEWLINE) {
					{
					{
					this.state = 133;
					this.match(Python3Parser.NEWLINE);
					}
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 144;
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
		this.enterRule(_localctx, 2, Python3Parser.RULE_funcdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(Python3Parser.DEF);
			this.state = 147;
			this.match(Python3Parser.NAME);
			this.state = 148;
			this.parameters();
			this.state = 149;
			this.match(Python3Parser.NEWLINE);
			this.state = 150;
			this.suite();
			this.state = 151;
			this.match(Python3Parser.T__0);
			this.state = 152;
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
		this.enterRule(_localctx, 4, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.NAME) {
				{
				this.state = 155;
				this.varargslist();
				}
			}

			this.state = 158;
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
		this.enterRule(_localctx, 6, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.vfpdef();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 161;
				this.match(Python3Parser.COMMA);
				this.state = 162;
				this.vfpdef();
				}
				}
				this.state = 167;
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
		this.enterRule(_localctx, 8, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
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
		this.enterRule(_localctx, 10, Python3Parser.RULE_block_stmt);
		let _la: number;
		try {
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,14,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NEWLINE) {
					{
					this.state = 170;
					this.match(Python3Parser.NEWLINE);
					}
				}

				this.state = 173;
				this.stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 174;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 176;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,10,this._ctx) ) {
				case 1:
					{
					this.state = 175;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				}
				this.state = 180; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 180;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.READ:
					case Python3Parser.LOG:
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
						this.state = 178;
						this.stmt();
						}
						break;
					case Python3Parser.NEWLINE:
						{
						this.state = 179;
						this.match(Python3Parser.NEWLINE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 182; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.READ) | (1 << Python3Parser.LOG) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Python3Parser.NEWLINE - 38)) | (1 << (Python3Parser.NAME - 38)) | (1 << (Python3Parser.STRING_LITERAL - 38)) | (1 << (Python3Parser.DECIMAL_INTEGER - 38)) | (1 << (Python3Parser.FLOAT_NUMBER - 38)) | (1 << (Python3Parser.OPEN_PAREN - 38)) | (1 << (Python3Parser.OPEN_BRACK - 38)) | (1 << (Python3Parser.ADD - 38)) | (1 << (Python3Parser.MINUS - 38)) | (1 << (Python3Parser.OPEN_BRACE - 38)))) !== 0) );
				this.state = 184;
				this.match(Python3Parser.CLOSE_BRACE);
				this.state = 186;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,13,this._ctx) ) {
				case 1:
					{
					this.state = 185;
					this.match(Python3Parser.NEWLINE);
					}
					break;
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python3Parser.RULE_stmt);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.READ:
			case Python3Parser.LOG:
			case Python3Parser.RETURN:
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
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
				this.state = 190;
				this.simple_stmt();
				}
				break;
			case Python3Parser.IF:
			case Python3Parser.WHILE:
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 191;
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
		this.enterRule(_localctx, 14, Python3Parser.RULE_simple_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.small_stmt();
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				{
				this.state = 195;
				this.match(Python3Parser.NEWLINE);
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
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Python3Parser.RULE_small_stmt);
		let _la: number;
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.READ:
			case Python3Parser.LOG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				_la = this._input.LA(1);
				if ( !(_la===Python3Parser.READ || _la===Python3Parser.LOG) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 199;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 200;
				this.argument();
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NEWLINE) {
					{
					this.state = 201;
					this.match(Python3Parser.NEWLINE);
					}
				}

				this.state = 204;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.expr_stmt();
				}
				break;
			case Python3Parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.flow_stmt();
				}
				break;
			case Python3Parser.FROM:
			case Python3Parser.IMPORT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 208;
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
		this.enterRule(_localctx, 18, Python3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.testlist_star_expr();
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD_ASSIGN:
			case Python3Parser.SUB_ASSIGN:
			case Python3Parser.MULT_ASSIGN:
			case Python3Parser.DIV_ASSIGN:
			case Python3Parser.MOD_ASSIGN:
			case Python3Parser.POWER_ASSIGN:
				{
				this.state = 212;
				this.augassign();
				{
				this.state = 213;
				this.testlist();
				}
				}
				break;
			case Python3Parser.EOF:
			case Python3Parser.T__0:
			case Python3Parser.READ:
			case Python3Parser.LOG:
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
				{
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python3Parser.ASSIGN) {
					{
					{
					this.state = 215;
					this.match(Python3Parser.ASSIGN);
					{
					this.state = 216;
					this.testlist_star_expr();
					}
					}
					}
					this.state = 221;
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
		this.enterRule(_localctx, 20, Python3Parser.RULE_testlist_star_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 224;
			this.test_nocond();
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
		this.enterRule(_localctx, 22, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			_la = this._input.LA(1);
			if ( !(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (Python3Parser.ADD_ASSIGN - 65)) | (1 << (Python3Parser.SUB_ASSIGN - 65)) | (1 << (Python3Parser.MULT_ASSIGN - 65)) | (1 << (Python3Parser.DIV_ASSIGN - 65)) | (1 << (Python3Parser.MOD_ASSIGN - 65)) | (1 << (Python3Parser.POWER_ASSIGN - 65)))) !== 0)) ) {
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
		this.enterRule(_localctx, 24, Python3Parser.RULE_flow_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.return_stmt();
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
		this.enterRule(_localctx, 26, Python3Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(Python3Parser.RETURN);
			this.state = 231;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
				{
				this.state = 232;
				this.testlist();
				}
			}

			this.state = 235;
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
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python3Parser.RULE_import_stmt);
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
		this.enterRule(_localctx, 30, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(Python3Parser.IMPORT);
			this.state = 242;
			this.dotted_as_names();
			this.state = 243;
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
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Python3Parser.RULE_import_from);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(Python3Parser.FROM);
			this.state = 246;
			this.match(Python3Parser.NAME);
			this.state = 247;
			this.import_name();
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
		this.enterRule(_localctx, 34, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(Python3Parser.NAME);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.DOT) {
				{
				{
				this.state = 250;
				this.match(Python3Parser.DOT);
				this.state = 251;
				this.match(Python3Parser.NAME);
				}
				}
				this.state = 256;
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
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 257;
				this.if_stmt();
				}
				break;
			case Python3Parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this.while_stmt();
				}
				break;
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 259;
				this.for_stmt();
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
		this.enterRule(_localctx, 38, Python3Parser.RULE_if_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(Python3Parser.IF);
			this.state = 263;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 264;
			this.test();
			this.state = 265;
			this.match(Python3Parser.CLOSE_PAREN);
			this.state = 266;
			this.block_stmt();
			this.state = 276;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 267;
					this.match(Python3Parser.ELSE);
					this.state = 268;
					this.match(Python3Parser.IF);
					this.state = 269;
					this.match(Python3Parser.OPEN_PAREN);
					this.state = 270;
					this.test();
					this.state = 271;
					this.match(Python3Parser.CLOSE_PAREN);
					this.state = 272;
					this.block_stmt();
					}
					} 
				}
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,25,this._ctx);
			}
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				{
				this.state = 279;
				this.match(Python3Parser.ELSE);
				this.state = 280;
				this.block_stmt();
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
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Python3Parser.RULE_while_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(Python3Parser.WHILE);
			this.state = 284;
			this.test();
			this.state = 285;
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
		this.enterRule(_localctx, 42, Python3Parser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(Python3Parser.FOR);
			this.state = 288;
			this.exprlist();
			this.state = 289;
			this.match(Python3Parser.IN);
			this.state = 290;
			this.testlist();
			this.state = 291;
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
		this.enterRule(_localctx, 44, Python3Parser.RULE_suite);
		let _la: number;
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				this.simple_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 294;
					this.stmt();
					}
					}
					this.state = 297; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python3Parser.READ) | (1 << Python3Parser.LOG) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.FROM) | (1 << Python3Parser.IMPORT) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.FOR) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Python3Parser.NAME - 39)) | (1 << (Python3Parser.STRING_LITERAL - 39)) | (1 << (Python3Parser.DECIMAL_INTEGER - 39)) | (1 << (Python3Parser.FLOAT_NUMBER - 39)) | (1 << (Python3Parser.OPEN_PAREN - 39)) | (1 << (Python3Parser.OPEN_BRACK - 39)) | (1 << (Python3Parser.ADD - 39)) | (1 << (Python3Parser.MINUS - 39)) | (1 << (Python3Parser.OPEN_BRACE - 39)))) !== 0) );
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
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Python3Parser.RULE_test);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.or_test();
			this.state = 307;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				{
				this.state = 302;
				this.match(Python3Parser.IF);
				this.state = 303;
				this.or_test();
				this.state = 304;
				this.match(Python3Parser.ELSE);
				this.state = 305;
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
		this.enterRule(_localctx, 48, Python3Parser.RULE_test_nocond);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
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
		this.enterRule(_localctx, 50, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.and_test();
			this.state = 316;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.OR) {
				{
				{
				this.state = 312;
				this.match(Python3Parser.OR);
				this.state = 313;
				this.and_test();
				}
				}
				this.state = 318;
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
		this.enterRule(_localctx, 52, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 319;
			this.not_test();
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.AND) {
				{
				{
				this.state = 320;
				this.match(Python3Parser.AND);
				this.state = 321;
				this.not_test();
				}
				}
				this.state = 326;
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
		this.enterRule(_localctx, 54, Python3Parser.RULE_not_test);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 327;
				this.match(Python3Parser.NOT);
				this.state = 328;
				this.not_test();
				}
				break;
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
				this.state = 329;
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
		this.enterRule(_localctx, 56, Python3Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.expr();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (Python3Parser.LESS_THAN - 59)) | (1 << (Python3Parser.GREATER_THAN - 59)) | (1 << (Python3Parser.EQUALS - 59)) | (1 << (Python3Parser.GT_EQ - 59)) | (1 << (Python3Parser.LT_EQ - 59)) | (1 << (Python3Parser.NOT_EQ_2 - 59)))) !== 0)) {
				{
				{
				this.state = 333;
				this.comp_op();
				this.state = 334;
				this.expr();
				}
				}
				this.state = 340;
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
		this.enterRule(_localctx, 58, Python3Parser.RULE_comp_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			_la = this._input.LA(1);
			if ( !(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (Python3Parser.LESS_THAN - 59)) | (1 << (Python3Parser.GREATER_THAN - 59)) | (1 << (Python3Parser.EQUALS - 59)) | (1 << (Python3Parser.GT_EQ - 59)) | (1 << (Python3Parser.LT_EQ - 59)) | (1 << (Python3Parser.NOT_EQ_2 - 59)))) !== 0)) ) {
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python3Parser.RULE_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.arith_expr();
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
		this.enterRule(_localctx, 62, Python3Parser.RULE_arith_expr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.term();
			this.state = 352;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,35,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 350;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python3Parser.ADD:
						{
						this.state = 346;
						this.match(Python3Parser.ADD);
						this.state = 347;
						this.term();
						}
						break;
					case Python3Parser.MINUS:
						{
						this.state = 348;
						this.match(Python3Parser.MINUS);
						this.state = 349;
						this.term();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,35,this._ctx);
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
		this.enterRule(_localctx, 64, Python3Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.factor();
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.T__1 || _la===Python3Parser.DIV || _la===Python3Parser.MOD) {
				{
				this.state = 362;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python3Parser.T__1:
					{
					this.state = 356;
					this.match(Python3Parser.T__1);
					this.state = 357;
					this.factor();
					}
					break;
				case Python3Parser.DIV:
					{
					this.state = 358;
					this.match(Python3Parser.DIV);
					this.state = 359;
					this.factor();
					}
					break;
				case Python3Parser.MOD:
					{
					this.state = 360;
					this.match(Python3Parser.MOD);
					this.state = 361;
					this.factor();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 366;
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Python3Parser.RULE_factor);
		try {
			this.state = 372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.ADD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.match(Python3Parser.ADD);
				this.state = 368;
				this.factor();
				}
				break;
			case Python3Parser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 369;
				this.match(Python3Parser.MINUS);
				this.state = 370;
				this.factor();
				}
				break;
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
				this.state = 371;
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
		this.enterRule(_localctx, 68, Python3Parser.RULE_power);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.atom();
			this.state = 378;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,39,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 375;
					this.trailer();
					}
					} 
				}
				this.state = 380;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,39,this._ctx);
			}
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.POWER) {
				{
				this.state = 381;
				this.match(Python3Parser.POWER);
				this.state = 382;
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
		this.enterRule(_localctx, 70, Python3Parser.RULE_atom);
		let _la: number;
		try {
			let _alt: number;
			this.state = 416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 385;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
					{
					this.state = 386;
					this.testlist_comp();
					}
				}

				this.state = 389;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 390;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
					{
					this.state = 391;
					this.testlist_comp();
					}
				}

				this.state = 394;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 395;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 397;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
				case 1:
					{
					this.state = 396;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				}
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
					{
					this.state = 399;
					this.dictorsetmaker();
					}
				}

				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NEWLINE) {
					{
					this.state = 402;
					this.match(Python3Parser.NEWLINE);
					}
				}

				this.state = 405;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case Python3Parser.NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 406;
				this.match(Python3Parser.NAME);
				}
				break;
			case Python3Parser.DECIMAL_INTEGER:
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 407;
				this.number();
				}
				break;
			case Python3Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 409; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 408;
						this.str();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 411; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			case Python3Parser.NONE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 413;
				this.match(Python3Parser.NONE);
				}
				break;
			case Python3Parser.TRUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 414;
				this.match(Python3Parser.TRUE);
				}
				break;
			case Python3Parser.FALSE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 415;
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
		this.enterRule(_localctx, 72, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.test();
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 419;
				this.match(Python3Parser.COMMA);
				this.state = 420;
				this.test();
				}
				}
				this.state = 425;
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
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 426;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
					{
					this.state = 427;
					this.arglist();
					}
				}

				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NEWLINE) {
					{
					this.state = 430;
					this.match(Python3Parser.NEWLINE);
					}
				}

				this.state = 433;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case Python3Parser.OPEN_BRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 434;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 435;
				this.subscriptlist();
				this.state = 436;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case Python3Parser.DOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 438;
				this.match(Python3Parser.DOT);
				this.state = 439;
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
		this.enterRule(_localctx, 76, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.subscript();
			this.state = 447;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,52,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 443;
					this.match(Python3Parser.COMMA);
					this.state = 444;
					this.subscript();
					}
					} 
				}
				this.state = 449;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,52,this._ctx);
			}
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 450;
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
		this.enterRule(_localctx, 78, Python3Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 453;
				this.test();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
					{
					this.state = 454;
					this.test();
					}
				}

				this.state = 457;
				this.match(Python3Parser.COLON);
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (Python3Parser.NOT - 27)) | (1 << (Python3Parser.NONE - 27)) | (1 << (Python3Parser.TRUE - 27)) | (1 << (Python3Parser.FALSE - 27)) | (1 << (Python3Parser.NAME - 27)) | (1 << (Python3Parser.STRING_LITERAL - 27)) | (1 << (Python3Parser.DECIMAL_INTEGER - 27)) | (1 << (Python3Parser.FLOAT_NUMBER - 27)) | (1 << (Python3Parser.OPEN_PAREN - 27)) | (1 << (Python3Parser.OPEN_BRACK - 27)) | (1 << (Python3Parser.ADD - 27)) | (1 << (Python3Parser.MINUS - 27)) | (1 << (Python3Parser.OPEN_BRACE - 27)))) !== 0)) {
					{
					this.state = 458;
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
		this.enterRule(_localctx, 80, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.expr();
			this.state = 468;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 464;
					this.match(Python3Parser.COMMA);
					this.state = 465;
					this.expr();
					}
					} 
				}
				this.state = 470;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			}
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 471;
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
		this.enterRule(_localctx, 82, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.test();
			this.state = 479;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,59,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 475;
					this.match(Python3Parser.COMMA);
					this.state = 476;
					this.test();
					}
					} 
				}
				this.state = 481;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,59,this._ctx);
			}
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python3Parser.COMMA) {
				{
				this.state = 482;
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
		this.enterRule(_localctx, 84, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.test();
			this.state = 486;
			this.match(Python3Parser.COLON);
			this.state = 487;
			this.test();
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 488;
				this.match(Python3Parser.COMMA);
				this.state = 490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python3Parser.NEWLINE) {
					{
					this.state = 489;
					this.match(Python3Parser.NEWLINE);
					}
				}

				this.state = 492;
				this.test();
				this.state = 493;
				this.match(Python3Parser.COLON);
				this.state = 494;
				this.test();
				}
				}
				this.state = 500;
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
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.argument();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python3Parser.COMMA) {
				{
				{
				this.state = 502;
				this.match(Python3Parser.COMMA);
				this.state = 503;
				this.argument();
				}
				}
				this.state = 508;
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
		this.enterRule(_localctx, 88, Python3Parser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
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
		this.enterRule(_localctx, 90, Python3Parser.RULE_comp_iter);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 511;
				this.comp_for();
				}
				break;
			case Python3Parser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 512;
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
		this.enterRule(_localctx, 92, Python3Parser.RULE_comp_for);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(Python3Parser.FOR);
			this.state = 516;
			this.exprlist();
			this.state = 517;
			this.match(Python3Parser.IN);
			this.state = 518;
			this.or_test();
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,65,this._ctx) ) {
			case 1:
				{
				this.state = 519;
				this.comp_iter();
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
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Python3Parser.RULE_comp_if);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(Python3Parser.IF);
			this.state = 523;
			this.test_nocond();
			this.state = 525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,66,this._ctx) ) {
			case 1:
				{
				this.state = 524;
				this.comp_iter();
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
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Python3Parser.RULE_str);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
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
		this.enterRule(_localctx, 98, Python3Parser.RULE_number);
		try {
			this.state = 531;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python3Parser.DECIMAL_INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 529;
				this.integer();
				}
				break;
			case Python3Parser.FLOAT_NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 530;
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
		this.enterRule(_localctx, 100, Python3Parser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
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

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03L\u021A\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x03\x02\x07\x02j\n\x02\f\x02\x0E\x02m\v\x02\x03\x02\x03\x02\x07\x02"+
		"q\n\x02\f\x02\x0E\x02t\v\x02\x07\x02v\n\x02\f\x02\x0E\x02y\v\x02\x03\x02"+
		"\x03\x02\x07\x02}\n\x02\f\x02\x0E\x02\x80\v\x02\x07\x02\x82\n\x02\f\x02"+
		"\x0E\x02\x85\v\x02\x03\x02\x03\x02\x07\x02\x89\n\x02\f\x02\x0E\x02\x8C"+
		"\v\x02\x07\x02\x8E\n\x02\f\x02\x0E\x02\x91\v\x02\x03\x02\x03\x02\x03\x03"+
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04"+
		"\x05\x04\x9F\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\xA6"+
		"\n\x05\f\x05\x0E\x05\xA9\v\x05\x03\x06\x03\x06\x03\x07\x05\x07\xAE\n\x07"+
		"\x03\x07\x03\x07\x03\x07\x05\x07\xB3\n\x07\x03\x07\x03\x07\x06\x07\xB7"+
		"\n\x07\r\x07\x0E\x07\xB8\x03\x07\x03\x07\x05\x07\xBD\n\x07\x05\x07\xBF"+
		"\n\x07\x03\b\x03\b\x05\b\xC3\n\b\x03\t\x03\t\x05\t\xC7\n\t\x03\n\x03\n"+
		"\x03\n\x03\n\x05\n\xCD\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD4\n\n"+
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xDC\n\v\f\v\x0E\v\xDF\v\v\x05"+
		"\v\xE1\n\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03"+
		"\x0F\x05\x0F\xEC\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xF2\n\x10"+
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13"+
		"\x03\x13\x03\x13\x07\x13\xFF\n\x13\f\x13\x0E\x13\u0102\v\x13\x03\x14\x03"+
		"\x14\x03\x14\x05\x14\u0107\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15"+
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0115"+
		"\n\x15\f\x15\x0E\x15\u0118\v\x15\x03\x15\x03\x15\x05\x15\u011C\n\x15\x03"+
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03"+
		"\x17\x03\x18\x03\x18\x06\x18\u012A\n\x18\r\x18\x0E\x18\u012B\x05\x18\u012E"+
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0136\n"+
		"\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u013D\n\x1B\f\x1B"+
		"\x0E\x1B\u0140\v\x1B\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0145\n\x1C\f\x1C"+
		"\x0E\x1C\u0148\v\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u014D\n\x1D\x03\x1E"+
		"\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0153\n\x1E\f\x1E\x0E\x1E\u0156\v\x1E"+
		"\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x07!\u0161\n!\f!\x0E"+
		"!\u0164\v!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u016D\n\"\f"+
		"\"\x0E\"\u0170\v\"\x03#\x03#\x03#\x03#\x03#\x05#\u0177\n#\x03$\x03$\x07"+
		"$\u017B\n$\f$\x0E$\u017E\v$\x03$\x03$\x05$\u0182\n$\x03%\x03%\x05%\u0186"+
		"\n%\x03%\x03%\x03%\x05%\u018B\n%\x03%\x03%\x03%\x05%\u0190\n%\x03%\x05"+
		"%\u0193\n%\x03%\x05%\u0196\n%\x03%\x03%\x03%\x03%\x06%\u019C\n%\r%\x0E"+
		"%\u019D\x03%\x03%\x03%\x05%\u01A3\n%\x03&\x03&\x03&\x07&\u01A8\n&\f&\x0E"+
		"&\u01AB\v&\x03\'\x03\'\x05\'\u01AF\n\'\x03\'\x05\'\u01B2\n\'\x03\'\x03"+
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01BB\n\'\x03(\x03(\x03(\x07(\u01C0"+
		"\n(\f(\x0E(\u01C3\v(\x03(\x05(\u01C6\n(\x03)\x03)\x05)\u01CA\n)\x03)\x03"+
		")\x05)\u01CE\n)\x05)\u01D0\n)\x03*\x03*\x03*\x07*\u01D5\n*\f*\x0E*\u01D8"+
		"\v*\x03*\x05*\u01DB\n*\x03+\x03+\x03+\x07+\u01E0\n+\f+\x0E+\u01E3\v+\x03"+
		"+\x05+\u01E6\n+\x03,\x03,\x03,\x03,\x03,\x05,\u01ED\n,\x03,\x03,\x03,"+
		"\x03,\x07,\u01F3\n,\f,\x0E,\u01F6\v,\x03-\x03-\x03-\x07-\u01FB\n-\f-\x0E"+
		"-\u01FE\v-\x03.\x03.\x03/\x03/\x05/\u0204\n/\x030\x030\x030\x030\x030"+
		"\x050\u020B\n0\x031\x031\x031\x051\u0210\n1\x032\x032\x033\x033\x053\u0216"+
		"\n3\x034\x034\x034\x02\x02\x025\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f"+
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E"+
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02"+
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02"+
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02\x05\x03\x02\x05\x06"+
		"\x03\x02CH\x03\x02=B\u0237\x02k\x03\x02\x02\x02\x04\x94\x03\x02\x02\x02"+
		"\x06\x9C\x03\x02\x02\x02\b\xA2\x03\x02\x02\x02\n\xAA\x03\x02\x02\x02\f"+
		"\xBE\x03\x02\x02\x02\x0E\xC2\x03\x02\x02\x02\x10\xC4\x03\x02\x02\x02\x12"+
		"\xD3\x03\x02\x02\x02\x14\xD5\x03\x02\x02\x02\x16\xE2\x03\x02\x02\x02\x18"+
		"\xE4\x03\x02\x02\x02\x1A\xE6\x03\x02\x02\x02\x1C\xE8\x03\x02\x02\x02\x1E"+
		"\xF1\x03\x02\x02\x02 \xF3\x03\x02\x02\x02\"\xF7\x03\x02\x02\x02$\xFB\x03"+
		"\x02\x02\x02&\u0106\x03\x02\x02\x02(\u0108\x03\x02\x02\x02*\u011D\x03"+
		"\x02\x02\x02,\u0121\x03\x02\x02\x02.\u012D\x03\x02\x02\x020\u012F\x03"+
		"\x02\x02\x022\u0137\x03\x02\x02\x024\u0139\x03\x02\x02\x026\u0141\x03"+
		"\x02\x02\x028\u014C\x03\x02\x02\x02:\u014E\x03\x02\x02\x02<\u0157\x03"+
		"\x02\x02\x02>\u0159\x03\x02\x02\x02@\u015B\x03\x02\x02\x02B\u0165\x03"+
		"\x02\x02\x02D\u0176\x03\x02\x02\x02F\u0178\x03\x02\x02\x02H\u01A2\x03"+
		"\x02\x02\x02J\u01A4\x03\x02\x02\x02L\u01BA\x03\x02\x02\x02N\u01BC\x03"+
		"\x02\x02\x02P\u01CF\x03\x02\x02\x02R\u01D1\x03\x02\x02\x02T\u01DC\x03"+
		"\x02\x02\x02V\u01E7\x03\x02\x02\x02X\u01F7\x03\x02\x02\x02Z\u01FF\x03"+
		"\x02\x02\x02\\\u0203\x03\x02\x02\x02^\u0205\x03\x02\x02\x02`\u020C\x03"+
		"\x02\x02\x02b\u0211\x03\x02\x02\x02d\u0215\x03\x02\x02\x02f\u0217\x03"+
		"\x02\x02\x02hj\x07(\x02\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03"+
		"\x02\x02\x02kl\x03\x02\x02\x02lw\x03\x02\x02\x02mk\x03\x02\x02\x02nr\x05"+
		"\x1E\x10\x02oq\x07(\x02\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03"+
		"\x02\x02\x02rs\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02un\x03"+
		"\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\x83"+
		"\x03\x02\x02\x02yw\x03\x02\x02\x02z~\x05\x04\x03\x02{}\x07(\x02\x02|{"+
		"\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02"+
		"\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81z\x03\x02\x02\x02"+
		"\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02"+
		"\x84\x8F\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x8A\x05\x0E\b\x02"+
		"\x87\x89\x07(\x02\x02\x88\x87\x03\x02\x02\x02\x89\x8C\x03\x02\x02\x02"+
		"\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02"+
		"\x8C\x8A\x03\x02\x02\x02\x8D\x86\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02"+
		"\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02"+
		"\x91\x8F\x03\x02\x02\x02\x92\x93\x07\x02\x02\x03\x93\x03\x03\x02\x02\x02"+
		"\x94\x95\x07\x07\x02\x02\x95\x96\x07)\x02\x02\x96\x97\x05\x06\x04\x02"+
		"\x97\x98\x07(\x02\x02\x98\x99\x05.\x18\x02\x99\x9A\x07\x03\x02\x02\x9A"+
		"\x9B\x07\x07\x02\x02\x9B\x05\x03\x02\x02\x02\x9C\x9E\x07/\x02\x02\x9D"+
		"\x9F\x05\b\x05\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F"+
		"\xA0\x03\x02\x02\x02\xA0\xA1\x070\x02\x02\xA1\x07\x03\x02\x02\x02\xA2"+
		"\xA7\x05\n\x06\x02\xA3\xA4\x071\x02\x02\xA4\xA6\x05\n\x06\x02\xA5\xA3"+
		"\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8"+
		"\x03\x02\x02\x02\xA8\t\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB"+
		"\x07)\x02\x02\xAB\v\x03\x02\x02\x02\xAC\xAE\x07(\x02\x02\xAD\xAC\x03\x02"+
		"\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\xBF\x05\x0E"+
		"\b\x02\xB0\xB2\x07;\x02\x02\xB1\xB3\x07(\x02\x02\xB2\xB1\x03\x02\x02\x02"+
		"\xB2\xB3\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB7\x05\x0E\b\x02"+
		"\xB5\xB7\x07(\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02\x02"+
		"\xB7\xB8\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02"+
		"\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x07<\x02\x02\xBB\xBD\x07(\x02\x02\xBC"+
		"\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE"+
		"\xAD\x03\x02\x02\x02\xBE\xB0\x03\x02\x02\x02\xBF\r\x03\x02\x02\x02\xC0"+
		"\xC3\x05\x10\t\x02\xC1\xC3\x05&\x14\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1"+
		"\x03\x02\x02\x02\xC3\x0F\x03\x02\x02\x02\xC4\xC6\x05\x12\n\x02\xC5\xC7"+
		"\x07(\x02\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x11"+
		"\x03\x02\x02\x02\xC8\xC9\t\x02\x02\x02\xC9\xCA\x07/\x02\x02\xCA\xCC\x05"+
		"Z.\x02\xCB\xCD\x07(\x02\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02"+
		"\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x070\x02\x02\xCF\xD4\x03\x02\x02"+
		"\x02\xD0\xD4\x05\x14\v\x02\xD1\xD4\x05\x1A\x0E\x02\xD2\xD4\x05\x1E\x10"+
		"\x02\xD3\xC8\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02\x02"+
		"\x02\xD3\xD2\x03\x02\x02\x02\xD4\x13\x03\x02\x02\x02\xD5\xE0\x05\x16\f"+
		"\x02\xD6\xD7\x05\x18\r\x02\xD7\xD8\x05T+\x02\xD8\xE1\x03\x02\x02\x02\xD9"+
		"\xDA\x074\x02\x02\xDA\xDC\x05\x16\f\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF"+
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE1"+
		"\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xD6\x03\x02\x02\x02\xE0\xDD"+
		"\x03\x02\x02\x02\xE1\x15\x03\x02\x02\x02\xE2\xE3\x052\x1A\x02\xE3\x17"+
		"\x03\x02\x02\x02\xE4\xE5\t\x03\x02\x02\xE5\x19\x03\x02\x02\x02\xE6\xE7"+
		"\x05\x1C\x0F\x02\xE7\x1B\x03\x02\x02\x02\xE8\xE9\x07\b\x02\x02\xE9\xEB"+
		"\x07/\x02\x02\xEA\xEC\x05T+\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC\x03\x02"+
		"\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x070\x02\x02\xEE\x1D\x03\x02"+
		"\x02\x02\xEF\xF2\x05 \x11\x02\xF0\xF2\x05\"\x12\x02\xF1\xEF\x03\x02\x02"+
		"\x02\xF1\xF0\x03\x02\x02\x02\xF2\x1F\x03\x02\x02\x02\xF3\xF4\x07\v\x02"+
		"\x02\xF4\xF5\x05$\x13\x02\xF5\xF6\x07(\x02\x02\xF6!\x03\x02\x02\x02\xF7"+
		"\xF8\x07\n\x02\x02\xF8\xF9\x07)\x02\x02\xF9\xFA\x05 \x11\x02\xFA#\x03"+
		"\x02\x02\x02\xFB\u0100\x07)\x02\x02\xFC\xFD\x07.\x02\x02\xFD\xFF\x07)"+
		"\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03"+
		"\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101%\x03\x02\x02\x02\u0102"+
		"\u0100\x03\x02\x02\x02\u0103\u0107\x05(\x15\x02\u0104\u0107\x05*\x16\x02"+
		"\u0105\u0107\x05,\x17\x02\u0106\u0103\x03\x02\x02\x02\u0106\u0104\x03"+
		"\x02\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\'\x03\x02\x02\x02\u0108"+
		"\u0109\x07\x10\x02\x02\u0109\u010A\x07/\x02\x02\u010A\u010B\x050\x19\x02"+
		"\u010B\u010C\x070\x02\x02\u010C\u0116\x05\f\x07\x02\u010D\u010E\x07\x12"+
		"\x02\x02\u010E\u010F\x07\x10\x02\x02\u010F\u0110\x07/\x02\x02\u0110\u0111"+
		"\x050\x19\x02\u0111\u0112\x070\x02\x02\u0112\u0113\x05\f\x07\x02\u0113"+
		"\u0115\x03\x02\x02\x02\u0114\u010D\x03\x02\x02\x02\u0115\u0118\x03\x02"+
		"\x02\x02\u0116\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117"+
		"\u011B\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07\x12"+
		"\x02\x02\u011A\u011C\x05\f\x07\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C"+
		"\x03\x02\x02\x02\u011C)\x03\x02\x02\x02\u011D\u011E\x07\x13\x02\x02\u011E"+
		"\u011F\x050\x19\x02\u011F\u0120\x05\f\x07\x02\u0120+\x03\x02\x02\x02\u0121"+
		"\u0122\x07\x14\x02\x02\u0122\u0123\x05R*\x02\u0123\u0124\x07\x15\x02\x02"+
		"\u0124\u0125\x05T+\x02\u0125\u0126\x05\f\x07\x02\u0126-\x03\x02\x02\x02"+
		"\u0127\u012E\x05\x10\t\x02\u0128\u012A\x05\x0E\b\x02\u0129\u0128\x03\x02"+
		"\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B"+
		"\u012C\x03\x02\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u0127\x03\x02"+
		"\x02\x02\u012D\u0129\x03\x02\x02\x02\u012E/\x03\x02\x02\x02\u012F\u0135"+
		"\x054\x1B\x02\u0130\u0131\x07\x10\x02\x02\u0131\u0132\x054\x1B\x02\u0132"+
		"\u0133\x07\x12\x02\x02\u0133\u0134\x050\x19\x02\u0134\u0136\x03\x02\x02"+
		"\x02\u0135\u0130\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u01361\x03"+
		"\x02\x02\x02\u0137\u0138\x054\x1B\x02\u01383\x03\x02\x02\x02\u0139\u013E"+
		"\x056\x1C\x02\u013A\u013B\x07\x1B\x02\x02\u013B\u013D\x056\x1C\x02\u013C"+
		"\u013A\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02\u013E\u013C\x03\x02"+
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F5\x03\x02\x02\x02\u0140\u013E"+
		"\x03\x02\x02\x02\u0141\u0146\x058\x1D\x02\u0142\u0143\x07\x1C\x02\x02"+
		"\u0143\u0145\x058\x1D\x02\u0144\u0142\x03\x02\x02\x02\u0145\u0148\x03"+
		"\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147"+
		"7\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014A\x07\x1D\x02"+
		"\x02\u014A\u014D\x058\x1D\x02\u014B\u014D\x05:\x1E\x02\u014C\u0149\x03"+
		"\x02\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D9\x03\x02\x02\x02\u014E"+
		"\u0154\x05> \x02\u014F\u0150\x05<\x1F\x02\u0150\u0151\x05> \x02\u0151"+
		"\u0153\x03\x02\x02\x02\u0152\u014F\x03\x02\x02\x02\u0153\u0156\x03\x02"+
		"\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155"+
		";\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u0158\t\x04\x02\x02"+
		"\u0158=\x03\x02\x02\x02\u0159\u015A\x05@!\x02\u015A?\x03\x02\x02\x02\u015B"+
		"\u0162\x05B\"\x02\u015C\u015D\x077\x02\x02\u015D\u0161\x05B\"\x02\u015E"+
		"\u015F\x078\x02\x02\u015F\u0161\x05B\"\x02\u0160\u015C\x03\x02\x02\x02"+
		"\u0160\u015E\x03\x02\x02\x02\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03"+
		"\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163A\x03\x02\x02\x02\u0164"+
		"\u0162\x03\x02\x02\x02\u0165\u016E\x05D#\x02\u0166\u0167\x07\x04\x02\x02"+
		"\u0167\u016D\x05D#\x02\u0168\u0169\x079\x02\x02\u0169\u016D\x05D#\x02"+
		"\u016A\u016B\x07:\x02\x02\u016B\u016D\x05D#\x02\u016C\u0166\x03\x02\x02"+
		"\x02\u016C\u0168\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170"+
		"\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02"+
		"\u016FC\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0172\x077\x02"+
		"\x02\u0172\u0177\x05D#\x02\u0173\u0174\x078\x02\x02\u0174\u0177\x05D#"+
		"\x02\u0175\u0177\x05F$\x02\u0176\u0171\x03\x02\x02\x02\u0176\u0173\x03"+
		"\x02\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177E\x03\x02\x02\x02\u0178"+
		"\u017C\x05H%\x02\u0179\u017B\x05L\'\x02\u017A\u0179\x03\x02\x02\x02\u017B"+
		"\u017E\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02"+
		"\x02\x02\u017D\u0181\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F"+
		"\u0180\x073\x02\x02\u0180\u0182\x05D#\x02\u0181\u017F\x03\x02\x02\x02"+
		"\u0181\u0182\x03\x02\x02\x02\u0182G\x03\x02\x02\x02\u0183\u0185\x07/\x02"+
		"\x02\u0184\u0186\x05J&\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03"+
		"\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u01A3\x070\x02\x02\u0188"+
		"\u018A\x075\x02\x02\u0189\u018B\x05J&\x02\u018A\u0189\x03\x02\x02\x02"+
		"\u018A\u018B\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\u01A3\x07"+
		"6\x02\x02\u018D\u018F\x07;\x02\x02\u018E\u0190\x07(\x02\x02\u018F\u018E"+
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0192\x03\x02\x02\x02"+
		"\u0191\u0193\x05V,\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02"+
		"\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0196\x07(\x02\x02\u0195\u0194"+
		"\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02"+
		"\u0197\u01A3\x07<\x02\x02\u0198\u01A3\x07)\x02\x02\u0199\u01A3\x05d3\x02"+
		"\u019A\u019C\x05b2\x02\u019B\u019A\x03\x02\x02\x02\u019C\u019D\x03\x02"+
		"\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E"+
		"\u01A3\x03\x02\x02\x02\u019F\u01A3\x07\x1F\x02\x02\u01A0\u01A3\x07 \x02"+
		"\x02\u01A1\u01A3\x07!\x02\x02\u01A2\u0183\x03\x02\x02\x02\u01A2\u0188"+
		"\x03\x02\x02\x02\u01A2\u018D\x03\x02\x02\x02\u01A2\u0198\x03\x02\x02\x02"+
		"\u01A2\u0199\x03\x02\x02\x02\u01A2\u019B\x03\x02\x02\x02\u01A2\u019F\x03"+
		"\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2\u01A1\x03\x02\x02\x02\u01A3"+
		"I\x03\x02\x02\x02\u01A4\u01A9\x050\x19\x02\u01A5\u01A6\x071\x02\x02\u01A6"+
		"\u01A8\x050\x19\x02\u01A7\u01A5\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02"+
		"\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AAK\x03"+
		"\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AE\x07/\x02\x02\u01AD"+
		"\u01AF\x05X-\x02\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02"+
		"\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01B2\x07(\x02\x02\u01B1\u01B0\x03"+
		"\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3"+
		"\u01BB\x070\x02\x02\u01B4\u01B5\x075\x02\x02\u01B5\u01B6\x05N(\x02\u01B6"+
		"\u01B7\x076\x02\x02\u01B7\u01BB\x03\x02\x02\x02\u01B8\u01B9\x07.\x02\x02"+
		"\u01B9\u01BB\x07)\x02\x02\u01BA\u01AC\x03\x02\x02\x02\u01BA\u01B4\x03"+
		"\x02\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BBM\x03\x02\x02\x02\u01BC"+
		"\u01C1\x05P)\x02\u01BD\u01BE\x071\x02\x02\u01BE\u01C0\x05P)\x02\u01BF"+
		"\u01BD\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02"+
		"\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3"+
		"\u01C1\x03\x02\x02\x02\u01C4\u01C6\x071\x02\x02\u01C5\u01C4\x03\x02\x02"+
		"\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6O\x03\x02\x02\x02\u01C7\u01D0\x05"+
		"0\x19\x02\u01C8\u01CA\x050\x19\x02\u01C9\u01C8\x03\x02\x02\x02\u01C9\u01CA"+
		"\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01CD\x072\x02\x02"+
		"\u01CC\u01CE\x050\x19\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03"+
		"\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01C7\x03\x02\x02\x02\u01CF"+
		"\u01C9\x03\x02\x02\x02\u01D0Q\x03\x02\x02\x02\u01D1\u01D6\x05> \x02\u01D2"+
		"\u01D3\x071\x02\x02\u01D3\u01D5\x05> \x02\u01D4\u01D2\x03\x02\x02\x02"+
		"\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03"+
		"\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9"+
		"\u01DB\x071\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02"+
		"\x02\u01DBS\x03\x02\x02\x02\u01DC\u01E1\x050\x19\x02\u01DD\u01DE\x071"+
		"\x02\x02\u01DE\u01E0\x050\x19\x02\u01DF\u01DD\x03\x02\x02\x02\u01E0\u01E3"+
		"\x03\x02\x02\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02"+
		"\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E4\u01E6\x07"+
		"1\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6"+
		"U\x03\x02\x02\x02\u01E7\u01E8\x050\x19\x02\u01E8\u01E9\x072\x02\x02\u01E9"+
		"\u01F4\x050\x19\x02\u01EA\u01EC\x071\x02\x02\u01EB\u01ED\x07(\x02\x02"+
		"\u01EC\u01EB\x03\x02\x02\x02\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03"+
		"\x02\x02\x02\u01EE\u01EF\x050\x19\x02\u01EF\u01F0\x072\x02\x02\u01F0\u01F1"+
		"\x050\x19\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2\u01EA\x03\x02\x02\x02"+
		"\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03"+
		"\x02\x02\x02\u01F5W\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7"+
		"\u01FC\x05Z.\x02\u01F8\u01F9\x071\x02\x02\u01F9\u01FB\x05Z.\x02\u01FA"+
		"\u01F8\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02\u01FC\u01FA\x03\x02"+
		"\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FDY\x03\x02\x02\x02\u01FE\u01FC"+
		"\x03\x02\x02\x02\u01FF\u0200\x050\x19\x02\u0200[\x03\x02\x02\x02\u0201"+
		"\u0204\x05^0\x02\u0202\u0204\x05`1\x02\u0203\u0201\x03\x02\x02\x02\u0203"+
		"\u0202\x03\x02\x02\x02\u0204]\x03\x02\x02\x02\u0205\u0206\x07\x14\x02"+
		"\x02\u0206\u0207\x05R*\x02\u0207\u0208\x07\x15\x02\x02\u0208\u020A\x05"+
		"4\x1B\x02\u0209\u020B\x05\\/\x02\u020A\u0209\x03\x02\x02\x02\u020A\u020B"+
		"\x03\x02\x02\x02\u020B_\x03\x02\x02\x02\u020C\u020D\x07\x10\x02\x02\u020D"+
		"\u020F\x052\x1A\x02\u020E\u0210\x05\\/\x02\u020F\u020E\x03\x02\x02\x02"+
		"\u020F\u0210\x03\x02\x02\x02\u0210a\x03\x02\x02\x02\u0211\u0212\x07*\x02"+
		"\x02\u0212c\x03\x02\x02\x02\u0213\u0216\x05f4\x02\u0214\u0216\x07,\x02"+
		"\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0214\x03\x02\x02\x02\u0216e\x03"+
		"\x02\x02\x02\u0217\u0218\x07+\x02\x02\u0218g\x03\x02\x02\x02Fkrw~\x83"+
		"\x8A\x8F\x9E\xA7\xAD\xB2\xB6\xB8\xBC\xBE\xC2\xC6\xCC\xD3\xDD\xE0\xEB\xF1"+
		"\u0100\u0106\u0116\u011B\u012B\u012D\u0135\u013E\u0146\u014C\u0154\u0160"+
		"\u0162\u016C\u016E\u0176\u017C\u0181\u0185\u018A\u018F\u0192\u0195\u019D"+
		"\u01A2\u01A9\u01AE\u01B1\u01BA\u01C1\u01C5\u01C9\u01CD\u01CF\u01D6\u01DA"+
		"\u01E1\u01E5\u01EC\u01F4\u01FC\u0203\u020A\u020F\u0215";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Parser.__ATN) {
			Python3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python3Parser._serializedATN));
		}

		return Python3Parser.__ATN;
	}

}

export class Tl_inputContext extends ParserRuleContext {
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
	public import_stmt(): Import_stmtContext[];
	public import_stmt(i: number): Import_stmtContext;
	public import_stmt(i?: number): Import_stmtContext | Import_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_stmtContext);
		} else {
			return this.getRuleContext(i, Import_stmtContext);
		}
	}
	public funcdef(): FuncdefContext[];
	public funcdef(i: number): FuncdefContext;
	public funcdef(i?: number): FuncdefContext | FuncdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FuncdefContext);
		} else {
			return this.getRuleContext(i, FuncdefContext);
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
	@Override public get ruleIndex(): number { return Python3Parser.RULE_tl_input; }
	@Override
	public enterRule(listener: Python3Listener): void {
		if (listener.enterTl_input) listener.enterTl_input(this);
	}
	@Override
	public exitRule(listener: Python3Listener): void {
		if (listener.exitTl_input) listener.exitTl_input(this);
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
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
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
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
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
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.OPEN_BRACE, 0); }
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
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
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
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	public READ(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.READ, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.LOG, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
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
	public test_nocond(): Test_nocondContext | undefined {
		return this.tryGetRuleContext(0, Test_nocondContext);
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
	public return_stmt(): Return_stmtContext {
		return this.getRuleContext(0, Return_stmtContext);
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
	public NEWLINE(): TerminalNode { return this.getToken(Python3Parser.NEWLINE, 0); }
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
	public NAME(): TerminalNode { return this.getToken(Python3Parser.NAME, 0); }
	public import_name(): Import_nameContext {
		return this.getRuleContext(0, Import_nameContext);
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


export class Dotted_as_namesContext extends ParserRuleContext {
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
	public OPEN_PAREN(): TerminalNode[];
	public OPEN_PAREN(i: number): TerminalNode;
	public OPEN_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.OPEN_PAREN);
		} else {
			return this.getToken(Python3Parser.OPEN_PAREN, i);
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
	public CLOSE_PAREN(): TerminalNode[];
	public CLOSE_PAREN(i: number): TerminalNode;
	public CLOSE_PAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python3Parser.CLOSE_PAREN);
		} else {
			return this.getToken(Python3Parser.CLOSE_PAREN, i);
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
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
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


export class ExprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext {
		return this.getRuleContext(0, Arith_exprContext);
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
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
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
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python3Parser.NEWLINE, 0); }
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
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
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


