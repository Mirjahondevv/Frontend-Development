const display = document.querySelector(".container")

const quest = {
    topishmoq: "yer tagida oltin qoziq",
    word: "sabzi"
}


const word = quest.word.toUpperCase().split("")

document.getElementById("topishmoq").innerText = quest.topishmoq

word.forEach(()=>{
    const box = document.createElement("div");
    box.classList.add("box");
    display.appendChild(box);
});

document.addEventListener("keydown", (event)=>{
    const guessedLetter = event.key.toUpperCase()
    let correctGuess = false;
    word.forEach((letter, i)=>{
        if (letter === guessedLetter){
            const boxes = document.querySelectorAll(".box")
            boxes[i].textContent = guessedLetter
            correctGuess = true;
            boxes[i].style = "animation: rotate 1s forwards"
        }
    })
})
