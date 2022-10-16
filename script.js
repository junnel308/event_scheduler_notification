var todaysDate = document.querySelector("#todays-date");
var lockButton = document.querySelector('button');


var date = new Date();
var currentHour = date.getHours();
var currentDate = date.toDateString();

todaysDate.value = currentDate;

if(currentHour ===  true) { 
    displayHere.value = "Current Hour";
    displayHere.style.backgroundColor = "blue";
}


function loggingEvents () {
    var logIt = displayEventHere();
    var displayHere = document.querySelector('input');

    displayHere.value = logIt;
}

function displayEventHere () {
    var resultDisplay = document.createElement('h2');
    resultDisplay = "Event Saved"
    resultDisplay.parentElement(resultDisplay);
    document.displayHere.style.color = "blue";
}

lockButton.addEventListener("click", loggingEvents);