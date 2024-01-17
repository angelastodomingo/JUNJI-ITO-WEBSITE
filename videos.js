// Add event listener to handle mouse wheel scrolling
document.querySelector('.slider-container').addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.querySelector('.slider-container').scrollLeft += delta * 50;
});
