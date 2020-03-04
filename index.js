window.addEventListener("load", () => {
  const sounds = [sBubbles,sClay,sConfetti, sGlimmer, sMoon, sUFO];
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#ffdd81",
    "#00205a",
    "#7a6401",
    "#d1eaff",
    "#e683ff",
    "#45ffc7"
  ];


  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      vis0.fillColor = colors[index];
     // createBubble(index);
    });
  });

  /*
  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
  */
});

