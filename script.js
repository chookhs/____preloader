const $loading = document.getElementById('preloader');
const $loadingBg = document.getElementById('preloader-bg');
const $loadingText = document.getElementById('preloader-progress');

const TIMER_INTERVAL = 30;

let progress = 0;
let timerId = setInterval(loading, TIMER_INTERVAL)

function loading() {
    progress++;
    $loadingText.innerText = `${progress}%`;
    $loadingText.style.opacity = -0.01 * progress + 1;
    
    // progress === 0, blur == 70
    // progress === 100, blur == 0
    $loadingBg.style.filter = `blur(${-0.7 * progress + 70}px)`;
    if (progress > 99) {
        clearInterval(timerId);
        
        progress = 0;
        timerId = setInterval(slideUp, TIMER_INTERVAL)
    }
 }

 function slideUp() {
    progress += 3;

    if (progress > 120) {
        clearInterval(timerId);
    }

    $loading.style.top = `${-progress}vh`
 }