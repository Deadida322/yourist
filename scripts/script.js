$(document).ready(function() {
    $('#inside_comment').lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: -10,
        loop: true,
        pager: true,
        controls: true,
        speed: 1000, //ms'
        auto: true,
        pause: 4000,
    });
    $('.sale_button').on('click', ()=>{
        $('.modal').addClass('z');
        setTimeout(()=>{
            $('.modal').addClass('modal_show');
        }, 4);
        
    });
    $('.krest').on('click', ()=>{
        $('.modal').removeClass('modal_show');
        setTimeout(()=>{
            $('.modal').removeClass('z');
        }, 4);
        
    });
  });
