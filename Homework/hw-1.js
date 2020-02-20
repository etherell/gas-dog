console.log('*** TASK-1 ***');

//Создание массива цветов
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log('*** Вывод массива ***');
console.log(colors);

console.log('*** Вывод 1 элемента массива ***');
console.log(colors[0]);

//Переназначение красного на розовый
colors[0] = 'pink';

console.log('*** Вывод массива ***');
console.log(colors);

console.log('*** TASK-2 ***');

//Создание объекта
var goods = {
	'laptop' 	: 10000,
	'phone'		: 5000,
	'TV'		: 7000,
	'PC'		: 15000,
};

console.log('*** Вывод обьекта ***');
console.log(goods);

console.log('*** Вывод стоимости товаров ***');
console.log('Ноутбук стоит', goods.laptop, 'грн');
console.log('Телефон стоит', goods['phone'], 'грн');

console.log('*** TASK-3 ***');
//Объявляем и задаём значения переменным
var ETALON_NUMBER = 33;
var userNumber = 0;

console.log('*** Сравнение 1. Юзер вводит 0, эталонное число 33*** ');
//Решение через if else
if (ETALON_NUMBER == userNumber) {
	console.log("Yes, it's true")
} else {
	console.log("No, it's false")
}

//Переназначаем переменную
var userNumber = 33;

console.log('*** Сравнение 2. Юзер вводит 33, эталонное число 33 ***');
if (ETALON_NUMBER == userNumber) {
	console.log("Yes, it's true")
} else {
	console.log("No, it's false")
}