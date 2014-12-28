(function (){
	scroll_check();

	function scroll_check(){
		$(window).scroll(function () {
			var elem = $('.navbar');

			console.log($(document).scrollTop());

			if($(document).scrollTop() >= 10){
				elem.css({
					'background': '#353b43',
					'transition': '2s'
				});
			}
			else{
				elem.css({
					'background': 'none',
					'transition': '2s'
				});
			}
		});	
	}
})();

