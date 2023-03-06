//function with three parameter
function getAverage(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var average = total / 3;
    return average;
}

//declare variable

var a = 60;
var b = 58;
var c = 59;

//call function with parameter
var average = getAverage(a, b, c);
console.log('average is:', average);