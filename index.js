//* function to get inner text
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

//* function for add event listener for increasing heart count
function addEventListenerToIncreaseHeart(id) {
  document.getElementById(id).addEventListener("click", function () {
    let heartCount = Number(getInnerText("heart-count"));
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
    console.log("clicked");
  });
}

//* function calling
addEventListenerToIncreaseHeart("heart1");
addEventListenerToIncreaseHeart("heart2");
addEventListenerToIncreaseHeart("heart3");
addEventListenerToIncreaseHeart("heart4");
addEventListenerToIncreaseHeart("heart5");
addEventListenerToIncreaseHeart("heart6");
addEventListenerToIncreaseHeart("heart7");
addEventListenerToIncreaseHeart("heart8");
addEventListenerToIncreaseHeart("heart9");

document.getElementById("call1").addEventListener("click", function () {
  let coin = Number(getInnerText("coin"));
  console.log(coin);
  if (coin < 20) {
    return alert("not enough coin to make a call");
  } else {
    const serviceName = getInnerText("service-name1");
    const serviceNumber = getInnerText("service-number1");
    const message = `You are Calling ${serviceName} at ${serviceNumber}`;
    alert(message);
    let date = new Date();
    date = date.toLocaleString();
    date = date.split(",")[1];

    const cardBodyHtml = ` <div
                class="flex justify-between items-center gap-2 bg-[#F2F2F2] p-4 rounded-lg mt-4">
                <div>
                  <h2 class="text-[13px] font-semibold mb-1">${serviceName}</h2>
                  <p class="w-full text-[#5C5C5C] text-sm">${serviceNumber}</p>
                </div>
                <div class="text-[11px]">${date}</div>
              </div>`;
    document.getElementById("card-body").innerHTML += cardBodyHtml;

    coin = coin - 20;
    document.getElementById("coin").innerText = coin;
  }
});
