# 에이스침대
SCSS 사용을 위해 만든 사이트입니다.<br>
에이스침대 컨텐츠만을 가져온 리뉴얼 사이트입니다.

## Link
* https://gayoung914.github.io/sass_site_ace_bed/
* subpapge
  - https://gayoung914.github.io/sass_site_ace_bed/company/introduce.html
  - https://gayoung914.github.io/sass_site_ace_bed/company/ci.html
  - https://gayoung914.github.io/sass_site_ace_bed/product/product.html
  - https://gayoung914.github.io/sass_site_ace_bed/gallery/gallery.html
  - https://gayoung914.github.io/sass_site_ace_bed/location/location.html

## Tool
* HTML5
* CSS3
* SCSS
* Jquery
* swiper Plugin

## Skill
* Main Contents Interaction in Gallery<br>
  - **Gallery1**<br>
    👉 on click method를 사용하여 thumbnail 이미지로 작동하는 스크립트를 구현해보았습니다.
```
  $("#navi a").on("click", function () {
    let imgSrc = $(this).attr("href");
    // let mainImg = $("#main img");
    $("#main img").before("<img src='" + imgSrc + "' alt='thumb'>");
```
* Main Contents Interaction in Gallery<br>
  - **Gallery2**<br>
    👉 is function을 이용하여 img가 animation이 진행중인지 판단하여 true / false로 반환, gallery를 사용하는 데 더욱 편하도록 구현해보았습니다.
```
    if ($("#main img").is(":animated")) {
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
```
* Main Contents Interaction in Gallery<br>
  - **Gallery3**<br>
    👉 prev,next 버튼으로 작동하는 스크립트입니다. .page_wrap은 스와이퍼에 들어있는 img 전체를 감싸는 엘리먼트이고, 총 너비 600px이며, marginleft: -300px;로 반을 숨겨놓은 상태입니다. next버튼을 클릭하였을 때 animate function을 사용하여 움직이도록하였고, marginleft의 값이 -300이 되었을 때 prev 버튼을 숨기도록 구현을 해보았습니다. prev 버튼도 next버튼과 마찬가지로 같은 스크립트 방식으로 구현해보았습니다.
```
 let marginLeftPw;
 const marginNumber = 300;

  $("img.next").click(function () {
    marginLeftPw = $("#navi .page_wrap").css("margin-left");
    $("#navi .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) - marginNumber }, "fast", function () {
      // next 버튼을 click 후 animation이 끝난 후 실행 영역
      marginLeftPw = $("#navi .page_wrap").css("margin-left");
      $("img.prev").css("display", "inline-block");
      if (parseInt(marginLeftPw) == -300) {
        $("img.next").css("display", "none");
      }
    });
  });
```

## License
* COPYRIGHT (C) ACE BED CORPORATION ALL RIGHTS RESERVED

