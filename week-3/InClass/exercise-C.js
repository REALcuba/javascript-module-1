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
  

  const magicOutput = namesArray.map(namesArray => namesArray.toUpperCase());

  return magicOutput;
}
magician()