import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { Python3Lexer } from './Python3Lexer';
import { Python3Parser } from './Python3Parser';
import * as fs from 'fs';
import DescriptiveErrorListener from './DescriptiveErrorListener';

export default function parse(filename: string): string {
    var input = fs.readFileSync(filename, 'utf8');
    input += "\n"
    var chars = new ANTLRInputStream(input);
    var lexer = new Python3Lexer(chars);
    var tokens  = new CommonTokenStream(lexer);
    var parser = new Python3Parser(tokens);
    parser.buildParseTree = true;

    lexer.removeErrorListeners();
    lexer.addErrorListener(DescriptiveErrorListener.INSTANCE);
    parser.removeErrorListeners();
    parser.addErrorListener(DescriptiveErrorListener.INSTANCE);

    try {
        var tree = parser.tl_input();
    } catch (e) {
        return e.message;
    }

    return "El analisis sintactico ha finalizado correctamente.";
}