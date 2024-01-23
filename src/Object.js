(function () {
  const oldLog = console.log;
  console.log = function (message) {
    const output = document.getElementById("consoleOutputSub");
    output.innerHTML += message + "<br>"; // Append new message

    oldLog.apply(console, arguments); // Keep default console.log behavior
  };
})();
