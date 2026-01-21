const form = document.querySelector("form", function () {});
const data = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  data.forEach(function (input) {
    if (input.value !== "") {
      console.log(input.value);
      input.value = "";
    }
  });
});
