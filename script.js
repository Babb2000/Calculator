/* Arithmetic Functions*/

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
        console.log(an);
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



//On click function to turn on the display screen
 
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


    
}

