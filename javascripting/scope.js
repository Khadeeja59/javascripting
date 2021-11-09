/* const a = 4 
       
     function foo () {  
       const b = a * 3 // b=12
       function bar (c) {  
         const b = 2   
         console.log(a, b, c)  4, 2,  
       }  
       
       bar(b * 4)  
     }  
       
     foo() // 4, 2, 48  
     */


     const a = 1; const b = 2; const c = 3;  
       
     (function firstFunction () {  
       const b = 5; const c = 6;  
        
       (function secondFunction () {  
         const b = 8;  
         
         (function thirdFunction () {  
           const a = 7; const c = 9;  

           (function fourthFunction () {  
             const a = 1; const c = 8  
           })  
         })  
       return b;}) 
     return c;})
     return a;
   
  //Use your knowledge of the variables' scope and place the following code  
  // inside one of the functions in scope.js so the output is a: 1, b: 8, c: 6  
   
 console.log(`a: ${a}, b: ${b}, c: ${c}`)  ;
   
