const transferToTime = (sec) => {
    let resHours;
    let resMinutes;
    let resSeconds;
    if (sec >= 3600) {
        return [
            resHours = Math.floor(sec / 3600),
            resMinutes = Math.floor((sec % 3600) / 60),
            resSeconds = (sec % 3600) % 60
        ];  
    } else if (sec < 3600) {
        return [
            resHours = '00',
            resMinutes = Math.floor(sec %60),
            resSeconds = sec % 60
        ];  
    } else if (sec < 60){
        return [
            resHours = '00',
            resMinutes = '00',
            resSeconds = sec % 60
        ]; 
    } 
}


const task3 = (hours, minutes, seconds) => {
    obj = {
        'hours':hours, 
        'minutes':minutes, 
        'seconds': seconds, 
        'minusHours': function(answerArea, time) {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let objTime = +this.hours * 3600 + +this.minutes * 60 + +this.seconds;
            let curTime = time * 3600;
            let difference = objTime - curTime;
            if (difference < 0) {
                return alert('У вас нет столько времени!');
            }
            return answerArea.innerText = 'Ваше время - ' + transferToTime(difference).join(':');
        },
        'minusMinutes': function(answerArea, time) {
            console.log('hi')
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let objTime = +this.hours * 3600 + +this.minutes * 60 + +this.seconds;
            let curTime = time * 60;    
            let difference = objTime - curTime;
            if (difference < 0) {
                return alert('У вас нет столько времени!');
            }
            return answerArea.innerText = 'Ваше время - ' + transferToTime(difference).join(':');
        },
        'minusSeconds': function(answerArea, time) {
            if (!answerArea){
                return alert('Укажите в коде поле для вывода данных!');
            }
            let objTime = +this.hours * 3600 + +this.minutes * 60 + +this.seconds;
            let curTime = time;
            let difference = objTime - curTime;
            if (difference < 0) {
                return alert('У вас нет столько времени!');
            }
            return answerArea.innerText = 'Ваше время - ' + transferToTime(difference).join(':');
        },
    };
};
