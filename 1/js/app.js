// ---------------------APP----------------------------------------
// ----------------------------------------------------------------
var token = "";
var reviewId="";
var products={};
var reviews ={};
$(function () {

	$('#registration').click(function (e) {
		e.preventDefault();
		var data = {
			"username": $('#username').val(),
			"password": $('#password').val(),
		};
		if(($('#username').val()) && ($('#password').val())){
			$.ajax({
				type: 'POST',
				url: 'http://smktesting.herokuapp.com/api/register/',
				contentType: 'application/json; charset=utf-8',
				data: JSON.stringify(data)
			}).success(function (data) {
				token = data.token;
				alert("Congratulations! Registration is successful");
			}).fail(function (data) {
				alert("ERROR");
			});
		}
		
	});



	$('#login').click(function (e) {
		e.preventDefault();
		var loginData = {
			"username": $('#usernameLogin').val(),
			"password": $('#passwordLogin').val(),
		};
		if(($('#usernameLogin').val()) && ($('#passwordLogin').val())){
			$.ajax({
				type: 'POST',
				url: 'http://smktesting.herokuapp.com/api/login/',
				data: loginData
			}).success(function (data) {

				token = data.token;

			}).fail(function (data) {
				alert('ERROR');
			});
		}
		
	});



	$('#getProducts').click(function (e) {
		e.preventDefault();
		var productModel=['id','title','img','text'];
		$.ajax({
			type: "GET",
			url: 'http://smktesting.herokuapp.com/api/products/',
		})
		.success(function (data) { 
				products=data; 
		})
		.fail(function (data) {
			alert('ERROR')
		});
	});

	$('#goOut').click(function (e) {
		e.preventDefault();
		sessionStorage.removeItem(this.token);
	});


	$('#postReview').click(function (e) {
		if(token!=''){
			$(".warningNotLog").css("display","none");
			e.preventDefault(); 
			var reviewsData = {
				"rate": $('#rate').attr('value'),
				"text": $('#review').val(),
			};
			$.ajax({
				type: "POST",
				url: 'http://smktesting.herokuapp.com/api/reviews/1',
				contentType: 'application/json; charset=utf-8',
				data: JSON.stringify(reviewsData),
				headers:{
					'Authorization' : 'Token '+token
				}
			})
			.success(function (data) {
				reviewId = data.review_id;
				alert("удачно");
			})
			.fail(function (data) {
				alert('ERROR')
			});
		}else{
			$(".warningNotLog").css("display","block");

		}
	});

$('.titleProduct').click(function (e) {
		e.preventDefault();
		$.ajax({
			type: "GET",
			url: 'http://smktesting.herokuapp.com/api/reviews/1',
		})
		.success(function (data) {
			var reviews=data;
		})
		.fail(function (data) {
			alert('ERROR')
		});
	});

})

//--------------------------------------------------------------------------------------------



