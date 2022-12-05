const memory = document.getElementById('memory');
const mainContainer = document.getElementById('main-container');
const textRus = document.getElementById('text-rus');
const textEng = document.getElementById('text-eng');
const numberOfMemory = document.getElementById('number');
const newMemoryBtn = document.getElementById('new-btn');

// getting new Memory onload and with button

function getNewMemory() {
    loading();
    let getRandomNumber = Math.floor(Math.random()*allMemories.length);
    memory.src=`img/memory(${getRandomNumber}).jpg`
    textRus.textContent = allMemories[getRandomNumber].textrus;
    textEng.textContent = allMemories[getRandomNumber].texteng;
    if (getRandomNumber < 9) {
        getRandomNumber = getRandomNumber + 1;
        numberOfMemory.textContent = '0' + getRandomNumber.toString();
    } else {
        numberOfMemory.textContent = getRandomNumber + 1;
    }
    complete();
}

getNewMemory();

// event for button

newMemoryBtn.addEventListener('click',getNewMemory)


// show Loading

function loading() {
    loader.hidden = false;
    mainContainer.hidden = true;
}

// hide loading

function complete() {
    loader.hidden = true;
    mainContainer.hidden = false;
}
