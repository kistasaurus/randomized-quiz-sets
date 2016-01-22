// Modified from "How to Display Random News or Content with JavaScript" by Extreme Design Studio @ http://www.extremestudio.ro/blog/?p=4273

// Change this to the number of different quizzes you have (3+1 for 3 quizzes, 2+1 for 2 quizzes, etc.)
randomNumber = Math.floor(Math.random()*3+1);

window.onload = function() {
	// Add this section for each quiz that you have and change the number so there is one for each option.
	if (randomNumber == 1) {
		// Change ID to ID of the section you want to show.
		document.getElementById("quiz1").style.display = "block"; 
	}	
	if (randomNumber == 2) {
		document.getElementById("quiz2").style.display = "block"; 
	}
	if (randomNumber == 3) {
		document.getElementById("quiz3").style.display = "block";
	}
}