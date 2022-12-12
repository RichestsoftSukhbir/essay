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
    // header top
    // let header = document.querySelector(".header").clientHeight;
    // let menu = document.querySelector(".menu");

    // $(document).on("resize", function() {
    //     menu.style.top = header + "px !important";
    // });

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
            label.text($(this).text());
        });
    });

    // generating page 
    let options = '';
    let pages;
    pages = 0;
    for (let i = 1; i <= 400; i++) {
        pages = pages + 275;
        if ( i == 1) {
            options += "<li>" + i + " Page / " + pages + " words" + "</li>";
        } else {
            options += "<li>" + i + " Pages / " + pages + " words" + "</li>";
        }
    }
    $('.loop-options').html(options);
});
