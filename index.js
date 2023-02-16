let memory = 0;
//Add the value in input text and perform operation
function dis(val)
 {
    const display = document.getElementById('result')
    display.value+=val;
     
}
//Calculate the value
function solve()
{
    const display = document.getElementById('result')
    let x = display.value 
    display.value  = eval(x)
    
}
//delete from right
function delete_right()
{
    const display = document.getElementById('result');
    display.value = display.value.substr(0,display.value.length-1)

}
//Clear all value
function clr()
{
    const display = document.getElementById('result');
    document.getElementById('trigo').selected = true;
    document.getElementById('func').selected = true;
    display.value = ''
}

//Exponent function e
function e()
{
    const display = document.getElementById('result');
    const e= 2.7182818;
    if(display.value == '')
            display.value = e ;
    else
        display.value = display.value * e;
}

//Pi function
function pi()
{
    const display = document.getElementById('result');
    const pi = 3.14;
    if(display.value == '')
            display.value = pi ;
    else
        display.value = display.value * pi;
}
// exp function
function exponent()
{
    const display = document.getElementById('result');
    display.value = Math.exp(display.value);
}
//Absolute value |x|
function absolute()
{
    const display = document.getElementById('result');
    display.value = Math.abs(display.value);
}
//1/x function
function oneByNum()
{
    const display = document.getElementById('result');
    display.value = 1 / display.value
}
//x power 2 => x square
 function square()
 {
     const display = document.getElementById('result');
    display.value = display.value * display.value
 }

 //square root
 function squareroot()
 {
    const display = document.getElementById('result');
    display.value = Math.sqrt(display.value);
 }

 //10 power x
 function powByX()
 {
    const display = document.getElementById('result');
    display.value = Math.pow(10, display.value);

 }
 //logarithm 
 function logx()
 {
    const display = document.getElementById('result');
    display.value = Math.log10(display.value)
 }

//Natural log
 function logNat()
 {
    const display = document.getElementById('result');
    display.value = Math.log(display.value)
 }
 //Factorial 
 function fact()
 {
    const display = document.getElementById('result');
    let fact = 1;
   
    for(let num=1;num<=display.value;num++)
    {
        fact=fact*num; 

    }
    display.value=fact;
}

//Trignometric function
 function trigno()
 {
    let x = document.getElementById('Trigonometry').value;
    const display = document.getElementById('result')
   
      
        if(x=="sin") 
        {
            let p  = Math.sin(display.value*Math.PI/180);
            display.value = p.toFixed(2);

        }
        else if(x=="cos")
         {
            let q= Math.cos(display.value*Math.PI/180);
                display.value = q.toFixed(2);
         }
        
         else if(x == "tan")
         {
            let r = Math.tan(display.value*Math.PI/180);
            display.value = r.toFixed(2);
         }
        
    }

 

 //Functions 
 function func()
 {
    let x = document.getElementById('Function').value;
    const display = document.getElementById('result')
    if(x=="asin") 
        {
            let a = Math.asin(display.value);
            display.value = a.toFixed(2);
        }
         
       else if(x=="acos")
       {
            let b= Math.acos(display.value);
            display.value = b.toFixed(2);
       }
      
        else if(x=="floor")
        {
            display.value = Math.floor(display.value);
        }
           
               
    }

 

 //+/- function
 function plusminus()
 {
    let display = document.getElementById('result')
    let y = display.value * -1;
    display.value = y;
 }
 //DEG Function
 function deg()
 {
    let display = document.getElementById('result')
    display.value = (display.value * Math.PI/180 ).toFixed(2) ;
}
 
// Memory Clear
function MemoryClear()
{
    memory = 0 ;
    let display = document.getElementById('result')
    display.value = memory;
    console.log(memory);
}
//Memory read
function MemoryRead()
{
    let display = document.getElementById('result')
    display.value =  memory ;
    console.log(display.value)
}

//Add in memory
function MemoryAdd(){
    let display = document.getElementById('result')
    memory =   memory +eval(display.value)
    console.log(memory)
}

//Minus in memory
function MemoryMinus()
{
    let display = document.getElementById('result')
    memory =   memory - eval(display.value)
    console.log(memory)
}
//Save in memory
function MemorySave()
{
    let display = document.getElementById('result')
    memory =display.value;
    console.log(memory);

}

//F-E function
function toExpo()
{
    let display = document.getElementById('result')

    let x = Number(display.value).toExponential()
    display.value = x;
}
