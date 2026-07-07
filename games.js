const herName = localStorage.getItem("herName") || "Keito";

document.getElementById("welcome").innerHTML =
`Welcome back, <strong>${herName}</strong>. 📚`;

let score = 0;
let answered = [false, false, false];

const progress = document.getElementById("progressFill");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

// ==========================
// Answer Function
// ==========================

function answer(question, choice){

    if(answered[question-1]) return;

    let correct = false;

    if(question===1 && choice==="lily") correct = true;

    if(question===2 && choice==="magic") correct = true;

    if(question===3 && choice==="actions") correct = true;

    answered[question-1]=true;

    if(correct){

        score++;

        createMagic();

        result.innerHTML="✨ The library grows brighter...";

    }else{

        result.innerHTML="🌹 Even fairy tales have wrong turns. Keep believing.";

    }

    progress.style.width=(score/3*100)+"%";

    if(score===3){

        result.innerHTML=
        "📖✨ The library has awakened! The final chapter is now unlocked.";

        nextBtn.style.display="inline-block";

        createCelebration();

    }

}

// ==========================
// Continue
// ==========================

function nextChapter(){

    document.querySelector(".container").style.transition="1s";

    document.querySelector(".container").style.opacity="0";

    document.querySelector(".container").style.transform="scale(.95)";

    setTimeout(()=>{

        window.location.href="letter.html";

    },1200);

}

// ==========================
// Small Magic
// ==========================

function createMagic(){

    for(let i=0;i<20;i++){

        const star=document.createElement("div");

        star.innerHTML=Math.random()>0.5?"✨":"⭐";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.fontSize=(18+Math.random()*20)+"px";

        star.style.pointerEvents="none";

        star.style.opacity="1";

        star.style.transition="2s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.style.transform="translateY(-80px) scale(0)";

            star.style.opacity="0";

        },100);

        setTimeout(()=>{

            star.remove();

        },2200);

    }

}

// ==========================
// Celebration
// ==========================

function createCelebration(){

    for(let i=0;i<80;i++){

        const item=document.createElement("div");

        const icons=["🌹","🤍","✨","📖","🕯"];

        item.innerHTML=icons[Math.floor(Math.random()*icons.length)];

        item.style.position="fixed";

        item.style.left=Math.random()*100+"vw";

        item.style.top="-50px";

        item.style.fontSize=(20+Math.random()*20)+"px";

        item.style.pointerEvents="none";

        item.style.transition="5s linear";

        document.body.appendChild(item);

        requestAnimationFrame(()=>{

            item.style.transform=
            `translateY(${window.innerHeight+120}px)
            rotate(${Math.random()*720}deg)`;

        });

        setTimeout(()=>{

            item.remove();

        },5000);

    }

}

// ==========================
// Greeting animation
// ==========================

window.onload=()=>{

    document.querySelector(".container").style.opacity="0";

    document.querySelector(".container").style.transform="translateY(40px)";

    setTimeout(()=>{

        document.querySelector(".container").style.transition="1.2s";

        document.querySelector(".container").style.opacity="1";

        document.querySelector(".container").style.transform="translateY(0)";

    },200);

};
