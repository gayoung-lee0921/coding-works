/*
const showBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".close-btn");
const text = document.querySelector(".text");
showBtn.addEventListener("click", function () {
  text.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  text.style.display = "none";
});
*/
$("p").css({ display: "none" });
$(".show-btn").click(function () {
  $("p").css({ display: "block" });
});
$(".close-btn").click(function () {
  $("p").css({ display: "none" });
});
