// slider
$(document).ready(function(){
    $('.customer-logos').slick({
        // Number of Slide To Show
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<i class="slick-prev fas fa-arrow-left"></i>',
        nextArrow: '<i class="slick-next fas fa-arrow-right"></i>',
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2.5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1.5
            }
        }]
    });
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggle('.show-menu');
    });
});
//navbar
