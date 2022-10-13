const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listButton = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = input.value;
  listItem.appendChild(listButton);
  listButton.textContent = "❌";

  list.appendChild(listItem);

  input.value = "";

  listButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
