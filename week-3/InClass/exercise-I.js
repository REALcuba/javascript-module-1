function fixingArray(array) {
    

return messyArray.filter(isString).map(array => array.toUpperCase());


}

function isString(item) {
    return typeof item === "string";
}

const messyArray = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ]
  console.log(fixingArray());