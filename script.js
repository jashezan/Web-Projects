let audioa = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3");
let audios = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-arcade-retro-game-over-213.mp3");
let audiod = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-fast-rocket-whoosh-1714.mp3");
let audioj = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-dog-barking-twice-1.mp3");
let audiok = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-wild-lion-animal-roar-6.mp3");
let audiol = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-little-bird-calling-chirp-23.mp3");

let check = (s) => {
    switch(s){
        case 'a':
            audioa.play();
            break;
        case 's':
            audios.play();
            break;
        case 'd':
            audiod.play();
            break;
        case 'j':
            audioj.play();
            break;
        case 'k':
            audiok.play();
            break;
        case 'l':
            audiol.play();
            break;
        default:
            console.log(```ou pressed ${s} which in not a tone word```);
    }
}

let doc = document.querySelectorAll("button");
for(let i=0; i<doc.length; i++){
    // doc[i].addEventListener("click", ()=> audio[i].play());
    doc[i].addEventListener("keypress", (e)=> check(e.key));
}
