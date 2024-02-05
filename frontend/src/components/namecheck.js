export default function isValidName(newName) {
    // Regular expression to match alphabetic characters, spaces, and some special characters
    //TODO check what exacetly happen in line 4!
    var nameRegex = /^[A-Za-z\u00C0-\u024F\u1E00-\u1EFF' -]+$/;
    var containsLetters = nameRegex.test(newName);
    var specificSymbols = /\W/;
    var without_specificSymbols = specificSymbols.test(newName);
    return containsLetters && !without_specificSymbols;

}