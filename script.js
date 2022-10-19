var todaysDate = document.querySelector("#todays-date");
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

var date = new Date();
var currentDay = date.getDay();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentDate = date.toDateString();

todaysDate.value = currentDate;

twelveAM1.value = JSON.parse(localStorage.getItem("RESPONSE1"));
lockButton1.addEventListener("click", displayInput1);
oneAM1.value = JSON.parse(localStorage.getItem("RESPONSE2"));
lockButton2.addEventListener("click", displayInput2);
twoAM1.value = JSON.parse(localStorage.getItem("RESPONSE3"));
lockButton3.addEventListener("click", displayInput3);
threeAM1.value = JSON.parse(localStorage.getItem("RESPONSE4"));
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

for(var i = 0; i < currentDate.length; i++) {
//Time AM
if (currentHour >= 00) {
    twelveAM.value = "Current Hour"
    twelveAM.style.backgroundColor = "rgb(227, 227, 129)";
    twelveAM1.style.backgroundColor = "rgb(227, 227, 129)";
    
    
}

if (currentHour >= 1) {
    oneAM.value = "Current Hour";
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
    }
} 

if (currentHour >= 2) {
    twoAM.value = "Current Hour";
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
    }
}

if (currentHour >= 3) { 
    threeAM.value = "Current Hour";
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
    }
}

if (currentHour >= 4) {
    fourAM.value = "Current Hour";
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
        
    }
}

if (currentHour >= 5) {
    fiveAM.value = "Current Hour";
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
    }
}

if (currentHour >= 6) {
    sixAM.value = "Current Hour";
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
    }
    }

if (currentHour >= 7) {
    sevenAM.value = "Current Hour";
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
    }
}

if (currentHour >= 8) {
    eightAM.value = "Current Hour";
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
    }
}

if (currentHour >= 9) {
    nineAM.value = "Current Hour";
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
    }
}

if (currentHour >= 10) {
    tenAM.value = "Current Hour";
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
    }
}


if(currentHour >= 11) {
    elevenAM.value = "Current Hour";
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

// Time PM
if (currentHour >= 12) {
    twelvePM.value = "Current Hour";
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

    }
} 

if (currentHour >= 13) {
    onePM.value = "Current Hour";
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
    }
} 

if (currentHour >= 14) {
    twoPM.value = "Current Hour";
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
    }
}

if (currentHour >= 15) {
    threePM.value = "Current Hour";
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
    }
}

if (currentHour >= 16) {
    fourPM.value = "Current Hour";
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
    }
}

if (currentHour >= 17) {
    fivePM.value = "Current Hour";
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
    }
}

if (currentHour >= 18) {
    sixPM.value = "Current Hour";
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
    }
}

if (currentHour >= 19) {
    sevenPM.value = "Current Hour";
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
    }
}

if (currentHour >= 20) {
    eightPM.value = "Current Hour";
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
    }
}

if (currentHour >= 21) {
    ninePM.value = "Current Hour";
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
    }
}

if (currentHour >= 22) {
    tenPM.value = "Current Hour";
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
    }
}


if(currentHour >= 23) {
    elevenPM.value = "Current Hour";
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
    }
}
}
window.localStorage.removeItem("RESPONSE1");

function displayInput1 () {
    localStorage.setItem('RESPONSE1', JSON.stringify(twelveAM.value));
    window.location.reload(true);
}

function displayInput2 () {
    localStorage.setItem('RESPONSE2', JSON.stringify(oneAM.value));
    window.location.reload(true);
}

function displayInput3 () {
    localStorage.setItem('RESPONSE3', JSON.stringify(twoAM.value));
    window.location.reload(true);
}

function displayInput4 () {
    localStorage.setItem('RESPONSE4', JSON.stringify(threeAM.value));
    window.location.reload(true);
}

function displayInput5 () {
    localStorage.setItem('RESPONSE5', JSON.stringify(fourAM.value));
    window.location.reload(true);
}

function displayInput6 () {
    localStorage.setItem('RESPONSE6', JSON.stringify(fiveAM.value));
    window.location.reload(true);
}

function displayInput7 () {
    localStorage.setItem('RESPONSE7', JSON.stringify(sixAM.value));
    window.location.reload(true);
}

function displayInput8 () {
    localStorage.setItem('RESPONSE8', JSON.stringify(sevenAM.value));
    window.location.reload(true);
}

function displayInput9 () {
    localStorage.setItem('RESPONSE9', JSON.stringify(eightAM.value));
    window.location.reload(true);
}

function displayInput10 () {
    localStorage.setItem('RESPONSE10', JSON.stringify(nineAM.value));
    window.location.reload(true);
}

function displayInput11 () {
    localStorage.setItem('RESPONSE11', JSON.stringify(tenAM.value));
    window.location.reload(true);
}

function displayInput12 () {
    localStorage.setItem('RESPONSE12', JSON.stringify(elevenAM.value));
    window.location.reload(true);
}

function displayInput13 () {
    localStorage.setItem('RESPONSE13', JSON.stringify(twelvePM.value));
    window.location.reload(true);
}

function displayInput14 () {
    localStorage.setItem('RESPONSE14', JSON.stringify(onePM.value));
    window.location.reload(true);
}

function displayInput15 () {
    localStorage.setItem('RESPONSE15', JSON.stringify(twoPM.value));
    window.location.reload(true);
}

function displayInput16 () {
    localStorage.setItem('RESPONSE16', JSON.stringify(threePM.value));
    window.location.reload(true);
}

function displayInput17 () {
    localStorage.setItem('RESPONSE17', JSON.stringify(fourPM.value));
    window.location.reload(true);
}

function displayInput18 () {
    localStorage.setItem('RESPONSE18', JSON.stringify(fivePM.value));
    window.location.reload(true);
}

function displayInput19() {
    localStorage.setItem('RESPONSE19', JSON.stringify(sixPM.value));
    window.location.reload(true);
}

function displayInput20 () {
    localStorage.setItem('RESPONSE20', JSON.stringify(sevenPM.value));
    window.location.reload(true);
}

function displayInput21 () {
    localStorage.setItem('RESPONSE21', JSON.stringify(eightPM.value));
    window.location.reload(true);
}

function displayInput22 () {
    localStorage.setItem('RESPONSE22', JSON.stringify(ninePM.value));
    window.location.reload(true);
}

function displayInput23 () {
    localStorage.setItem('RESPONSE23', JSON.stringify(tenPM.value));
    window.location.reload(true);
}

function displayInput24 () {
    localStorage.setItem('RESPONSE24', JSON.stringify(elevenPM.value));
    window.location.reload(true);
}
