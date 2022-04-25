/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

// +

function capitalise(str){
 
    const strArr = str.split("")
    
    //LOOP - for normal or map
    const newStr = strArr.map((letter, index) =>{
        if(index === 0){
         return   letter.toUpperCase();
             
        }
return letter
    })

    const stringAgain = newStr.join("")
    return stringAgain;


}

// this code works too.

// function capitalise(str) {
//   const arr = str.charAt(0).toUpperCase()
  
//   const sliced = str.slice(1)
  

//   return `${arr}`+ `${sliced}`

   
// }


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/


