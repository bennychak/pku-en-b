// File: Custom Javascript
// Domain: http://english.pku.edu.cn
// Author: bienfantaisie#gmail.com

// responsive image
function fn_fitimg(){

	var $fitimg_wrap = $('.f_fitimg_wrap');

	$fitimg_wrap.each(function(){

		var $fitimg = $('.f_fitimg',this),
			imgwrap_w = $(this).width(),
			imgwrap_h = $(this).height(),
			img_w = $fitimg.width(),
			img_h = $fitimg.height();

		$fitimg.css({
			'margin' : 'auto',
			'width' : 'auto',
			'height' : 'auto',
			'visibility' : 'hidden'
		});

		if(img_w / img_h > imgwrap_w / imgwrap_h){
			$fitimg.css({
				'height' : imgwrap_h + 'px'
			});
			var img_w = $fitimg.width();
			var imgwrap_w = $(this).width();
			$fitimg.css({
				'marginLeft' : imgwrap_w/2 - img_w/2 + 'px'
			});
		}else{
			$fitimg.css({
				'width' : imgwrap_w + 'px'
			});
			var img_h = $fitimg.height();
			var imgwrap_h = $(this).height();
			$fitimg.css({
				'marginTop' : imgwrap_h/2 - img_h/2 + 'px'
			});

		}

		$fitimg.css({
			'visibility' : 'visible'
		});

	});

}

// main & side compare height
function comHeight(){
	$('.f_main,.f_side').height('auto');

	var main_h = $('.f_main').height(),
		side_h = $('.f_side').height();

	$('.f_main,.f_side').css({
		'minHeight': Math.max(main_h,side_h)
	});
}

function instantLoad(){
	// responsive image
	// fn_fitimg();

	var doc_w = document.body.clientWidth;

	if(doc_w >= 992){

		// main & side compare height
		if($('.f_main').length>0){
			comHeight();
		}

	}else{

		// main & side compare height
		if($('.f_main').length>0){
			$('.f_main,.f_side').css({
				'minHeight' : 0
			});
		}

	}

	return doc_w;
}

window.onload = function(){
	instantLoad();
}

window.onresize = function(){
	instantLoad();
}

// document.ready function
$(function(){

	// imgLiquid plugin
	$(".imgLiquidFill").imgLiquid();

	// $('.bttrlazyloading').bttrlazyloading();

	// lazyload
	//$('img.lazy').lazyload({
	//	effect : 'fadeIn'
	//});

	// information
	var $_info = $('.m_information .item');

	if(instantLoad() < 768){

		// show information
		$_info.find('.ico_information').hide();
		$_info.find('.desc').show();

	}else{
		$_info.find('.ico_information').show();
		$_info.find('.desc').hide();

		// animation rhythm
		var speed = 450;

		// toggle
		$('.m_information .item').hover(function(){
			$('.ico_information',this).stop().fadeOut(speed);
			$('.desc',this).stop().fadeIn(speed);
		},function(){
			$('.ico_information',this).stop().fadeIn(speed);
			$('.desc',this).stop().fadeOut(speed);
		});
	}

});