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

// ------ //

var tabs = document.getElementsByClassName("tab");

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
      tabContent.style.height = "50px";
      arrowIcon.style.transform = "rotate(0deg)";
      tabContent.classList.remove("expanded");
    }
  });
}

var tabs2 = document.getElementsByClassName("tab-barname");

for (var i = 0; i < tabs2.length; i++) {
  tabs2[i].addEventListener("click", function (event) {
    event.preventDefault();
    var tabContent = this;
    var arrowIcon = this.querySelector("i");
    var isExpanded = tabContent.classList.contains("expanded");

    if (!isExpanded) {
      tabContent.style.height = "auto";
      arrowIcon.style.transform = "rotate(180deg)";
      tabContent.classList.add("expanded");
      this.style.backgroundColor = "#fff";
    } else {
      tabContent.style.height = "70px";
      arrowIcon.style.transform = "rotate(0deg)";
      tabContent.classList.remove("expanded");
      this.style.backgroundColor = "#f5f5f5";
    }
  });
}

var tabs3 = document.getElementsByClassName("soalat-motedavel");

for (var i = 0; i < tabs3.length; i++) {
  tabs3[i].addEventListener("click", function (event) {
    event.preventDefault();
    var tabContent = this;
    var arrowIcon = this.querySelector("i");
    var isExpanded = tabContent.classList.contains("expanded");
    var h6hover = this.querySelector(".h6_hover");

    if (!isExpanded) {
      tabContent.style.height = "auto";
      arrowIcon.style.transform = "rotate(180deg)";
      tabContent.classList.add("expanded");
      this.style.backgroundColor = "#fff";
      h6hover.style.color = "#219c90";
    } else {
      tabContent.style.height = "60px";
      arrowIcon.style.transform = "rotate(0deg)";
      tabContent.classList.remove("expanded");
      this.style.backgroundColor = "#f5f5f5";
      h6hover.style.color = "#000";
    }
  });
}

// -----//
document
  .getElementById("moror-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "flex";
    document.querySelector(".barname-tahsili").style.display = "none";
    document.querySelector(".modares").style.display = "none";
    document.querySelector(".soalat-motedavels").style.display = "none";
  });

document
  .getElementById("barname-tahsili-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "none";
    document.querySelector(".barname-tahsili").style.display = "flex";
    document.querySelector(".modares").style.display = "none";
    document.querySelector(".soalat-motedavels").style.display = "none";
  });

document
  .getElementById("modares-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "none";
    document.querySelector(".barname-tahsili").style.display = "none";
    document.querySelector(".modares").style.display = "flex";
    document.querySelector(".soalat-motedavels").style.display = "none";
  });

document
  .getElementById("soalat-motedavel-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "none";
    document.querySelector(".barname-tahsili").style.display = "none";
    document.querySelector(".modares").style.display = "none";
    document.querySelector(".soalat-motedavels").style.display = "flex";
  });
