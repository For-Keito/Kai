// Get her name
const herName = localStorage.getItem("herName") || "Keito";

// Welcome message
document.getElementById("welcome").innerHTML =
`Welcome to the Enchanted Garden, <strong>${herName}</strong>. 🌹`;

const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

// Hide button at first
nextBtn.style.display = "none";

// Remove previous selections
function clearSelection() {
    document.querySelectorAll(".flower").forEach(f => {
        f.classList.remove("selected");
    });
}

// Flower selection
function pickFlower(type) {

    clearSelection();

    event.currentTarget.classList.add("selected");

    switch(type){

        case "sunflower":

            message.innerHTML =
            "🌻 The sunflower shines brightly, just like your smile. But the garden whispers that another flower is waiting...";

            break;

        case "tulip":

            message.innerHTML =
            "🌷 A graceful choice. The tulip bows politely, but the magic hasn't awakened yet.";

            break;

        case "rose":

            message.innerHTML =
            "🌹 The enchanted rose glows softly. It reminds the garden of courage and sincere love.";

            nextBtn.style.display="inline-block";

            break;

        case "lily":

            message.innerHTML =
            "🤍 The White Lily begins to glow beautifully. It feels gentle, elegant, and pure... just like the person this story was made for.";

            nextBtn.style.display="inline-block";

            createMagic();

            break;

        case "daisy":

            message.innerHTML =
            "🌼 The daisy dances happily in the breeze, filling the garden with warmth.";

            break;

        case "cherry":

            message.innerHTML =
            "🌸 Cherry blossoms swirl through the air, painting the garden with magic.";

            break;

    }

}

// Continue
function nextChapter(){

    document.querySelector(".container").style.transition = "1s";
    document.querySelector(".container").style.opacity = "0";
    document.querySelector(".container").style.transform = "scale(.95)";

    setTimeout(()=>{

        window.location.href="games.html";

    },1200);

}

// Magical sparkles
function createMagic(){

    for(let i=0;i<25;i++){

        const sparkle=document.createElement("div");

        sparkle.innerHTML="✨";

        sparkle.style.position="fixed";
        sparkle.style.left=Math.random()*100+"vw";
        sparkle.style.top=Math.random()*100+"vh";
        sparkle.style.fontSize=(18+Math.random()*20)+"px";
        sparkle.style.pointerEvents="none";
        sparkle.style.opacity="1";
        sparkle.style.transition="2s";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.style.transform="translateY(-80px) scale(0)";
            sparkle.style.opacity="0";

        },100);

        setTimeout(()=>{

            sparkle.remove();

        },2200);

    }

}
