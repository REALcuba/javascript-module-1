
// declare userNameChecker function
function userNameChecker(username, userType) {
    // get first letter
    const firstLetter = username.charAt(0);
    console.log(firstLetter);

    // get first letter to uppercase
    const FirstLetterCapitalice = firstLetter.toUpperCase();
    console.log(FirstLetterCapitalice);

    //  compare if is capitalice or not
    const equalFirstLetter = firstLetter === FirstLetterCapitalice
    console.log(equalFirstLetter);

    //  find user length and check if valid
    const userLength = username.length;
    const isValidLength = userLength >= 5 && userLength <= 10;
    console.log(isValidLength);

    // check if valid
    const equalLetterAndValidLength = equalFirstLetter && isValidLength;
    console.log(equalLetterAndValidLength);

    // is super user
    const isSuperUser = userType === "admin" || userType === "manager";

    if (isSuperUser && equalLetterAndValidLength ){
        return "Username valid";
    } else {
        return "Username invalid";
    }


}
console.log(userNameChecker("Alex","admin"));