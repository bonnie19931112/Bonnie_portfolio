$("#banner").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500
});

$("#works").slick({
    slidesToShow:3,
    slidesToScroll:2,

    responsive: [
         // tablet
        // under 1025 size what will do is...?
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },

        // phone
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]


});