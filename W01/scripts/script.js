var today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const hour = today.getHours();
const minute = today.getMinutes();
const seconds = today.getSeconds();

var today = `${month}/${day}/${year} ${hour}:${minute}:${seconds}`;

document.querySelector(".date").innerHTML = today;
