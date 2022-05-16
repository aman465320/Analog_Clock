const v1 = document.getElementById("hour");
const v2 = document.getElementById("minute");
const v3 = document.getElementById("second");

setInterval(moveClock, 1000);

function moveClock() {
  const d = new Date();
  const hours = 30 * d.getHours() + d.getMinutes() / 2;
  const minutes = d.getMinutes() * 6;
  const seconds = d.getSeconds() * 6;
  v3.style.transform = `rotate(${seconds}deg)`;
  v2.style.transform = `rotate(${minutes}deg)`;
  v1.style.transform = `rotate(${hours}deg)`;
}

// function doTHIS() {
//     // const d = new Date();
//     // const seconds = d.getSeconds();
//   document.getElementById("second").style.transform = "roatate(90deg)";
// }
