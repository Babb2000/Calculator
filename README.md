# Created a Web Calculator
Create a web calculator

TakeAways:
---
1. The space background was imported from codePen credits to "Nazar The Vis Azhar". The html and css for creating the calculator was pretty simple as I just used html div's to make buttons for the calculator (this step could of been simplified using javascript). I utilized flex-box properties for the positioning of the buttons for the calculator and the display screen, along with CSS's grid feature which lets you create grids in two-demension (flex-box only supports 1-dimension).
2. The functions for operating on two numbers and returning the result was very striaght forward and simple. Using javascript functions were created for each of the basic math operations. The logic for connecting the button to the html when the two numbers were ready to be operated on, was what I had some trouble with. I was trying to use a onclick event soely within the script but realized I could just attach onlcick events to each of the buttons for add, subtract, multiply, divide, and equal on the html file. 
3. Manipulating the DOM while attaching attributes and functions to nodes and childnodes, is something I definently have to work on. I wanted to implement a "Turn On" button so I created a function that does just that. I only wanted the text to say turning on for a specific amount of time, so I created a function that clears the display screen after a set amount of time. I did this using `setTimeout(turnOffText, 1500)`, which called another function after 1 and a half seconds to turn off the screen. Some bug I came across is that if a number is clicked before the turn on button is clicked, both the number and the `turnOn()` function run at the same time (Will come back to fix this).
4. To hold the data clicked on the calculator I created a couple global variables (not best practice) and stored them as empty strings. The reason I used strings instead of numbers is because in javascript strings have a concacatenate feature when using "+". So if the user wanted to type "11" he would just have to press the number "1" twice and my function would combine `1+1 = 11`. However if the numbers were saved as integers if the user pressed button 1 twice he would get `1+1 = 2`. I then parsed the numbers stored in these variables before the equal calculation and converted them to integers so the math functions can operate on them properly.

---

## Returning Project to add:
1. Floating point numbers
2. Positive and Negative button
3. Clear/backspace/decimal button
4. Function to string together mutiple operations
5. Function to continue operating on sum after user clicks equal

Check it Out Live Here: :point_right: https://babb2000.github.io/Calculator/
