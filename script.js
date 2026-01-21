let box = document.querySelector("#box");

window.addEventListener("mousemove", function (e) {
  console.log(e.clientX, e.clientY);
  box.style.left = e.clientX + "px";
  box.style.top = e.clientY + "px";
});
