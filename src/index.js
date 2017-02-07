/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(a) {
    return a;
}
console.log( returnFirstArgument(5) );

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b = 100) {
    return a + b;
}
console.log( defaultParameterValue(8) );

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }
    return result;
}
console.log( returnArgumentsArray('one', 'two') );

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    function fn(){
        return 100;
    }
    return fn();
}
console.log(returnFnResult());

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number = 0) {
    return function f () {
        number++;
        return number;
    };
}
var result = returnCounter();
console.log(result());
console.log(result());
console.log(result());

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function func () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

function bindFunction(fn) {
    var bfunc = fn.bind(null, 20, 30);
    return bfunc();
};
var resultBind = bindFunction(func);
console.log(resultBind);


export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
