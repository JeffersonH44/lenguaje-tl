// Generated from ./src/Python3.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { Tl_inputContext } from './Python3Parser';
import { FuncdefContext } from './Python3Parser';
import { ParametersContext } from './Python3Parser';
import { VarargslistContext } from './Python3Parser';
import { VfpdefContext } from './Python3Parser';
import { Block_stmtContext } from './Python3Parser';
import { StmtContext } from './Python3Parser';
import { Simple_stmtContext } from './Python3Parser';
import { Small_stmtContext } from './Python3Parser';
import { Expr_stmtContext } from './Python3Parser';
import { Testlist_star_exprContext } from './Python3Parser';
import { AugassignContext } from './Python3Parser';
import { Flow_stmtContext } from './Python3Parser';
import { Return_stmtContext } from './Python3Parser';
import { Import_stmtContext } from './Python3Parser';
import { Import_nameContext } from './Python3Parser';
import { Import_fromContext } from './Python3Parser';
import { Dotted_as_namesContext } from './Python3Parser';
import { Compound_stmtContext } from './Python3Parser';
import { If_stmtContext } from './Python3Parser';
import { While_stmtContext } from './Python3Parser';
import { For_stmtContext } from './Python3Parser';
import { SuiteContext } from './Python3Parser';
import { TestContext } from './Python3Parser';
import { Test_nocondContext } from './Python3Parser';
import { Or_testContext } from './Python3Parser';
import { And_testContext } from './Python3Parser';
import { Not_testContext } from './Python3Parser';
import { ComparisonContext } from './Python3Parser';
import { Comp_opContext } from './Python3Parser';
import { ExprContext } from './Python3Parser';
import { Arith_exprContext } from './Python3Parser';
import { TermContext } from './Python3Parser';
import { FactorContext } from './Python3Parser';
import { PowerContext } from './Python3Parser';
import { AtomContext } from './Python3Parser';
import { Testlist_compContext } from './Python3Parser';
import { TrailerContext } from './Python3Parser';
import { SubscriptlistContext } from './Python3Parser';
import { SubscriptContext } from './Python3Parser';
import { ExprlistContext } from './Python3Parser';
import { TestlistContext } from './Python3Parser';
import { DictorsetmakerContext } from './Python3Parser';
import { ArglistContext } from './Python3Parser';
import { ArgumentContext } from './Python3Parser';
import { Comp_iterContext } from './Python3Parser';
import { Comp_forContext } from './Python3Parser';
import { Comp_ifContext } from './Python3Parser';
import { StrContext } from './Python3Parser';
import { NumberContext } from './Python3Parser';
import { IntegerContext } from './Python3Parser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Python3Parser`.
 */
export interface Python3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Python3Parser.tl_input`.
	 * @param ctx the parse tree
	 */
	enterTl_input?: (ctx: Tl_inputContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.tl_input`.
	 * @param ctx the parse tree
	 */
	exitTl_input?: (ctx: Tl_inputContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.funcdef`.
	 * @param ctx the parse tree
	 */
	enterFuncdef?: (ctx: FuncdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.funcdef`.
	 * @param ctx the parse tree
	 */
	exitFuncdef?: (ctx: FuncdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.varargslist`.
	 * @param ctx the parse tree
	 */
	enterVarargslist?: (ctx: VarargslistContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.varargslist`.
	 * @param ctx the parse tree
	 */
	exitVarargslist?: (ctx: VarargslistContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.vfpdef`.
	 * @param ctx the parse tree
	 */
	enterVfpdef?: (ctx: VfpdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.vfpdef`.
	 * @param ctx the parse tree
	 */
	exitVfpdef?: (ctx: VfpdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.block_stmt`.
	 * @param ctx the parse tree
	 */
	enterBlock_stmt?: (ctx: Block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.block_stmt`.
	 * @param ctx the parse tree
	 */
	exitBlock_stmt?: (ctx: Block_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	enterSimple_stmt?: (ctx: Simple_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	exitSimple_stmt?: (ctx: Simple_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterSmall_stmt?: (ctx: Small_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitSmall_stmt?: (ctx: Small_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	exitExpr_stmt?: (ctx: Expr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.testlist_star_expr`.
	 * @param ctx the parse tree
	 */
	enterTestlist_star_expr?: (ctx: Testlist_star_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.testlist_star_expr`.
	 * @param ctx the parse tree
	 */
	exitTestlist_star_expr?: (ctx: Testlist_star_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.augassign`.
	 * @param ctx the parse tree
	 */
	enterAugassign?: (ctx: AugassignContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.augassign`.
	 * @param ctx the parse tree
	 */
	exitAugassign?: (ctx: AugassignContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.flow_stmt`.
	 * @param ctx the parse tree
	 */
	enterFlow_stmt?: (ctx: Flow_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.flow_stmt`.
	 * @param ctx the parse tree
	 */
	exitFlow_stmt?: (ctx: Flow_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.import_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.import_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.import_name`.
	 * @param ctx the parse tree
	 */
	enterImport_name?: (ctx: Import_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.import_name`.
	 * @param ctx the parse tree
	 */
	exitImport_name?: (ctx: Import_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.import_from`.
	 * @param ctx the parse tree
	 */
	enterImport_from?: (ctx: Import_fromContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.import_from`.
	 * @param ctx the parse tree
	 */
	exitImport_from?: (ctx: Import_fromContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_names?: (ctx: Dotted_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_names?: (ctx: Dotted_as_namesContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterCompound_stmt?: (ctx: Compound_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitCompound_stmt?: (ctx: Compound_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.while_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.while_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.suite`.
	 * @param ctx the parse tree
	 */
	enterSuite?: (ctx: SuiteContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.suite`.
	 * @param ctx the parse tree
	 */
	exitSuite?: (ctx: SuiteContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.test`.
	 * @param ctx the parse tree
	 */
	enterTest?: (ctx: TestContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.test`.
	 * @param ctx the parse tree
	 */
	exitTest?: (ctx: TestContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.test_nocond`.
	 * @param ctx the parse tree
	 */
	enterTest_nocond?: (ctx: Test_nocondContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.test_nocond`.
	 * @param ctx the parse tree
	 */
	exitTest_nocond?: (ctx: Test_nocondContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.or_test`.
	 * @param ctx the parse tree
	 */
	enterOr_test?: (ctx: Or_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.or_test`.
	 * @param ctx the parse tree
	 */
	exitOr_test?: (ctx: Or_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.and_test`.
	 * @param ctx the parse tree
	 */
	enterAnd_test?: (ctx: And_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.and_test`.
	 * @param ctx the parse tree
	 */
	exitAnd_test?: (ctx: And_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.not_test`.
	 * @param ctx the parse tree
	 */
	enterNot_test?: (ctx: Not_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.not_test`.
	 * @param ctx the parse tree
	 */
	exitNot_test?: (ctx: Not_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.comp_op`.
	 * @param ctx the parse tree
	 */
	enterComp_op?: (ctx: Comp_opContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.comp_op`.
	 * @param ctx the parse tree
	 */
	exitComp_op?: (ctx: Comp_opContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.arith_expr`.
	 * @param ctx the parse tree
	 */
	enterArith_expr?: (ctx: Arith_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.arith_expr`.
	 * @param ctx the parse tree
	 */
	exitArith_expr?: (ctx: Arith_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.power`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.power`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.testlist_comp`.
	 * @param ctx the parse tree
	 */
	enterTestlist_comp?: (ctx: Testlist_compContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.testlist_comp`.
	 * @param ctx the parse tree
	 */
	exitTestlist_comp?: (ctx: Testlist_compContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.trailer`.
	 * @param ctx the parse tree
	 */
	enterTrailer?: (ctx: TrailerContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.trailer`.
	 * @param ctx the parse tree
	 */
	exitTrailer?: (ctx: TrailerContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.subscriptlist`.
	 * @param ctx the parse tree
	 */
	enterSubscriptlist?: (ctx: SubscriptlistContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.subscriptlist`.
	 * @param ctx the parse tree
	 */
	exitSubscriptlist?: (ctx: SubscriptlistContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.testlist`.
	 * @param ctx the parse tree
	 */
	enterTestlist?: (ctx: TestlistContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.testlist`.
	 * @param ctx the parse tree
	 */
	exitTestlist?: (ctx: TestlistContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.dictorsetmaker`.
	 * @param ctx the parse tree
	 */
	enterDictorsetmaker?: (ctx: DictorsetmakerContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.dictorsetmaker`.
	 * @param ctx the parse tree
	 */
	exitDictorsetmaker?: (ctx: DictorsetmakerContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.comp_iter`.
	 * @param ctx the parse tree
	 */
	enterComp_iter?: (ctx: Comp_iterContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.comp_iter`.
	 * @param ctx the parse tree
	 */
	exitComp_iter?: (ctx: Comp_iterContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.comp_for`.
	 * @param ctx the parse tree
	 */
	enterComp_for?: (ctx: Comp_forContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.comp_for`.
	 * @param ctx the parse tree
	 */
	exitComp_for?: (ctx: Comp_forContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.comp_if`.
	 * @param ctx the parse tree
	 */
	enterComp_if?: (ctx: Comp_ifContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.comp_if`.
	 * @param ctx the parse tree
	 */
	exitComp_if?: (ctx: Comp_ifContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.str`.
	 * @param ctx the parse tree
	 */
	enterStr?: (ctx: StrContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.str`.
	 * @param ctx the parse tree
	 */
	exitStr?: (ctx: StrContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `Python3Parser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `Python3Parser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;
}

