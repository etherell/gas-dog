
// Выпадающее меню
$('document').ready(function () {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	})
})

console.log("hello")


// Калькулятор 
 btn.addEventListener('click', function(e) {

 	//Задаем переменные
	var result 			= 0;
	var plague 			= document.querySelector('#plague[type=checkbox]')
	var rabies 			= document.querySelector('#rabies[type=checkbox]')
	var enteritis 		= document.querySelector('#enteritis[type=checkbox]')
	var parainfluenza 	= document.querySelector('#parainfluenza[type=checkbox]')
	var hepatitis		= document.querySelector('#hepatitis[type=checkbox]')
	var leptospirosis 	= document.querySelector('#leptospirosis[type=checkbox]')

	//Проверяем возраст
			if (age.value === "5") {
				result += 100;
			} else if (age.value === "10") {
				result += 200;
			} else {
				result += 50;
			}
		console.log(result);
	//Проверяем породу
			if (breed.value === "1") {
				result += 0;
			} else if (breed.value === "2") {
				result += 150;
			} else {
				result += 100;
			}
		console.log(result);
	//Проверяем вес
			if (weight.value === "5") {
				result += 200;
			} else if (weight.value === "10") {
				result += 150;
			} else {
				result += 50;
			}
		console.log(result);
	//Проверяем родословную 
			if (breed.pedigree === "1") {
				result += 200;
			} else {
				result += 0;
			}
		console.log(result);
	//Проверяем пол
		if (breed.sex=== "1") {
				result += 100;
			} else {
				result += 50;
			}
		console.log(result);

	//Чекбоксы
		if (plague.checked) {
				result += 50;
			} else {
				result -= 20;
			}
		console.log(result);

		if (rabies.checked) {
				result += 30;
			} else {
				result -= 30;
			}
		console.log(result);

		if (enteritis.checked) {
				result += 50;
			} else {
				result -= 30;
			}
		console.log(result);

		if (parainfluenza.checked) {
				result += 70;
			} else {
				result -= 40;
			}
		console.log(result);

		if (hepatitis.checked) {
				result += 45;
			} else {
				result -= 25;
			}
		console.log(result);

		if (leptospirosis.checked) {
				result += 40;
			} else {
				result -= 30;
			}
		console.log(result);

	res.classList.add('estimate');
	res.innerHTML = 'Ваш питомец стоит: ' + result + ' грн';
	});


//Очищаем поля ввода


document.getElementById("form-button").onclick = function(e) {
	 document.getElementById("form-input-1").value = "";
	 document.getElementById("form-input-2").value = "";
	 document.getElementById("form-input-3").value = "";
}



/* var age = document.querySelector('.age');
var breed = document.querySelector('.breed');
var eight = document.querySelector('.weight');
var sex = document.querySelector('.sex');
var pedigree = document.querySelector('.pedigree'); */