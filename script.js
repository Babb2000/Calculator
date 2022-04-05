/* Arithmetic Functions*/

//Global variable to hold temporary current number being clicked
let tempNumber1 = 0;

function addNum(num1, num2)
{
    return(num1 + num2);
}

function subNum(num1, num2)
{
    return(num1 - num2);
}

function multNum(num1, num2)
{
    return(num1 * num2);
}

function divdNum(num1, num2)
{
    return(num1 / num2);
}

function operate(string, num1, num2)
{
    if(string === "add")
    {
        let an = addNum(num1,num2);
        displayNumbers(an);
    }
    else if(string === "subtract")
    {
        let ans = subNum(num1, num2);
        console.log(ans);
    }
    else if(string === "multiply")
    {
       let answ = multNum(num1, num2);
       console.log(answ);
    }
    else if(string === "divide")
    {
       let answer = divdNum(num1, num2);
       console.log(answer);
    }
}
/*Arithmetic Functions ^^^*/

function zero(){
    let zero = 0;
    return zero;
}


//Turns off the "Turn on"
function turnOffText()
{
    let container = document.getElementById("top-screen");
    container.style.backgroundColor = "silver";
    let next = container.firstChild.nextSibling.firstChild;
    
    next.parentElement.removeChild(next);
    
    let newZero = zero()
    displayNumbers(newZero);
}

//Function to set up display screen
function turnOn()
{
    let container = document.getElementById('top-screen');
    container.style.backgroundColor = "silver";
    let newDiv = document.createElement('div');
    let txt = document.createTextNode("Turning On");

    container.appendChild(newDiv);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    newDiv.style.fontSize = "40px";

    newDiv.appendChild(txt);

    setTimeout(turnOffText, 1500);
}


function displayNumbers(anyNumber){
    let container = document.getElementById("top-screen");
    let div = document.createElement('div');
    
    container.appendChild(div);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    div.style.fontSize = "40px";

    let next = container.firstChild.nextSibling;
    next.textContent = anyNumber;

}


function numberOne (){
    let number1 = 1;
    tempNumber1 = number1;
    displayNumbers(number1);
}

function numberTwo (){
    let number2 = 2;
    tempNumber1 = number2;
    displayNumbers(number2);
}

function numberThree(){
    let number3 = 3;
    tempNumber1 = number3;
    displayNumbers(number3)
}

function numberFour(){
    let number4 = 4;
    tempNumber1 = number4;
    displayNumbers(number4)
}

function numberFive(){
    let number5 = 5;
    tempNumber1 = number5;
    displayNumbers(number5);
}

function numberSix(){
    let number6 = 6;
    tempNumber1 = number6;
    displayNumbers(number6);
}

function numberSeven(){
    let number7 = 7;
    tempNumber1 = number7;
    displayNumbers(number7);
}

function numberEight(){
    let number8 = 8;
    tempNumber1 = number8;
    displayNumbers(number8);
}

function numberNine(){
    let number9 = 9;
    tempNumber1 = number9;
    displayNumbers(number9);
}

function addtheNumbers(){
    let stringA = "add";
    return stringA;
}
let newAdd = addtheNumbers();

function subtheNumbers(){
    let stringS = "subtract";
    return stringS;
}
let newSub = subtheNumbers();

function multtheNumbers(){
    let stringM = "multiply";
    return stringM;
}
let newMul = multtheNumbers();

function divtheNumbers(){
    let stringD = "divide";
    return stringD;
}

let newdiv = divtheNumbers();


function numEquals(){
    operate(newAdd, tempNumber1, 2);
}

