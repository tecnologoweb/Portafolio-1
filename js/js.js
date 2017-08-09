$(document).ready(function(){
$("#particles-js").css({"height":$(window).height() + "px"});
$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 50){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"70px"});

				$("header").css({"background-color": "#323232"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "150px","height":"220px"});

	$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});