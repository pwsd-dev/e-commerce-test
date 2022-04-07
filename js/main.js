const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq(".slider-mob").slick({
    // mobileFirst: true,
    variableWidth: true,
    centerMode: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    infinite: true,
    speed: 1800,
    adaptiveHeight: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: "ease",
    draggable: true,
    // swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector("#prevArrow"),
    nextArrow: document.querySelector("#nextArrow"),
    focusOnSelect: true,
  });
});

$jq(document).ready(function () {
  $jq(".slider-desk").slick({
    // mobileFirst: true,
    slidesToShow: 4,
    variableWidth: true,
    centerMode: false,
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 1800,
    adaptiveHeight: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    easing: "ease",
    draggable: true,
    // swipe: true,
    touchTreshold: 20,
    touchMove: false,
    prevArrow: document.querySelector("#prevArrow-2"),
    nextArrow: document.querySelector("#nextArrow-2"),
  });
});

function openBlock() {
  const burgerBtn = document.getElementById("burgerBtn");
  const otherId = document.getElementById("other");
  burgerBtn.classList.toggle("active");

  otherId.classList.toggle("hidden");
  otherId.querySelector(".inner").classList.toggle("active");
}

$jq(document).ready(function () {
  $jq("#burgerBtn").click(function () {
    if ($jq("#other").hasClass("active")) {
      $jq("#other").fadeOut();
      $jq("body").removeClass("modal-open");
      $jq("#other").toggleClass("active");
    } else {
      $jq("#other").fadeIn();
      $jq("body").addClass("modal-open");
      $jq("#other").toggleClass("active");
    }
  });
});

let accordions = document.querySelectorAll(".accordion");
accordions.forEach((element) => {
  element.querySelector(".accordion__header").addEventListener("click", () => {
    toggleAccordion(element);
  });
});

function toggleAccordion(element) {
  let isActive = element.classList.contains("active");
  if (document.querySelectorAll(".accordion.active").length > 0) {
    document.querySelector(".accordion.active .accordion__body").style.width =
      document.querySelector(".accordion.active .accordion__header")
        .offsetWidth + "px";
    document.querySelector(".accordion.active .accordion__body").style.height =
      document.querySelector(".accordion.active .accordion__header")
        .offsetHeight + "px";
    document.querySelector(".accordion.active").classList.remove("active");
  }
  if (isActive) {
    element.querySelector(".accordion__body").style.width =
      element.querySelector(".accordion__header").offsetWidth + "px";
    element.querySelector(".accordion__body").style.height =
      element.querySelector(".accordion__header").offsetHeight * 0.5 + "px";
    element.classList.remove("active");
  } else {
    element.querySelector(".accordion__body").style.width =
      element.querySelector(".accordion__inner").offsetWidth + "px";
    element.querySelector(".accordion__body").style.height =
      element.querySelector(".accordion__inner").offsetHeight + "px";
    element.classList.add("active");
  }
}
