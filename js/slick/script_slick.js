$(document).ready(function() {
    $('.reviews__body').slick({
        arrows: true,
        slidesToShow: 3,
        variableWidth: false,
        speed: 600,
        responsive: [
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
    $('.partners__body').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    })
})