$(function () {
  /*script 영역 slide gallery 예*/
  let marginLeftPw;
  $("img.next").css("display", "none"); //초기실행 시 next 버튼 삭제
  console.log($("#navi .page_wrap").css("margin-left"));
  console.log(parseInt($("#navi .page_wrap").css("margin-left")));

  // thumb nail 이미지로 작동하는 스크립트 구현
  $("#navi a").on("click", function () {
    let imgSrc = $(this).attr("href");
    // let mainImg = $("#main img");
    /*string 을 자르는 method를 활용하여 alt 의 값을 추가하시오*/
    $("#main img").before("<img src='" + imgSrc + "' alt='thumb'>");

    if ($("#main img").is(":animated")) {
      //img가 animation이 진행중인지 판단하여 true / false로 반환한다.
      $("#main img").stop(); //기존 작동중인 animation을 중지한다.
      $("#main img").remove(); //img를 모두 삭제
      $("#main").prepend("<img src='" + imgSrc + "' alt=''>"); //클릭이 animation 작동시간보다 빠르게 실행했을 경우 animate를 작동하지 않고 직접 이미지를 변경 시킨다.
    } else {
      $("#main img:last").animate({ opacity: 0 }, 500, function () {
        $(this).remove();
      });
    }
    return false;
  });

  // prev,next 버튼으로 작동하는 스크립트 상수

  // 과제>> 함수로 코드 줄이기, click메서드는 한개만, if조건문으로 prev랑 next 구분
  const marginNumber = 300;

  $("img.next").click(function () {
    marginLeftPw = $("#navi .page_wrap").css("margin-left");
    $("#navi .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) - marginNumber }, "fast", function () {
      // next 버튼을 click 후 animation이 끝난 후 실행 영역
      marginLeftPw = $("#navi .page_wrap").css("margin-left");
      $("img.prev").css("display", "inline-block");
      if (parseInt(marginLeftPw) == -300) {
        // 3번째 페이지 노출 될때
        $("img.next").css("display", "none");
      }
    });
    // console.log(marginLeftPw)
  });

  $("img.prev").click(function () {
    marginLeftPw = $("#navi .page_wrap").css("margin-left");
    $("#navi .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) + marginNumber }, "fast", function () {
      // next 버튼을 click 후 animation이 끝난 후 실행 영역
      marginLeftPw = $("#navi .page_wrap").css("margin-left");
      $("img.next").css("display", "inline-block");
      if (parseInt(marginLeftPw) == 0) {
        // 3번째 페이지 노출 될때
        $("img.prev").css("display", "none");
      }
    });
  });

  $(".swiper_wrap").each(function () {
    let thisWrap = $(this); //현재 .wrap을 가져오기
    let itemsNum = $(this).find(".swiper_items"); // 현재 .wrap의 items 선택  $(".items",this);
    let itemsLeng = itemsNum.length; // 현재 .wrap의 자식요소인 items의 개수 가져오기
    itemsNum
      .mouseenter(function () {
        //.items에 마우스를 올렸을때
        let thisIndex = $(this).index();
        $(this).addClass("on");
        if (thisIndex == 0) {
          //첫번째 .items 마우스를 올렸을때
          thisWrap.css("margin-left", "0px");
        } else if (thisIndex == itemsLeng - 1) {
          //마지막 .items 마우스를 올렸을때
          thisWrap.css("margin-left", "-100px");
        } else {
          thisWrap.css("margin-left", "-50px");
        }
      })
      .mouseleave(function () {
        //.items에 마우스를 내렸을때
        itemsNum.removeClass("on");
        thisWrap.css("margin-left", "0px");
      });
  });

  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
}); //document ready
