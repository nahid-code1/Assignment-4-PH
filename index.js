// fuctions for getting inner text
function getInnerText(heartCount) {
  const element = document.getElementById(heartCount);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}
console.log("connected");
