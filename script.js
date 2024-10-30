function animations(animation) {
    const element = document.getElementById('animated-element');
    element.classList.remove('fade', 'shake', 'zoom', 'rotate');
    console.log(animation)
    element.classList.add(animation);

}
