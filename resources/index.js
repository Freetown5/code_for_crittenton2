$("#job1").on("click", function(){
	console.log("event fired");
	$("#description1").slideToggle("slow", function(){
		$("#description1").show();
	})
})