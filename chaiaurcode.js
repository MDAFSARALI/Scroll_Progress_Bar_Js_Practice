const scroll_indicator = document.getElementsByClassName('scroll-indicator')[0];
const progress = document.getElementsByClassName('progress')[0];

function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}

window.addEventListener('scroll', update);
