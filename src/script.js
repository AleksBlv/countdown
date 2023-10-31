const newYearDate = '1 Jan 2024';

function format(val){
    if(val < 10){
        return '0' + val;
    }
    return val;
}


function updateTimer(){
    const dday = new Date(newYearDate);
    const today = new Date();

    let deltaSeconds = Math.floor((dday - today)/1000);

    const days = Math.floor(deltaSeconds / 86400)
    deltaSeconds = deltaSeconds - days * 86400;

    const hours = Math.floor(deltaSeconds / 3600);
    deltaSeconds = deltaSeconds - hours * 3600;

    const mins = Math.floor(deltaSeconds / 60);
    deltaSeconds = deltaSeconds - mins * 60;

    const seconds = deltaSeconds;

    let daysHolder = document.getElementById('days');
    daysHolder.textContent = days;

    let hoursHolder = document.getElementById('hours');
    hoursHolder.textContent = format(hours);

    let minsHolder = document.getElementById('mins');
    minsHolder.textContent = format(mins);

    let secondsHolder = document.getElementById('seconds');
    secondsHolder.textContent = format(seconds);
}

setInterval(updateTimer, 1000);
