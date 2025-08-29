const callHistory = [];

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

    const data = {
      serviceName: name,
      serviceNumber: number,
      date: new Date().toLocaleTimeString(),
    };

    callHistory.push(data);

    const hisotyContainer = document.getElementById("call-history");
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center h-20 bg-[#f5fff6] rounded-[12px] my-4 p-4">
        <div class="">
          <h1 class="font-semibold text-[16px]">${data.serviceName}</h1>
          <p class="text-gray-600">${data.serviceNumber}</p>
        </div>
        <div class="">${data.date}</div>
      </div>
    `;
    hisotyContainer.appendChild(div);

    console.log(callHistory);
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
// clear button

const clearBtn = document.getElementById("clear-btn"); // selects your Clear button
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("call-history").innerHTML = ""; // remove all call history divs
  callHistory.length = 0;
});
