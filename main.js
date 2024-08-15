function addThree() {
    let myspan = document.querySelector("#coin_energy");
    
    if (Number(myspan.innerText) < 6498) {
        myspan.innerText = Number(myspan.innerText) + 3;
    } else if (Number(myspan.innerText) == 6499 || Number(myspan.innerText) == 6498) {
        myspan.innerText = 6500;
    }

    localStorage.setItem("coin_energy", JSON.stringify(myspan.innerText));
}

    setInterval(addThree, 1000);

    function tap() {

    let totapDiv = document.querySelector(".totap");
    let myspan1 = document.querySelector("#coin_energy");
    let myCoins = document.querySelector("#coins");




    if (myspan1.innerText > 10) {
        myspan1.innerText = Number(myspan1.innerText) - 11;
        myCoins.innerText = Number(myCoins.innerText) + 11;
    }
}


function earn(){
    let mySumSpan = document.querySelector("#earn_per_hour");
    let sum_per_hour = Number(mySumSpan.innerText)*1000;  // 853210
    
    let sum_per_sek = Math.floor(sum_per_hour/3600);
    let myCoins = document.querySelector("#coins");
    myCoins.innerText =  Number(myCoins.innerText) + sum_per_sek;
    
    localStorage.setItem('collected_coins', JSON.stringify(myCoins.innerText));
}

setInterval(earn, 1000);

let myCoins = document.querySelector("#coins");
let myspan1 = document.querySelector("#coin_energy");

window.onload = () => {
    let savedCoins = JSON.parse(localStorage.getItem('collected_coins'));
    if (savedCoins) {
        myCoins.innerText = savedCoins;
    }

    let savedEnergy = JSON.parse(localStorage.getItem('coin_energy'));
    if (savedEnergy) {
        myspan1.innerText = savedEnergy;
    }
}

let totapDiv = document.querySelector('.totap');

totapDiv.addEventListener('click', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    let myappeareSpan = document.createElement('span');
    totapDiv.appendChild(myappeareSpan);
    myappeareSpan.innerText = "+11";
    // myappeareSpan.style.cssText = `
    // transform: translateX(${x}) translateY(${y})
    // `;
    
    // myappeareSpan.setAttribute('id', 'up');
    myappeareSpan.id = 'up';
    setTimeout(() => {
        myappeareSpan.remove();
    }, 500);
});

// let a = 'salom'
// `Jaxongirga opamdan ${a} ayt`;