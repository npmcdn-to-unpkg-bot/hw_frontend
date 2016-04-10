

var token = "";
var reviewId="";
$(function () {

	$('#registration').click(function (e) {
		e.preventDefault();
		var data = {
			"username": $('#username').val(),
			"password": $('#password').val(),
		};

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
		
	});



	$('#login').click(function (e) {
		e.preventDefault();
		var loginData = {
			"username": $('#usernameLogin').val(),
			"password": $('#passwordLogin').val(),
		};

		$.ajax({
			type: 'POST',
			url: 'http://smktesting.herokuapp.com/api/login/',
			data: loginData
		}).success(function (data) {

			$('.userInfo').css('display', 'block');
			$('.loginForm').css('display', 'none');

			token = data.token;


		}).fail(function (data) {
			alert('ERROR');
		});
		
	});



	$('#getProducts').click(function (e) {
		e.preventDefault();
		var productModel=['id','title','img','text'];
		$.ajax({
			type: "GET",
			url: 'http://smktesting.herokuapp.com/api/products/',
			headers:{
				'Authorization' : 'Token '+token
			}

		})
		.success(function (data) {
			var products={};
			$.each(data, function(i, val) {    
				products.i=val; 
			});
		})
		.fail(function (data) {
			alert('ERROR')
		});
	});
	


	$('#GoOut').click(function (e) {
		e.preventDefault();
		sessionStorage.removeItem(this.token);
		$('.userInfo').css('display', 'none');
		$('.loginForm').css('display', 'block');
	});


$('#postReview').click(function (e) {
	if(token!=''){
	e.preventDefault(); 
	var reviewsData = {
			"rate": $('#rate').attr('value'),
			"text": $('#review').val(),
		};
		$.ajax({
			type: "POST",
			url: 'http://smktesting.herokuapp.com/api/reviews/1',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify(reviewsData)
		})
		.success(function (data) {
			reviewId = data.review_id;
			alert("удачно");
			})
		.fail(function (data) {
			alert('ERROR')
		});
	}
	});




// $('#postReview').click(function (e) {
// 		e.preventDefault();
// 		$.ajax({
// 			type: "GET",
// 			url: 'http://smktesting.herokuapp.com/api/reviews/1',

// 		})
// 		.success(function (data) {
// 			var products={};
// 			$.each(data, function(i, val) {    
// 				products.i=val; 
// 				console.log(products.i)
// 			});
// 		})
// 		.fail(function (data) {
// 			alert('ERROR')
// 		});
// 	});

})



       