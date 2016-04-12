
 function createTitleProducts(){
 	var html = $("#titleProduct").html();
	var content = tmpl(html,{data:products});
	$(".titleProduct").append(content);
	$('.title').click(getProduct);
 }
 function createAllProducts(){
 	 	 	var html = $(".product").html();
		 	var content = tmpl(html,{data:products});
		 	$(".leftCol").append(content);	
 }
  function createReviews(){
 	 		var html = $("#test").html();
		 	var content = tmpl(html,{data:reviews});
		 	$(".reviews").append(content);	
 }
