class Visualizer{
    constructor(x, y, col, sound){
        this.P = createVector(x,y);
        this.amp = new p5.Amplitude;
        this.h = 100;
        this.divAngle = 2;
        this.maxR = 400;
        this.points = [];
        this.fillColor = col;
        this.sound = sound;
        this.amp.setInput(this.sound);
        this.isSetup = false;
    }
    setup(){
        for (let i=0; i<=360; i+=this.divAngle){
            let r = 0;
            this.points.push(r);
        }
        this.isSetup = true;
    }
    draw(){
        
        let L = this.points.length-1;
        let a = this.divAngle;
        fill(this.fillColor);
        noStroke();
        push();
        translate(this.P.x, this.P.y);
        beginShape();
        curveVertex(0, this.h); //linear version
        for (let i = 0; i < L; i++){
            //curveVertex(this.points[i]*cos(a*i), this.points[i]*sin(a*i));  //circular
            curveVertex(a*i, this.h-this.points[i]);  //linear
        }
        curveVertex(a*L, this.h);  //linear
        curveVertex(a*L, this.h);  //linear control point
        endShape(CLOSE);
        pop();
        
    }
    updatePoints(){
        let r = map(this.amp.getLevel(), 0, 1, 0, this.maxR);
        this.points.push(r);
        this.points.shift();
    }
}