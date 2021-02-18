
let sec = 11;
let min = 32
$(document).ready(function() {
    $('#inside_comment').lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
        loop: true,
        pager: true,
        controls: false,
        speed: 1000, //ms'
        auto: true,
        pause: 4000,
    });
    $('.sale_button').on('click', ()=>{
        $('.modal').addClass('z');
        setTimeout(()=>{
            $('.modal').addClass('modal_show');
        }, 10); 
    });
    $('.krest').on('click', ()=>{
        $('.modal').removeClass('modal_show');
        setTimeout(()=>{
            $('.modal').removeClass('z');
        }, 10);
    });
    setInterval(()=>{
        sec--;
        thats = '&nbsp'+sec;

        if(sec == 1){
            sec = 60;
            min--;
            thatsm = '&nbsp'+min+':';
            $('.m_digit').html(thatsm);
        }
        $('.s_digit').html(thats);
    }, 1000);
    $('.gamb').click(function(){
        $('.menu').toggleClass('menu-active');
    });
    $('.menu a').click(function() {

        $('.menu').removeClass('menu-active');
    
    });
    $('.kr').click(function() {
        $('.menu').removeClass('menu-active');
    });
  });
