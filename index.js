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
  const serviceName = getInnerText("service-name1");
  const serviceNumber = getInnerText("service-number1");
  const message = `You are Calling ${serviceName} at ${serviceNumber}`;
  alert(message);
});
