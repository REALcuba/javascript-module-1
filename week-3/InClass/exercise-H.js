function nameArray(arr) {
     arr = ["angel" ,"luis", "vero", "carlos"];

 if(arr.find(name => name == "jose")) {
     return "Found Me!"
 }else{
return "Haven't found me :("
 }

}
console.log(nameArray());