
//validation of only letters
const containsLetters = (newName) => {
    // Regular expression to match alphabetic characters, spaces, and some special characters
    var nameRegex = /^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF' -]+$/;
    return nameRegex.test(newName);
}

//validation of specific symbols
const contains_specific_symbols  = (newName) =>  {
    var specificSymbols = /[(){}?§^.:,;_´`'*+~<|>€%&$#@!]/;
    return specificSymbols.test(newName);
}

//validation of specific symbols
const nameBeginsWithCapitalLetter  = (newName) =>  {
    return newName.charAt(0) === newName.charAt(0).toUpperCase();
}

module.exports = {
    containsLetters,
    contains_specific_symbols,
    nameBeginsWithCapitalLetter,
}

