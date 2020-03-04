let width = 500; let height = 380;
let sBubbles, sClay, sConfetti, sGlimmer, sMoon, sUFO;
let col = [
  "#ffdd81d0",
  "#00205ad0",
  "#7a6401d0",
  "#d1eaffd0",
  "#e683ffd0",
  "#45ffc7d0"
];
let sounds = [];
let visualizers = [];


function preload(){
 sBubbles = loadSound("./sounds/bubbles.mp3");
 sClay = loadSound("./sounds/clay.mp3");
 sConfetti = loadSound("./sounds/confetti.mp3");
 sGlimmer = loadSound("./sounds/glimmer.mp3");
 sMoon = loadSound("./sounds/moon.mp3");
 sUFO = loadSound("./sounds/ufo.mp3");
 sounds = [sBubbles, sClay, sConfetti, sGlimmer, sMoon, sUFO];
}

function setup(){
  let c = createCanvas(width,height);
  c.parent('cParent');
  angleMode(DEGREES);

  for (let i=0; i < col.length; i++){
    visualizers[i] = new Visualizer(width/2-180, height/2, col[i], sounds[i]);
    visualizers[i].setup();
  }
  amp = new p5.Amplitude();
}  

function draw(){
  background(0);

  visualizers.forEach(vis=>{
    vis.draw();
    vis.updatePoints();
  })

}