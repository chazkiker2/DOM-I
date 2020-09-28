let a = document.getElementById("secondTens");
let b = document.getElementById("secondOnes");
let c = document.getElementById("msHundreds");
let d = document.getElementById("msTens");
let totalCount = 0;

setInterval(setTime, 1000);

// const getClock = () => {
//   return [secTens, secOnes, msHuns, msTens];
// };


function setTime() {
  let secTens = 0;
  let secOnes = 0;
  let msHuns = 0;
  let msTens = 0;

  increment(secTens, secOnes, msHuns, msTens, breaksLim);


  
}

const increment = (secTens, secOnes, msHuns, msTens, breaksLim) => {
  if (!breaksLim(msTens)) {
    msTens++;
    d.innerHTML = msTens;
  } else {
    msTens = 0;
    d.innerHTML = msTens;
    if (!breaksLim(msHuns)) {
      msHuns++;
      c.innerHTML = msHuns;
    } else {
      msHuns = 0;
      c.innerHTML = msHuns;
      if (!breaksLim(secOnes)) {
        secOnes++;
        b.innerHTML = secOnes;
      } else {
        secOnes = 0;
        b.innerHTML = secOnes;
        if (!breaksLim(secTens)) {
          secTens++;
          a.innerHTML = secTens;
        } else {
          return;
        }
      }
    }
  }
}

const breaksLim = (val) => {
  let temp = val+1;
  return ((temp % 10) ? false : true);
}

const start = () => {
  secTens.innerHTML = 0;
  secOnes.innerHTML = 0;
  msHuns.innerHTML = 0;
  msTens.innerHTML = 0;
  
 
};

// start();z

let msPassed = 0;
const limit = 10 * 1000;
while (msPassed < 10) {
  window.setInterval(setTime(), 1);
  msPassed++;
}

// window.setInterval(setTime(), 1000);

