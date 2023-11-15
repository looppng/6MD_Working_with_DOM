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

// 6.

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

// 7.

const colorButton = document.getElementById('btn7');

const colorDivs = () => {
    var divs = document.querySelectorAll('.div-container .div');
    divs.forEach(function(div) {
        const divStyle = div as HTMLElement;
        divStyle.style.backgroundColor = '#18D5E1';
    })
};

colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000000';
});
colorButton.addEventListener('click', colorDivs);

// 8.

const hoverMode = document.getElementById('div1');

hoverMode.addEventListener('mouseenter', () => {
    hoverMode.style.backgroundColor = 'Red';
});

hoverMode.addEventListener('mouseleave', () => {
    hoverMode.style.backgroundColor = 'Aqua';
});

// 9. optional 

function startCountdown() {
    var counter = 0;
    var div5 = this;

    function updateCounter() {
        if (counter <= 10) {
            div5.innerText = counter;
            counter++;
        }
    }

    var intervalId = setInterval(updateCounter, 1000);

    div5.onmouseleave = function () {
        clearInterval(intervalId);
        div5.innerText = '0';
    };
}

const hoverCount = document.getElementById('div5');
hoverCount.addEventListener('mouseenter', startCountdown);

// 10. optional
