function expression(num, action)
{
    if (action != undefined)
    {
        return action(num);
    }
    else
    {
        return num;
    }
}

function zero(action)  { return expression(0, action); }
function one(action)   { return expression(1, action); }
function two(action)   { return expression(2, action); }
function three(action) { return expression(3, action); }
function four(action)  { return expression(4, action); }
function five(action)  { return expression(5, action); }
function six(action)   { return expression(6, action); }
function seven(action) { return expression(7, action); }
function eight(action) { return expression(8, action); }
function nine(action)  { return expression(9, action); }

function plus(num1)
{
    return function(num2)
    {
        return num1 + num2;
    }
}

function minus(num1)
{
    return function(num2)
    {
        return num2 - num1;
    }
}

function times(num1)
{
    return function(num2)
    {
        return num1 * num2;
    }
}

function dividedBy(num1)
{
    return function(num2)
    {
        return Math.floor(num2 / num1);
    }
}

let CalculatingDiv = document.getElementById("Calculating");
CalculatingDiv.innerHTML += seven(times(five())) + '<br>';
CalculatingDiv.innerHTML += four(plus(nine())) + '<br>';
CalculatingDiv.innerHTML += eight(minus(three())) + '<br>';
CalculatingDiv.innerHTML += six(dividedBy(two())) + '<br>';