// animation text
const text = document.querySelector('.fancy'),
      strText = text.textContent,splitText = strText.split("");
text.textContent = "";
// injecte les caractères une à une dans un span
for (let i=0; i<splitText.length; i++){
  text.innerHTML += "<span class='spn'>" + splitText[i] + "</span>";
}

let char = 0,
    timer = setInterval(onTick, 50);
// effet d'apparition
function onTick(){
  const span = text.getElementsByClassName('spn')[char];
  span.classList.add('fade');
  char++
  if (char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}


// animation machine à écrire

/* let j = 0;
let txt = 'Graphic & Web Designer';
let speed = 100;

function typeWriter() {
  if (j < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
} */

function sleep(ms){
  return new Promise ((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Web Designer", "Graphic Designer"],
      el = document.getElementById("typeWriter");

let sleepTime = 100,
    curPhraseIndex = 0;
const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i<curWord.length; i++){
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 20);

    for (let i = curWord.length; i>0; i--){
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    if (curPhraseIndex === phrases.length - 1){
      curPhraseIndex = 0;
    } else{
      curPhraseIndex++;
    }

  }
}

writeLoop();