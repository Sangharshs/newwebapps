$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scroll > 500) {
            $('.sroll-up-btn').addClass("show");
        }
        else {
            $('.sroll-up-btn').removeClass("show");
        }
    });
    //slide up script
    $('.sroll-up-btn').click(function () {
        $('html').animate({ screenTop: 0 });
    });
    /* Typing Animation */
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Android Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // menu button script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }

        }
    });
});