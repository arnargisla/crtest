function displayStatus() {
  var appElement = document.querySelector("#app");
  appElement.innerHTML = '';

  var status1 = "example status message1";
  var el1 = document.createElement("div");
  el1.textContent = "Status1: " + status1;
  appElement.appendChild(el1)

  var status2 = "example status message2";
  var el2 = document.createElement("div");
  el2.textContent = "Status2: " + status2;
  appElement.appendChild(el2)

  var status3 = "example status message3";
  var el3 = document.createElement("div");
  el3.textContent = "Status3: " + status3;
  appElement.appendChild(el3)
}

