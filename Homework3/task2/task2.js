var hours, minutes, additionalMinutes, additionalHours, resultMinutes, resultHours;
function addMinutes (hours, minutes, additionalMinutes){
additionalHours = Math.trunc((minutes + additionalMinutes) / 60);
if (minutes + additionalMinutes >= 60) {
    resultMinutes = minutes + additionalMinutes - (60 * additionalHours);
} else {
    resultMinutes = minutes + additionalMinutes
};
if (hours + additionalHours >= 24){
    resultHours = hours + additionalHours - 24 * Math.trunc((hours + additionalHours) / 24);
} else {
    resultHours = hours + additionalHours;
}
if (resultHours < 10) {
    resultHours = "0" + resultHours;
};
if (resultMinutes < 10) {
    resultMinutes = "0" + resultMinutes;
};
return (resultHours + ":" + resultMinutes)
};

console.log(addMinutes(12, 25, 30));
console.log(addMinutes(23, 40, 83));