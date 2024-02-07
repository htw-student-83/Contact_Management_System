//Vaidation of a new mobile number
const isValid = (newNumber) => {
    const MINLENGTH_OF_MOBILENUMBER = 11;
    var number_completly = newNumber.toString().length >= MINLENGTH_OF_MOBILENUMBER;
    var validNumber = isNumber(newNumber);
    var firstNumbers = newNumber.toString().substring(0, 4);
    var validPattern = patternOfNumbersAreValid(firstNumbers);
    return number_completly && validNumber && validPattern;

}

//check the first 4 characters of a specific number
const patternOfNumbersAreValid = (pattern) => {
        const MOBILENETWORK = ["0151","0152", "0153", "0162", "0163", "0171", "0172",
            "0173", "0174", "0175", "0176", "0178", "0179"];
        let patternIsValid = false;
        for(var i = 0; i < MOBILENETWORK.length; i++){
            if(pattern === MOBILENETWORK[i]){
                patternIsValid = true;
            }
        }
        return patternIsValid;
}

//check is the input a number
const isNumber = (newNumber) => {
    let isNumber = false;
    if(!isNaN(newNumber)){
        isNumber = true;
    }
    return isNumber;
}

module.exports={
    isValid
}
