//Vaidation of a new mobile number
const isValid = (newNumber) => {
    const MINLENGTH_OF_MOBILENUMBER = 11;
    var number_completly = newNumber >= MINLENGTH_OF_MOBILENUMBER;
    var firstNumbers = newNumber.toString().substring(0, 4);
    var validPattern = patternOfNumbersAreValid(firstNumbers);
    return number_completly && validPattern;

}

    //check the first 4 characters of a number
const patternOfNumbersAreValid = (pattern) => {
        const MOBILENETWORK = ["0152", "0162", "0172", "0173", "0174", "0175", "0153", "0179"];
        let patternIsValid = false;
        for(var i = 0; i < MOBILENETWORK.length; i++){
            if(pattern === MOBILENETWORK[i]){
                patternIsValid = true;
            }
        }
        return patternIsValid;
}

module.exports={
    isValid
}
