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
    const card = call.closest(".card");

    const name = card.querySelector(".card-name").innerText.replace(/\n/g, " ");
    const number = card.querySelector(".card-number").innerText;

    alert("Calling " + name + "\nNumber: " + number);
    const totalCoin = coinNumber - 20;

    document.getElementById("coinNum").innerText = totalCoin;
  });
}
// copy button functionality

const copyButtons = document.querySelectorAll(".btn .fa-copy");

for (const btnIcon of copyButtons) {
  const btn = btnIcon.closest("button");
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const copyNumber = parseInt(document.getElementById("copyNum").innerText);
    const totalCopyNumber = copyNumber + 1;
    document.getElementById("copyNum").innerText = totalCopyNumber;

    const card = btn.closest(".card");
    const number = card.querySelector(".card-number").innerText;

    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert("Copied: " + number);
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  });
}
