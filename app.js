const colors = [" red", " green", " #f1f5f8"];

const button = document.getElementById("btn");
const colorName = document.querySelector(".color");

function generateRandomNumber()
{
    const main = document.querySelector("main");
    const random = Math.floor(Math.random() * colors.length);

    main.style.backgroundColor = colors[random];
    colorName.textContent = colors[random];
}

function generateRandomColor()
{
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    const main = document.querySelector("main");
    main.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
}

if(document.head.textContent.includes("Color Flipper || Simple"))
    button.addEventListener("click", generateRandomNumber);
else
    button.addEventListener("click", generateRandomColor);