Step 1: Set up button variables for each type of calculator button
    Buttons will fall into 1 of 5 categories:
    - Number (0-9)
    - Operator (+, -, *, /)
    - Decimal 
    - Equals
    - Clear

Step 2: Link button clicks to show in the display

>> When a user clicks a number, operator, or decimal button, use ".addEventListener" and then specify event.target.innerText to make the contents of the specified div appear in the display

Step 3: Calculate equals based on display characters

>> When "=" button is clicked, make what appears in the display a string, then run eval() on that string

>> Make eval result a number that displays on the display

>> Will need to loop: calculate string => display calculatedString => make calculatedString the first input in the next loop => wait for click on "=" before running again

Step 4: Clear display 

>> When "clear" is clicked, all input is removed from loop and display is cleared. Not sure how to do this yet. 

###
TO-DO
- set a way to track sequence of buttons that are clicked
- 
- Run eval on string when = is clicked
