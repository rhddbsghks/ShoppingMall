function loadItems() {
  return fetch("data/data.json")
    .then((js) => js.json())
    .then((result) => result.items);
}

function displayItems(items) {
  let arr;
  let inner = document.querySelector(".items");

  arr = items
    .map((data) => {
      return `<li class="item">
    <img src="${data.img}" alt="${data.type}" class="item_thumb" />
    <span class="item_description">${data.sex}, ${data.size}</span>
  </li>`;
    })
    .join("");

  inner.innerHTML = arr;
}

function onBtnClik(event, items) {
  const dataset = event.target.dataset;
  if (dataset.key == null || dataset.value == null) return;

  displayItems(items.filter((item) => item[dataset.key] == dataset.value));
  console.log(items.filter((item) => item[dataset.key] == dataset.value));
}

function setEventListener(items) {
  const logo = document.querySelector("#logo");
  const buttons = document.querySelector(".buttons");

  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onBtnClik(event, items));
}

loadItems().then((items) => {
  displayItems(items);
  setEventListener(items);
});
