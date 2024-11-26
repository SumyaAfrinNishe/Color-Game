var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
//console.log(square);

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 255, 255)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 0, 255)",
];

var pickedColor = pickedRandomColor(colors); //index 1-5
displayColor.textContent = pickedColor;
for (var i = 0; i < square.length; i++) {
  // console.log(square[i]);
  // console.log(i);
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function () {
    //     alert("you clicked inside the box.")

    var choosenColor = this.style.backgroundColor;
    // compare with picked color
    if (choosenColor === pickedColor) {
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
