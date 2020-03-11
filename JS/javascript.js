
// Выпадающее меню
$('document').ready(function () {
	$('.header__burger, .header__link').click(function(event) {
		$('.header__burger, .header__menu').toggleClass('active');
	})
})




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
	function checked(name, res1, res2) {
		if (name.checked) {
			result += res1;
		} else {
			result -= res2;
		}
	};

	checked(plague, 50, 20);
	checked(rabies, 30, 30);
	checked(enteritis, 50, 30);
	checked(parainfluenza, 70, 40);
	checked(hepatitis, 45, 25);
	checked(leptospirosis, 40, 30);

	res.classList.add('estimate');
	res.innerHTML = 'Ваш питомец стоит: ' + result + ' грн';
	}); 

// Очищаем поля ввода
document.getElementById("form-button").onclick = function(e) {
	 document.getElementById("form-input-1").value = "";
	 document.getElementById("form-input-2").value = "";
	 document.getElementById("form-input-3").value = "";
}

// Инициализация слайдера
$(document).ready(function(){
	$('.testimonials__slider').slick({
	  	prevArrow: '<button class="prev"></button>',
	  	nextArrow: '<button class="next"></button>',
	  	infinite: true,
	  	arrows: true,
	  	adaptiveHeight: true
	  	});
	});

// Вывод всплвающего окна
$(document).ready(function(){
	$('.form__btn').on('click', function(event) {
		event.preventDefault();
		$('.form__background').fadeIn();
	});
	$('.form__close').on('click', function(event) {
		event.preventDefault();
		$('.form__background').fadeOut();
	});
	$('.form__button').on('click', function(event) {
		event.preventDefault();
		$('.form__background').fadeOut();
	});
	});

// Плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
	event.preventDefault();
	const blockID = anchor.getAttribute('href');
	document.querySelector('' + blockID).scrollIntoView({
		behavior: "smooth",
		block: "center"
	});
})
}
