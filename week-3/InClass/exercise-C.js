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
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }

  function nameToUpperCase(person) {
      return person.toUpperCase()
  }
 function manipulateArrey(array) {
     const result = [];
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         return result
     }
 }