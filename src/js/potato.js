$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        margin:200,
        nav: true,
        loop:true,
        navContainerClass: 'switch-btns',
        navClass: ['switch-btn prev', 'switch-btn next'],
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav:true
            },
            768:{
                items:3,
                nav:false
            }
        }
    });

    $('.toggle-btn').click(function() {
        $('.nav-collapse').fadeToggle();
    });
});