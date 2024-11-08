// var , const, let difference  


// differences  
// 1) var usied in old version (es5) && let, const used in new version (es6). 
// 2) var is function scoped  && let, const  is braces scoped.      
// 3) var adds  itself to the windows object && let, const doesn't add.  

function abc() {
   
    for (var i; i<=10; i++)  {
        console.log (i);  
    }                               // var example 
                                    // run successfully 
    console.log(i) 
}



function  acd() {
     
    for (let i; i<=10; i++)  {
        console.log (i);  
    }                               // let example  
                                    // (it gives error)
    console.log(i) 

}   



// Browser context api (3 topic)
// 1) window object  
    // - In javascript many features are provides by the browser like (alert, clear, promt), which are not the feature's of the javascript.  
    // - They are shown in window object  

// 2) Stack: 
    // FIFO  (First in First Out)  
    // -------------------------
    // 5 --> 4 --> 3 --> 2 --> 1    ---> 
    // -------------------------    

// 3) heap memory:  
    // At the Execution Time data is stored in Heap  memory
    // 1 + 2 + 3 + 4 + 9  =  19 
    //   3     6   10  19  = 19  
    // ( data is stored in heap memory while calculating)   
    



// Executaion Context  (Imaginary container which consist variables, functions & Laxical Environment)  
//   ___________________________
//  |  variables      functions |
//  |                           |
//  |   Laxical Environment     |
//  |___________________________|
 
// lexical environment :- It represent your function which data can access && which data cannot access.  
// Functions :- Functions Inside The Functions 
// varaibles :- { var a } Which Contains The Data 

// Actual Defination :- Exectution context is a container where the function's code is executed and It's created whenever 
// a function is called, It contains 3 things, variables, functions & lexical Environment.   

 // in Simple Word  --> child funtions can acccess the parent functions but parent cannot access the child.  (scope chain.. managed by laxical environment)

// example: - 

function  abcdd() {
    var a = 12;   

    function def () {
        var  b  = 13;  
    }

}
  





// How to copy  reference values       

 




 