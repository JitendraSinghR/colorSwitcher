const box = document.querySelectorAll(".box");
const body = document.querySelector(".container");

box.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "green";
    }
  });
});
