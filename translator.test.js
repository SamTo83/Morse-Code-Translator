// we need to write some test to translate...
// French to English
import {translate} from './translator.js';
import { it, expect } from '@jest/globals';

// is the letter A is .-
// is the letter B is -...
// is the letter C is -.-.
// is the letter D is -..
// is the letter E is .

//describe
describe('Translate the morse code to letters', () => {
  it("translate A  to .-", () => {
    let result = translate('a');
    expect(result).toBe(".-");
  })
  it("translate B  to -...", () => {
    let result = translate('b');
    expect(result).toBe("-...");
  })
  it("translate C to -.-.", () => {
    let result = translate('c');
    expect(result).toBe("-.-.");
  })
  it("translate D to -..", () => {
    let result = translate('d');
    expect(result).toBe("-..");
  })
  it("translate E to .", () => {
    let result = translate('e');
    expect(result).toBe(".");
  })
  it("Translates f to ..-." , () => {
    const result = translate("f")
    expect(result).toBe("..-.")
})
it("Translates g to --." , () => {
    const result = translate("g")
    expect(result).toBe("--.")
})
it("Translates h to ...." , () => {
    const result = translate("h")
    expect(result).toBe("....")
})
it("Translates i to .." , () => {
    const result = translate("i")
    expect(result).toBe("..")
})
it("Translates j to .---" , () => {
    const result = translate("j")
    expect(result).toBe(".---")
})
it("Translates k to -.-" , () => {
    const result = translate("k")
    expect(result).toBe("-.-")
})
it("Translates l to .-.." , () => {
    const result = translate("l")
    expect(result).toBe(".-..")
})
it("Translates m to --" , () => {
    const result = translate("m")
    expect(result).toBe("--")
})
it("Translates n to -." , () => {
    const result = translate("n")
    expect(result).toBe("-.")
})
it("Translates o to ---" , () => {
    const result = translate("o")
    expect(result).toBe("---")
})
it("Translates p to .--." , () => {
    const result = translate("p")
    expect(result).toBe(".--.")
})
it("Translates q to --.-" , () => {
    const result = translate("q")
    expect(result).toBe("--.-")
})
it("Translates r to .-." , () => {
    const result = translate("r")
    expect(result).toBe(".-.")
})
it("Translates s to ..." , () => {
    const result = translate("s")
    expect(result).toBe("...")
})
it("Translates t to -" , () => {
    const result = translate("t")
    expect(result).toBe("-")
})
it("Translates u to ..-" , () => {
    const result = translate("u")
    expect(result).toBe("..-")
})
it("Translates v to ...-" , () => {
    const result = translate("v")
    expect(result).toBe("...-")
})
it("Translates w to .--" , () => {
    const result = translate("w")
    expect(result).toBe(".--")
})
it("Translates x to -..-" , () => {
    const result = translate("x")
    expect(result).toBe("-..-")
})
it("Translates y to -.--" , () => {
    const result = translate("y")
    expect(result).toBe("-.--")
})
it("Translates z to --.." , () => {
    const result = translate("z")
    expect(result).toBe("--..")
})
});
