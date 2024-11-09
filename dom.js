// 4 pillars of the dom 

// 1) Selection of an element 
// 2) Changing Html
// 3) Changing Css  
// 4) Event Listener  



// 1) Selection of an element   

document.querySelector("h1");   

// "#box" --> if we want to give the id. 
// ".box" --> if you want to give tne class.   

var  a  = document.querySelector("h1");   // for avoiding repitations.  
console.log(a);   





// 2) changing HTML 

var a = document.querySelector("h2") ;  
a.innerHTML = 'Hellow World IS changed'   



// 3) Changing CSS  

var a = document.querySelector("h2") ;     
a.style.color =  "red"  ;     
a.style.backgroundColor  = "purple" ;  


// 4) Event Listener  

var  a = document.querySelector("h2")   

a.addEventListener("click", function() { 
    
    console.log("hey bro Its Working fine ") 
    a.innerHTML =  "Bhool Ja Useee && just say hii to the world "  
    a.style.color  = "red" 

})  







