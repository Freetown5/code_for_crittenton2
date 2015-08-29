$("section").on("click", function(event){
	console.log("event fired");
	console.log((event.target).closest('p'));
	$(".description").slideToggle("slow", function(){
		$(event.target).closest('section').css("display: inline");
	})
})

