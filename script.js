function printdate() {
  var start = new Date("March 13, 2020"),
    end = new Date(),
    diff = 0,
    days = 1000 * 60 * 60 * 24;

  diff = end - start;

  const numberofdays = Math.floor(diff / days) + " days ";

  document.getElementById("count").innerHTML = numberofdays;
}
printdate();

hamburgerMenu = function () {
  const menu = document.getElementById("list");
  const close = document.getElementById("toggle");

  function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
      close.checked = false;
    }
  }
  menu.addEventListener("click", handleMenuClick);
};
hamburgerMenu();
