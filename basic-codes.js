// Basic-codes  


// - word (abc, fool) vs keyword (var, const, let)  

// - var, const   (const value is not changable)   

const a = 10 ;  
var b  = 5  
a  = b ;  
console.log(a)  


// loops ( for && while )

for (i=0; i<10; i++)  {
    
    console.log(i);     

}  


var m  =  0 ;  

while (m<=10) {
    console.log(a);   
}




// conditionals 


if (m==10)  {

    console.log(m) ;  

}
 
else {
    console.log ("m is not 10")
}



// functions

function fool(){

    console.log("Hi Brother ")   
    console.log("Hi, what's up, Brother")   
    console.log("Nothing")   
    console.log("Ok, Then Byy See you...")   

}

fool();       // function calling   




// array  (push, pop, unshift, shift )

arr  = [2,3,6,7,8,0,3];  

arr.push(8);    // adding extra number in array (at last)  

arr.pop();      // removing the number from the array (at last) 

arr.unshift(1);  // adding extra number in array  (at first)  

arr.shift();     // removing the number from the array (at first)  

arr.splice(3,1);  // removing the value of index 3 (1 means how many values we need to remove onward)  

