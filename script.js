var todaysDate = document.querySelector("#todays-date");

var date = new Date();
var currentDate = date.toDateString();

todaysDate.value = currentDate;

