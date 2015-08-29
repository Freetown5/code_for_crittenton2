$("section").on("click", function(event){
	var self = this;
	$(this).find(".description").slideToggle("slow", function(){
		$(this).css("background-color","#692323");
	})
})
