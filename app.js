const input = document.getElementById("input");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear")


// input.addEventListener("click", function(){
    
// })

one.addEventListener("click", function(){
   input.value += 1; 
})

two.addEventListener("click", function(){
   input.value += 2; 
    
})

three.addEventListener("click", function(){
   input.value += 3; 
    
})

four.addEventListener("click", function(){
   input.value += 4; 
    
})

five.addEventListener("click", function(){
   input.value += 5; 
    
})

six.addEventListener("click", function(){
   input.value += 6; 
    
})

seven.addEventListener("click", function(){
   input.value += 7; 
    
})

eight.addEventListener("click", function(){
   input.value += 8; 
    
})

nine.addEventListener("click", function(){
   input.value += 9; 
    
})

zero.addEventListener("click", function(){
   input.value += 0; 
    
})

add.addEventListener("click", function(){
   input.value += ' + '; 
    
})

subtract.addEventListener("click", function(){
   input.value += ' - '; 
    
})

multiply.addEventListener("click", function(){
   input.value += ' * '; 
    
})

divide.addEventListener("click", function(){
   input.value += ' / '; 
    
})

dot.addEventListener("click", function(){
   input.value += '.'; 
    
})

equal.addEventListener("click", function(){
    input.value = eval(input.value)
})


clear.addEventListener("click", function(){
    input.value = ''
})

input.addEventListener("keypress", function(e){
    console.log(e.currentTarget);
    
})