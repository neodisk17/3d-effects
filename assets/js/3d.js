$(document).ready(function(){
	$("#flipp").click(function(){
		$("#card").toggleClass("flipped");
		$(".container").addClass("per");
	})
})