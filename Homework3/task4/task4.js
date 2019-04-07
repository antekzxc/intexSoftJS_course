var numberOfDays, lastDigitOfnumber, lastTwoDigitsOfNumber;
function getDayDeclension (numberOfDays){
    lastDigitOfnumber = numberOfDays % 10;
    lastTwoDigitsOfNumber = numberOfDays % 100;
    if (lastTwoDigitsOfNumber > 10 && lastTwoDigitsOfNumber < 15 ) {
        return ("Дней");
    } else{
    switch (lastDigitOfnumber) {
        case 1:
            return ("День");
            break;
        case 2:
        case 3:
        case 4:
            return ("Дня");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            return ("Дней");
             break;
        default:
            return ("Введено некорректное значение");
            break;
    }
    }
};
for ( i = 0; i <= 35; i++){
    console.log(i + " " + getDayDeclension(i));
};