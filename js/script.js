var $mainWrap = $('#wrap');
var $paging = $('#pagination');
var $sign = $('#sign');
var $spread = $('#spreadBG');


$(function(){ // DOCUMENT READY...
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* start */
    $mainWrap.addClass('center active');



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* <img> 드래그 방지 */
    $('img').on('dragstart', function(event) {
        event.preventDefault();
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 터치 이벤트 콜백 */
    let initialX = null,
    initialY = null;

    function initTouch(e) {
        initialX = e.touches ? e.touches[0].clientX : e.clientX;
        initialY = e.touches ? e.touches[0].clientY : e.clientY;
    };

    function swipeDirection(e) {
        if (initialX !== null && initialY !== null) {
        const currentX = e.touches ? e.touches[0].clientX : e.clientX,
            currentY = e.touches ? e.touches[0].clientY : e.clientY;

        let diffX = initialX - currentX,
            diffY = initialY - currentY;

        Math.abs(diffX) > Math.abs(diffY)
        ? (
            0 < diffX
            ? toLeft()
            : toRight()

        )
        : (
            0 < diffY
            ? console.log("to top")
            : console.log("to bottom")
        )

        initialX = null;
        initialY = null;
        }
    }

    window.addEventListener("touchstart", initTouch);
    window.addEventListener("touchmove", swipeDirection);
    window.addEventListener("mousedown", function(e) {
        initTouch(e),
        window.addEventListener("mousemove", swipeDirection)
    });
    window.addEventListener("mouseup", function() {
        window.removeEventListener("mousemove", swipeDirection);
    });

    // 실행
    window.addEventListener("mousedown", function(e){
        0 === e.button && (
        initTouch(e),
        window.addEventListener("mousemove", swipeDirection)
        )
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    // 터치 이벤트 실행
    toRight = function() {
        // 오른쪽 방향으로 드래그
        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_shop').click();
        } else if ($mainWrap.hasClass('right')){
            AlignCenter();
        }
    }

    toLeft = function() {
        // 왼쪽 방향으로 드레그
        if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
            $sign.find('.btn_fa').click();
        } else if ($mainWrap.hasClass('left')){
            AlignCenter();
        }
    }



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 휠 이벤트 */
    $(document).on( 'DOMMouseScroll wheel', function ( event ) {
        if(event.originalEvent.deltaY > 0) {
            //wheel down
            console.log("wheel down");
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_fa').click();
            } else if ($mainWrap.hasClass('left')){
                AlignCenter();
            }
            return false;
        }
        if(event.originalEvent.deltaY < 0) {
            //wheel up
            console.log("wheel up");
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_shop').click();
            } else if ($mainWrap.hasClass('right')){
                AlignCenter();
            }
            return false;
        }
        return false;
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 키보드 방향키 이벤트 */
    window.onkeydown = function(){
        if(event.keyCode == 37){
            console.log('좌');
            //좌
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_shop').click();
            } else if ($mainWrap.hasClass('right')){
                AlignCenter();
            }
        } else if (event.keyCode == 38){
            //상
        } else if (event.keyCode == 39){
            console.log('우');
            //우
            if (!$mainWrap.hasClass('left') && !$mainWrap.hasClass('right')){
                $sign.find('.btn_fa').click();
            } else if ($mainWrap.hasClass('left')){
                AlignCenter();
            }
        } else if (event.keyCode == 40){
            //하
        }
    };



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 화면이동 버튼 이벤트 */ 
    var winW = $mainWrap.width();

    var spread = function() {
        var width = $spread.width();
        var center = Math.abs((width / 2 - winW / 2)) * -1;
        var right = ($spread.width() - winW) * -1;

        return {center : center, right : right}
    }

    // start
    $spread.css('left' , spread().center);
    $paging.find('.page2 i').css('width','100%');

    // shop 화면이동
    $sign.find('.btn_shop').on('click', function() {
        if( !$mainWrap.hasClass('pointerNone') ){
            $mainWrap.addClass('pointerNone').css('cursor','');

            if( $mainWrap.hasClass('center') ){
                console.log('shop move1');
                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : 0 }, 1600);

                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : '100%' }, 1600, function(){
                    $mainWrap.removeClass('pointerNone');
                });

                $spread.css({
                    'left' : 0,
                    'transition' : ''
                });
                $mainWrap.addClass('left').removeClass('right center');
            }
        }

        if ( $mainWrap.hasClass('right') ){
            $paging.find('.page2 i').css({
                'left' : 'auto',
                'right' : 0
            }).animate({ 'width' : '100%' }, 1300);

            $paging.find('.page3 i').css({
                'left' : 0,
                'right' : 'auto'
            }).animate({ 'width' : 0 }, 1300, function(){
                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : 0 }, 1200);

                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : '100%' }, 1200, function(){
                    $mainWrap.removeClass('pointerNone');
                });
            });

            $spread.css({
                'left' : 0,
                'transition' : ''
            });
            $mainWrap.addClass('left').removeClass('right center');
        }
    });

    // FA 화면이동
    $sign.find('.btn_fa').on('click', function () {
        if( !$mainWrap.hasClass('pointerNone') ){
            $mainWrap.addClass('pointerNone').css('cursor','');

            if( $mainWrap.hasClass('center') ){
                $paging.find('.page2 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : 0 }, 1600);

                $paging.find('.page3 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : '100%' }, 1600, function(){
                    $mainWrap.removeClass('pointerNone');
                });

                $spread.css({
                    'left' : spread().right,
                    'transition' : ''
                });
                $mainWrap.addClass('right').removeClass('left center');
            }

            if ( $mainWrap.hasClass('left') ){
                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : 0 }, 1300);

                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : '100%' }, 1300, function(){
                    $paging.find('.page2 i').css({
                        'left' : 'auto',
                        'right' : 0
                    }).animate({ 'width' : 0 }, 1200);

                    $paging.find('.page3 i').css({
                        'left' : 0,
                        'right' : 'auto'
                    }).animate({ 'width' : '100%' }, 1200, function(){
                        $mainWrap.removeClass('pointerNone');
                    });
                });

                $spread.css({
                    'left' : spread().right,
                    'transition' : ''
                });
                $mainWrap.addClass('right').removeClass('left center');
            }
        }
    });

    // 중앙(#sign)으로 이동
    AlignCenter = function(){
        if( !$mainWrap.hasClass('pointerNone') ){
            $mainWrap.addClass('pointerNone').css('cursor','');

            if($mainWrap.hasClass('left')){
                $paging.find('.page2 i').css({
                    'left' : 0,
                    'right' : 'auto'
                }).animate({ 'width' : '100%' }, 800);

                $paging.find('.page1 i').css({
                    'left' : 'auto',
                    'right' : 0,
                }).animate({ 'width' : 0 }, 800, function(){
                    $mainWrap.removeClass('pointerNone');
                });
            }

            if ($mainWrap.hasClass('right')){
                $paging.find('.page2 i').css({
                    'left' : 'auto',
                    'right' : 0
                }).animate({ 'width' : '100%' }, 800);

                $paging.find('.page3 i').css({
                    'left' : 0,
                    'right' : 'auto',
                }).animate({ 'width' : 0 }, 800, function(){
                    $mainWrap.removeClass('pointerNone');
                });
            }

            $spread.css({
                'left' : spread().center,
                'transition' : 'all 2s ease-in-out'
            });
            $mainWrap.addClass('center').removeClass('left right');
        }
    }

    // resize 적용시
    $(window).on('resize', function(){
        if ( $mainWrap.hasClass('right') ){
            $spread.css({
                'left' : spread().right,
                'transition' : 'all 0s'
            });
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 표지판(SIGN) */



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 페이징 */
    $paging.find('.page1').on('click', function() {
        $sign.find('.btn_shop').click();
    });

    $paging.find('.page2').on('click', function() {
        AlignCenter();
    });

    $paging.find('.page3').on('click', function() {
        $sign.find('.btn_fa').click();
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 커서 모양 변경 */
    var $cursor = $mainWrap.find('#cursor');
    var wrapW = $mainWrap.width();
    var wrapL = wrapW / 6;
    var wrapR = wrapW - wrapL;

    function getPosition(e) {
        var x = e.clientX - $mainWrap.offset().left;
        var y = e.clientY - $mainWrap.offset().top;
        return { x : x , y : y }
    }

    $mainWrap.mousemove(function(e){
        posX = getPosition(e).x;
        posY = getPosition(e).y;

        $cursor.css({
            'left' : posX,
            'top' : posY
        });

        if( $mainWrap.hasClass('center') && !$mainWrap.hasClass('pointerNone') ){
            if (posX < wrapL){
                $mainWrap.attr('cursor-focus','shop').css('cursor','pointer');
            } else if (posX > wrapR){
                $mainWrap.attr('cursor-focus','fa').css('cursor','pointer');
            } else {
                $mainWrap.attr('cursor-focus','sign').css('cursor','');
            }
        } else if ( $mainWrap.hasClass('left') && !$mainWrap.hasClass('pointerNone') ){
            if (posX > wrapR){
                $mainWrap.attr('cursor-focus','fa').css('cursor','pointer');
            } else {
                $mainWrap.attr('cursor-focus','').css('cursor','');
            }
        } else if ( $mainWrap.hasClass('right') && !$mainWrap.hasClass('pointerNone') ){
            if (posX < wrapL){
                $mainWrap.attr('cursor-focus','shop').css('cursor','pointer');
            } else {
                $mainWrap.attr('cursor-focus','').css('cursor','');
            }
        }

    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 사이드 네비게이션  */
    $mainWrap.on('click', function() {
        if ( $mainWrap.hasClass('center') && !$mainWrap.hasClass('pointerNone') ){
            if ($mainWrap.attr('cursor-focus') == 'fa'){
                $sign.find('.btn_fa').click();
            } else if ($mainWrap.attr('cursor-focus') == 'shop'){
                $sign.find('.btn_shop').click();
            }
        } else if ($mainWrap.hasClass('left') && !$mainWrap.hasClass('pointerNone')){
            if ($mainWrap.attr('cursor-focus') == 'fa'){
                $sign.find('.btn_fa').click();
            }
        } else if ($mainWrap.hasClass('right') && !$mainWrap.hasClass('pointerNone')){
            if ($mainWrap.attr('cursor-focus') == 'shop'){
                $sign.find('.btn_shop').click();
            }
        }
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* 커서 animate 숨기기 */
    var $cursor = $mainWrap.find('#cursor');

    $mainWrap.find('.cursorHide').mouseover(function() {
        $cursor.addClass('hide');
    }).mouseout(function() {
        $cursor.removeClass('hide');
    });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/(function(){



    /* Hover에 따른 배경 blur 처리 */ 
    // $mainWrap.find('.fadeBlur').mouseover(function() {
    //     $spread.addClass('blur');
    // }).mouseout(function() {
    //     $spread.removeClass('blur');
    // });



})();/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/});// DOCUMENT READY...

