$(function(){
    // header_gnb 메뉴 mouseenter
	$('.gnb_wrap > li').on('mouseenter',function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
		
		if ($(this).children().hasClass('sub_wrap')){
			$('.gnb_bg').stop(true,true).fadeIn();
		}else {
			$('.gnb_bg').fadeOut();
		}
	});

	// header_gnb 메뉴 mouseleave
	$('.gnb_wrap > li, .gnb_bg').on('mouseleave',function(){
		$(this).removeClass('on');
        $('.gnb_bg').stop(true,true).fadeOut();
	});

	includeHTML();
	resizeFunction();
});



function resizeFunction(){
	win_w = $(window).width();
	win_h = $(window).height();
	scr_t = $(window).scrollTop();
	visu_h = $(window).height() - 85;
    
	// common
	$('.win_inner').width(win_w);

	// main
    $('.visual_area').height(visu_h);
	
	// sub
    $('.campingcar_wrap .sec1').height(visu_h);
}