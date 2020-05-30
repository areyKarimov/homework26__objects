const ANSWERAREA = document.querySelectorAll('.task__answer');
const TARGETFORM = (selector) => document.querySelectorAll(`.${selector}`)['0'];
const SELECTTASK1 = document.querySelector('#selectFunc_1');
const SELECTTASK2 = document.querySelector('#selectFunc_2');
const SELECTTASK3 = document.querySelector('#selectFunc_3');
const DISTANCE = document.querySelector('.distance');
let obj = {}



const VALIDATOR = (value) => {
    return !isNaN(+value) && value.length > 0 ? true : false;
}



window.document.addEventListener('submit', event => {
    event.preventDefault();
    let f = event.target;
    switch (f) {
        case TARGETFORM('object'): 
            task1(f.producer.value, f.model.value, f.yearOfConstruct.value, f.speed.value);
            [...ANSWERAREA][0].innerText = 'Объект создан!';
            TARGETFORM('functions').classList.add('active');
            TARGETFORM('doFraction').classList.remove('active');
            TARGETFORM('minusTime').classList.remove('active');
            break;
        case TARGETFORM('functions'): 
            if (SELECTTASK1.value === 'information'){
                obj.present([...ANSWERAREA][1]);
            } else if (SELECTTASK1.value === 'time') {
                obj.countTime([...ANSWERAREA][1], DISTANCE.value);
            }
            break;
        case TARGETFORM('fraction'): 
            task2(f.numenator.value, f.denumenator.value);
            [...ANSWERAREA][2].innerText = 'Дробь создана!';
            TARGETFORM('doFraction').classList.add('active');
            TARGETFORM('minusTime').classList.remove('active');
            TARGETFORM('functions').classList.remove('active');
            break;
        case TARGETFORM('doFraction'):
            console.log
            switch (SELECTTASK2.value){
                case 'addition':
                    obj.addition([...ANSWERAREA][3], f.numenator2.value, f.denumenator2.value);
                break;
                case 'subtraction':
                    obj.subtraction([...ANSWERAREA][3], f.numenator2.value, f.denumenator2.value);
                break;
                case 'multiplication':
                    obj.multiplication([...ANSWERAREA][3], f.numenator2.value, f.denumenator2.value);
                break;
                case 'division':
                    obj.division([...ANSWERAREA][3], f.numenator2.value, f.denumenator2.value);
                break;
                case 'simplification':
                    obj.simplification([...ANSWERAREA][3], obj.numenator, obj.denumenator);
                break;
            }
            break; 
        case TARGETFORM('time'): 
            task3(f.hours.value, f.minutes.value, f.seconds.value);
            [...ANSWERAREA][4].innerText = 'Объект создан!';
            TARGETFORM('minusTime').classList.add('active');
            TARGETFORM('doFraction').classList.remove('active');
            TARGETFORM('functions').classList.remove('active');
            console.log(obj)
            break;  
        case TARGETFORM('minusTime'): 
            switch (SELECTTASK3.value){
                case 'minusHours':
                    obj.minusHours([...ANSWERAREA][5], f.time.value);
                break;
                case 'minusMinutes':
                    obj.minusMinutes([...ANSWERAREA][5], f.time.value);
                break;
                case 'minusSeconds':
                    obj.minusSeconds([...ANSWERAREA][5], f.time.value);
                break;
            }
            break;   
    }
});