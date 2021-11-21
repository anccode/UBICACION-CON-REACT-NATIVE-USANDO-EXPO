export const validateInput = (input) => {
    //the distance  shold have any number of digitos from 0 to 9.one or zero decimal point. one
    //or zero number (digit) after the decimal point
    var rgx = /^[0-9]{1,6}\.?[0-9]?$/;
    return input.match(rgx) //true or false
}