function magician() {
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
  
  const sortedArray = namesArray.sort()
  const magicOutput = sortedArray.map(sortedArray => sortedArray.toUpperCase());

  return magicOutput;
}
console.log(magician())