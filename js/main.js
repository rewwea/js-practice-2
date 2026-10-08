// Задание 1
// Возведение числа во вторую степень

let number = Number(prompt('Задание 1. Введите число:'))
let square = number ** 2

alert('Число во второй степени: ' + square)

// Задание 2
// Среднее арифметическое двух чисел

let number1 = Number(prompt('Задание 2. Введите первое число:'))
let number2 = Number(prompt('Введите второе число:'))

let average = (number1 + number2) / 2

alert('Среднее арифметическое: ' + average)

// Задание 3
// Площадь квадрата

let side = Number(prompt('Задание 3. Введите длину стороны квадрата:'))
let area = side ** 2

alert('Площадь квадрата: ' + area)

// Задание 4
// Конвертер километров в мили

const KM_TO_MILES = 0.621371

let kilometers = Number(prompt('Задание 4. Введите количество километров:'))
let miles = kilometers * KM_TO_MILES

alert(kilometers + ' км = ' + miles + ' миль')

// Задание 5
// Калькулятор

let calcNumber1 = Number(prompt('Задание 5. Введите первое число:'))
let calcNumber2 = Number(prompt('Введите второе число:'))

let sum = calcNumber1 + calcNumber2
let difference = calcNumber1 - calcNumber2
let multiplication = calcNumber1 * calcNumber2
let division = calcNumber1 / calcNumber2

alert(
	'Сложение: ' +
		sum +
		'\nВычитание: ' +
		difference +
		'\nУмножение: ' +
		multiplication +
		'\nДеление: ' +
		division,
)

// Задание 6
// Решение уравнения a * x + b = 0

let a = Number(prompt('Задание 6. Введите значение a:'))
let b = Number(prompt('Введите значение b:'))

let x = -b / a

alert('Значение x: ' + x)

// Задание 7
// Сколько времени осталось до следующего дня

let hours = Number(prompt('Задание 7. Введите текущее количество часов:'))
let minutes = Number(prompt('Введите текущее количество минут:'))

let minutesLeft = 24 * 60 - (hours * 60 + minutes)

let hoursLeft = Math.floor(minutesLeft / 60)
let remainingMinutes = minutesLeft % 60

alert(
	'До следующего дня осталось: ' +
		hoursLeft +
		' ч. ' +
		remainingMinutes +
		' мин.',
)

// Задание 8
// Вторая цифра трехзначного числа

let threeDigitNumber = Number(prompt('Задание 8. Введите трехзначное число:'))

let secondDigit = Math.floor(threeDigitNumber / 10) % 10

alert('Вторая цифра числа: ' + secondDigit)

// Задание 9
// Перемещение последней цифры пятизначного числа в начало

let fiveDigitNumber = Number(prompt('Задание 9. Введите пятизначное число:'))

let lastDigit = fiveDigitNumber % 10
let remainingNumber = Math.floor(fiveDigitNumber / 10)

let newNumber = lastDigit * 10000 + remainingNumber

alert('Полученное число: ' + newNumber)

// Задание 10
// Расчет зарплаты

let sales = Number(prompt('Задание 10. Введите общую сумму продаж за месяц:'))

const BASE_SALARY = 250
const SALES_PERCENT = 0.1

let salary = BASE_SALARY + sales * SALES_PERCENT

alert('Зарплата за месяц: ' + salary)
