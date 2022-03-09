let classArr = ["Jorgelina", "Vanessa", "Carlo", "Cristiane", "Laeken"];
let secondClass = ["Tamara", "Vincent"]

 let totalClass = classArr.concat(secondClass);
 totalClass = totalClass.sort();
 console.log(totalClass);

function nameIncluded(name, arr) {
    if(arr.includes(name)){
        console.log(`${name} is at the class with ${totalClass}`);
    }else{console.log(`${name} is not at the class with ${totalClass}`)}
}

nameIncluded("joselin", totalClass);