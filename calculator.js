(function () {
  /* VARIABLES FOR CALCULATOR */

  const valueTopUI = document.querySelector(".existing-value");
  const valueBottomUI = document.getElementById("input-area");
  const operationsLogs = [];
  let operationsLogsId = 0;
  let currentOperation = "";

  const btnCE = document.getElementById("btn-CE");
  const btnC = document.getElementById("btn-C");
  const btnPercent = document.getElementById("btn-percent");
  const btnDivide = document.getElementById("btn-divide");
  const btnMultiply = document.getElementById("btn-multiply");
  const btnMinus = document.getElementById("btn-minus");
  const btnPlus = document.getElementById("btn-plus");
  const btnPlusMinus = document.getElementById("btn-plusminus");
  const btnDot = document.getElementById("btn-dot");
  const btnEqual = document.getElementById("btn-equal");
  const btn7 = document.getElementById("btn-7");
  const btn8 = document.getElementById("btn-8");
  const btn9 = document.getElementById("btn-9");
  const btn4 = document.getElementById("btn-4");
  const btn5 = document.getElementById("btn-5");
  const btn6 = document.getElementById("btn-6");
  const btn3 = document.getElementById("btn-3");
  const btn2 = document.getElementById("btn-2");
  const btn1 = document.getElementById("btn-1");
  const btn0 = document.getElementById("btn-0");

  const btns0to9 = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

  const operationSymb = [btnPlus, btnMinus, btnMultiply, btnDivide];

  // history section

  const deleteOperationButtons = [];

  const historyRow = document.querySelector(".history-area");

  let valueTop = 0; // the value that is shown at the top
  let valueBottom = ""; // the value that is shown at the bottom
  let result = 0;
  let activeSymbol = ""; // can be + - / *
  let operationCompleted = false;

  // a user clicks on the button 0 - 9

  for (const btn of btns0to9) {
    btn.addEventListener("click", function () {
      if (!operationCompleted) {
        updateNumberUI(btn);
      } else {
        result = 0;
        valueTop = "";
        valueTopUI.textContent = "";
        updateNumberUI(btn);
        operationCompleted = false;
      }
    });
  }

  // A user clicks on the dot
  btnDot.addEventListener("click", function () {
    if (!valueBottom.includes(".")) {
      valueBottom = valueBottom + btnDot.textContent;
      valueBottomUI.textContent = valueBottom;
    }
  });

  // A user clicks on the plus / minus / divide / multiply

  for (const btn of operationSymb) {
    btn.addEventListener("click", function () {
      operationCompleted = false;
      valueTopUI.textContent = valueTop + btn.textContent;
      valueBottomUI.textContent = "0";
      result = 0;

      if (valueBottom === 0 || valueBottom === "0" || valueBottom === "") {
        activeSymbol = btn.textContent;
      } else {
        if (valueTop === "0" || valueTop === 0 || valueTop === "") {
          valueTop = valueBottom;
          valueBottom = 0;
          valueTopUI.textContent = valueTop + btn.textContent;
          valueBottomUI.textContent = valueBottom;
          activeSymbol = btn.textContent;
        } else {
          handleCalculation();
          if (result === Infinity) {
            showInfinityWarning();
          } else {
            activeSymbol = btn.textContent;
            valueBottom = "";
            valueTop = Number(result);
            activeSymbol = btn.textContent;
            valueTopUI.textContent = result + activeSymbol;
            valueBottomUI.textContent = 0;
          }
        }
      }
    });
  }

  // a user clicks on the button C (deletes everything)

  btnC.addEventListener("click", function () {
    valueTop = 0;
    valueBottom = 0;
    activeSymbol = "";
    updateCalcUI();
  });
  //  a user clicks on the button CE (deletes the bottom value)

  btnCE.addEventListener("click", function () {
    valueBottom = 0;
    updateCalcUI();
  });
  // a user clicks on the button =

  btnEqual.addEventListener("click", function () {
    if (valueTopUI.textContent !== "" && !operationCompleted) {
      handleCalculation();

      if (result === Infinity) {
        showInfinityWarning();
      } else {
        valueTopUI.textContent = `${valueTop} ${activeSymbol} ${valueBottom} =`;
        valueBottomUI.textContent = result;
        valueTop = result;
        valueBottom = 0;
        operationCompleted = true;

        addOperationToTheHistory();
      }
    }
  });

  // a user clicks on the +- sign
  btnPlusMinus.addEventListener("click", function () {
    value = valueBottomUI.textContent;
    if (value > 0) {
      value = 0 - value;
    } else if (value < 0) {
      value = Math.abs(value);
    }
    valueBottomUI.textContent = value;
    valueBottom = value;
  });

  // a user clicks on the percentage button
  btnPercent.addEventListener("click", function () {
    if (valueTop && valueBottom) {
      let percentages = (valueTop / 100) * valueBottom;
      result = eval(`${valueTop} ${activeSymbol} ${percentages}`);
      valueBottomUI.textContent = result;
      valueTopUI.textContent = `${valueTop} ${activeSymbol} ${percentages}`;
      valueTop = result;
      valueBottom = "";
    } else {
    }
  });

  // a user deletes the item from the history:

  for (const img of deleteOperationButtons) {
    img.addEventListener("click", function () {
      console.log("BTN CLICK!");
    });
  }

  // UPDATE UI

  function updateCalcUI() {
    if (valueBottom === 0 && valueTop === 0) {
      valueTopUI.textContent = "";
      valueBottomUI.textContent = "";
    } else {
      valueTopUI.textContent = valueTop + activeSymbol;
      valueBottomUI.textContent = valueBottom;
    }
  }

  // reset application

  function resetApp() {
    valueTopUI.textContent = "";
    valueBottomUI.textContent = "";
  }
  resetApp();

  function handleCalculation() {
    result = eval(`${valueTop} ${activeSymbol} ${valueBottom}`);
  }

  function showInfinityWarning() {
    valueBottom = 0;
    valueTop = 0;
    valueBottomUI.textContent = "Don't divide by zero! ";
    valueTopUI.textContent = "0";
  }

  function invertValue(value) {
    if (value > 0) {
      value = 0 - value;
    } else if (value < 0) {
      value = Math.abs(value);
    }
    valueBottomUI.textContent = value;
    return value;
  }

  function updateNumberUI(btn) {
    if (valueBottom === 0 || valueBottom === "0" || valueBottom === "") {
      valueBottom = btn.textContent;
    } else {
      valueBottom = valueBottom + btn.textContent;
    }
    valueBottomUI.textContent = valueBottom;
  }

  function addOperationToTheHistory() {
    let currentOperation =
      valueTopUI.textContent + " " + valueBottomUI.textContent;
    operationsLogs.push(currentOperation);
    let dateAndTime = new Date();
    const date = `${dateAndTime.getDate()}`.padStart(2, 0);
    const month = `${dateAndTime.getMonth() + 1}`.padStart(2, 0);
    const hour = `${dateAndTime.getHours()}`.padStart(2, 0);
    const minutes = `${dateAndTime.getMinutes()}`.padStart(2, 0);
    const seconds = `${dateAndTime.getSeconds()}`.padStart(2, 0);
    const timeStr = `${date}.${month}, ${hour}:${minutes}:${seconds}`;
    operationsLogsId += 1;

    const html = `<div class='history-row' id="row-${operationsLogsId}">
          
          <div class='history-item1'> ${currentOperation} </div>
          <div class=time-delete-row>
            <div class='time-and-remove-part'>
                <span class='time'>${timeStr}</span>
                <span class='delete'><img class="trash-icon" id="del-btn-${operationsLogsId}" src="img/2907762.png" alt=""></span>
            </div>
        </div> </div>`;

    historyRow.insertAdjacentHTML("afterbegin", html);
    console.log(`<img class="trash-icon" id="del-btn-${operationsLogsId}"`);

    const deleteEl = document.querySelectorAll(`.trash-icon`);

    historyRow.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("trash-icon")) {
        let elId = e.target.getAttribute("id").replace(/\D/g, "");
        e.target.closest(".history-row").remove();
      }
    });

    // el.addEventListener("click", function () {
    //   let el = document.getElementById(`row-${operationsLogs.length - 1}`);
    //   el.remove();
    // });
  }
})();
