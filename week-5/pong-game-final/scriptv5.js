// Remade my original game to have objects and functions for particular purposes rather than an endless sea of variables
////

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 300
canvas.height = 500

const paddleWidth = 100;
const paddleHeight = 10;

let leftArrowPress = false;
let rightArrowPress = false;

// Creating the objects together here first
const playerPaddle = {
  x: 1,
  y: canvas.height - paddleHeight * 2,
  width: paddleWidth,
  height: paddleHeight,
  colour: 'black',
  score: 0
};


const computerPaddle = {
  x: canvas.width - paddleWidth,
  y: canvas.height - paddleHeight * (canvas.height / paddleHeight) + paddleHeight,
  width: paddleWidth,
  height: paddleHeight,
  colour: 'black',
  score: 0
};

// ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 7,
  velocityX: 5,
  velocityY: 5,
  colour: 'red'
};



// function to draw score
function drawScore(x, y, score) {
  context.fillStyle = 'black';
  context.font = '35px sans-serif';
  context.fillText(score, x, y);
}

// function to draw paddle
function drawPaddle(x, y, width, height, colour) {
  context.fillStyle = colour;
  context.fillRect(x, y, width, height);
}

// function to draw ball
function drawBall(x, y, radius, colour) {
  context.fillStyle = colour;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true); 
  context.closePath();
  context.fill();
}



// gets activated when we press down a key
function buttonPressed(event) {
  
  switch (event.key) {
   
    case 'ArrowLeft':
      
      leftArrowPress = true;
      break;
    
    case 'ArrowRight':
      rightArrowPress = true;
      break;
  }
}

// gets activated when we release the key
function buttonReleased(event) {
  switch (event.key) {
    // "up arraow" key
    case 'ArrowLeft':
      leftArrowPress = false;
      break;
    // "down arrow" key
    case 'ArrowRight':
      rightArrowPress = false;
      break;
  }
}



// resets the game after a score
function resetGame() {
  // reset ball's location on screen
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 7;

  // changes the direction of ball
  ball.velocityX = -ball.velocityX;
  ball.velocityY = -ball.velocityY;
}




// function which updates the positions of everything
function updatePositions() {
  // move the paddle
  if (leftArrowPress && playerPaddle.x > 0) {
    playerPaddle.x -= 8;
  } else if (rightArrowPress && (playerPaddle.x < canvas.width - playerPaddle.width)) {
    playerPaddle.x += 8;
  }

  // if the ball hits either side then reverse direction
  if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {

    ball.velocityX = -ball.velocityX;
  }

   // if the ball hits the bottom wall the score increases and game resets
   if (ball.y + ball.radius >= canvas.height) {
    playerPaddle.score += 1;
    resetGame();
  }

  // if the ball hits the bottom wall then the score increases and game resets
  if (ball.y - ball.radius <= 0) {
    computerPaddle.score += 1;
    resetGame();
  }

  // moves the ball
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // computerPaddle paddle movement
  computerPaddle.x += ((ball.x - (computerPaddle.x + computerPaddle.width/2))) * 0.085;

playerPaddleHit()
computerPaddleHit()
}

// player paddle hit and deflection which works by checking to see if the ball is in the paddle
function playerPaddleHit(){
  if ( ball.x > playerPaddle.x && ball.x < (playerPaddle.x + paddleWidth)){
    if (ball.y + ball.radius > playerPaddle.y){
      ball.velocityY = -ball.velocityY
      }
    }
  }
  
  // computer paddle hit and deflection
  function computerPaddleHit(){
    if ( ball.x > computerPaddle.x && ball.x < (computerPaddle.x + paddleWidth)){
      if (ball.y - ball.radius < computerPaddle.y + paddleHeight){
        console.log('please work jesus')
        ball.velocityY = -ball.velocityY
      }
<<<<<<< HEAD
    }
    }
=======
    }
    }
>>>>>>> debc7eeb7e31e54cdaa8e1006790e2dafbd13fc0

 

// This draws everything on to canvas
function drawGame() {
  
  context.fillStyle = "#F0EAD6"; // Background colour
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawScore(canvas.width / 60, canvas.height / 1.8, computerPaddle.score);
  drawScore(canvas.width / 60, canvas.height / 2.2, playerPaddle.score);
 
  drawPaddle(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height, playerPaddle.colour);
  drawPaddle(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height, computerPaddle.colour);
  
  drawBall(ball.x, ball.y, ball.radius, ball.colour);
}


function gameLoop() {
  updatePositions();
  drawGame();
}

// calls gameLoop() function @ 60 fps
setInterval(gameLoop, 1000 / 60);

window.addEventListener('keydown', buttonPressed);
window.addEventListener('keyup', buttonReleased);