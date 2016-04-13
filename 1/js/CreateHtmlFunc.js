
function createTitleProducts(data){
	var html = $("#titleProduct").html();
	var content = tmpl(html,{data:data});
	$(".titleProduct").append(content);
	$('.title').click(showProduct);
}
function createAllProducts(data){
	var html = $(".product").html();
	var content = tmpl(html,{data:data});
	$(".leftCol").append(content);	
}
function createReviews(data){
	var html = $("#test").html();
	var content = tmpl(html,{data:data});
	$(".reviews").append(content);	
}
