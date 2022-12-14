let textArea = document.querySelector("textarea")
let writtenChar = document.querySelector(".written")
let remainingChar = document.querySelector(".remaining")

textArea.addEventListener("input", ()=> {
    writtenChar.innerText = textArea.value.length;
    remainingChar.innerText = 250 - writtenChar.innerText

    if (remainingChar.innerText < 0) {
        remainingChar.style.color = "#FF0000";
    }
    
})