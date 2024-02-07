//check for the input for a hack attack
function scriptPattern(patternForFirstname, patternForLastname, patternMobile){
    var firstCharactersOfFirstname = patternForFirstname.substring(0,8);
    var firstCharactersOfLastname = patternForLastname.substring(0,8);
    var firstCharactersOfMobile = patternMobile.substring(0,8);
    let patternIsInValid = false;
    const jsScriptPattern = "<script>";
    const phpScriptPattern = "<?php";
    if(firstCharactersOfFirstname === jsScriptPattern || firstCharactersOfFirstname === phpScriptPattern ||
        firstCharactersOfLastname === jsScriptPattern || firstCharactersOfLastname === phpScriptPattern ||
        firstCharactersOfMobile === jsScriptPattern || firstCharactersOfMobile === phpScriptPattern){
        patternIsInValid = true;
    }
    return patternIsInValid;
}

module.exports = {
    scriptPattern,
}