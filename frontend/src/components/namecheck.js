const containsLetters = (newName) => {
    // Regular expression to match alphabetic characters, spaces, and some special characters
    var nameRegex = /^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF' -]+$/;
    return nameRegex.test(newName);
}

const contains_specific_symbols  = (newName) =>  {
    var specificSymbols = /\W/;
    return specificSymbols.test(newName);
}

module.exports = {
    containsLetters,
    contains_specific_symbols,
}

