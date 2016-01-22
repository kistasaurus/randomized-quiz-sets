# randomized-quiz-sets
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

##Files included and what they do

- **index.html** - includes quiz questions and modal window content, page structure.
- **quiz.css** - includes the very very basic code you need to make this work, seperate from all other markup so you can use this with your own styling if you like.
- **style.css** - all styling as seen on the sample.
- **js/check-quiz-answers.js** - check if answers are correct, feedback as answers are clicked, message if all correct answers are selected.
- **js/display-random-content.js** - display a random set of questions on each page load.
- **js/modernizr.custom.62055.js** - check for flexbox support.

##Things you should know
- The ID of a section is used decide what content to show and hide, so you will need to modify the IDs in **js/display-random-content.js** to whatever content you want to show/hide randomly.  In this sample, IDs are "quiz1", "quiz2", "quiz3".
- To update to a different amount of random content, change the number in **js/display-random-content.js** to whatever you need: `randomNumber = Math.floor(Math.random()*3+1);`.  This is noted in the document.
- Quiz answers must be given the class "answer".  To mark them as right or wrong they must have the class "right" or "wrong".
- To show the message, you must include `<div class="message"> &nbsp; </div>` in an area with the same parent as the answers group.  The message can be modified in **js/check-quiz-answers.js**
- To modify the number of correct possible answers, change the number in **js/check-quiz-answers.js** to whatever you need: `if ($(".right.clicked").length >= 3)`.  This must be the same number for all quizzes.
