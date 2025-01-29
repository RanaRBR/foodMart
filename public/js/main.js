// click

let coeurRouge = document.querySelectorAll(".coeur"); // HTML Collection => on ne peut pas boucler les htmlCollections

coeurRouge.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("cora");
  });
});

// darkmode

let mode = document.querySelector("body");
let dark = document.querySelector("#boutonDark");

dark.addEventListener("click", function () {
  if (mode.className === "lightMode") {
    mode.className = "darkMode";
  } else {
    mode.className = "lightMode";
  }
});


// modal

let modal = document.querySelector(".popUpBg");
let btnModal = document.querySelector("#bout1");
let close = document.querySelector(".close");

btnModal.addEventListener("click", function () {
  modal.classList.add("modalAction");
});

close.addEventListener("click", function () {
  modal.classList.remove("modalAction");
});
