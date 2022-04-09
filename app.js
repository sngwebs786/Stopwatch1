// setInterval(Repeat this thing after every x times)
// setTimeout (Do this thing after x time)
// clearInterval (stop the setInterval)

var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var startbtn = document.getElementById("startbtn");

function timer() {
  // console.log("This is timer")
  msec++;
  msecHeading.innerHTML = msec;

  if (msec == 100) {
    sec++;
    msec = 0;
    msecHeading.innerHTML = msec;
    if (sec < 10) {
      secHeading.innerHTML = "0" + sec;
    } else {
      secHeading.innerHTML = sec;
    }
  } else if (sec == 60) {
    min++;
    minHeading.innerHTML = min;
    sec = 0;
    secHeading.innerHTML = sec;
  }
}
var interval;


function start() {
  interval = setInterval(timer, 10);
  startbtn.disabled = true

}

function pause() {
  clearInterval(interval);
  startbtn.disabled = false;

}

function reset() {
  sec = 0;
  msec = 0;
  min = 0;
  secHeading.innerHTML = sec;
  minHeading.innerHTML = min;
  msecHeading.innerHTML = msec;
  pause();
}
