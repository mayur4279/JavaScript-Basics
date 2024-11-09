

var button = document.querySelector("#button-1");     
var bulb = document.querySelector("#bulb");  

var flag  = 0 ;   

button.addEventListener("click", function(){ 

   if (flag == 0 ) {

    bulb.style.backgroundColor = "yellow" ;   
    console.log("bulb is on")
    flag = 1 ;   
   }

   else  {
     bulb.style.backgroundColor = "transparent" ;  
     console.log ("bulb is off")    
     flag = 0 ;   
   }

}); 






