function exponential(number) {
  return number * number;
}

function isEven(number) {
  
  return number % 2 === 0;
}


for (let i=5; i < 20; i++ ){
  const even = isEven(i);
 
console.log("The exponential of ", even + " is " +exponential(i));
};