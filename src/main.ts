import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { Python3Lexer } from './Python3Lexer';
import { Python3Parser } from './Python3Parser';
import * as fs from 'fs';

var input = fs.readFileSync('./test/test.tl', 'utf8');
var chars = new ANTLRInputStream(input);
var lexer = new Python3Lexer(chars);
var tokens  = new CommonTokenStream(lexer);
var parser = new Python3Parser(tokens);
parser.buildParseTree = true; // .buildParseTrees = true;
var tree = parser.file_input();