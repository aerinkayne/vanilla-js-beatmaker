let width = 500; let height = 380;
let vis1;
let sBubbles, sClay, sConfetti, sGlimmer, sMoon, sUFO;
let amp;

function preload(){
 sBubbles = loadSound("./sounds/bubbles.mp3");
 sClay = loadSound("./sounds/clay.mp3");
 sConfetti = loadSound("./sounds/confetti.mp3");
 sGlimmer = loadSound("./sounds/glimmer.mp3");
 sMoon = loadSound("./sounds/moon.mp3");
 sUFO = loadSound("./sounds/ufo.mp3");
}

function setup(){
  let c = createCanvas(width,height);
  c.parent('cParent');
  angleMode(DEGREES);
  vis0 = new Visualizer(width/2, height/2);
  amp = new p5.Amplitude();
}  

function draw(){
  background(0);
  
  if(!vis0.isSetup){
    vis0.setup();
  }
  vis0.draw();
  vis0.updatePoints();
}