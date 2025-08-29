//* responsive menu
document.getElementById("cross-icon").addEventListener("click", function () {
  document.getElementById("cross-icon").classList.add("hidden");
  document.getElementById("menu-icon").classList.add("flex");
  document.getElementById("menu-icon").classList.remove("hidden");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("flex");
  mobileMenu.classList.add("hidden");
});

document.getElementById("menu-icon").addEventListener("click", function () {
  document.getElementById("menu-icon").classList.add("hidden");
  document.getElementById("cross-icon").classList.add("block");
  document.getElementById("cross-icon").classList.remove("hidden");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

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

function callSectionFunctionality(btnId, serviceId, numberId) {
  document.getElementById(btnId).addEventListener("click", function () {
    let coin = Number(getInnerText("coin"));
    if (coin < 20) {
      return alert("not enough coin to make a call");
    } else {
      const serviceName = getInnerText(serviceId);
      const serviceNumber = getInnerText(numberId);
      const message = `You are Calling ${serviceName} at ${serviceNumber}`;
      alert(message);
      let date = new Date();
      date = date.toLocaleString();
      date = date.split(",")[1];

      const cardBodyHtml = ` <div
                class="flex justify-between items-start gap-2  p-4 rounded-lg mt-4 shadow-lg">
                <div class="">
                  <h2 class="text-[12px] font-semibold mb-1">${serviceName}</h2>
                  <p class="w-full text-[#5C5C5C] text-sm">${serviceNumber}</p>
                </div>
                <div class="text-[12px] ">${date}</div>
              </div>`;
      document.getElementById("card-body").innerHTML += cardBodyHtml;

      coin = coin - 20;
      document.getElementById("coin").innerText = coin;
    }
  });
}

callSectionFunctionality("call1", "service-name1", "service-number1");
callSectionFunctionality("call2", "service-name2", "service-number2");
callSectionFunctionality("call3", "service-name3", "service-number3");
callSectionFunctionality("call4", "service-name4", "service-number4");
callSectionFunctionality("call5", "service-name5", "service-number5");
callSectionFunctionality("call6", "service-name6", "service-number6");
callSectionFunctionality("call7", "service-name7", "service-number7");
callSectionFunctionality("call8", "service-name8", "service-number8");
callSectionFunctionality("call9", "service-name9", "service-number9");

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("card-body").innerHTML = "";
});

function copySectionFunctionality(btnId, numberId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const number = getInnerText(numberId);
    const input = document.createElement("input");
    input.value = number;

    console.log(document.body.appendChild(input));
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    alert(`copied ${number} to clipboard`);
  });
}

copySectionFunctionality("copy-btn1", "service-number1");
copySectionFunctionality("copy-btn2", "service-number2");
copySectionFunctionality("copy-btn3", "service-number3");
copySectionFunctionality("copy-btn4", "service-number4");
copySectionFunctionality("copy-btn5", "service-number5");
copySectionFunctionality("copy-btn6", "service-number6");
copySectionFunctionality("copy-btn7", "service-number7");
copySectionFunctionality("copy-btn8", "service-number8");
copySectionFunctionality("copy-btn9", "service-number9");
