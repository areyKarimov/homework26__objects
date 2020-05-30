
 //smaller divider

let gcd = function(num1, num2) {  
    if (!num2) {  
        return num1;  
    }  
    return gcd(num2, num1 % num2);  
 }; 


 let simplificationOfFraction = (numenator, denumenator) => {
     if (gcd(numenator, denumenator) === 0) {
         return alert('Numenator or denumenator is zero!')
     }
    return [numenator / gcd(numenator, denumenator), denumenator / gcd(numenator, denumenator)];
 }



const task2 = (numenator, denumenator) => {
    obj = {
        'numenator':numenator, 
        'denumenator':denumenator, 
        'addition': (answerArea, value1, value2) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let simplificatedFraction;
            let resNumenator;
            let resDenumenator;
            if (obj.denumenator === value2){
                resNumenator = value1 + obj.numenator;
                resDenumenator = value2;
            } else{
                resNumenator = obj.numenator* value2 + value1*obj.denumenator;
                resDenumenator = obj.denumenator*value2; 
            }
            simplificatedFraction = simplificationOfFraction(resNumenator, resDenumenator);
            return answerArea.innerText = 'Сумма дробей = ' + simplificatedFraction.join('/');
        },
        'subtraction': (answerArea, value1, value2) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let simplificatedFraction;
            let resNumenator;
            let resDenumenator;
            if (obj.denumenator === value2){
                resNumenator = value1 - obj.numenator;
                resDenumenator = value2;
            } else{
                resNumenator = obj.numenator* value2 - value1*obj.denumenator;
                resDenumenator = obj.denumenator*value2; 
            }
            simplificatedFraction = simplificationOfFraction(Math.abs(resNumenator), Math.abs(resDenumenator));
            return answerArea.innerText = 'Разница дробей = ' + simplificatedFraction.join('/');
        },
        'multiplication': (answerArea, value1, value2) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
                resNumenator = value1 * obj.numenator;
                resDenumenator = value2 * obj.denumenator;
                simplificatedFraction = simplificationOfFraction(resNumenator, resDenumenator);
                return answerArea.innerText = 'Произведение дробей = ' + simplificatedFraction.join('/');
        },
        'division': (answerArea, value1, value2) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            resNumenator = value1 * obj.denumenator;
            resDenumenator = value2 * obj.numenator;
            simplificatedFraction = simplificationOfFraction(resNumenator, resDenumenator);
            return answerArea.innerText = 'Деление дробей = ' + simplificatedFraction.join('/');
        },
        'simplification': (answerArea, value1, value2) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let simplificatedFraction = simplificationOfFraction(value1, value2);
            return answerArea.innerText = 'Максимально упрощенная дробь - ' + simplificatedFraction.join('/');
        }
    };
};

