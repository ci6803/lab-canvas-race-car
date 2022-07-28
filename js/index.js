// const canvas = document.getElementById("canvas"); // call canvas
// canvas.style.border = "2px solid grey"; // set canvas border to be visible
// let ctx = canvas.getContext("2d"); // think ctx as the 'paint brush', we need to have a paint first
// let startScreen = document.querySelector(".game-intro"); //start screen

// let intervalId = 0;
// let isGameOver = false;
// let score = 0;

// let background = new Image();
// background.src = "../images/road.png";
// let car = new Image();
// car.src = "../images/car.png";

// let carX = 250; // the location of the car
// let carY = 400;
// let carWidth = 80;
// let carHeight = 130;

// // // obstacle car - create an array of 5 cars or math.random to fall more cars then use loop for the logic
// // let obCar = new Image();
// // obCar.src = "../images/car.png";
// // let obCarX = 100;
// // let obCarY = -400;

// window.onload = () => {
//   // don't want to see the canvas
//   canvas.style.display = "none";

//   document.getElementById("start-button").onclick = () => {
//     startGame();
//   };

// //   document.addEventListener("keydown", (e) => {
// //     if (e.code === "ArrowRight" && carX + carWidth < canvas.width - 50) {
// //       //the x point stays at the left top of the car
// //       carX += 4;
// //     } else if (e.code === "ArrowLeft" && carX > 50) {
// //       carX -= 4;
// //     }
// //   });

//   function startGame() {
//     canvas.style.display = "block"; // show the canvas
//     startScreen.style.display = "none"; // don't show the start screen anymore
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     ctx.drawImage(car, carX, carY, carWidth, carHeight);
//     // ctx.drawImage(obCar, obCarX, obCarY, carWidth, carHeight);
//     //drawing the background and the car
//   }

// //   // // collision
// //   // if (
// //   //   carY < obCarY + carHeight &&
// //   //   carX < obCarx + carWidth - 5 &&
// //   //   carX + carWidth > obCarX &&
// //   //   carY + carHeight > obCarY
// //   // ) {
// //   //   isGameOver = true;
// //   // }
// //   // score
// //   ctx.font = "30px Georgia";
// //   ctx.fillText(`Score: ${score}`, 100, 40);
// //   intervalId = requestAnimationFrame(startGame); // keep going
// //   // background first then the car

// //   if (isGameOver) {
// //     cancelAnimationFrame(intervalId);
// //   }
// // };

const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid grey";
let ctx = canvas.getContext("2d");
let startScreen = document.querySelector(".game-intro");

let intervalId = 0;
let isGameOver = false;
let score = 0;
let background = new Image();
background.src = "../images/road.png";
let car = new Image();
car.src = "../images/car.png";
let carX = 250;
let carY = 400;
let carWidth = 80;
let carLength = 130;

//obstacle car
let obCar = new Image();
obCar.src = "../images/car.png";
let obCarX = 300;
let obCarY = -400;
window.onload = () => {
  canvas.style.display = "none";
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight" && carX + carWidth < canvas.width - 50) {
      carX += 4;
    } else if (event.code === "ArrowLeft" && carX > 50) {
      carX -= 4;
    }
  });
  function startGame() {
    canvas.style.display = "block";
    startScreen.style.display = "none";
    //drawing the background and the cars
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car, carX, carY, carWidth, carLength);
    ctx.drawImage(obCar, obCarX, obCarY, carWidth, carLength);
    //obCar movement
    obCarY += 2;
    if (obCarY > canvas.height) {
      obCarY = -400;
      score++;
    }

    //collision with cars
    if (
      carY < obCarY + carLength &&
      carX < obCarX + carWidth - 10 &&
      carX + carWidth > obCarX &&
      carY + carLength > obCarY
    ) {
      isGameOver = true;
    }
    //scoreboard
    ctx.font = "30px Georgia";
    ctx.fillText(`Score:${score}`, 100, 40);

    intervalId = requestAnimationFrame(startGame);
    if (isGameOver) {
      cancelAnimationFrame(intervalId);
    }
  }
};
