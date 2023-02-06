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
const warning3 = document.getElementById("warning-3"); //CVC


//Display Items
const nameDisplay = document.getElementById("card-name");
const number = document.getElementById("cardD-number");
const cvc = document.getElementById("card-cvc");
const mm = document.getElementById("card-mm");
const yy = document.getElementById("card-yy");

//Accept Screen
const accept = document.getElementById("accept");


function onNameInput(){
    nameDisplay.innerText = nameInput.value;

    if(isNaN(nameInput.value)){
        nameInput.style.borderColor = "hsl(279, 6%, 55%)";
        return true;

    }else{
        nameInput.style.borderColor = "hsl(0, 100%, 66%)";
    }
    //Error
}



function onNumberInput(){
    number.innerText = numberInput.value;

    if(isNaN(numberInput.value)){
        numberInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning1.innerText = "Wrong format, numbers only";
        warning1.style.visibility = "visible";
    }else if(numberInput.value === ""){
        numberInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning1.innerText = "This area can't be blank";
        warning1.style.visibility = "visible";
    }else{
        numberInput.style.borderColor = "hsl(279, 6%, 55%)";
        warning1.style.visibility = "hidden";
        return true;
    }
}

function onMYInput(){
    var mR = false;
    var yR = false;
    mm.innerText = mInput.value;
    yy.innerText = yInput.value;
    if(mInput.value === ""){
        mInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
        warning2.innerText = "Can't be blank";
    }else if(mInput.value > 12){
        mInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
        warning2.innerText = "Month can't be bigger than 12";
    }else if(isNaN(mInput.value)){
        mInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
        warning2.innerText = "Please enter numbers.";
    }else{
        mInput.style.borderColor = "hsl(279, 6%, 55%)";
        warning2.style.visibility = "hidden";
        mR = true;
    }
    if(yInput.value === ""){
        yInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
    }else if(isNaN(yInput.value)){
        yInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
        warning2.innerText = "Please enter numbers.";
    }
    else if(yInput.value < 23){
        yInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning2.style.visibility = "visible";
        warning2.innerText = "Year can't be lower than 23";
    }
    else{
        yInput.style.borderColor = "hsl(279, 6%, 55%)";
        warning2.style.visibility = "hidden";
        yR = true;
    }
    return mR && yR;
}

function onCVCInput(){
    cvc.innerText = cvcInput.value;
    if(cvcInput.value === ""){
        cvcInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning3.style.visibility = "visible";
        warning3.innerText = "Can't be blank";
    }else if(isNaN(cvcInput.value)){
        cvcInput.style.borderColor = "hsl(0, 100%, 66%)";
        warning3.style.visibility = "visible";
        warning3.innerText = "Please Enter Numbers";
    }else{
        cvcInput.style.borderColor = "hsl(279, 6%, 55%)";
        warning3.style.visibility = "hidden";
        return true;
    }

}
function onButtonClick(){
    if (onCVCInput() && onMYInput() && onNameInput() && onNumberInput()){
        onFade();
    }

}
function onFade(){
    form.style.color = "rgba(0,0,0,0)";
    mInput.style.borderColor = "rgba(0,0,0,0)";
    mInput.style.color = "rgba(0,0,0,0)";
    mInput.classList.add("fadeph");
    yInput.style.borderColor = "rgba(0,0,0,0)";
    yInput.style.color = "rgba(0,0,0,0)";
    yInput.classList.add("fadeph");
    nameInput.style.borderColor = "rgba(0,0,0,0)";
    nameInput.style.color = "rgba(0,0,0,0)";
    nameInput.classList.add("fadeph");
    numberInput.style.borderColor = "rgba(0,0,0,0)";
    numberInput.style.color = "rgba(0,0,0,0)";
    numberInput.classList.add("fadeph");
    cvcInput.style.borderColor = "rgba(0,0,0,0)";
    cvcInput.style.color = "rgba(0,0,0,0)";
    cvcInput.classList.add("fadeph");
    button.style.backgroundColor = "rgba(0,0,0,0)";
    button.style.borderColor = "rgba(0,0,0,0)";
    setTimeout("setDisplayNone()", 500);
}
function setDisplayNone(){
    form.style.display = "none";
    accept.style.visibility = "visible";
}