const herName = localStorage.getItem("herName") || "Keito";

const ending = [

`Every fairy tale has a final page...`,

`But I hope ours doesn't end here.`,

`I don't know what the future holds.`,

`Maybe this little story made you smile.`,

`Maybe it surprised you.`,

`Or maybe it simply let you know how much someone truly appreciates you.`,

`No matter what your answer will be...`,

`Thank you for taking the time to read everything I prepared.`,

`If one day you'll allow me...`,

`I'd love to know you even more, make more memories with you, and write new chapters together.`,

`Until then...`,

`I'll continue showing my sincerity through my actions.`,

`Thank you, ${herName}. ❤️`,

`I hope one day... we'll write our own fairy tale together.

— Kai 🌹`

];

const box=document.getElementById("message");

let paragraph=0;

function typeParagraph(){

if(paragraph>=ending.length){

createMagic();

return;

}

const p=document.createElement("p");

box.appendChild(p);

let text=ending[paragraph];

let i=0;

function type(){

if(i<text.length){

p.textContent+=text.charAt(i);

i++;

setTimeout(type,55);

}else{

paragraph++;

setTimeout(typeParagraph,1800);

}

}

type();

}

window.onload=()=>{

setTimeout(typeParagraph,1000);

}

function createMagic(){

for(let i=0;i<80;i++){

const flower=document.createElement("div");

flower.innerHTML=Math.random()>0.5?"🌹":"✨";

flower.style.position="fixed";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-50px";

flower.style.fontSize=(18+Math.random()*25)+"px";

flower.style.transition="6s linear";

flower.style.pointerEvents="none";

document.body.appendChild(flower);

requestAnimationFrame(()=>{

flower.style.transform=
`translateY(${window.innerHeight+150}px)
rotate(${Math.random()*720}deg)`;

});

setTimeout(()=>{

flower.remove();

},6000);

}

}

function restartStory(){

window.location.href="index.html";

}
