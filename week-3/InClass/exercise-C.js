function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
   
  //this works
  //  const magicOutput = namesArray.map(namesArray => namesArray.toUpperCase());

  const magicOutput = yourFunc(namesArray);
     
     return magicOutput;
    

    }
 
    function toUpper (namesArray) {
      namesArray.toUpperCase();
      return toUpper;
    }
console.log(magician(toUpper()))
