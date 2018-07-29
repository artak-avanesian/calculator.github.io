// var result = document.getElementById('result-block');
// var number1 = document.querySelectorAll('.number-1');
// var number2 = document.querySelectorAll('.number-2');
// var plus = document.querySelectorAll('.plus');
// var minus = document.querySelectorAll('.minus');
// var multiplication = document.querySelectorAll('.multiply');
// var division = document.querySelectorAll('.divide');

// plus.addEventListener('click', function() {
// 	var result = document.getElementById('result-block');
// var number1 = document.querySelectorAll('.number-1');
// var number2 = document.querySelectorAll('.number-2');
// 	result.textContent = number1.value + number2.value; 
// })

// var num1 = document.querySelector(".number-1");
// var num2 = document.querySelector(".number-2");


var resultOfOperation = document.getElementById("result-block");
var prevResult = +resultOfOperation.textContent;
	
var plus = document.querySelector(".plus");
plus.addEventListener('click', function () {
	var number1 = +document.getElementById("input1").value;
	var number2 = +document.getElementById("input2").value;
	var resultOfAdd = number1 + number2;
	resultOfOperation.textContent = prevResult + resultOfAdd;
})

var minus = document.querySelector(".minus");
minus.addEventListener('click', function () {
	var number1 = +document.getElementById("input1").value;
	var number2 = +document.getElementById("input2").value;
	var resultOfSubtraction = number1 - number2;
	resultOfOperation.textContent = prevResult + resultOfSubtraction;
})

var multiplication = document.querySelector(".multiply");
multiplication.addEventListener('click', function () {
	var number1 = +document.getElementById("input1").value;
	var number2 = +document.getElementById("input2").value;
	var resultOfMultiplication = number1 * number2;
	resultOfOperation.textContent = prevResult + resultOfMultiplication;
})

var division = document.querySelector(".divide");
division.addEventListener('click', function () {
	var number1 = +document.getElementById("input1").value;
	var number2 = +document.getElementById("input2").value;
	var resultOfDivision = number1 / number2;
	resultOfOperation.textContent = prevResult + resultOfDivision;
})


/*function add() {
	var number1 = +document.getElementById("input1").value;
	var number2 = +document.getElementById("input2").value;
	var resultOfOperation = document.getElementById("result-block");
	var prevResult = +resultOfOperation.textContent;
	var resultOfAdd = number1 + number2;
	resultOfOperation.textContent = prevResult + resultOfAdd;
}*/