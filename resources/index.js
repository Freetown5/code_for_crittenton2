$("section").on("click", function(event){
	console.log($(this).find("p"));
	console.log(event.target);
	$(".description").slideToggle("slow", function(){
		$(this).find("p").css("display: inline");
	})
})
