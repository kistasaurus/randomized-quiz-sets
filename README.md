# Randomized Quiz Sets
Randomize sets of quiz questions with answer confirmation and completion message.

This does three things:

1. **Displays a random set of quiz questions on screen** by hiding all sections with class "quiz" and then showing one based on a random number generated.  I have also included a loading animation if this takes too long.

2. **Provides feedback on quiz answers** in a few different ways.
  - When an answer is clicked, color of the item changes to indicate if it is correct or incorrect.
  - When an answer is clicked, a message shows indicating if the answer is correct or incorrect.
  - When an incorrect answer is clicked, that answer appears 'disabled' and no longer changes the mouse cursor, changes color when clicked, displays hover effects, or updates the message when clicked.
  - When the correct answer is clicked, all answers appear disabled as described above.

3. **Displays congratulatory message when all answers are marked correct** by calculating the number of correct answers possible.  This number must be the same for all quizzes.  If all answers are correct a modal overlay window is shown.

See a sample at http://thekristin.github.io/randomized-quiz-sets/

##Usage

You will need to include:

- **index.html** - Includes quiz questions and modal window content, page structure.
- **quiz.css** - Includes the very very basic code you need to make this work, seperate from all other markup so you can use this with your own styling if you like.
- **js/check-quiz-answers.js** - Check if answers are correct, feedback as answers are clicked, message if all correct answers are selected.
- **js/display-random-content.js** - Display a random set of questions on each page load.

I've also included these files for styling, but the code with work without them (it just won't look as nice):

- **style.css** - All styling as seen on the sample.
- **js/modernizr.custom.62055.js** - Uses modernizr  to check for flexbox support.

###Randomly show/hide section or element

This will allow random sections of content to show on the page at one time.

The ID of an element is used decide what content to show and hide.  In the sample html these are divs labelled "quiz1", "quiz2", and "quiz3".  The important thing here is the ID name, but this can be modified to whatever you need and additional elements can be added with new names.  Each section must also be set to `display: hide` by default - in the sample this is set for all elements with class "quiz".

If you want to modify the IDs in any way, you will need to update the IDs in **js/display-random-content.js** to whatever content you want to show/hide randomly.  Replace "quiz1", "quiz2", "quiz3" with your new ID names in both **js/display-random-content.js** and **index.html**.

To add content:

1. Add an element with your ID(s) to **index.html**.
2. Go to **js/display-random-content.js** and replicate this section as many times as needed: 
```
if (randomNumber == 1) {
	// Change ID to ID of the section you want to show.
	document.getElementById("YourID").style.display = "block"; 
}
```
3. Replace *1* with a different number for each, incrementing by one each time.
4. Replace *YourID* with your ID from **index.html**.
5. Update this section `randomNumber = Math.floor(Math.random()*3+1);` in **js/display-random-content.js** with the highest number in randomNumber from the code above - replace *3* in this snippet.

This is modified from "How to Display Random News or Content with JavaScript" by Extreme Design Studio @ http://www.extremestudio.ro/blog/?p=4273

###Check quiz answers

Quiz answers must be given the class "answer".  They must have the class "right" or "wrong".

Suggested HTML markup (in **index.html**) is: 

```
<div class="answer wrong">Wrong Answer</div>
<div class="answer right">Right Answer</div>
```

To allow answers to change color on click, the suggested styles are (see samples in **styles.css**):

```
.answer {
	background-color: gray; /* set a default color for quiz answers before clicking */
}
.answer:hover {
	background-color: orange; /* set a hover color for quiz answers */
}
.answer.disable:hover, .disable.wrong:hover {
	background-color: gray; /* hide hover effect when correct answer has already been selected - keep same as .answer color */
}
.clicked.wrong, .clicked.disable.wrong:hover {
	background-color: red; /* change color when wrong */
}
.clicked.right, .disable.right:hover {
	background-color: green; /* change color when right */
}
```

####Show correct/incorrect message

After clicking an answer, show the user a message below the questions that varies if answer is right or wrong.

You must include `<div class="message"> &nbsp; </div>` in an area with the same parent as the answers group.  Suggested HTML markup in **index.html**:
```
<div class="questions">
	<div class="options">
		<div class="answer wrong">Wrong</div>
		<div class="answer wrong">Wrong</div>
		<div class="answer right">Right</div>
	</div>
	<div class="message"> &nbsp; </div>
</div>
```

The message can be modified in **js/check-quiz-answers.js**.

```
// If it's wrong, show this message.
$(this).parent().siblings('.message').html('Close, try again.');
```

```
// If it's right, show this message.
$(this).parent().siblings('.message').html('You got it!');
```
####Display message if all answers are correct.

Display a modal message if all questions shown are answered correctly. This must be the same number of correct answersfor all quizzes.

To modify the number of correct possible answers, change the number (here *3* in **js/check-quiz-answers.js** to whatever you need: `if ($(".right.clicked").length >= 3)`.  
