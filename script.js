//Delete Items
const deleteItems = document.querySelectorAll(".remove-item");

deleteItems.forEach(function (button) {
  button.addEventListener("click", function () {
    const confirmDelete = confirm("Are you zure?");
    if (confirmDelete === true) {
      button.parentNode.remove();
    } else alert("Item  has not been removed.");
  });
});

//Delete All
const deleteAllItems = document.getElementById("clear");
const list = document.querySelector("ul");

deleteAllItems.addEventListener("click", function () {
  list.innerHTML = "";
});

//Filter
const filterItems = document.getElementById("filter");
const list2 = document.getElementById("item-list");
const items = list2.getElementsByTagName("li");

filterItems.addEventListener("input", function () {
  const filterText = filterItems.value.toLocaleLowerCase();
  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].textContent.toLocaleLowerCase();
    if (itemText.includes(filterText)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});

//Add Items
const addItems = document.getElementById("item-input");
const addButton = document.getElementById("button-add");

addButton.addEventListener("click", function () {
  const li = document.createElement("li");
  li.className = "listUpdate btn-link";
  li.appendChild(document.createTextNode(addItems.value));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
  addItems.value = "";

  // delete on adding items
  const deleteItems = document.querySelectorAll(".remove-item");
  deleteItems.forEach(function (button) {
    button.addEventListener("click", function () {
      // const confirmDelete = confirm("Are you zure?");
      // if (confirmDelete === true) {
      button.parentNode.remove();
      // } else alert("Item  has not been removed.");
    });
  });
});

//Update Items
// // const updateItems = document.getElementById(".listUpdate");
// // const updateButton = document.getElementById("button-add");

// // updateItems.forEach(function (li) {
// //   li.addEventListener("click", function () {
// //     updateButton.textContent = "Update Item";
// //   });
// // });

// const listItems = document.querySelectorAll("#item-list li");

// listItems.forEach((item) => {});
// item.addEventListener("click", (event) => {
//   const addButton = document.querySelector(".btn");
//   addButton.textContent = "Update Item";
// });
