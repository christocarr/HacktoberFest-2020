window.onload = function () {
  var generator = document.getElementById("textGenerator");
  const textContainerDIV = document.getElementById("text_container");
  const textInput = document.getElementById("text_input");
  const errorCounterSPAN = document.getElementById("error_counter");
  let errorCount = 0;
  var randomText = [
    "ine neit ent eletter lient ener lent tete ener tree neer teet ener neit ree tell ree neerine ere ree ret lier teen nient tell",
    "nient eletter ree treet ene eler neerit neer tree eler nient teel nient lier ener lent ener tell teen nient ree nient lettine",
    "let nient ret iner rel ree lier let neer rent elette let ine neerine nient teen ene relie ree teen elet ine ree elet reet teen",
  ];

  generator.onclick = function () {
    let textLength = Math.floor(Math.random() * randomText.length);
    currentText = randomText[textLength];
    textContainerDIV.innerText = "";
    currentText.split("").forEach((character) => {
      const charSpan = document.createElement("span");
      //console.log(character);
      charSpan.innerText = character;
      textContainerDIV.append(charSpan);

      // add the code to start the timer when the 'Generate' button is clicked
      runTime();
    });
  };

  // code for error count
  textInput.onkeypress = (event) => {
    if (event.key === " " || event.key === "Spacebar") {
      const textContainerWords = textContainerDIV.innerText.split(" ");
      const inputWords = textInput.value.split(" ");

      const lastIndex = inputWords.length - 1;
      const lastWord = inputWords[lastIndex];
      if (textContainerWords[lastIndex]) {
        if (lastWord !== textContainerWords[lastIndex]) errorCount++;
      } else errorCount++;
      errorCounterSPAN.innerText = errorCount;
    }
  };
};

// function for digital formating of time
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

// code for running time in seconds
function runTime() {
  let runSeconds = 0;
  let countTime = setInterval(() => {
    ++runSeconds;

    let totalSeconds = runSeconds % 60;
    let totalHours = Math.floor(runSeconds / 3600);
    let totalMinutes = Math.floor(runSeconds / 60 - totalHours * 60);

    totalHours = formatTime(totalHours);
    totalMinutes = formatTime(totalMinutes);
    totalSeconds = formatTime(totalSeconds);
    // Displaying the counter in the timer view
    document.querySelector("#hours-passed").innerHTML = totalHours;
    document.querySelector("#minutes-passed").innerHTML = totalMinutes;
    document.querySelector("#seconds-passed").innerHTML = totalSeconds;
  }, 1000);
  // code to stop running time if button is clicked
  var stopButton = document.getElementById("stop-time-button");
  stopButton.addEventListener("click", function (e) {
    e.preventDefault()
    clearInterval(countTime);
    document.querySelector("#hours-passed").innerHTML = formatTime(0);
    document.querySelector("#minutes-passed").innerHTML = formatTime(0);
    document.querySelector("#seconds-passed").innerHTML = formatTime(0);
  });
}
