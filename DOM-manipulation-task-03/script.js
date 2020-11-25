let randomNoContainer = document.createElement('div');
randomNoContainer.setAttribute('class', 'random-no-container');

randomNoContainer.innerText = 'Random no generator :';

let randomNoDisplay = document.createElement('div');
randomNoDisplay.setAttribute('class', 'random-no-display');

let randomNoBtnContainer = document.createElement('div');
randomNoBtnContainer.setAttribute('class', 'random-btn-container');

let randomGeneratorbtn = document.createElement('div');
randomGeneratorbtn.setAttribute('class', 'random-gen-btn');
randomGeneratorbtn.innerText = 'Generate';

let randomResetBtn = document.createElement('div');
randomResetBtn.setAttribute('class', 'random-reset-btn');
randomResetBtn.innerText = 'Reset';

randomResetBtn.addEventListener('click', () => {
    resetValue();
})

randomGeneratorbtn.addEventListener('click', () => {
    resetValue();
    let num = generateRandomNo(8);
    updateDisplay(num);
})

let output = '';

function resetValue() {
    output = "";
    updateDisplay("");
}

function generateRandomNo(digits) {
    let randNumber = Math.ceil(Math.random() * 9);
    if (!output.includes(randNumber)) {
        output = output + randNumber;
    }
    if (output.length !== digits) {
        generateRandomNo(digits);
    }
    return output;
}

function updateDisplay(num) {
    randomNoDisplay.innerText = num;
}

randomNoBtnContainer.append(randomGeneratorbtn, randomResetBtn);

randomNoContainer.append(randomNoDisplay, randomNoBtnContainer);



let dateOfBirthContainer = document.createElement('div');
dateOfBirthContainer.setAttribute('class', 'dob-container');

let labelDobCal = document.createElement('label');
labelDobCal.setAttribute('class', 'main-title');
labelDobCal.innerText = 'D.O.B Calculator :';

let dobDisplay = document.createElement('div');
dobDisplay.setAttribute('class', 'dob-display');

let inputDobContainer = document.createElement('div');
inputDobContainer.setAttribute('class', 'input-dob-container');

let labelDOB = document.createElement('label');
labelDOB.setAttribute('for', 'dob-input');
labelDOB.setAttribute('class', 'dob-label');
labelDOB.innerText = 'D.O.B : ';

let inputDob = document.createElement('input');
inputDob.setAttribute('type', 'date');
inputDob.setAttribute('class', 'dob-input');
inputDob.setAttribute('name', 'dob-input');
inputDob.setAttribute('max', getCurrentDate());

let dobCalBtn = document.createElement('div');
dobCalBtn.setAttribute('class', 'dob-cal-btn');
dobCalBtn.innerText = 'Calculate';

dobCalBtn.addEventListener('click', () => {
    calculateDobDiff(inputDob.value);
})

inputDobContainer.append(labelDOB, inputDob, dobCalBtn);

dateOfBirthContainer.append(labelDobCal, dobDisplay, inputDobContainer);


function calculateDobDiff(date) {
    var dob = new Date(date);
    var currentDate = new Date();
    // let currentDate = new Date();
    // let dob = new Date(date);
    let currentDateMilliSec = currentDate.getTime();
    let dobMilliSec = dob.getTime();
    let totalMilliSecDiff = currentDateMilliSec - dobMilliSec;
    let totalSecDiff = Math.floor(totalMilliSecDiff / 1000);
    let totalMinuteDiff = Math.floor(totalSecDiff / 60);
    let totalHourDiff = Math.floor(totalMinuteDiff / 60);
    let totalDayDiff = Math.floor(totalHourDiff / 24);
    let yearsDiff = currentDate.getFullYear() - dob.getFullYear();
    let month = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let sec = 0;
    let milliSec = 0;
    if (currentDate.getMonth() < dob.getMonth()) {
        yearsDiff = yearsDiff - 1;
        month = 12 - (dob.getMonth() - currentDate.getMonth());
    } else {
        month = (currentDate.getMonth() - dob.getMonth());
    }
    if (dob.getDate() > currentDate.getDate()) {
        month = month - 1;
        days = daysInMonth(dob.getMonth() + 1, dob.getFullYear()) - (dob.getDate() - currentDate.getDate());
    } else {
        days = currentDate.getDate() - dob.getDate();
    }
    if (dob.getHours() > currentDate.getHours()) {
        days = days - 1;
        hours = 24 - (dob.getHours() - currentDate.getHours());
    } else {
        hours = currentDate.getHours() - dob.getHours();
    }
    if (dob.getMinutes() > currentDate.getMinutes()) {
        hours = hours - 1;
        minutes = 60 - (dob.getMinutes() - currentDate.getMinutes());
    } else {
        minutes = currentDate.getMinutes() - dob.getMinutes();
    }
    if (dob.getSeconds() > currentDate.getSeconds()) {
        minutes = minutes - 1;
        sec = 60 - (dob.getSeconds() - currentDate.getSeconds());
    } else {
        sec = currentDate.getSeconds() - dob.getSeconds();
    }
    if (dob.getMilliseconds() > currentDate.getMilliseconds()) {
        sec = sec - 1;
        milliSec = 60 - (dob.getMilliseconds() - currentDate.getMilliseconds());
    } else {
        milliSec = currentDate.getMilliseconds() - dob.getMilliseconds();
    }
    let totalMonthDiff = (yearsDiff * 12) + month;
    let diffMonth = month;
    let diffDays = days;
    let diffHours = hours;
    let diffMinutes = minutes;
    let diffSec = sec;
    let diffMillisec = milliSec;
    let totalDiff = `Total Diff in years: ${yearsDiff}<br> Total Diff in months : ${totalMonthDiff}<br> Total Diff in Days : ${totalDayDiff}<br> Total Diff in Hours : ${totalHourDiff}<br> Total Diff in minutes : ${totalMinuteDiff} <br> Total Diff in seceonds : ${totalSecDiff}<br> Total Diff in millisec : ${totalMilliSecDiff}`;
    dobDisplay.innerHTML = `Year : ${yearsDiff}, Month : ${diffMonth}, Days : ${diffDays}, Hours : ${diffHours}, Minutes : ${diffMinutes}, Sec : ${diffSec}, MilliSec : ${diffMillisec} <br><br> ${totalDiff}`;
}

function getCurrentDate() {
    let date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}



document.body.append(randomNoContainer, dateOfBirthContainer);