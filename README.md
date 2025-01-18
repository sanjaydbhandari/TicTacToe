# Tic Tac Toe with Scoreboard
A simple and interactive Tic Tac Toe game built with React.js that includes a scoreboard to keep track of each player’s score. This project showcases fundamental React concepts, including state management, component structure, and conditional rendering.

## Features
- Two-Player Game: Supports two players (X and O) who take turns.
- Responsive Design: Adaptable to various screen sizes.
- Scoreboard: Keeps track of wins for both players and can be reset.


## Technologies Used
React: For building the UI and managing the game state.
CSS: For styling the components and making the layout responsive.
## Installation
1. Clone the repository:

```bash
git clone https://github.com/sanjaydbhandari/Cohort3.0_100xDevs/tree/master/Week-9/tictactoe
```
2. Change to the project directory:
```
cd tic-tac-toe-scoreboard
```
3. Install the dependencies:

```
npm install
```
4. Start the application:
```
npm start
```
5. Open http://localhost:3000 in your browser to view the game.

## Usage
Game Start: X always starts first.
Gameplay: Players take turns by clicking on the empty cells.
Winning Condition: The first player to get three of their marks in a row (vertically, horizontally, or diagonally) wins.
Draw: If all cells are filled without a winner, the game is a draw.
Scoreboard: The scoreboard displays the total wins for each player and can be reset.
Components
1. GameBoard
Handles the main game logic.
Maintains the current state of the board and identifies the winner or draw.
2. ScoreBoard
Tracks and displays the score of each player.
Allows resetting the score.
3. Square
Represents an individual cell on the board.
4. ResetButton
Provides a button to reset the board or reset the scores.
Code Overview
The game logic is handled using state hooks (useState).
Winner detection uses an array of winning combinations to check if either player has won after each move.
The ScoreBoard component keeps track of each player's score in the parent component, App.

## Future Enhancements
AI Player: Implement an AI mode where a player can play against the computer.
Game History: Add a move history to allow players to go back and review moves.
License
This project is open source and available under the MIT License.

## Acknowledgements
Built with guidance from various online React.js resources and tutorials.