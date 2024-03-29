"use strict";

const sec = 1000,
  min = sec * 60,
  hour = min * 60,
  day = hour * 24;

const end = new Date("Jan 04, 2023 12:00:00").getTime();

const int = setInterval(() => {
  const current = new Date().getTime();
  const remaining = end - current;
  document.getElementById("days").innerText = Math.floor(remaining / day);
  document.getElementById("hours").innerText = Math.floor(
    (remaining % day) / hour
  );
  document.getElementById("minutes").innerText = Math.floor(
    (remaining % hour) / min
  );
  document.getElementById("seconds").innerText = Math.floor(
    (remaining % min) / sec
  );
}, 1000);

if (remaining < 0) {
  document.querySelector("h1").innerText = "We Have Arrived!";
  document.querySelector("p").innerHTML =
    "The big day is finally here - view our <a href=https://www.website.com>website<a/> for more information.";
  const digit = document.querySelectorAll("span");
  digit.forEach((digit) => {
    digit.innerText = "0";
  });
  clearInterval(int);
}

/**
 * FAQ SCRIPT
 */

const questions = document.querySelectorAll(".faq__question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    let answer = question.nextElementSibling;
    if (answer.style.display === "block") {
      hideAnswer(question);
    } else {
      questions.forEach((question) => {
        hideAnswer(question);
      });
      displayAnswer(question);
    }
  });
});

function displayAnswer(target) {
  let answer = target.nextElementSibling;
  let arrowIcon = target.firstElementChild;
  answer.style.display = "block";
  arrowIcon.style.transform = "rotate(180deg)";
  target.style.fontWeight = "700";
}

function hideAnswer(target) {
  let answer = target.nextElementSibling;
  let arrowIcon = target.firstElementChild;
  answer.style.display = "none";
  arrowIcon.style.transform = "rotate(0deg)";
  target.style.fontWeight = "400";
}
