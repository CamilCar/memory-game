# Memory game with famous buildings! 

This is a game created to help improve memory or reduce boredom! The board consist of 12 cards, and you must find each matching card to win the round.

![Responsive image](/assets/images/ami_responsive.jpg)

## Features
---------------------
### Existing Features
- Header 
    - At the top of the page, you find the game name: Memory Game with famous buildings! The background and font is visually pleasing and invites the user to a round. The name is clear for the the user for what kind of game this is.  

- The instructions
    - To the right, underneath the header, there is a short instruction telling the player to start the game by flipping a card. Easy!  

- The player score
    - To the left, there is a counter that tracks how many rounds the user has completed. Each completed round gives +1 to player score. 

![Paragraphs top](/assets/images/p_1.jpg) 

- The game: options
    - Under the game board there is a short explanation to the the user that the game goal is to find all matching pairs. 
    - When two unmatching cards has been flipped, the cards are turned face down again after 1 second. When two matching cards have been found, they stay turned facing upwards until the round is over.  

![Paragraph bottom](/assets/images/p_2.jpg)

- The game: results
    - When the user has found all matching cards, the round is over. A point will be added to players score.  

- Features left to implement
    - If there would have been time, i would have liked to create a footer where the user can learn more about each building. If the user were to click on a building name in the footer, the link(opens in new tab) would have brought them to the wikipedia page for that building. Learning through games is a fun and strong combination. 
    - I would have added a favorite icon, for design and for the users to easier navigate to the game. 
    - Add a 'clicks' tracker, showing the the user how many cards have been turned in each round.
    - Add a scoreboard so the user could show off their memory to other players!

    ## Testing 
    ------------
- I have tested this in following browsers : Chrome, Firefox.  

- I have confirmed that the game results will always be correct.  

- I can confirm that the header, options, instructions, footer and results are all readable. But if css fail to load, vital content is not visable to the user, as this game relies on the css to work.  

- I have tested with devtool Lighthouse that all colors and fonts are easy to read. 

![Lighthouse stats](/assets/images/light_house_stats.jpg)

### Bugs

- Solved bugs: 
- Remaining bugs: 
    - If the user clicks on different cards too fast, the game will bug out. Resulting in having three cards open, and eventually completing the game while not having turned all cards. 

### Validator Testing
- Html 
    - No errors were returned when checking it through the official W3C validator.

- css 
    - No errors were returned when checking it through the official Jigsaw validator. 

- JavaScript
    - One error was returned when checking it through EsLint validator. JavaScript did not see flipCard being used because it is called for in an onClick created in an HTML element. Needed to add 'eslint-disable-next-line  no-unused-vars comment' to flipCard function. Resolved.

## Deployment
---------------
- The site was deployed to GitHub by:
    - Navigating to the pages section.
    - Choosing Main Branch from source section.
    - Once selected and saved, the branch was launched and after a short time and refresh of page, provided a message and a clickable button 'Visit page'.
- Link to live website is found here - https://camilcar.github.io/memory-game/

## Credits
--------------
### Content
- The code to build the structure of the game was inspired from https://www.webtips.dev/memory-game-in-javascript
- The fonts that was used was taken from  https://fonts.google.com/ 
- The solution to shuffle the array was taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
- The styling of colors in CSS was used from https://mycolor.space/
- Senior programmer Joris Bomert, helping with JavaScript for the game structure and installing of EsLint. 

### Media
- The images for the cards were taken from https://pexels.com 



