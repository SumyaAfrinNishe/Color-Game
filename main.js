var numSquares = 6;
var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var modeBtn = document.querySelectorAll(".mode");
//console.log(square);

var colors = generateRandomColor(numSquares);
//   [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(255, 255, 255)",
//   "rgb(0, 255, 0)",
//   "rgb(255, 0, 255)",
//   "rgb(0, 0, 255)",
// ];

var pickedColor = pickedRandomColor(colors); //index 1-5
// also I can write this way like, >> var pickedColor = colors[pickedRandomColor()];
displayColor.textContent = pickedColor;


//Add event listener to mode button
for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click", function () {
    // this.classList.toggle("selected");
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    this.classList.add("selected");
    //checking the button which one is clicked
    // if (this.textContent = "Easy") {
    //   numSquares = 3;
    // } else {
    //   numSquares = 6;
    // }
    console.log(this.textContent);
    numSquares = (this.textContent === "Easy") ? 3 : 6;  //ternary operator style
    //generate new colors
    colors = generateRandomColor(numSquares);
  
    //pick a color 
    pickedColor = pickedRandomColor(colors);
    //show this in displaycolor
    displayColor.textContent = pickedColor;
    reset.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < square.length; i++) {
      if (colors[i]) {
        square[i].style.display = "block";
        square[i].style.backgroumdColor = colors[i];
      }
      else {
        square[i].style.display = "none";
      }
    }
    h1.style.background = "steelblue";
  });
}
  
reset.addEventListener("click", function () {
  // alert("You clicked reset button");
  //change message to no nothing
  message.textContent = "";
  //change reset button text
  this.textContent = "New Colors";
  resetBtn();
});

function resetBtn(){
  //generate new colors
  colors = generateRandomColor(numSquares);
  //pick a color
  pickedColor = pickedRandomColor(colors); //index 1-5
  //show this color in display color
  displayColor.textContent = pickedColor;
    //display the generated color
  for (var i = 0; i < square.length; i++)
  {
    square[i].style.backgroundColor = colors[i];
  }
}
  // hardBtn.addEventListener("click", function (){
  //   this.classList.add("selected");
  //   easyBtn.classList.remove("selected");
  //   numSquares = 6;
  
    
  //   //generate new colors
  //   colors = generateRandomColor(numSquares);
  
  //   //pick a color 
  //   pickedColor = pickedRandomColor(colors);
  
  //   //show this in displaycolor
  //   displayColor.textContent = pickedColor;
  
  //   //display the generated color
  //   for (var i = 0; i < square.length; i++) {
  //     square[i].style.display = "block";
  //       square[i].style.backgroundColor = colors[i];
    
  //   }
  // });
  
  

// easyBtn.addEventListener("click", function (){
//   this.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;

//   //generate new colors
//   colors = generateRandomColor(numSquares);

//   pickedColor = pickedRandomColor(colors);

//   displayColor.textContent = pickedColor;

//   for (var i = 0; i < square.length; i++) {
//     if (colors[i]) {
//       square[i].style.backgroundColor = colors[i];
//     } else {
//       square[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener("click", function (){
//   this.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;

  
//   //generate new colors
//   colors = generateRandomColor(numSquares);

//   pickedColor = pickedRandomColor(colors);

//   displayColor.textContent = pickedColor;

//   for (var i = 0; i < square.length; i++) {
//       square[i].style.backgroundColor = colors[i];
//       square[i].style.display = "block";
//   }
// });


// reset.addEventListener("click", function () {
//   // alert("You clicked reset button");
//   //change message to no nothing
//   message.textContent = "";

//   //change reset button text
//   this.textContent = "New Colors";
//   //generate new colors
//   colors = generateRandomColor(numSquares);


//   //pick a color
//   pickedColor = pickedRandomColor(colors); //index 1-5
//   //show this color in display color
//   displayColor.textContent = pickedColor;
//     //display the generated color
//   for (var i = 0; i < square.length; i++)
//   {
//     square[i].style.backgroundColor = colors[i];
//   }
// });



for (var i = 0; i < square.length; i++) {
  // console.log(square[i]);
  // console.log(i);
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function () {
    //     alert("you clicked inside the box.")

    var chosenColor = this.style.backgroundColor;
    // console.log(chosenColor, pickedColor);
    // compare with picked color
    if (chosenColor === pickedColor) {
      reset.textContent = "Play Again";
      h1.style.backgroundColor = pickedColor;
      message.textContent = "correct";
      // square[i].style.backgroundColor = pickedColor; ei line rakhle sob square right answer er dara effect felchilo na
      matchColor(pickedColor);
      // console.log(square[i]);
      // alert("You are right");
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try again";
      // alert("You are wrong");
    }
  });
}

function matchColor(color) {
  for (var i = 0; i < square.length; i++) {
    // console.log(square[i]);
    square[i].style.backgroundColor = color; //for Right ans
  }
}
function pickedRandomColor(colors) {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

//generate random color
function generateRandomColor(number) {
  //create colors array
  var colors = [];
  for (var i = 0; i < number; i++){
    randomColor()
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
     //generate color "rgb(255,0,0)"

    //red 0-255
    //green 0-255
    //blue 0-255

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb" + "(" + r + ", " + g + ", " + b + ")";
      
}
 
  