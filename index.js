const buttons = document.getElementsByClassName('drum');

// Масиви для звуків і зображень
const sounds = {
    w: "crash.mp3",
    a: "kick-bass.mp3",
    s: "snare.mp3",
    d: "tom-1.mp3",
    j: "tom-2.mp3",
    k: "tom-3.mp3",
    l: "tom-4.mp3"
};

const images = {
    w: "crash.png",
    a: "kick.png",
    s: "snare.png",
    d: "tom1.png",
    j: "tom2.png",
    k: "tom3.jpg",
    l: "tom4.jpg"
};

function pressButton(key){
    const soundFile = sounds[key];

        if (soundFile) {
            const audio = new Audio(`sounds/${soundFile}`);
            audio.play();
            const pressedButton = document.querySelector(`.${key}`);
            pressedButton.classList.add("pressed");
            setTimeout(function(){
                pressedButton.classList.remove("pressed");
            }, 400)
        } else {
            alert("error");
        }
}

// Проходимо по кожній кнопці
Array.from(buttons).forEach(button => {

    const key = button.className.split(' ')[0]; 
    const imageFile = images[key];
    button.style.backgroundImage = `url('images/${imageFile}')`;


    button.addEventListener("click", function() {
        const key = this.className.split(' ')[0]; 
        pressButton(key);
        
    });
});

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    const buttonPressed = document.querySelector(`.${keyPressed}`);
   buttonPressed.focus();
    if (buttonPressed) {
        const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        buttonPressed.dispatchEvent(clickEvent);
    }
});
