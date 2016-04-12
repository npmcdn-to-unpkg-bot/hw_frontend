(function($) {	
	star:$(function() {
		$('ul.starRate').each(function() {
			$(this).find('a').each(function() {
				$(this).click(function(){
					if($('#rate')){
						$('#rate').removeAttr("id")
					}
					if($('noActive')){
						$a=$(this).attr('value');
						$(this).attr('id', 'rate');
						$(this).find('span').css("display","block");
						$('ul.starRate').each(function() {
							$(this).find('a').each(function() {
								if($(this).attr('value')<=$a)
									$(this).removeClass('noActive').addClass('active');
								if($(this).attr('value')<$a)
									$(this).find('span').css("display","none");
							});
						});
					}
					if($('active')) {
						$a=$(this).attr('value');
						$(this).attr('id', 'rate');
						$('ul.starRate').each(function() {
							$(this).find('a').each(function() {
								if($(this).attr('value')>$a){
									$(this).removeClass('active').addClass('noActive');
									$(this).find('span').css("display","none");
								}
							});
						});
					}
				});
			});
		});
	});
})(jQuery)