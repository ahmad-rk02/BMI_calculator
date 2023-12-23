 
function calculateBMI(){
var weight=document.getElementById("weight").value;
var height=document.getElementById("height").value;
if(weight<=0||isNaN(weight)){
    alert('Please enter the weight')
}
if(height<=0||isNaN(height)){
    alert('Please enter the height')
}

var bmi=weight/((height/100)*(height/100));
var result="Your BMI is "+bmi.toFixed(2)+" , ";
if (bmi<18.5) {
    result+="you are underweight.";
}
else if (bmi<24.9) {
    result+="you are healthy.";
}
else if (bmi<29.9) {
    result+="you are overweight.";
}
else {
    result+="you are obese."
}
document.getElementById("result").innerHTML=result;
}