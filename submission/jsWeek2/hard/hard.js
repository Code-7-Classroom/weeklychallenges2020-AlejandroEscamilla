
var centimeterConversion = 2.54; //in to cm
var gramConversion = 453.592; //lb to g
var tomHeight = 9*centimeterConversion;
var tomMass = 8*gramConversion;
var jerryHeight = 10;
var jerryMass = 45;

var tomBMI = (tomMass/(tomHeight*tomHeight));
var jerryBMI = (jerryMass/(jerryHeight*jerryHeight));

if (tomBMI > jerryBMI) {
    document.write("Tom has a higher BMI than Jerry!");
}   else {
        document.write("Jerry has a higher BMI than Tom!");
}