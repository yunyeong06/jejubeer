$(function(){
    var swiper = new Swiper(".visual_area", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".visu_small_wrap", {
        slidesPerView: 6,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});