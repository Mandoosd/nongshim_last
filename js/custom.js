$(function () {
  var swiper = new Swiper(".main_slide_wrap", {
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".grid_tab .tit .right .tab_tit li a").on("click", function (e) {
    // 1. a를 클릭했을 떄 새로고침 되지않게 하기
    e.preventDefault();
    // 2. 번호를 받아오기
    let idx = $(this).parent().index();
    // 3. 번호에 부합하는 .tab_con>li를 보야주기
    $(".grid_tab .grid_tab_wrap").removeClass("on");
    $(".grid_tab .grid_tab_wrap").eq(idx).addClass("on");

    //4. 메뉴에 스타일 붙이기
    $(".grid_tab .tit .right .tab_tit li a").removeClass("on");
    $(".grid_tab .tit .right .tab_tit li a").eq(idx).addClass("on");
  });

  var swiper = new Swiper(".banner_slide", {
    centeredSlides: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".ramen_wrap", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

      800: {
        centeredSlides: true,

        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        centeredSlides: true,

        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  $('.tab_menu button').on('click', function () {
    $('.tab_ul').toggleClass('on');
    $(this).toggleClass('on');
  });
});
