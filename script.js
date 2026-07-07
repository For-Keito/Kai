function openBook(){

    const name = document.getElementById("name").value.trim();

    if(name===""){

        alert("Please enter your name first. ❤️");
        return;

    }

    // Save her name
    localStorage.setItem("herName", name);

    // Fade animation
    document.querySelector(".book").style.transition="1.2s";
    document.querySelector(".book").style.opacity="0";
    document.querySelector(".book").style.transform="scale(.92)";

    // Create magical glow
    const glow=document.createElement("div");

    glow.style.position="fixed";
    glow.style.inset="0";
    glow.style.background="radial-gradient(circle,#ffe8a3 0%,rgba(255,255,255,0)70%)";
    glow.style.opacity="0";
    glow.style.pointerEvents="none";
    glow.style.transition="1.5s";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.style.opacity="1";

    },100);

    // Open next chapter
    setTimeout(()=>{

        window.location.href="flowers.html";

    },1800);

}
