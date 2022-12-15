// year
document.querySelector(".year").innerHTML = new Date().getFullYear();

var swiper = new Swiper('.writer-slider', {
    pagination: '.swiper-pagination',
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
            spaceBetween: 30
        },
    },
});

var testSwiper = new Swiper('.testimonial-slider', {
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.testimonial-next',
        prevEl: '.testimonial-prev',
    }
});

$(function () {

    $(".hamburger").on("click", function () {
        $(".menu").toggleClass("active");
        $(this).toggleClass("active");
    });

    // custom tabs
    $('.tab-menu li a').on('click', function () {
        var target = $(this).attr('data-rel');
        $('.tab-menu li a').removeClass('active');
        $(this).addClass('active');
        $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
        return false;
    });

    $('.paper-tab li a').on('click', function () {
        var target = $(this).attr('data-rel');
        $('.paper-tab li a').removeClass('active');
        $(this).addClass('active');
        $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
        return false;
    });

    $('.theme-select').each(function () {
        let label = $(this).find('label');
        let dropdown = $(this).find('.select-options');

        $(this).on('click', function () {
            $('.theme-select').not(this).removeClass('active');
            $(this).toggleClass('active');
        });

        dropdown.on('click', 'li', function () {
            label.html($(this).html());
        });
    });

    // generating page 
    let options = '';
    let pages;
    pages = 0;
    for (let i = 1; i <= 400; i++) {
        pages = pages + 275;
        if (i == 1) {
            options += "<li>" + i + " Page / " + pages + " words" + "</li>";
        } else {
            options += "<li>" + i + " Pages / " + pages + " words" + "</li>";
        }
    }
    $('.loop-options').html(options);

    // form popup
    let heroFormButton = $(".hero-form-button");
    let heroButton = $(".hero-button");
    let popupClose = $(".popup-close");

    let formPopup = $(".form-popup");

    heroFormButton.on('click', function () {
        formPopup.toggleClass("active");
    });
    heroButton.on('click', function () {
        formPopup.toggleClass("active");
    });
    popupClose.on('click', function () {
        formPopup.toggleClass("active");
    });

    // confirm popup
    let nextPopupBtn = $('.step-2 .next-popup-button');
    let confirmForm = $('.form-popup .confirm-form');
    let stepForm = $('.form-popup .step-form');

    nextPopupBtn.on('click', function () {
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

    // console.log(loginPopupClose, signupTrigger, loginTrigger, loginPopup);

    loginPopupClose.on("click", function() {
        loginPopup.removeClass("active");
    });
    loginTrigger.on("click", function() {
        loginPopup.addClass("active");
        login.addClass("active").siblings().removeClass("active");
    });
    signupTrigger.on("click", function() {
        loginPopup.addClass("active");
        signup.addClass("active").siblings().removeClass("active");
    });
    forgotPass.on("click", function() {
        $(".forgot-password").addClass("active").siblings().removeClass("active");
    });
    resetTrigger.on("click", function(){
        $(".reset-link").addClass("active").siblings().removeClass("active");
    });
    changePass.on("click", function(){
        $(".change-password").addClass("active").siblings().removeClass("active");
    });
});

// step form functionality
let steps = Array.from(document.querySelectorAll("form .step"));
let nextBtn = document.querySelectorAll("form .next-button");
let prevBtn = document.querySelectorAll("form .previous-button");

let form = document.querySelector("form");

let stepHeading1 = document.querySelectorAll(".step-heading")[0];
let stepHeading2 = document.querySelectorAll(".step-heading")[1];

nextBtn.forEach((button) => {
    button.addEventListener("click", function () {
        changeStep("next");
        stepHeading1.classList.add('complete');
        stepHeading1.querySelector('.step-count').innerHTML = '<i class="fa-regular fa-check"></i>'
        stepHeading2.classList.add('active');
    })
});
prevBtn.forEach((button) => {
    button.addEventListener("click", function () {
        changeStep("prev");
        stepHeading1.classList.remove('complete');
        stepHeading1.querySelector('.step-count').innerHTML = '1'
        stepHeading2.classList.remove('active');
    })
});
function changeStep(btn) {
    let index = 0;
    let active = document.querySelector('.form-active');

    index = steps.indexOf(active);
    steps[index].classList.remove("form-active");

    if (btn === "next") {
        index++;
    } else if (btn === "prev") {
        index--;
    }

    steps[index].classList.add("form-active");
}
