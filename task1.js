const task1 = (producer, model, year, speed) => {
    obj = {
        'producer':producer, 
        'model':model, 
        'year': year, 
        'speed': speed,
        'present': (answerArea) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            return answerArea.innerText = 'Производство: ' + obj.producer + ', модель: ' + obj.model + ', год выпуска: ' + obj.year + ', средняя скорость: ' + obj.speed;
        },
        'countTime': (answerArea, distance) => {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let time = distance / obj.speed;
            let res = time + Math.floor(time / 4);
            return answerArea.innerText = 'Ваше время прибытие через ' + res + ' часа';
        }
    };
};
