var seasonNumber, i;
function getSeason (seasonNumber){
    switch (seasonNumber) {
        case 12:
        case 1:
        case 2:
            return ("Зима");
            break;
        case 3:
        case 4:
        case 5:
            return ("Весна");
            break;
        case 6:
        case 7:
        case 8:
            return ("Лето");
            break;
        case 9:
        case 10:
        case 11:
            return ("Осень");
            break;
        default:
            return ("Введено неверное число");
    };
};
for ( i = 1; i <= 12; i++){
    console.log("Пора года под номером " + i + " это - " + getSeason(i));
};
