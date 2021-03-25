# Pre-work - Memory Game

Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sofia Riley

Time spent: 4 hours spent in total

Link to project:https://glitch.com/edit/#!/spiky-eager-vase

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src ="https://i.imgur.com/7yq1Py2.gif" width=250><br>
<img src ="https://i.imgur.com/ZX9YUFz.gif" width=250><br>
https://i.imgur.com/7yq1Py2.gif
https://i.imgur.com/ZX9YUFz.gif


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I did not use any outside resources for help.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered when creating this submission was when the first clue would not play after I reached the end of step 8. To fix the problem, I used the information found in the Console Logging section. I opened the console to see if there were any errors when running the game and found that the line ‘document.getElementById("button"+btn).classList.add("lit")’ was null. At first, I changed “button” to “gameButtonArea” to see if it needed to match the div container in the index.html file, but this did not resolve the problem. Therefore, I looked over the pre-work instructions to see if I had missed a line of code, but my code did not deviate from the instructions. Then I opened up the console again and added the line ‘console.log(“document.getElementById(“button”+btn)’ to see what “button”+ btn was supposed to be. The output on the console was null. Then, I went back to the index.html file and looked at the buttons in the div container and saw that the name for my buttons differed from the name given in the pre-work instructions. I changed the line to ‘document.getElementById(“btn”+btn).classList.add(“lit”)’ and after pressing the start button, the first clue played. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

How do we implement the statistics of web traffic into the webpage during the coding phase of a web development project? This would be a good addition to the Light and Sound Memory Game that way the web developer knows how many people play the game and can change aspects of the game depending on how much traffic it is getting. If there is a lot of traffic on the game’s website, then the developer knows that the game is popular and can make the game more difficult for users in order to maintain the websites traffic. If there is not much traffic, then the developer can modify the game and make it more interesting for users.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would add a few more features to the game. First, I would add in a timer, that causes the user to lose if they run out of time and randomize the pattern for each play. Then, I would create three levels for the player to choose from: easy, medium, and hard. As the difficulty increases in each level, the speed of the pattern shown to the user, the number of buttons and the length of the pattern would increase. Lastly, I would also keep track of the users that play the game and add in a scoreboard to make the game more competitive.


## License

    Copyright Sofia Riley

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
