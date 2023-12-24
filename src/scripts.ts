// 1.

const div1 : HTMLDivElement = document.querySelector('.div1')
const changeColor1 = () => {
    div1.style.backgroundColor = 'Yellow';
}

document.querySelector('.button1').addEventListener('click', changeColor1);


// 2.

const div2 : HTMLDivElement = document.querySelector('.div2')
const changeText = () => {
    div2.innerText = 'Success'
}

document.querySelector('.button2').addEventListener('click', changeText)


// 3.

const div3 : HTMLDivElement = document.querySelector('.div3')

const hideDiv = () => {
    div3.style.opacity = '0';
}

document.querySelector('.button3').addEventListener('click', hideDiv)


// 4.

const switchButton: HTMLButtonElement = document.querySelector('.button4')
const div4 : HTMLDivElement = document.querySelector('.div4');

let isHidden = false;
const changeDisplay = () => {
    if (isHidden) {
        div4.style.opacity = '1';
    } else {
        div4.style.opacity = '0';
    }
    isHidden = !isHidden;
};

switchButton.addEventListener('click', changeDisplay)


// 5.

const button5 : HTMLButtonElement = document.querySelector('.button5');
const div5 : HTMLDivElement  = document.querySelector('.div5');

const colors = ['Red', 'Green', 'Blue', 'Magenta', 'Yellow'];
let currentColor = '';

const getColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

const changeColor = () => {
    let newColor = getColor();
    while (newColor === currentColor) {
        newColor = getColor()
    }

    div5.style.backgroundColor = newColor;

    currentColor = newColor;
}

button5.onclick = changeColor;


// 6.

const div6 : HTMLDivElement = document.querySelector('.div6');
const btn6 : HTMLButtonElement = document.querySelector('.button6');

let count = 0;
let interval: NodeJS.Timeout;

const intervalUpdate = () => {
    clearInterval(interval)
    interval = setInterval(updateCounter, 1000);
}

const updateCounter = () => {
    count++;
    if (count == 10) {
        clearInterval(interval)
    }
    div6.innerText = count.toString();
}

btn6.addEventListener('click', intervalUpdate)


// 7.

const btn7 : HTMLButtonElement = document.querySelector('.button7');
const allDivs : NodeListOf<HTMLDivElement> = document.querySelectorAll('.div');
const bodyEl : HTMLBodyElement = document.querySelector('body')

const colorDivs = () => {
    allDivs.forEach((div) => {
        div.style.backgroundColor = '#18D5E1';
    })
    bodyEl.style.backgroundColor = '#000000';
}

btn7.addEventListener('click', colorDivs)


// 8.

const hoverDiv : HTMLDivElement = document.querySelector('.div1');
hoverDiv.addEventListener('mouseenter', () => {
    hoverDiv.style.backgroundColor = 'Red';
});
hoverDiv.addEventListener('mouseleave', () => {
    hoverDiv.style.backgroundColor = '#18D5E1';
});


// 9 - extra

const countdownDiv: HTMLDivElement = document.querySelector('.div5');

countdownDiv.addEventListener('mouseenter', () => {
    let counter = 0;


    const updateCounter = () => {
        if ( counter <= 10) {
            countdownDiv.innerText = counter.toString();
            counter++;
        }
    }

    const timer = setInterval(updateCounter, 1000)

    countdownDiv.addEventListener('mouseleave', () => {
        clearInterval(timer)
        countdownDiv.innerText = '0'
    })
})


// 10 - extra

const input = document.querySelector('input')
const output : HTMLParagraphElement = document.querySelector('.inputs__output')

input.addEventListener('input', () => {
    output.innerText = input.value;
})
