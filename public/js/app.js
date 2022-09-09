let socket = io();

const startingSection = document.querySelector('.starting-section');

const homeBtn = document.querySelector('.home-btn');


let crazyButton = document.getElementById('crazyButton');
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    console.log('click start btn')
    socket.emit('startGame');
});


function hideStartButton() {
    startButton.style.display = "none";
    crazyButton.style.display = "block";
    startingSection.style.display = "none";
}

socket.on('startGame', () => {
    hideStartButton();
});

crazyButton.addEventListener('click', () => {
    socket.emit('crazyIsClicked', {
        offsetLeft: Math.random() * ((window.innerWidth - crazyButton.clientWidth) - 100),
        offsetTop: Math.random() * ((window.innerHeight - crazyButton.clientHeight) - 50)
    });
})


socket.on('crazyIsClicked', (data) => {
    goCrazy(data.offsetLeft, data.offsetTop);
});


function goCrazy(offLeft, offTop) {
    let top, left;

    left = offLeft;
    top = offTop;

    crazyButton.style.top = top + 'px';
    crazyButton.style.left = left + 'px';
    crazyButton.style.animation = "none";
}