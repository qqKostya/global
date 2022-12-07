const flags = document.querySelectorAll(".flag");
const flagBlock = document.querySelector(".flags");
let startInterval = 3000;

const appearanceOfFlags = () => {
  const interval = 400; 
  let increment = 1;
  flags.forEach((flag, index) => {
    const addId = setTimeout(() => {
      flag.classList.add(`flag${index}`);
      clearTimeout(addId);
    }, interval * increment);
    increment = increment + 1;
  });
};

setTimeout(appearanceOfFlags, startInterval);
startInterval += (400 * flags.length);
const step = () => {
  flagBlock.style.animation = "rotateCircle 7s linear infinite";
  flags.forEach((flag) => {
    flag.style.animation = "rotateCircle reverse 7s linear infinite";
  })
};
setTimeout(step, startInterval);