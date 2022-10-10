const avatar = document.getElementById("myAvatar");
avatar.addEventListener("click", function (event) {
    event.preventDefault();
    avatar.src = "/site/image/avatar-bis.png";
})

const userName = document.getElementById("name");
const myButton = document.querySelector(".buttonChange");
const myBackground = document.querySelector(":root");
const link = document.querySelectorAll("a");

myButton.addEventListener("click", function (event) {
    event.preventDefault();
    let newColor = prompt("enter a color");
    changeColor(newColor);
    let newName = prompt("What is your name ?");
    addName(newName);

})

function changeColor(colorvalue) {
    myBackground.style = `--mainColor : ${colorvalue}`;
    link.forEach(item => item.style = "color : var(--mainColor);");
}

function addName(nameValue) {
    userName.textContent = nameValue;
    userName.style = "color : white";
}