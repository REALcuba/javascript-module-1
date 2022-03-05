var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function getShoutyGreeting(name) {

    const ShoutyName = name.toUpperCase();

     return ShoutyName;
}
function shoutyGreeting(name) {
    return `HELLO ${getShoutyGreeting(name)}`
}
console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));