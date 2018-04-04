import parse from '../parser';
import * as fs from 'fs';

function test(file): string {
    return parse(file);
}

function readFolder(folder) {
    let dirCont = fs.readdirSync(folder);
    let output = dirCont.filter( elm => elm.match(/in/ig)).map(elem => test(folder + elem));
    let expected = dirCont.filter( elm => elm.match(/out/ig)).map(elem => fs.readFileSync(folder + elem, 'utf8').replace("\n", ""));
    return {
        expected,
        output
    };
}

describe("TL test folder", () => {
    it("test folder 1", () => {
        let {
            expected,
            output
        } = readFolder(__dirname + "/data/1/");
        expect(expected).toEqual(output);
    });

    it("test folder 2", () => {
        let {
            expected,
            output
        } = readFolder(__dirname + "/data/2/");
        expect(expected).toEqual(output);
    });

    it("test folder 3", () => {
        let {
            expected,
            output
        } = readFolder(__dirname + "/data/3/");
        expect(expected).toEqual(output);
    });

    it("test folder 4", () => {
        let {
            expected,
            output
        } = readFolder(__dirname + "/data/4/");
        expect(expected).toEqual(output);
    });

    it("test folder 5", () => {
        let {
            expected,
            output
        } = readFolder(__dirname + "/data/5/");
        expect(expected).toEqual(output);
    });
})