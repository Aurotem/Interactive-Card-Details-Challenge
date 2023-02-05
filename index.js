//Form Items
const form = document.getElementById("form");
const nameInput = document.getElementById("holder-name");
const numberInput = document.getElementById("card-number");

const mInput = document.getElementById("mm");
const yInput = document.getElementById("yy");
const cvcInput = document.getElementById("cvc");
const button = document.getElementById("button");

const warning1 = document.getElementById("warning-1"); //Card Number
const warning2 = document.getElementById("warning-2"); //MM-YY
const warning4 = document.getElementById("warning-3"); //CVC


//Display Items
const nameDisplay = document.getElementById("card-name");
const number = document.getElementById("cardD-number");
const cvc = document.getElementById("card-cvc");
const mm = document.getElementById("card-mm");
const yy = document.getElementById("card-yy");



function onInput(){

    nameDisplay.innerText = nameInput.value;
    number.innerText = numberInput.value;
    cvc.innerText = cvcInput.value;
    mm.innerText = mInput.value;
    yy.innerText = yInput.value;

    //Error
}
function onButtonClick(){
    if(mInput.value == ""){
        mInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
    }else{
        mInput.style.borderColor = "hsl(278, 68%, 11%)";
    }
    if(yInput.value == ""){
        yInput.style.borderColor = "hsl(0, 100%, 66%)";
    }else{
        mInput.style.borderColor = "hsl(278, 68%, 11%)";
    }
}
function onFade(){
    form.style.color = "rgba(0,0,0,0)";
    mInput.style.borderColor = "rgba(0,0,0,0)";
    mInput.classList.add("fadeph");
    yInput.style.borderColor = "rgba(0,0,0,0)";
    yInput.classList.add("fadeph");
    nameInput.style.borderColor = "rgba(0,0,0,0)";
    nameInput.classList.add("fadeph");
    numberInput.style.borderColor = "rgba(0,0,0,0)";
    numberInput.classList.add("fadeph");
    cvcInput.style.borderColor = "rgba(0,0,0,0)";
    cvcInput.classList.add("fadeph");
    button.style.backgroundColor = "rgba(0,0,0,0)";
    button.style.borderColor = "rgba(0,0,0,0)";
    setTimeout("setDisplayNone()", 500);
}
function setDisplayNone(){
    form.style.display = "none";
}