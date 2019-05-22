$(document).ready(function() {
    $(".seat_button").click(function(e) {
    	var seat = $(this).text().trim();
    	if ($(this).attr("selected") != "selected") {
    		$("#seats_selected").append("<li id='"+seat + "'>" + seat + "</li>");
    		$(this).attr('selected','selected');
    		$(this).css("background-color", "green");
    	}
    	else {
    		$(this).removeAttr("selected");
    		$(this).css("background-color", "");
    		$("#"+seat).remove();
    	}
    });

    $(".checkout").click(function(e) {
        var num_seats = $("ul#seats_selected").children().length;
        $(this).css("background-color", "green");
        $("p#total_seats").text(num_seats + " Seats selected");
    });    
});