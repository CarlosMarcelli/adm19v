const $panelBtn = document.querySelector(".panel-btn"),
  $panel = document.querySelector(".panel"),
  $links = document.querySelectorAll(".menu a");

//console.log($links);

$panelBtn.addEventListener("click", (e) => {
  $panelBtn.classList.toggle("is-active");
  $panel.classList.toggle("is-active");
});

$links.forEach((el) => {
  el.addEventListener("click", (e) => {
    $panel.classList.remove("is-active");
    $panelBtn.classList.remove("is-active");
  });
});
