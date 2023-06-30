const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let number = 1;

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = number;
  ul.appendChild(li);
  number += 2;
});
