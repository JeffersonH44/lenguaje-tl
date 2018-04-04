import {ANTLRErrorListener, Recognizer, RecognitionException, CommonToken} from 'antlr4ts';
import {Python3Parser} from './Python3Parser';

export default class DescriptiveErrorListener implements ANTLRErrorListener<Symbol> {
    public static INSTANCE:DescriptiveErrorListener = new DescriptiveErrorListener();

    public syntaxError(recognizer: Recognizer<any, any>, offendingSymbol: any | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
        let offSymbol = (<CommonToken>offendingSymbol);
        let found = offSymbol.text;
        let expected;
        //console.log(e);
        //console.log(msg);
        if(msg.startsWith("missing")) {
            expected = this.functions["missing"](msg);
        } else if(msg.startsWith("extraneous")) {
            expected = this.functions["extraneous"](msg);
        }

        expected = expected.trim();
        expected = this.replaceTokens(expected);

        let toShow = `<${line}:${charPositionInLine + 1}> Error sintactico. Encontrado: '${found}'; se esperaba: ${expected}.`;

        throw new RangeError(toShow);
    }

    private replaceTokens(expected: string) {
        let keys = Object.keys(this.toReplace);
        keys.forEach(element => {
            expected = expected.replace(element, this.toReplace[element]);
        });

        if(expected.indexOf(',') !== -1) {
            expected = expected.slice(1, expected.length - 1).split(", ").sort().join(', ');
        }

        return expected;
    }

    private onMissing(msg: string) {
        let output = msg.split(/at\s|missing\s/g);
        return output[output.length - 2];
    }
    
    private onExtraneous(msg: string) {
        let output = msg.split(/expecting\s/g);
        return output[output.length - 1];
    }

    private functions = {
        "missing": this.onMissing,
        "extraneous": this.onExtraneous
    };

    private toReplace = {
        NEWLINE: "'\n'",
        NAME: "'identificador'",
        STRING_LITERAL: "'valor_string'",
        DECIMAL_INTEGER: "'valor_entero'",
        FLOAT_NUMBER: "'valor_float'"
    };
}