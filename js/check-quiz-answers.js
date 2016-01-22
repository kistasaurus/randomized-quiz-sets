// Quiz
$(document).ready(function(){
	// When someone clicks an answer...
	$(".answer").click(function() {
		// if it hasn't been clicked before and the right answer hasn't already been picked....
		if ( !$(this).hasClass("clicked") && !$(this).siblings('.right').hasClass("clicked") ) {
			// show that it's been clicked.
			$(this).addClass("clicked");
			if ( $(this).hasClass( "wrong" ) && $( this ).hasClass( "clicked" ) ) {
				// If it's wrong, show this message.
				$(this).parent().siblings('.message').html('Close, try again.');
			}
			if ( $(this).hasClass( "right" ) && $( this ).hasClass( "clicked" ) ) {
				// If it's right, show this message and disable the other buttons.
				$(this).parent().siblings('.message').html('You got it!');
				$(this).siblings('.wrong').addClass("disable");
			}
			// Set this number to how many correct answers there are (must be same number for all).
			if ($(".right.clicked").length >= 3) {
				// If all correct answers are selected, show this.
				$("div#winner").fadeIn( "fast" );
			}
		}
	});
});