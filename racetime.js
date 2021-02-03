let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = false;
let runnerAge = 16;

if (earlyRegister === false) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister === true) {
  console.log(`You will race at 9:30am with the number ${raceNumber}`);
} else if (earlyRegister === true || runnerAge > 18) {
  console.log(`You will race at 11pm with the number ${raceNumber}`);
} else if (earlyRegister === false && runnerAge <= 18) {
  console.log(`You will race at 12:30pm with the number ${raceNumber}`);
} else {
  console.log('Please see registration desk');
}