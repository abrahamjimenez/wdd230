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
  } else {
    list_container.className = "open";
  }
}
