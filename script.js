var todaysDate = document.querySelector("#todays-date");

//Buttons for each day
var lockButton1 = document.querySelector('#btn1');
var lockButton2 = document.querySelector('#btn2');
var lockButton3 = document.querySelector('#btn3');
var lockButton4 = document.querySelector('#btn4');
var lockButton5 = document.querySelector('#btn5');
var lockButton6 = document.querySelector('#btn6');
var lockButton7 = document.querySelector('#btn7');
var lockButton8 = document.querySelector('#btn8');
var lockButton9 = document.querySelector('#btn9');
var lockButton10 = document.querySelector('#btn10');
var lockButton11 = document.querySelector('#btn11');
var lockButton12 = document.querySelector('#btn12');
var lockButton13 = document.querySelector('#btn13');
var lockButton14= document.querySelector('#btn14');
var lockButton15= document.querySelector('#btn15');
var lockButton16= document.querySelector('#btn16');
var lockButton17= document.querySelector('#btn17');
var lockButton18= document.querySelector('#btn18');
var lockButton19= document.querySelector('#btn19');
var lockButton20= document.querySelector('#btn20');
var lockButton21= document.querySelector('#btn21');
var lockButton22= document.querySelector('#btn22');
var lockButton23= document.querySelector('#btn23');
var lockButton24= document.querySelector('#btn24');

//AM and PM  Query Selectors
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

//AM and PM local storage query selectors
var twelveAM1 = document.querySelector("#twelve-am1");
var oneAM1 = document.querySelector("#one-am1");
var twoAM1 = document.querySelector("#two-am1");
var threeAM1 = document.querySelector("#three-am1");
var fourAM1 = document.querySelector("#four-am1");
var fiveAM1 = document.querySelector("#five-am1");
var sixAM1 = document.querySelector("#six-am1");
var sevenAM1 = document.querySelector("#seven-am1");
var eightAM1 = document.querySelector("#eight-am1");
var nineAM1 = document.querySelector("#nine-am1");
var tenAM1 = document.querySelector("#ten-am1");
var elevenAM1 = document.querySelector("#eleven-am1");
var twelvePM1 = document.querySelector("#twelve-pm1");
var onePM1 = document.querySelector("#one-pm1");
var twoPM1 = document.querySelector("#two-pm1");
var threePM1 = document.querySelector("#three-pm1");
var fourPM1 = document.querySelector("#four-pm1");
var fivePM1 = document.querySelector("#five-pm1");
var sixPM1 = document.querySelector("#six-pm1");
var sevenPM1 = document.querySelector("#seven-pm1");
var eightPM1 = document.querySelector("#eight-pm1");
var ninePM1 = document.querySelector("#nine-pm1");
var tenPM1 = document.querySelector("#ten-pm1");
var elevenPM1 = document.querySelector("#eleven-pm1");

//Variables for real time and hours
var date = new Date();
var currentDay = date.getDay();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentDate = date.toDateString();

//displays current time to HTML
todaysDate.value = currentDate;

//Getting the value of the user input and  event listeners for AM
twelveAM1.value = JSON.parse(localStorage.getItem("RESPONSE1"));
lockButton1.addEventListener("click", displayInput1);
oneAM1.value = JSON.parse(localStorage.getItem("RESPONSE2"));
lockButton2.addEventListener("click", displayInput2);
twoAM1.value = JSON.parse(localStorage.getItem("RESPONSE3"));
lockButton3.addEventListener("click", displayInput3);
threeAM1.value = JSON.parse(localStorage.getItem("RESPONSE4")) || [];
lockButton4.addEventListener("click", displayInput4);
fourAM1.value = JSON.parse(localStorage.getItem("RESPONSE5"));
lockButton5.addEventListener("click", displayInput5);
fiveAM1.value = JSON.parse(localStorage.getItem("RESPONSE6"));
lockButton6.addEventListener("click", displayInput6);
sixAM1.value = JSON.parse(localStorage.getItem("RESPONSE7"));
lockButton7.addEventListener("click", displayInput7);
sevenAM1.value = JSON.parse(localStorage.getItem("RESPONSE8"));
lockButton8.addEventListener("click", displayInput8);
eightAM1.value = JSON.parse(localStorage.getItem("RESPONSE9"));
lockButton9.addEventListener("click", displayInput9);
nineAM1.value = JSON.parse(localStorage.getItem("RESPONSE10"));
lockButton10.addEventListener("click", displayInput10);
tenAM1.value = JSON.parse(localStorage.getItem("RESPONSE11"));
lockButton11.addEventListener("click", displayInput11);
elevenAM1.value = JSON.parse(localStorage.getItem("RESPONSE12"));
lockButton12.addEventListener("click", displayInput12);

//Getting the value of the user input and  event listeners for AM
twelvePM1.value = JSON.parse(localStorage.getItem("RESPONSE13"));
lockButton13.addEventListener("click", displayInput13);
onePM1.value = JSON.parse(localStorage.getItem("RESPONSE14"));
lockButton14.addEventListener("click", displayInput14);
twoPM1.value = JSON.parse(localStorage.getItem("RESPONSE15"));
lockButton15.addEventListener("click", displayInput15);
threePM1.value = JSON.parse(localStorage.getItem("RESPONSE16"));
lockButton16.addEventListener("click", displayInput16);
fourPM1.value = JSON.parse(localStorage.getItem("RESPONSE17"));
lockButton17.addEventListener("click", displayInput17);
fivePM1.value = JSON.parse(localStorage.getItem("RESPONSE18"));
lockButton18.addEventListener("click", displayInput18);
sixPM1.value = JSON.parse(localStorage.getItem("RESPONSE19"));
lockButton19.addEventListener("click", displayInput19);
sevenPM1.value = JSON.parse(localStorage.getItem("RESPONSE20"));
lockButton20.addEventListener("click", displayInput20);
eightPM1.value = JSON.parse(localStorage.getItem("RESPONSE21"));
lockButton21.addEventListener("click", displayInput21);
ninePM1.value = JSON.parse(localStorage.getItem("RESPONSE22"));
lockButton22.addEventListener("click", displayInput22);
tenPM1.value = JSON.parse(localStorage.getItem("RESPONSE23"));
lockButton23.addEventListener("click", displayInput23);
elevenPM1.value = JSON.parse(localStorage.getItem("RESPONSE24"));
lockButton24.addEventListener("click", displayInput24);

// Loop for conditionals if statements
for(var i = 0; i < currentDate.length; i++) {
    
while (true){
    if (currentMinute != 00) {
        break;
    } else {
        window.location.reload(true);
    }
}

//Conditional IF statement for the AM portion
if (currentHour >= 00) {
    document.getElementById('twelve-am').placeholder = "Current Hours: Log Upcoming Event here...";
    twelveAM.style.backgroundColor = "rgb(227, 227, 129)";
    twelveAM1.style.backgroundColor = "rgb(227, 227, 129)";
}

if (currentHour >= 1) {
    document.getElementById('one-am').placeholder = "Current Hours: Log Upcoming Event here...";
    oneAM.style.backgroundColor = "rgb(227, 227, 129)";
    oneAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 12) {
        twelveAM.value = "Time has passed";
        twelveAM.style.backgroundColor =  "rgb(124, 134, 124)";
        twelveAM.style.color = "white";
        twelveAM1.value = "Event Ended";
        twelveAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        twelveAM1.style.color = "white";
        document.getElementById('twelve-am').readOnly = true;
        document.getElementById('twelve-am1').readOnly = true;
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn1').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('twelve-am').style.cursor = "default";
    
    }
} 

if (currentHour >= 2) {
    document.getElementById('two-am').placeholder = "Current Hours: Log Upcoming Event here...";
    twoAM.style.backgroundColor = "rgb(227, 227, 129)";
    twoAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 1) {
        oneAM.value = "Time has passed";
        oneAM.style.backgroundColor =  "rgb(124, 134, 124)";
        oneAM.style.color = "white";
        document.getElementById('one-am').readOnly = true;
        oneAM1.value = "Event Ended";
        oneAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        oneAM1.style.color = "white";
        document.getElementById('one-am1').readOnly = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn2').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('one-am').style.cursor = "default";
    }
}

if (currentHour >= 3) { 
    document.getElementById('three-am').placeholder = "Current Hours: Log Upcoming Event here...";
    threeAM.style.backgroundColor = "rgb(227, 227, 129)";
    threeAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 2) {
        twoAM.value = "Time has passed";
        twoAM.style.backgroundColor =  "rgb(124, 134, 124)";
        twoAM.style.color = "white";
        document.getElementById('two-am').readOnly = true;
        twoAM1.value = "Event Ended";
        twoAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        twoAM1.style.color = "white";
        document.getElementById('two-am1').readOnly = true;
        document.getElementById('btn3').disabled = true;
        document.getElementById('btn3').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('two-am').style.cursor = "default";
    }
}

if (currentHour >= 4) {
    document.getElementById('four-am').placeholder = "Current Hours: Log Upcoming Event here...";
    fourAM.style.backgroundColor = "rgb(227, 227, 129)";
    fourAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 3) {
        threeAM.value = "Time has passed";
        threeAM.style.backgroundColor =  "rgb(124, 134, 124)";
        threeAM.style.color = "white";
        document.getElementById('three-am').readOnly = true;
        threeAM1.value = "Event Ended";
        threeAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        threeAM1.style.color = "white";
        document.getElementById('three-am1').readOnly = true;
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn4').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('three-am').style.cursor = "default";   
    }
}

if (currentHour >= 5) {
    document.getElementById('five-am').placeholder = "Current Hours: Log Upcoming Event here...";
    fiveAM.style.backgroundColor = "rgb(227, 227, 129)";
    fiveAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 4) {
        fourAM.value = "Time has passed";
        fourAM.style.backgroundColor =  "rgb(124, 134, 124)";
        fourAM.style.color = "white";
        document.getElementById('four-am').readOnly = true;
        fourAM1.value = "Event Ended";
        fourAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        fourAM1.style.color = "white";
        document.getElementById('four-am1').readOnly = true;
        document.getElementById('btn5').disabled = true;
        document.getElementById('btn5').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('four-am').style.cursor = "default";
    }
}

if (currentHour >= 6) {
    document.getElementById('six-am').placeholder = "Current Hours: Log Upcoming Event here...";
    sixAM.style.backgroundColor = "rgb(227, 227, 129)";
    sixAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 5) {
        fiveAM.value = "Time has passed";
        fiveAM.style.backgroundColor =  "rgb(124, 134, 124)";
        fiveAM.style.color = "white";
        document.getElementById('five-am').readOnly = true;
        fiveAM1.value = "Event Ended";
        fiveAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        fiveAM1.style.color = "white";
        document.getElementById('five-am1').readOnly = true;
        document.getElementById('btn6').disabled = true;
        document.getElementById('btn6').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('five-am').style.cursor = "default";
    }
    }

if (currentHour >= 7) {
    document.getElementById('seven-am').placeholder = "Current Hours: Log Upcoming Event here...";
    sevenAM.style.backgroundColor = "rgb(227, 227, 129)";
    sevenAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 6) {
        sixAM.value = "Time has passed";
        sixAM.style.backgroundColor =  "rgb(124, 134, 124)";
        sixAM.style.color = "white";
        document.getElementById('six-am').readOnly = true;
        sixAM1.value = "Event Ended";
        sixAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        sixAM1.style.color = "white";
        document.getElementById('six-am').readOnly = true;
        document.getElementById('btn7').disabled = true;
        document.getElementById('btn7').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('six-am').style.cursor = "default";
    }
}

if (currentHour >= 8) {
    document.getElementById('eight-am').placeholder = "Current Hours: Log Upcoming Event here...";
    eightAM.style.backgroundColor = "rgb(227, 227, 129)";
    eightAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 7) {
        sevenAM.value = "Time has passed";
        sevenAM.style.backgroundColor =  "rgb(124, 134, 124)";
        sevenAM.style.color = "white";
        document.getElementById('seven-am').readOnly = true;
        sevenAM1.value = "Event Ended";
        sevenAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        sevenAM1.style.color = "white";
        document.getElementById('seven-am1').readOnly = true;
        document.getElementById('btn8').disabled = true;
        document.getElementById('btn8').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('seven-am').style.cursor = "default";
    }
}

if (currentHour >= 9) {
    document.getElementById('nine-am').placeholder = "Current Hours: Log Upcoming Event here...";
    nineAM.style.backgroundColor = "rgb(227, 227, 129)";
    nineAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 8) {
        eightAM.value = "Time has passed";
        eightAM.style.backgroundColor =  "rgb(124, 134, 124)";
        eightAM.style.color = "white";
        document.getElementById('eight-am').readOnly = true;
        eightAM1.value = "Event Ended";
        eightAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        eightAM1.style.color = "white";
        document.getElementById('eight-am1').readOnly = true;
        document.getElementById('btn9').disabled = true;
        document.getElementById('btn9').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('eight-am').style.cursor = "default";
    }
}

if (currentHour >= 10) {
    document.getElementById('ten-am').placeholder = "Current Hours: Log Upcoming Event here...";
    tenAM.style.backgroundColor = "rgb(227, 227, 129)";
    tenAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 9) {
        nineAM.value = "Time has passed";
        nineAM.style.backgroundColor =  "rgb(124, 134, 124)";
        nineAM.style.color = "white";
        document.getElementById('nine-am').readOnly = true;
        nineAM1.value = "Event Ended";
        nineAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        nineAM1.style.color = "white";
        document.getElementById('nine-am1').readOnly = true;
        document.getElementById('btn10').disabled = true;
        document.getElementById('btn10').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('nine-am').style.cursor = "default";
    }
}


if(currentHour >= 11) {
    document.getElementById('eleven-am').placeholder = "Current Hours: Log Upcoming Event here...";
    elevenAM.style.backgroundColor = "rgb(227, 227, 129)";
    elevenAM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 10) {
        tenAM.value = "Time has passed";
        tenAM.style.backgroundColor =  "rgb(124, 134, 124)";
        tenAM.style.color = "white";
        document.getElementById('ten-am').readOnly = true;
        tenAM1.value = "Event Ended";
        tenAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        tenAM1.style.color = "white";
        document.getElementById('ten-am1').readOnly = true;
        document.getElementById('btn11').disabled = true;
        document.getElementById('btn11').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('ten-am').style.cursor = "default";

    }
    if (currentHour != 24) {
        twelveAM.value = "Time has passed";
        twelveAM.style.backgroundColor =  "rgb(124, 134, 124)";
        twelveAM.style.color = "white";
        twelveAM1.value = "Event Ended";
        twelveAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        twelveAM1.style.color = "white";
    }
}

// Conditional IF statmenent for the PM portion
if (currentHour >= 12) {
    document.getElementById('twelve-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    twelvePM.style.backgroundColor = "rgb(227, 227, 129)";
    twelvePM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 11) {
        elevenAM.value = "Time has passed";
        elevenAM.style.backgroundColor =  "rgb(124, 134, 124)";
        elevenAM.style.color = "white";
        document.getElementById('eleven-am').readOnly = true;
        elevenAM1.value = "Event Ended";
        elevenAM1.style.backgroundColor =  "rgb(124, 134, 124)";
        elevenAM1.style.color = "white";
        document.getElementById('eleven-am1').readOnly = true;
        document.getElementById('btn12').disabled = true;
        document.getElementById('btn12').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('eleven-am').style.cursor = "default";

    }
} 

if (currentHour >= 13) {
    document.getElementById('one-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    onePM.style.backgroundColor = "rgb(227, 227, 129)";
    onePM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 12) {
        twelvePM.value = "Time has passed";
        twelvePM.style.backgroundColor =  "rgb(124, 134, 124)";
        twelvePM.style.color = "white";
        document.getElementById('twelve-pm').readOnly = true;
        twelvePM1.value = "Event Ended";
        twelvePM1.style.backgroundColor =  "rgb(124, 134, 124)";
        twelvePM1.style.color = "white";
        document.getElementById('twelve-pm1').readOnly = true;
        document.getElementById('btn13').disabled = true;
        document.getElementById('btn13').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('twelve-pm').style.cursor = "default";
    }
} 

if (currentHour >= 14) {
    document.getElementById('two-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    twoPM.style.backgroundColor = "rgb(227, 227, 129)";
    twoPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 13) {
        onePM.value = "Time has passed";
        onePM.style.backgroundColor =  "rgb(124, 134, 124)";
        onePM.style.color = "white";
        document.getElementById('one-pm').readOnly = true;
        onePM1.value = "Event Ended";
        onePM1.style.backgroundColor =  "rgb(124, 134, 124)";
        onePM1.style.color = "white";
        document.getElementById('one-pm1').readOnly = true;
        document.getElementById('btn14').disabled = true;
        document.getElementById('btn14').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('one-pm').style.cursor = "default";
    }
}

if (currentHour >= 15) {
    document.getElementById('three-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    threePM.style.backgroundColor = "rgb(227, 227, 129)";
    threePM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 14) {
        twoPM.value = "Time has passed";
        twoPM.style.backgroundColor =  "rgb(124, 134, 124)";
        twoPM.style.color = "white";
        document.getElementById('two-pm').readOnly = true;
        twoPM1.value = "Event Ended";
        twoPM1.style.backgroundColor =  "rgb(124, 134, 124)";
        twoPM1.style.color = "white";
        document.getElementById('two-pm1').readOnly = true;
        document.getElementById('btn15').disabled = true;
        document.getElementById('btn15').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('two-pm').style.cursor = "default";
    }
}

if (currentHour >= 16) {
    document.getElementById('four-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    fourPM.style.backgroundColor = "rgb(227, 227, 129)";
    fourPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 15) {
        threePM.value = "Time has passed";
        threePM.style.backgroundColor =  "rgb(124, 134, 124)";
        threePM.style.color = "white";
        document.getElementById('three-pm').readOnly = true;
        threePM1.value = "Event Ended";
        threePM1.style.backgroundColor =  "rgb(124, 134, 124)";
        threePM1.style.color = "white";
        document.getElementById('three-pm1').readOnly = true;
        document.getElementById('btn16').disabled = true;
        document.getElementById('btn16').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('three-pm').style.cursor = "default";
    }
}

if (currentHour >= 17) {
    document.getElementById('five-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    fivePM.style.backgroundColor = "rgb(227, 227, 129)";
    fivePM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 16) {
        fourPM.value = "Time has passed";
        fourPM.style.backgroundColor =  "rgb(124, 134, 124)";
        fourPM.style.color = "white";
        document.getElementById('four-pm').readOnly = true;
        fourPM1.value = "Event Ended";
        fourPM1.style.backgroundColor =  "rgb(124, 134, 124)";
        fourPM1.style.color = "white";
        document.getElementById('four-pm1').readOnly = true;
        document.getElementById('btn17').disabled = true;
        document.getElementById('btn17').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('four-pm').style.cursor = "default";
    }
}

if (currentHour >= 18) {
    document.getElementById('six-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    sixPM.style.backgroundColor = "rgb(227, 227, 129)";
    sixPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 17) {
        fivePM.value = "Time has passed";
        fivePM.style.backgroundColor =  "rgb(124, 134, 124)";
        fivePM.style.color = "white";
        document.getElementById('five-pm').readOnly = true;
        fivePM1.value = "Event Ended";
        fivePM1.style.backgroundColor =  "rgb(124, 134, 124)";
        fivePM1.style.color = "white";
        document.getElementById('five-pm1').readOnly = true;
        document.getElementById('btn18').disabled = true;
        document.getElementById('btn18').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('five-pm').style.cursor = "default";
    }
}

if (currentHour >= 19) {
    document.getElementById('seven-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    sevenPM.style.backgroundColor = "rgb(227, 227, 129)";
    sevenPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 18) {
        sixPM.value = "Time has passed";
        sixPM.style.backgroundColor =  "rgb(124, 134, 124)";
        sixPM.style.color = "white";
        document.getElementById('six-pm').readOnly = true;
        sixPM1.value = "Event Ended";
        sixPM1.style.backgroundColor =  "rgb(124, 134, 124)";
        sixPM1.style.color = "white";
        document.getElementById('six-pm1').readOnly = true;
        document.getElementById('btn19').disabled = true;
        document.getElementById('btn19').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('six-pm').style.cursor = "default";
    }
}

if (currentHour >= 20) {
    document.getElementById('eight-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    eightPM.style.backgroundColor = "rgb(227, 227, 129)";
    eightPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 19) {
        sevenPM.value = "Time has passed";
        sevenPM.style.backgroundColor =  "rgb(124, 134, 124)";
        sevenPM.style.color = "white";
        document.getElementById('seven-pm').readOnly = true;
        sevenPM1.value = "Event Ended";
        sevenPM1.style.backgroundColor =  "rgb(124, 134, 124)";
        sevenPM1.style.color = "white";
        document.getElementById('seven-pm1').readOnly = true;
        document.getElementById('btn20').disabled = true;
        document.getElementById('btn20').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('seven-pm').style.cursor = "default";
    }
}

if (currentHour >= 21) {
    document.getElementById('nine-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    ninePM.style.backgroundColor = "rgb(227, 227, 129)";
    ninePM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 20) {
        eightPM.value = "Time has passed";
        eightPM.style.backgroundColor =  "rgb(124, 134, 124)";
        eightPM.style.color = "white";
        document.getElementById('eight-pm').readOnly = true;
        eightPM1.value = "Event Ended";
        eightPM1.style.backgroundColor =  "rgb(124, 134, 124)";
        eightPM1.style.color = "white";
        document.getElementById('eight-pm1').readOnly = true;
        document.getElementById('btn21').disabled = true;
        document.getElementById('btn21').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('eight-pm').style.cursor = "default";
    }
}

if (currentHour >= 22) {
    document.getElementById('ten-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    tenPM.style.backgroundColor = "rgb(227, 227, 129)";
    tenPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 21) {
        ninePM.value = "Time has passed";
        ninePM.style.backgroundColor =  "rgb(124, 134, 124)";
        ninePM.style.color = "white";
        document.getElementById('nine-pm').readOnly = true;
        ninePM1.value = "Event Ended";
        ninePM1.style.backgroundColor =  "rgb(124, 134, 124)";
        ninePM1.style.color = "white";
        document.getElementById('nine-pm1').readOnly = true;
        document.getElementById('btn22').disabled = true;
        document.getElementById('btn22').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('nine-pm').style.cursor = "default";
    }
}


if(currentHour >= 23) {
    document.getElementById('eleven-pm').placeholder = "Current Hours: Log Upcoming Event here...";
    elevenPM.style.backgroundColor = "rgb(227, 227, 129)";
    elevenPM1.style.backgroundColor = "rgb(227, 227, 129)";
    if (currentHour != 22) {
        tenPM.value = "Time has passed";
        tenPM.style.backgroundColor =  "rgb(124, 134, 124)";
        tenPM.style.color = "white";
        document.getElementById('ten-pm').readOnly = true;
        tenPM1.value = "Event Ended";
        tenPM1.style.backgroundColor =  "rgb(124, 134, 124)";
        tenPM1.style.color = "white";
        document.getElementById('ten-pm1').readOnly = true;
        document.getElementById('btn23').disabled = true;
        document.getElementById('btn23').style.backgroundColor = 'rgb(213, 102, 102)';
        document.getElementById('ten-pm').style.cursor = "default";
        localStorage.removeItem("RESPONSE1", twelveAM1.value);
        localStorage.removeItem("RESPONSE2", oneAM1.value);
        localStorage.removeItem("RESPONSE3", twoAM1.value);
        localStorage.removeItem("RESPONSE4", threeAM1.value);
        localStorage.removeItem("RESPONSE5", fourAM1.value);
        localStorage.removeItem("RESPONSE6", fiveAM1.value);
        localStorage.removeItem("RESPONSE7", sixAM1.value);
        localStorage.removeItem("RESPONSE8", sevenAM1.value);
        localStorage.removeItem("RESPONSE9", eightAM1.value);
        localStorage.removeItem("RESPONSE10", nineAM1.value);
        localStorage.removeItem("RESPONSE11", tenAM1.value);
        localStorage.removeItem("RESPONSE12", elevenAM1.value);
        localStorage.removeItem("RESPONSE13", twelvePM1.value);
        localStorage.removeItem("RESPONSE14", onePM1.value);
        localStorage.removeItem("RESPONSE15", twoPM1.value);
        localStorage.removeItem("RESPONSE16", threePM1.value);
        localStorage.removeItem("RESPONSE17", fourPM1.value);
        localStorage.removeItem("RESPONSE18", fivePM1.value);
        localStorage.removeItem("RESPONSE19", sixPM1.value);
        localStorage.removeItem("RESPONSE20", sevenPM1.value);
        localStorage.removeItem("RESPONSE21", eightPM1.value);
        localStorage.removeItem("RESPONSE22", ninePM1.value);
        localStorage.removeItem("RESPONSE23", tenPM1.value);
        localStorage.removeItem("RESPONSE24", elevenPM1.value);
    }
}

}

// Functions for the local storage and sweetalert messages depending on user input.
function displayInput1 () {
    localStorage.setItem('RESPONSE1', JSON.stringify(twelveAM.value));
    if (!twelveAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput2 () {
    localStorage.setItem('RESPONSE2', JSON.stringify(oneAM.value));
    if (!oneAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
    
}

function displayInput3 () {
    localStorage.setItem('RESPONSE3', JSON.stringify(twoAM.value));
    if (!twoAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput4 () {
    localStorage.setItem('RESPONSE4', JSON.stringify(threeAM.value));
    if (!threeAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput5 () {
    localStorage.setItem('RESPONSE5', JSON.stringify(fourAM.value));
    if (!fourAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput6 () {
    localStorage.setItem('RESPONSE6', JSON.stringify(fiveAM.value));
    if (!fiveAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput7 () {
    localStorage.setItem('RESPONSE7', JSON.stringify(sixAM.value));
    if (!sixAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput8 () {
    localStorage.setItem('RESPONSE8', JSON.stringify(sevenAM.value));
    if (!sevenAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput9 () {
    localStorage.setItem('RESPONSE9', JSON.stringify(eightAM.value));
    if (!eightAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput10 () {
    localStorage.setItem('RESPONSE10', JSON.stringify(nineAM.value));
    if (!nineAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput11 () {
    localStorage.setItem('RESPONSE11', JSON.stringify(tenAM.value));
    if (!tenAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput12 () {
    localStorage.setItem('RESPONSE12', JSON.stringify(elevenAM.value));
    if (!elevenAM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput13 () {
    localStorage.setItem('RESPONSE13', JSON.stringify(twelvePM.value));
    if (!twelvePM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput14 () {
    localStorage.setItem('RESPONSE14', JSON.stringify(onePM.value));
    if (!onePM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput15 () {
    localStorage.setItem('RESPONSE15', JSON.stringify(twoPM.value));
    if (!twoPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput16 () {
    localStorage.setItem('RESPONSE16', JSON.stringify(threePM.value));
    if (!threePM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput17 () {
    localStorage.setItem('RESPONSE17', JSON.stringify(fourPM.value));
    if (!fourPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput18 () {
    localStorage.setItem('RESPONSE18', JSON.stringify(fivePM.value));
    if (!fivePM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput19() {
    localStorage.setItem('RESPONSE19', JSON.stringify(sixPM.value));
    if (!sixPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput20 () {
    localStorage.setItem('RESPONSE20', JSON.stringify(sevenPM.value));
    if (!sevenPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput21 () {
    localStorage.setItem('RESPONSE21', JSON.stringify(eightPM.value));
    if (!eightPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput22 () {
    localStorage.setItem('RESPONSE22', JSON.stringify(ninePM.value));
    if (!ninePM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput23 () {
    localStorage.setItem('RESPONSE23', JSON.stringify(tenPM.value));
    if (!tenPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}

function displayInput24 () {
    localStorage.setItem('RESPONSE24', JSON.stringify(elevenPM.value));
    if (!elevenPM.value){
        swal({
            title: "Its Empty!",
            icon: "warning",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    } else {
        swal({
            title: "Logged Successfully!",
            icon: "success",
            text: " ",
            buttons: false,
            timer: 2000
        }).then (response => {
            window.location.reload(true);
        })
    }
}
