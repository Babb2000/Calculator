/* Arithmetic Functions*/

//Global variables to hold temporary current number being clicked
let tempNumber1 = " ";
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
    let next = container.childNodes[2];

    let newZero = zero()
    displayNumbers(newZero);
}

//Function to set up display screen
function turnOn()
{
    //Make sure that if other buttons were clicked before the on button, the DOM is cleared.
    
    let container = document.getElementById('top-screen');
    let divWrapper = container.childNodes[1]; //Since the the first element in the nodelist is a text node grab the preceding one
    container.style.backgroundColor = "silver";
    let newDiv = document.createElement('div');
    newDiv.classList.add("firstScreen");
    let txt = document.createTextNode("Turning On");


    divWrapper.appendChild(newDiv);
    divWrapper.style.display = "flex";
    divWrapper.style.justifyContent = "center";
    divWrapper.style.alignItems = "center";
    newDiv.style.fontSize = "40px";

    newDiv.appendChild(txt);
    container.appendChild(divWrapper);

    setTimeout(turnOffText, 1500);


   turnOn = function(){ //Assign an empty function to invoke the turnOn function only once

   }
}


function displayNumbers(anyNumber){
    let container = document.getElementById("top-screen");
    let div = container.firstChild.textContent;
    


    let next = container.lastChild;

    next.textContent = anyNumber;
    next.style.fontSize = "40px";

}


function displaySymbol(symbol){
     let text = document.createElement('div');
     text.classList.add("space")
     
     let newSymbol = symbol.padStart(5);
     console.log(newSymbol);
     text.innerText = newSymbol;
    let container = document.getElementsByClassName('divWrapper')[0];
   
    container.insertAdjacentElement('beforeend', text);

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
    console.log(tempNumber1);
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number1;
    displayNumbers(tempNumber1);
}

function numberTwo (){
    let number2 = "2";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number2;
    displayNumbers(tempNumber1);
}

function numberThree(){
    let number3 = "3";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number3;
    displayNumbers(tempNumber1)
}

function numberFour(){
    let number4 = "4";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number4;
    displayNumbers(tempNumber1)
}

function numberFive(){
    let number5 = "5";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number5;
    displayNumbers(tempNumber1);
}

function numberSix(){
    let number6 = "6";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number6;
    displayNumbers(tempNumber1);
}

function numberSeven(){
    let number7 = "7";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number7;
    displayNumbers(tempNumber1);
}

function numberEight(){
    let number8 = "8";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number8;
    displayNumbers(tempNumber1);
}

function numberNine(){
    let number9 = "9";
    if(tempNumber1 === "0")
    {
        tempNumber1 = " ";
    }
    tempNumber1 += number9;
    displayNumbers(tempNumber1);
}

function numberZero(){
    let number0 = "0";
    tempNumber1 += number0;
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


function negativePositive(){
    let newNum = (tempNumber1 * 2);
    let newNum2 = tempNumber1 - newNum;
    tempNumber1 = newNum2;
    displayNumbers(tempNumber1);
    
}






