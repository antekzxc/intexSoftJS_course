var hours,minutes;
function isTimeValid (hours, minutes){
    if (hours <= 23 && hours >= 0 && minutes <= 59 && minutes >=00) {
        return true;
    } else return false;
};
console.log(isTimeValid (14, 43));
console.log(isTimeValid (32, 100));