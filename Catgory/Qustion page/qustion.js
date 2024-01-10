// swipper //

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var tabs = document.getElementsByClassName("qustion");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    event.preventDefault();
    var tabContent = this;
    var arrowIcon = this.querySelector("i");
    var isExpanded = tabContent.classList.contains("expanded");

    if (!isExpanded) {
      tabContent.style.height = "auto";
      arrowIcon.style.transform = "rotate(180deg)";
      tabContent.classList.add("expanded");
    } else {
      tabContent.style.height = "70px";
      arrowIcon.style.transform = "rotate(0deg)";
      tabContent.classList.remove("expanded");
    }
  });
}
