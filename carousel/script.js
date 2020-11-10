$(function() {
    $('.simple-carousel').slick();
    $('.thumb-item-carousel').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.thumb-item-carousel-nav'
    });
    $('.thumb-item-carousel-nav').slick({
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         asNavFor: '.thumb-item-carousel',
         focusOnSelect: true,
    });
    $('.center-item-carousel').slick({
          infinite: true,
        //   dots:true,
          slidesToShow: 1,
          centerMode: true, //要素を中央寄せ
          centerPadding:'100px', //両サイドの見えている部分のサイズ
          autoplay:true,
          responsive: [{
               breakpoint: 480,
                    settings: {
                         centerMode: false,
               }
          }]
     });
});
