// 1.

document.getElementById('btn1').onclick = function(){
    document.getElementById('div1').style.backgroundColor = 'Yellow';
}

// 2.

document.getElementById('btn2').onclick = function(){
    document.getElementById('div2').innerText = 'Success';
}

// 3.

document.getElementById('btn3').onclick = function(){
    document.getElementById('div3').style.display = 'none';
}

// 4.

const switchButton = document.getElementById('btn4');
const div4 = document.getElementById('div4');

var isNone = false;
const changeDisplay = () => {
    if (isNone) {
        div4.style.display = 'none';
    } else {
        div4.style.display = 'block';
    }
    isNone =!isNone;
}
switchButton.onclick = changeDisplay;

// 5.

const switchColors = document.getElementById('btn5');
const div5 = document.getElementById('div5');

var colors = ['Red', 'Green', 'Blue', 'Magenta', 'Yellow'];

const getColor = () => {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

const changeColor = () => {
    var randomColor = getColor();
    div5.style.backgroundColor = randomColor;
    switchColors.style.backgroundColor = randomColor;
}

switchColors.onclick = changeColor;

//6.

const counter = document.getElementById('div6');
const intervalButton = document.getElementById('btn6');

var count = 0;
var interval: NodeJS.Timeout;

function updateCounter() {
    count++;
    if (count > 10) {
        count = 0;
    }
    counter.innerText = count.toString();
}

intervalButton.onclick = () => {
    interval = setInterval(updateCounter, 3000);
}

//7.







