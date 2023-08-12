const prompt = require("prompt-sync")({sigint:true});


data = prompt("Введите данные: ")
function str_validation(data){
    small_alph = 'abcdefghijklmnopqrstuvwxyz';
    capital_alph = small_alph.toUpperCase()
    digits = '0123456789'

    if (data.length <= 5){
        console.log("Number of symbols is less than 5", data.length)
    }else if(data.length >= 64){
        console.log("Number of symbols is more than 64", data.length)
    }

    var letter = 0
    for(el in data){
        if (small_alph.indexOf(data[el]) >= 0){
            letter += 1
        }
    }
    if (letter == 0){
        console.log("There are no LETTER symbols")
    }
    
    var capital_letter = 0
    for(el in data){
        if (capital_alph.indexOf(data[el]) >= 0){
            capital_letter += 1
        }
    }
    if (capital_letter == 0){
        console.log("There are no CAPITALL LETTER symbols")
    }

    var digits_count = 0
    for(el in data){
        if (digits.indexOf(data[el]) >= 0){
            digits_count += 1
        }
    }
    if (digits_count == 0){
        console.log("There are no DIGITS symbols")
    }

    if (data.indexOf("@") <= 0){
        console.log("There are no @ symbol")
    }

    var blind_sumbol = 0
    for(el in data){
        if (data[el].indexOf(" ") >= 0){
            blind_sumbol += 1
        }
    }
    if (blind_sumbol == data.length){
        console.log("Data hasn't any symbol")
    }
}

str_validation(data)
