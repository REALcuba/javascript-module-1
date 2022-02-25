
 
function getYearBorn(age) {
   
   const year = 2022;
    return year - age;
}
console.log(getYearBorn());

function introduceYoursef(age, name) {
 
 const yearBorn = getYearBorn(age);

 const message = `Helo team, my name is ${name} and i was born in ${yearBorn}`;   
return message;

}
console.log(introduceYoursef(25, "Angel"));