const now = new Date();

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var day = days[now.getDay()];
var month = months[now.getMonth()];
const weekday = now.getDay();
const year = now.getFullYear();

document.querySelector(".weekday").innerHTML = day;
document.querySelector(".day").innerHTML = weekday;
document.querySelector(".month").innerHTML = month;
document.querySelector(".year").innerHTML = year;

// Footer Modification
const footer_mod = document.querySelector(".footer__modification");

footer_mod.innerHTML = document.lastModified;

// Header Hamburger Menu
function hamburger() {
  const list_container = document.getElementById("header__lists__container");
  if (list_container.className === "open") {
    list_container.className += " responsive";
    list_container.style.padding = 0;
  } else {
    list_container.className = "open";
    list_container.style.padding = "15px";
  }
}

// Display Banner if Monday or Tuesday

const today = new Date();
console.log(today.getDay());

function alertFunction() {
  if (today.getDay() === 1 || today.getDay() === 2) {
    alert(
      "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    );
  }
}

window.addEventListener("load", alertFunction);

// Lazy Loading
let imagesToLoad = document.querySelectorAll("img[data-src");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

imagesToLoad.forEach((img) => {
  loadImages(img);
});

function gridView() {
  console.log("gridView");
}

function listView() {
  console.log("listView");
}
