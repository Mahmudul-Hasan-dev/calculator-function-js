//function with parameter,parameter value will be set from call function
function square(number) {
    var result = number * number;
    return result;
}

var num = 2;

//function call
var result = square(num);
console.log(result);