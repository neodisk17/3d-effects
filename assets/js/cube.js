$(document).ready(function(){
	$(".options button").click(function(){
		/* move conatine the data-show value applied to
		each anchor tag */
		var move=$(this).data("show");
		console.log(move);
		$("#cube").removeClass();
		switch(move){
			case "front":
				$("#cube").addClass("showfront");
				break;
			case "back":
				$("#cube").addClass("showback");
				break;
			case "top":
				$("#cube").addClass("showtop");
				break;
			case "bottom":
				$("#cube").addClass("showbottom");
				break;
			case "left":
				$("#cube").addClass("showleft");
				break;
			case "right":
				$("#cube").addClass("showright")
				break;
			case "animate-left":
				$("#cube").addClass("left");
				break;
			case "animate-right":
				$("#cube").addClass("right");
				break;
			case "animate-up":
				$("#cube").addClass("up");
				break;
			case "animate-down":
				$("#cube").addClass("down");
				break;
			case "animate-x-y":
				$("#cube").addClass("x-y");
				break;
			case "animate-y-x":
				$("#cube").addClass("y-x");
				break;
		}
	})
})