/* Arithmetic Functions*/

//Global variable to hold temporary current number being clicked
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
        tempNumber1 = "0";
        tempHolder = "0";
    }
    else if(string === "subtract")
    {
        let ans = subNum(num1, num2);
        displayNumbers(ans);
        tempNumber1 = "0";
        tempHolder = "0";
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
    tempNumber1 = "0";
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
    let stringA = "add";
    addThem = stringA;
    let holdNum = tempNumber1;
    holdFirstNum(holdNum); //Function holds original value clicked on 
    tempNumber1 = "0";
}
//let newAdd = addtheNumbers();


function subtheNumbers(){
    let stringS = "subtract";
    subThem = stringS;
    let holdNum = tempNumber1;
    holdFirstNum(holdNum);
    tempNumber1 = "0";
    
}
//let newSub = subtheNumbers();

function multtheNumbers(){
    let stringM = "multiply";
    multThem = stringM;
    let holdNum = tempNumber1;
    holdFirstNum(holdNum);
    tempNumber1 = "0";
}
//let newMul = multtheNumbers();

function divtheNumbers(){
    let stringD = "divide";
    divThem = stringD;
    let holdNum = tempNumber1
    holdFirstNum(holdNum);
    tempNumber1 = "0";
    
}
//let newDiv = divtheNumbers();




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
}







