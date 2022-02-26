var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function getShoutyGreeting(name) {

     ShoutyName = name.toUpperCase();
    
     return `HELLO ${ShoutyName}`;
}
console.log(getShoutyGreeting(mentor1));
console.log(getShoutyGreeting(mentor2));
console.log(getShoutyGreeting(mentor3));
console.log(getShoutyGreeting(mentor4));
console.log(getShoutyGreeting(mentor5));