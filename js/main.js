$(function(){
    $('.banner-section__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/guitars/lar.svg" alt=""></button>',
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/guitars/rar.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 969,
              settings: {

                arrows: false
              }
            }
          ]
    });

    //Active Page
  $('.js-menu [href]').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('active-select');
    }
  });

    $('.tab').click( function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').click(function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.menu__btn').click(function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
        $('.menu-mobile__overlay').toggleClass('overlay-close');
    });
    
    $('.js-btnclose').click(function(){
      $('.menu-mobile__list').removeClass('menu-mobile__list--active');
      $('.menu-mobile__overlay').removeClass('overlay-close');
    });

    $('.menu-mobile__overlay').click(function(){
      $('.menu-mobile__overlay').removeClass('overlay-close');
      $('.menu-mobile__list').removeClass('menu-mobile__list--active');
    });

    $('.footer__topdrop').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
    });

    $('.aside__btn').click(function(){
      $(this).next().slideToggle();

  });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/guitars/larrow-black.svg" alt=""></button>',
        nextArrow:'<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/guitars/rarrow-black.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 1301,
              settings: {
                  arrows: false,
                  dots: true,
              }
            },
            {
                breakpoint: 1201,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 3,
              }
            },
            {
                breakpoint: 870,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 2,
              }
            },
            {
                breakpoint: 590,
                settings: {
                  arrows: false,
                  dots: true,
                  slidesToShow: 1,
              }
            }
          ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').click(function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle("200");
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
    });

    $('.catalog__filter-btngrid').click(function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper-list');
    });

    $('.catalog__filter-btnline').click(function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper-list');
    });

    $('.rate-yo').rateYo({
        ratedFill: '#dcac62',
        normalFill: '#c4c4c4',
        spacing: '7px'
      });




});