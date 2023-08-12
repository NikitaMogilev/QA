const prompt = require("prompt-sync")({sigint:true});

var item_1 = 5
console.log(item_1)
var item_2 = 3
console.log(item_2)
var item_3 = item_1 + item_2
console.log(item_3)
var item_4 = "Yolochka"
console.log(item_4)
console.log((item_3 + item_4))
console.log(item_3 * item_4)
var item_5 = item_3
var item_6 = 15
var item_6_type = typeof(item_6)
console.log("item_6 ==",item_6, "item_6_type ==",item_6_type)
var item_7 = String(item_6)
var item_7_type = typeof(item_7)
console.log("item_7 ==",item_7, "item_7_type ==",item_7_type)
var age_1 = 10
var age_2 = 18
var age_3 = 60
if (age_1 < age_2){
    console.log("You don't have access cause your age is " + age_1 + " It's less then")    
}else if (age_1 >=  age_2 && age_1 <  age_3){
    console.log("Welcome  !")
}else if (age_1  > age_3){
    console.log("Keep calm and look Culture channel")    
}else{
    console.log("Technical work")
}


function checkAge(age){
    var age_1 = age
    var age_2 = 18
    var age_3 = 60
    if (age_1 < age_2){
        console.log("You don't have access cause your age is " + age_1 + " It's less then")    
    }else if (age_1 >=  age_2 && age_1 <  age_3){
        console.log("Welcome  !")
    }else if (age_1  >= age_3){
        console.log("Keep calm and look Culture channel")    
    }else{
        console.log("Technical work")
    }
}
checkAge(17)
checkAge(18)
checkAge(61)


function check_data(fn){
    return function wrap(args){
        try {
            if (typeof(args) != 'number'){
                throw new TypeError('Argument cannot be a non-integer');
            }
            else{
                fn(args)
            }
        }
        catch (e) {
            if (e.name == "TypeError") {
                console.log("TypeError Argument cannot be a non-integer")
            }else {
                throw e;
            }
          }
    }
}
const check_data_d = check_data(checkAge);
check_data_d(70)

// //   Вариант2
// // const Check_Number_2 = (fn) => {
// //     return (...args) => {
// //         if (args.some((arg) => !Number.isInteger(arg))) {
// //             throw new TypeError('Переданные аргументы должны быть числами');
// //         }
 
// //         return fn(...args);
// //     }
// // }
// // const check_2 = Check_Number_2(checkAge)
// // const result = check_2("25");

function check_if_number(fn){
    return function wrap(args){
        try {
            if (typeof(args) != 'number'){
                if (isNaN(Number(args))){
                    throw new TypeError('Argument cannot be a non-integer');
                }else{
                    fn(Number(args))
                }
            }
            else{
                fn(args)
            }
        }
        catch (e) {
            if (e.name == "TypeError") {
                console.log("TypeError Argument cannot be a non-integer")
            }else {
                throw e;
            }
        }
    }
}
const check_if_number_d = check_if_number(checkAge);
check_if_number_d("40")

input_age = prompt("Введите возраст: ")
console.log(input_age)
check_if_number_d(input_age)