window.addEventListener("load", () => {
  const pads = document.querySelectorAll(".pads div");

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].play();  //in preload of sketch file
    });
  });
});

