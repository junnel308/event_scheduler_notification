var todaysDate = document.querySelector("#todays-date");
var lockButton = document.querySelector('button');
var twelveAM = document.querySelector("#twelve-am");
var oneAM = document.querySelector("#one-am");
var twoAM = document.querySelector("#two-am");
var threeAM = document.querySelector("#three-am");
var fourAM = document.querySelector("#four-am");
var fiveAM = document.querySelector("#five-am");
var sixAM = document.querySelector("#six-am");
var sevenAM = document.querySelector("#seven-am");
var eightAM = document.querySelector("#eight-am");
var nineAM = document.querySelector("#nine-am");
var tenAM = document.querySelector("#ten-am");
var elevenAM = document.querySelector("#eleven-am");
var twelvePM = document.querySelector("#twelve-pm");
var onePM = document.querySelector("#one-pm");
var twoPM = document.querySelector("#two-pm");
var threePM = document.querySelector("#three-pm");
var fourPM = document.querySelector("#four-pm");
var fivePM = document.querySelector("#five-pm");
var sixPM = document.querySelector("#six-pm");
var sevenPM = document.querySelector("#seven-pm");
var eightPM = document.querySelector("#eight-pm");
var ninePM = document.querySelector("#nine-pm");
var tenPM = document.querySelector("#ten-pm");
var elevenPM = document.querySelector("#eleven-pm");

var date = new Date();
var currentDay = date.getDay();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentDate = date.toDateString();

todaysDate.value = currentDate;

for(var i = 0; i < currentDate.length; i++) {

//Time AM
if (currentHour >= 00) {
    twelveAM.value = "Current Hour";
    twelveAM.style.backgroundColor = "rgb(227, 227, 129)";
} 

if (currentHour >= 1) {
    oneAM.value = "Current Hour";
    oneAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 12) {
        twelveAM.value = "Time has passed";
        twelveAM.style.backgroundColor =  "rgb(124, 134, 124)";
        twelveAM.style.color = "white";
        document.getElementById('twelve-am').readOnly = true;
    }
} 

if (currentHour >= 2) {
    twoAM.value = "Current Hour";
    twoAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 1) {
        oneAM.value = "Time has passed";
        oneAM.style.backgroundColor =  "rgb(124, 134, 124)";
        oneAM.style.color = "white";
        document.getElementById('one-am').readOnly = true;
    }
}

if (currentHour >= 3) { 
    threeAM.value = "Current Hour";
    threeAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 2) {
        twoAM.value = "Time has passed";
        twoAM.style.backgroundColor =  "rgb(124, 134, 124)";
        twoAM.style.color = "white";

    }
}

if (currentHour >= 4) {
    fourAM.value = "Current Hour";
    fourAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 3) {
        threeAM.value = "Time has passed";
        threeAM.style.backgroundColor =  "rgb(124, 134, 124)";
        threeAM.style.color = "white";
    }
}

if (currentHour >= 5) {
    fiveAM.value = "Current Hour";
    fiveAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 4) {
        fourAM.value = "Time has passed";
        fourAM.style.backgroundColor =  "rgb(124, 134, 124)";
        fourAM.style.color = "white";
    }
}

if (currentHour >= 6) {
    sixAM.value = "Current Hour";
    sixAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 5) {
        fiveAM.value = "Time has passed";
        fiveAM.style.backgroundColor =  "rgb(124, 134, 124)";
        fiveAM.style.color = "white";
    }
}

if (currentHour >= 7) {
    sevenAM.value = "Current Hour";
    sevenAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 6) {
        sixAM.value = "Time has passed";
        sixAM.style.backgroundColor =  "rgb(124, 134, 124)";
        sixAM.style.color = "white";
    }
}

if (currentHour >= 8) {
    eightAM.value = "Current Hour";
    eightAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 7) {
        sevenAM.value = "Time has passed";
        sevenAM.style.backgroundColor =  "rgb(124, 134, 124)";
        sevenAM.style.color = "white";
    }
}

if (currentHour >= 9) {
    nineAM.value = "Current Hour";
    nineAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 8) {
        eightAM.value = "Time has passed";
        eightAM.style.backgroundColor =  "rgb(124, 134, 124)";
        eightAM.style.color = "white";
    }
}

if (currentHour >= 10) {
    tenAM.value = "Current Hour";
    tenAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 9) {
        nineAM.value = "Time has passed";
        nineAM.style.backgroundColor =  "rgb(124, 134, 124)";
        nineAM.style.color = "white";
    }
}


if(currentHour >= 11) {
    elevenAM.value = "Current Hour";
    elevenAM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 10) {
        tenAM.value = "Time has passed";
        tenAM.style.backgroundColor =  "rgb(124, 134, 124)";
        tenAM.style.color = "white";
    }
    if (currentHour != 24) {
        twelveAM.value = "Time has passed";
        twelveAM.style.backgroundColor =  "rgb(124, 134, 124)";
        twelveAM.style.color = "white";
    }
}

// Time PM
if (currentHour >= 12) {
    twelvePM.value = "Current Hour";
    twelvePM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 11) {
        elevenAM.value = "Time has passed";
        elevenAM.style.backgroundColor =  "rgb(124, 134, 124)";
        elevenAM.style.color = "white";
    }
} 

if (currentHour >= 13) {
    onePM.value = "Current Hour";
    onePM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 12) {
        twelvePM.value = "Time has passed";
        twelvePM.style.backgroundColor =  "rgb(124, 134, 124)";
        twelvePM.style.color = "white";
        
    }
} 

if (currentHour >= 14) {
    twoPM.value = "Current Hour";
    twoPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 13) {
        onePM.value = "Time has passed";
        onePM.style.backgroundColor =  "rgb(124, 134, 124)";
        onePM.style.color = "white";
    }
}

if (currentHour >= 15) {
    threePM.value = "Current Hour";
    threePM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 14) {
        twoPM.value = "Time has passed";
        twoPM.style.backgroundColor =  "rgb(124, 134, 124)";
        twoPM.style.color = "white";
    }
}

if (currentHour >= 16) {
    fourPM.value = "Current Hour";
    fourPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 15) {
        threePM.value = "Time has passed";
        threePM.style.backgroundColor =  "rgb(124, 134, 124)";
        threePM.style.color = "white";
    }
}

if (currentHour >= 17) {
    fivePM.value = "Current Hour";
    fivePM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 16) {
        fourPM.value = "Time has passed";
        fourPM.style.backgroundColor =  "rgb(124, 134, 124)";
        fourPM.style.color = "white";
    }
}

if (currentHour >= 18) {
    sixPM.value = "Current Hour";
    sixPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 17) {
        fivePM.value = "Time has passed";
        fivePM.style.backgroundColor =  "rgb(124, 134, 124)";
        fivePM.style.color = "white";
    }
}

if (currentHour >= 19) {
    sevenPM.value = "Current Hour";
    sevenPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 18) {
        sixPM.value = "Time has passed";
        sixPM.style.backgroundColor =  "rgb(124, 134, 124)";
        sixPM.style.color = "white";
    }
}

if (currentHour >= 20) {
    eightPM.value = "Current Hour";
    eightPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 19) {
        sevenPM.value = "Time has passed";
        sevenPM.style.backgroundColor =  "rgb(124, 134, 124)";
        sevenPM.style.color = "white";
    }
}

if (currentHour >= 21) {
    ninePM.value = "Current Hour";
    ninePM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 20) {
        eightPM.value = "Time has passed";
        eightPM.style.backgroundColor =  "rgb(124, 134, 124)";
        eightPM.style.color = "white";
    }
}

if (currentHour >= 22) {
    tenPM.value = "Current Hour";
    tenPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 21) {
        ninePM.value = "Time has passed";
        ninePM.style.backgroundColor =  "rgb(124, 134, 124)";
        ninePM.style.color = "white";
    }
}


if(currentHour >= 23) {
    elevenPM.value = "Current Hour";
    elevenPM.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 22) {
        tenPM.value = "Time has passed";
        tenPM.style.backgroundColor =  "rgb(124, 134, 124)";
        tenPM.style.color = "white";
    }
}

}

