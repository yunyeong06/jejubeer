$(function(){
    // 화면 사이즈
    resizeFunction();

    // 스크롤링 scale
    // $(window).scroll(function(){
    //     var Top = $(this).scrollTop();
        
    //     var item_top = $(".campingcar_wrap .sec3").offset().top;
    
    //     if(Top > $(".campingcar_wrap .sec3").offset().top -30){ // <= 효과를 주기위한 조건
        
    //          $(".campingcar_wrap .sec3 img").stop().animate({
    //             scale: '1.25'
    
    //         }, 300 );
    //                                         // &
    //         $(".campingcar_wrap .sec3").css({background : "#f1d4d4"}); // animate 또는 (CSS + transition)
    //     }
    // });


    // 테마 탭메뉴
    $('.tab_box .tab_item').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab_box .tab_item').removeClass('active');
		$('.tab_cont').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
   
    // $('.tab_btn_area .tab_link').click(function(){
	// 	var tab_id = $(this).attr('data-tab');

	// 	$('.tab_btn_area .tab_link').removeClass('on');
	// 	$('.tab_cont_area').removeClass('on');

	// 	$(this).addClass('on');
	// 	$("#"+tab_id).addClass('on');
	// });


    // Q&A 아코디언
    $('.qna_list_wrap .qna_item .qs').click(function(){
        $(this).next().stop().slideToggle();
		$(this).parent().addClass('active');
		$(this).parent().removeClass('active');
        $('.qna_list_wrap .qna_item .qs').not(this).next().slideUp();
        return false;
    });
});