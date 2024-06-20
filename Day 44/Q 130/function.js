"use strict";
//creating function and exporting into another javascript file
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.subtract = exports.sum = void 0;
function sum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (total, number) { return total + number; });
}
exports.sum = sum;
function subtract() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (total, number) { return total - number; });
}
exports.subtract = subtract;
function multiply() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (total, number) { return total * number; });
}
exports.multiply = multiply;
