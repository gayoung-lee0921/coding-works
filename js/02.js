// click
$(".show-btn").click(function () {
  $("div").show();
});
$(".hide-btn").click(function () {
  $("div").hide();
});

//mouseenter / mouseleave
$(".btn").mouseenter(function () {
  $("div").show();
});
$(".btn").mouseleave(function () {
  $("div").hide();
});
