const decreasebutton = document.getElementById("decreasebtn");
const increasebutton = document.getElementById("increasebtn");
const resetbutton = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

decreasebutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}

increasebutton.onclick = function(){
    count++;
    countlabel.textContent = count;
}

resetbutton.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}