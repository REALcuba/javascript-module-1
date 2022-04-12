

const ageToDrive = 17;
const birthYearArray = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

const driverAgeChecker = (birthYear) => {
    const driverAge = 2022 - birthYear;
    if(driverAge > ageToDrive){
        console.log(`Born in ${birthYear} can drive`); ;
    }else if(driverAge < ageToDrive){
        const yearToDrive = ageToDrive - driverAge
        console.log(`Born in ${birthYear} can drive in ${yearToDrive} years`);
    }
    
}
birthYearArray.map(driverAgeChecker)