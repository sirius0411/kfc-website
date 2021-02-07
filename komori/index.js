const loadingList = ['static/loading_idol.gif', 'static/loading_normal.gif'];
document.getElementById('loadingImage').src = loadingList[Math.floor(Math.random() * 2)];

const container = document.getElementsByClassName('dropContainer')[0];
container.addEventListener('animationend', (e) => {
    if (e.target === container) {
        container.remove();
    }
});

document.getElementsByClassName('drop')[0].addEventListener('animationend', () => {
    document.getElementById('player').play();
})

const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    const player = document.getElementById('player');
    if (!player.paused && !player.ended && 0 < player.currentTime) {
        logo.classList.add('disable');
        player.pause();
    } else {
        logo.classList.remove('disable');
        player.play();
    }
});

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var centerX = windowWidth / 2;
var centerY = windowHeight / 2;

window.addEventListener('resize', (e) => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
})

const left = document.getElementsByClassName('left')[0];
const avatar = document.getElementById('komori');

const mainContainer = document.getElementsByClassName('main')[0];
mainContainer.addEventListener('mousemove', function (e) {
    var event = e || window.event;
    var x = event.clientX - centerX;
    var y = event.clientY - centerY;
    // left.style.transform = `translateX(${x / windowWidth * 10}px)`;
    avatar.style.transform = `rotateY(${x / windowWidth * 10}deg) translateX(${x / windowWidth * 10}px)`;
    // mainContainer.style.setProperty('--translateX', '' + (x / windowWidth * 40));
    // console.log(`x ${event.clientX}  y ${event.clientY}`)
});

const accept = document.getElementById('accept');
accept.addEventListener('click', () => {
    for (i of document.getElementsByClassName('loading')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('dropContainer')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('drop')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('pulse1')) {
        i.style.animationPlayState = 'initial'
    }
    for (i of document.getElementsByClassName('pulse2')) {
        i.style.animationPlayState = 'initial'
    }
    document.getElementsByClassName('agreement')[0].remove();
    
});