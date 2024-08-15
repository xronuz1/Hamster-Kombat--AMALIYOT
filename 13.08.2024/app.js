let areaDiv = document.querySelector('#area');

areaDiv.addEventListener('click', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    let firstButton = document.querySelector('button');
    let secondButton = document.querySelectorAll('button')[1];

    firstButton.innerText = x;
    secondButton.innerText = y;
})