
// ---------------------APP----------------------------------------
// ----------------------------------------------------------------
var token='';
function registApp(){
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
};

function logApp(){
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
};

function listProductsApp(){
	$.ajax({
		type: "GET",
		url: 'http://smktesting.herokuapp.com/api/products/',
	})
	.success(function (data) { 
		getReviewsApp(data);
		createTitleProducts(data);
		createAllProducts(data);
	})
	.fail(function (data) {
		alert('ERROR')
	});

};

function sendReviewApp (i){
	++i;
	console.log(token);
	var reviewsData = {
		"rate": $('#rate').attr('value'),
		"text": $('#review').val(),
	};
	$.ajax({
		type: "POST",
		url: 'http://smktesting.herokuapp.com/api/reviews/'+i ,
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(reviewsData),
		headers:{
			'Authorization' : 'Token '+token
		}
	})
	.success(function (data) {
		reviewId = data.review_id;
	})
	.fail(function (data) {
		alert('ERROR')
	});
};

function getReviewsApp(data) {
	for (var i = 1; i <= data.length; i++) {
		$.ajax({
			type: "GET",
			url: 'http://smktesting.herokuapp.com/api/reviews/'+i,
		})
		.success(function (data) {
			createReviews(data);
		})
		.fail(function (data) {
			alert('ERROR')
		});
	}
}
