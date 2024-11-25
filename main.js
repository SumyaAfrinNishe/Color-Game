var square=document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
//console.log(square);


var colors =[
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 255, 255)',
    'rgb(0, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(0, 0, 255)',

];

var pickedColor = colors[4];
displayColor.textContent = pickedColor;
for(var i=0; i < square.length; i++)
{
    // console.log(square[i]);
    // console.log(i);
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function()
{
//     alert("you clicked inside the box.")

        var choosenColor = this.style.backgroundColor;
        // compare with picked color
        if(choosenColor === pickedColor)
        {
            h1.style.backgroundColor = pickedColor;
            message.textContent = "correct";
            // alert("You are right");
        }
        else{
            message.textContent = "Try again";
            // alert("You are wrong");
        }
})
}