$(function(){
	









	/*equalize height*/
	$.fn.equalize = function(){
		var maxHeight = 0;
		this.each(function(){
			var $this = $(this);
			if($this.height() > maxHeight){maxHeight = $this.height();}
		});
		return this.each(function(){
			$(this).height(maxHeight);
		});
	};
	if($('.eq_hight').length){$('.eq_hight').equalize();}
	if($('.eq-hight').length){$('.eq-hight').equalize();}



	/*主選單*/
	$('.tsh_menu>ul>li').addClass('level1');
	var myPath = location.pathname;
	var mySearch = location.search;
	var slashPos = myPath.lastIndexOf('/');
	myPath = myPath.slice(slashPos+1, myPath.length);
	if(!mySearch.match('isindex'))
		$('.tsh_menu>ul>li>ul a[href*="'+myPath+'"]').parents('.level1').addClass('always-show');
	
	var always_show_menu_a = $('.tsh_menu>ul>li.always-show').find('a:eq(0)');
	if($('.always-show').length)
		$('.tsh').css({'margin-bottom':'48px'});
	
	var all_tgr = $('.tsh_menu a');
	var all_L = $('.tsh_menu>ul');
	var id_show;
	var id_hide;
	all_tgr.mouseenter(function(){
		var _this = $(this);
		id_show = setTimeout(function(){
			_this.parents('ul').eq(0).find('li>a').removeClass('active').css({'color':''});
			_this.css({'color':'#b70076'});
			if(_this.next().is('ul'))
				_this.addClass('active');
			_this.parents('ul').eq(0).find('li>ul').hide();
			_this.next().show();
		}, 120);
	});
	
	always_show_menu_a.mouseenter();
	
	all_tgr.mouseleave(function(){
		var _this = $(this);
		clearTimeout(id_show);
	});
	
	all_L.mouseleave(function(){
		var _this = $(this);
		id_hide = setTimeout(function(){
			$('>li>ul', _this).hide();
			all_tgr.removeClass('active').css({'color':''});
			always_show_menu_a.mouseenter();
		}, 500);
	});
	
	all_L.mouseenter(function(){clearTimeout(id_hide);});

	$('.tsh_menu>ul>li>a').mouseenter(function(){
		var _this = $(this);
		setTimeout(function(){
			var ml2lsum = 0;
			_this.next().find('li').not(_this.next().find('li li')).each(function(){
				ml2lsum += $(this).outerWidth();
				if(ml2lsum > 980){$(this).hide();}
			});
		}, 120);
	});
	
	
	
	
	/*會員功能*/
	var tsh_greet_np = $('.tsh_greet_np');
	var tsh_greet_text = $('.tsh_greet_text');
	var the_fadeout;
	the_fadeout = setTimeout(hide_tsh_greet_np,5000);
	tsh_greet_text.add(tsh_greet_np).mouseenter(function(){
		clearTimeout(the_fadeout);
		tsh_greet_np.fadeIn(300);
	});
	tsh_greet_text.add(tsh_greet_np).mouseleave(function(){
		the_fadeout = setTimeout(hide_tsh_greet_np,300);
	});
	function hide_tsh_greet_np(){
		tsh_greet_np.fadeOut(300);
	}
});






