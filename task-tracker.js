(function () {
  // VARIABLES

  //buttons for tracking time:
  const startTrackBtn = document.querySelector(".tracker-start");
  const pauseTrackerBtn = document.querySelector(".tracker-pause");
  const stopTrackerBtn = document.querySelector(".tracker-stop");

  //other variables for DOM:
  const timerUI = document.querySelector(".timer");
  const taskDescription = document.querySelector("#task-description");
  const trackerHistoryArea = document.querySelector(".tracker-history-area");

  // variables for app
  let timeTotal;
  let timeForCurrentTask;
  let minutesCurr = 0;
  let secondsCurr = 0;
  let timerId;

  // Event handlers

  startTrackBtn.addEventListener("click", function () {
    timerId = setInterval(timeRun, 1000);
  });
  pauseTrackerBtn.addEventListener("click", function () {
    setTimeout(() => {
      clearInterval(timerId);
    }, 0);
  });
  stopTrackerBtn.addEventListener("click", function () {});

  // functions

  function timeRun() {
    secondsCurr = secondsCurr + 1;
    if (secondsCurr >= 60) {
      minutesCurr = minutesCurr + 1;
      secondsCurr = 0;
    }

    timerUI.textContent = `${minutesCurr
      .toString()
      .padStart(2, "0")}:${secondsCurr.toString().padStart(2, "0")}`;
  }
})();
