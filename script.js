if ($(".navnavnav").length == 1) {
            
  var typed_strings = 
      $(".text-slider-items").text();

  var typed = new Typed(".navnavnav", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      loop: true,
      backDelay: 100,
      backSpeed: 100,
  });
}

window.onscroll = function () {
let topButton = document.querySelector(".top");
if (
document.body.scrollTop > 100 ||
document.documentElement.scrollTop > 100
) {
topButton.style.display = "block";
} else {
topButton.style.display = "none";
}
};