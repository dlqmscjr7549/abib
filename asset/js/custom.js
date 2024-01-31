$(function(){
    //메뉴 호버시 맞는 상세메뉴 보이게끔
    $('.menu_bar .tab1').hover(function(){
        let result = $(this).find('.title').attr('data-show'); 
        //let=변수(아무것도없는걸 만듬) {this=이벤트가 될 아이 .find(찾아야 할 대상).attr(추출할 값)} 대괄호를 변수에 넣는다
        $(`#${result}`).addClass('on');
        //#변수에 show클래스를 삽입한다
    },function(){
        //호버가 끝날시
        let result1 = $(this).find('.title').attr('data-show');
        $(`#${result1}`).removeClass('on');
    });
   //추천 제품 호버시 상세정보 나오게끔
    $('.pro_item').hover(function(){
        $(this).toggleClass('on')
    })
    //사진 물결
    $('.v1').ripples({
        resolution: 512,//해상도
        dropRadius: 20, //물방울 반지름 
        perturbance: 0.04, //물결의 굴곡
    });
    //스크롤 시 백그라운드 이미지 크게
    $(window).scroll(function(){
        const scrollY = $(window).scrollTop();
        const bgScale = 200 + (scrollY);

        $('.sc_brandstory').css({
            backgroundSize : bgScale
        });
    });
    var swiper = new Swiper(".slider", {
        loop: true,
        autoplay: {
            elay: 2000,
            disableOnInteraction: false,
        },
    });
    // 베스트제품 슬라이드
    var swiper1 = new Swiper(".best_slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
