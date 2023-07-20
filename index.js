let expression = ""; 
let result = ""

function clearCalculator() {
    expression = '';
    result = '';
    display();
}

function getValueBtn(btn){
    let value = btn.textContent;
    expression += value;
    display();
}

function calculate(){
    try{
        result = eval(expression);
        display()
    }catch (error){
        expression = "Error";
        display();
    }
}



function display(){
    const inputElement = document.querySelector('.input');
    const outputElement = document.querySelector('.output');
    
    inputElement.textContent = expression;
    outputElement.textContent = result;
}
