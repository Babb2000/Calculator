/* Arithmetic Functions*/

//Global variables to hold temporary current number being clicked
let tempNumber1 = "0";
let tempHolder = "0";
let addThem = " ";
let subThem = " ";
let multThem = " ";
let divThem = " ";

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
        addThem = " ";
        tempHolder = " ";
        tempNumber1 = " ";
    }
    else if(string === "subtract")
    {
        let ans = subNum(num1, num2);
        displayNumbers(ans);
        subThem = " ";
        tempHolder = " ";
        tempNumber1 = " ";
    }
    else if(string === "multiply")
    {
       let answ = multNum(num1, num2);
       displayNumbers(answ);
       multThem = " ";
       tempHolder = " ";
       tempNumber1 = " ";
    }
    else if(string === "divide")
    {
        if(num2 === 0)
        {
            displayNumbers("Sorry can't divide by zero");
            return;
        }
        let answer = divdNum(num1, num2);
        displayNumbers(answer);
        divThem = " ";
        tempHolder = " ";
        tempNumber1 = " ";
       
    }
}
/*Arithmetic Functions ^^^*/


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
    next.style.fontSize = "40px";

}

function displaySymbol(symbol){
    let container = document.getElementById("top-screen");
    let div = document.createElement('div');
    
    container.appendChild(div);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    div.style.fontSize = "110px";
    div.style.textEmphasisColor = "black";

    let next = container.firstChild.nextSibling;
    next.textContent = symbol;
    next.style.fontSize = "110px";

}

function clearDisplay(){
    let container = document.getElementById("top-screen");
    let div = document.createElement('div');
    container.appendChild(div);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    div.style.fontSize = "40px";

    let next = container.firstChild.nextSibling;
    next.textContent = " ";

}

function zero(){
    let zero = "0";
    tempNumber1 = zero;
    displayNumbers(tempNumber1);

    return zero;
}

function numberOne (){
    let number1 = "1";
    tempNumber1 += number1;
    displayNumbers(tempNumber1);
}

function numberTwo (){
    let number2 = "2";
    tempNumber1 += number2;
    displayNumbers(tempNumber1);
}

function numberThree(){
    let number3 = "3";
    tempNumber1 += number3;
    displayNumbers(tempNumber1)
}

function numberFour(){
    let number4 = "4";
    tempNumber1 += number4;
    displayNumbers(tempNumber1)
}

function numberFive(){
    let number5 = "5";
    tempNumber1 += number5;
    displayNumbers(tempNumber1);
}

function numberSix(){
    let number6 = "6";
    tempNumber1 = number6;
    displayNumbers(tempNumber1);
}

function numberSeven(){
    let number7 = "7";
    tempNumber1 += number7;
    displayNumbers(tempNumber1);
}

function numberEight(){
    let number8 = "8";
    tempNumber1 += number8;
    displayNumbers(tempNumber1);
}

function numberNine(){
    let number9 = "9";
    tempNumber1 += number9;
    displayNumbers(tempNumber1);
}

function holdFirstNum (num1){
    tempHolder = num1;
}

 
function addtheNumbers(){
    displaySymbol("+");
    let stringA = "add";
    addThem = stringA;
    let holdNum = tempNumber1;
    holdFirstNum(holdNum); //Function holds original value clicked on 
    tempNumber1 = "0";
}

function subtheNumbers(){
    displaySymbol("-");
    let stringS = "subtract";
    subThem = stringS;
    let holdNum = tempNumber1;
    holdFirstNum(holdNum);
    tempNumber1 = "0";
    
}

function multtheNumbers(){
    displaySymbol("×");
    let stringM = "multiply";
    multThem = stringM;
    let holdNum = tempNumber1;
    holdFirstNum(holdNum);
    tempNumber1 = "0";
}

function divtheNumbers(){
    displaySymbol("÷");
    let stringD = "divide";
    divThem = stringD;
    let holdNum = tempNumber1
    holdFirstNum(holdNum);
    tempNumber1 = "0";
}

function numEquals(){
        if(addThem === "add")
        {
            let convertedAdd = parseInt(tempHolder);
            let convertedAdd2 = parseInt(tempNumber1);
            operate(addThem, convertedAdd, convertedAdd2);
        }
        else if(subThem === "subtract")
        {
            let convertedSub = parseInt(tempHolder);
            let convertedSub2 = parseInt(tempNumber1);
            operate(subThem, convertedSub, convertedSub2);   
        }
        else if(multThem === "multiply")
        {
            let convertedMult = parseInt(tempHolder);
            let convertedMult2 = parseInt(tempNumber1);
            operate(multThem, convertedMult, convertedMult2); 
        }
        else if(divThem === "divide")
        {
            let converteddiv = parseInt(tempHolder);
            let converteddiv2 = parseInt(tempNumber1);
            operate(divThem, converteddiv, converteddiv2); 
        }
}

//Create a module to organize the add,sub,mult, divide methods
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mult = (a, b) => a * b;
    const div = (a, b) => a / b;


    return {add,sub,mult,div};
})();





