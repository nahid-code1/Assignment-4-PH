console.log("connected");

// function for getting inner text
function getInnerText(heartCount) {
  const element = document.getElementById(heartCount);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// heart count increase function
const hearts = document.getElementsByClassName("heartNum");
for (const heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();
    const heartNumber = parseInt(
      document.getElementById("heartCount").innerText
    );
    const totalHeartNumber = heartNumber + 1;
    document.getElementById("heartCount").innerText = totalHeartNumber;
  });
}
// call button function
const calls = document.getElementsByClassName("call-btn");
for (const call of calls) {
  call.addEventListener("click", function (e) {
    e.preventDefault();
    const coinNumber = parseInt(document.getElementById("coinNum").innerText);
    if (coinNumber < 20) {
      alert("You don't have enough Coins");
      return;
    }
    const totalCoin = coinNumber - 20;

    document.getElementById("coinNum").innerText = totalCoin;
  });
}
