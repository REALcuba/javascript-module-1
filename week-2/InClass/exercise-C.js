// declare numberChecker function
function numberChecker(num) {
  //  if num is bigger than 20 , it return ${num} is greater than 20
  if (num > 20) {
    return `${num} is greater than 20`;
    //  if is strict equal 20, it return ${num} is equal to 20
  } else if (num === 20) {
    return `${num} is equal to 20`;
    //  if num is smaller than 20, it return `${num} is less than 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
    //  if num is a string, it  return `${num} isn't even a number :(`
  } else {
    return `${num} isn't even a number :(`;
  }
}
console.log(numberChecker("20"));