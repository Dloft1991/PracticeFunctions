

function pageLoad() {
    alert("you have started");
    console.log(pageLoad);
    show();
}

function show(){
    document.getElementById("img").style.visibility = "visible";
    console.log(show);
}

function hide() {
    document.getElementById("img").style.visibility = "hidden";
    console.log(hide);
}

function myNumber() {
   alert("104");
}

// array for the getNames function
var names = ["Iron Man", "Thor", "Spider Man", "Scarlet Witch", "Hulk", "Vision", "Black Widow", "Hawk Eye"];
function getNames() {
    return names[Math.floor(Math.random() * names.length)];
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}