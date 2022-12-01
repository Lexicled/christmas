var time = new Date();
var day = time.getDate();
const dateObj = document.getElementById("dateObj");
var dayStr;
if (day.toString().length == 1) {
    dayStr = "0" + day.toString();
}
else {
    dayStr = day.toString();
}
if (dateObj != null) {
    dateObj.innerHTML = dayStr;
}
else {
    console.log("null");
}

if (dayStr == "25") {
    document.getElementById("title").innerHTML = "Christmas Day!";
}
if (dayStr == "24") {
    document.getElementById("title").innerHTML = "1 day to go...";
}