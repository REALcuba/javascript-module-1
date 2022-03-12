const ageToDrive = 17;
const birthYears = [ 1964, 2015, 1999, 2021, 1978, 1985, 1919 ];

function canDrive(birthYears) {

    const driverAge = (birthYears) =>{
        const age = 2022 - birthYears;
       if(age > ageToDrive) {
              
           console.log(`These are the birth years of people who can drive: ${birthYears}`)
       }
    };
     birthYears.filter(driverAge)

}
canDrive(birthYears);