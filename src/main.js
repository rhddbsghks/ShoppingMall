function loadItems() {
  return fetch("data/data.json")
    .then((js) => js.json())
    .then((result) => result.items);
}

function displayItems(parm) {
  console.log(parm);

  let arr;
  let inner = document.querySelector(".items");

  arr = parm.map((data) => {
    return `<li class="item">
    <img src="${data.img}" alt="${data.type}" class="item_thumb" />
    <span class="item_description">${data.sex}, ${data.size}</span>
  </li>`;
  });

  arr = arr.join("");
  inner.innerHTML = arr;
}

loadItems().then((items) => {
  displayItems(items);
  // setEventListener(items);
});
