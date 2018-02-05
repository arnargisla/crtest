function displayStatus() {
  var appElement = document.querySelector("#app");
  appElement.innerHTML = '';

  appendStatusLineToElement("Status1: example status message1", appElement);
  appendStatusLineToElement("Status2: example status message2", appElement);
  appendStatusLineToElement("Status3: example status message3", appElement);
}

function appendStatusLineToElement(text, element){
  const divElement = document.createElement("div");
  divElement.textContent = text;
  element.appendChild(divElement)
}
