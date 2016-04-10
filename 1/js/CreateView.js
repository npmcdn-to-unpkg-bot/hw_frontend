


(function($) {

	registration:$(function(){
		$('.mainRegistration').click(function(){
			$(".authorization").css("display","block");
			$(".mainRegistration").css("display","none");
			$(".mainLogin").css("display","none");
		})
		$('#registration').click(function(){
			if(($('#username').val()) && ($('#password').val())){
				$(".authorization").css("display","none");
				$(".loginForm").css("display","block");
			}

		})

	})


	login:$(function(){
		$('.mainLogin').click(function(){
			$(".loginForm").css("display","block");	
			$('.mainLogin').css('display', 'none');
			$('.mainRegistration').css('display', 'none');
		})
		$('.login').click(function(){
			if(($('#usernameLogin').val()) && ($('#passwordLogin').val())){
				$('#goOut').css("display","inline-block");
				$('.loginForm').css('display', 'none');	
				$('.mainLogin').css('display', 'none');
				$('.mainRegistration').css('display', 'none');
			}
		})
	})

	goOut:$(function(){
		$('#goOut').click(function(){
			$('.mainLogin').css('display', 'inline-block');
			$('.mainRegistration').css('display', 'inline-block');
			$('#goOut').css("display","none");
			$('.loginForm').css('display', 'none');	

		})
		
	})

	getProducts:$(function(){
		$('#getProducts').click(function(){
			$("ul.titleProduct").css("display","block");	

		})
		
	})




	header:$(function(){
		$('ul.titleProduct').click(function(){
			$("div.container").css("display","block");
		})
	})


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



