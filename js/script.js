// year
document.querySelector(".year").innerHTML = new Date().getFullYear();

// wow js initialization
new WOW().init();

var swiper = new Swiper(".writer-slider", {
  pagination: ".swiper-pagination",
  autoplay: true,
  autoplaySpeed: 3000,
  slidesPerView: 2,
  speed: 1000,
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var testSwiper = new Swiper(".testimonial-slider", {
  loop: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
});

var swiper = new Swiper(".blog-slider", {
  pagination: ".swiper-pagination",
  autoplay: true,
  autoplaySpeed: 3000,
  slidesPerView: 3,
  speed: 1000,
  paginationClickable: true,
  loop: true,
  spaceBetween: 20,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      centeredSlides: true,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".blog-next",
    prevEl: ".blog-prev",
  },
});

$(function () {
  $(".hamburger").on("click", function () {
    $(".menu").toggleClass("active");
    $(this).toggleClass("active");
  });

  // custom tabs
  $(".tab-menu li a").on("click", function () {
    var target = $(this).attr("data-rel");
    $(".tab-menu li a").removeClass("active");
    $(this).addClass("active");
    $("#" + target)
      .fadeIn("slow")
      .siblings(".tab-box")
      .hide();
    return false;
  });

  $(".paper-tab li a").on("click", function () {
    var target = $(this).attr("data-rel");
    $(".paper-tab li a").removeClass("active");
    $(this).addClass("active");
    $("#" + target)
      .fadeIn("slow")
      .siblings(".tab-box")
      .hide();
    return false;
  });

  // select2 Initialized
  $(".theme-select").select2({
    placeholder: "Select an option",
    minimumResultsForSearch: -1,
  });

  // generating page
  let options = "";
  let pages;
  pages = 0;
  for (let i = 1; i <= 400; i++) {
    pages = pages + 275;
    if (i == 1) {
      options += `<option value="${i} Page / ${pages} words">${i} Page / ${pages} words</option>`;
    } else {
      options += `<option value="${i} Pages / ${pages} words">${i} Pages / ${pages} words</option>`;
    }
  }
  $(".loop-options").html(options);

  // form popup
  let heroFormButton = $(".hero-form-button");
  let heroButton = $(".hero-button");
  let popupClose = $(".popup-close");

  let formPopup = $(".form-popup");

  heroFormButton.on("click", function () {
    formPopup.toggleClass("active");
  });
  heroButton.on("click", function () {
    formPopup.toggleClass("active");
  });
  popupClose.on("click", function () {
    formPopup.toggleClass("active");
  });

  // confirm popup
  let nextPopupBtn = $(".step-2 .next-popup-button");
  let confirmForm = $(".form-popup .confirm-form");
  let stepForm = $(".form-popup .step-form");
  let edtBtn = $(".confirm-form .edit-button");

  nextPopupBtn.on("click", function () {
    stepForm.toggleClass("active");
    confirmForm.toggleClass("active");
  });

  edtBtn.on("click", function () {
    stepForm.toggleClass("active");
    confirmForm.toggleClass("active");
  });

  // file name update on upload
  $(".upload-file").on("change", function () {
    let prevLabel = $(this).prev(".file-name");
    let file = $(".upload-file")[0].files[0].name;

    prevLabel.html(file);

    $(".upload-wrapper").addClass("active");
    $(".file-name").addClass("active");
  });

  // telephone input
  $("#phone").intlTelInput({
    allowDropdown: true,
  });

  // login signup activator
  let loginPopup = $(".login-signup-popup");
  let loginTrigger = $(".login-trigger");
  let signupTrigger = $(".signup-trigger");
  let loginPopupClose = $(".login-signup-close");
  let forgotPass = $(".forgot-trigger");
  let resetTrigger = $(".reset-trigger");
  let changePass = $(".change-pass-trigger");

  let login = $(".right-forms.login");
  let signup = $(".right-forms.signup");

  loginPopupClose.on("click", function () {
    loginPopup.removeClass("active");
  });
  loginTrigger.on("click", function () {
    loginPopup.addClass("active");
    login.addClass("active").siblings().removeClass("active");
  });
  signupTrigger.on("click", function () {
    loginPopup.addClass("active");
    signup.addClass("active").siblings().removeClass("active");
  });
  forgotPass.on("click", function () {
    $(".forgot-password").addClass("active").siblings().removeClass("active");
  });
  resetTrigger.on("click", function () {
    $(".reset-link").addClass("active").siblings().removeClass("active");
  });
  changePass.on("click", function () {
    $(".change-password").addClass("active").siblings().removeClass("active");
  });

  // custom file input
  $(".theme-file-input").on("change", function () {
    let file = this.files[0].name;
    $(this).siblings().find(".upload-file-name").text(file);
  });

  // popup activator
  $(".popup-trigger").on("click", function () {
    $(".profile-created-popup").toggleClass("active");
  });
});

// step form functionality
let steps = Array.from(document.querySelectorAll("form .step"));
let nextBtn = document.querySelectorAll("form .next-button");
let prevBtn = document.querySelectorAll("form .previous-button");
let editBtn = document.querySelector("form .edit-button");

let form = document.querySelector("form");

let stepHeading1 = document.querySelectorAll(".step-heading")[0];
let stepHeading2 = document.querySelectorAll(".step-heading")[1];

nextBtn.forEach((button) => {
  button.addEventListener("click", function () {
    changeStep("next");
    stepHeading1.classList.add("complete");
    stepHeading1.querySelector(".step-count").innerHTML = '<i class="fa-regular fa-check"></i>';
    stepHeading2.classList.add("active");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", function () {
    changeStep("prev");
    stepHeading1.classList.remove("complete");
    stepHeading1.querySelector(".step-count").innerHTML = "1";
    stepHeading2.classList.remove("active");
  });
});
function changeStep(btn) {
  let index = 0;
  let active = document.querySelector(".form-active");

  index = steps.indexOf(active);
  steps[index].classList.remove("form-active");

  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }

  steps[index].classList.add("form-active");
}

// login form fuctionality

let loginStep = Array.from(document.querySelectorAll(".login-step"));
let nextStep = document.querySelectorAll(".next-step");

let stepHead = Array.from(document.querySelectorAll(".login-step-section .step-heading"));

nextStep.forEach((nextBtn) => {
  nextBtn.addEventListener("click", function () {
    nextStepFunc("next");
    stepActivator("next");
  });
});

function stepActivator(next) {

    let index = 0;
    let active = document.querySelector(".login-step-section .active");

    index = stepHead.indexOf(active);

    stepHead[index].classList.add("complete");
    stepHead[index].classList.remove("active");
    stepHead[index].firstElementChild.innerHTML = '<i class="fa-regular fa-check"></i>';

    if(next === "next") {
        index ++;
    } else {
        index --;
    }

    stepHead[index].classList.add("active");
}

function nextStepFunc(btn) {
  let index = 0;
  let active = document.querySelector(".d-block");

  index = loginStep.indexOf(active);
  loginStep[index].classList.remove("d-block");

  if (btn === "next") {
    index++;
  } else {
    index--;
  }

  loginStep[index].classList.add("d-block");
}

$(document).ready(function(){
    $('#datepicker').datepicker();
});

