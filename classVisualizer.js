class Visualizer{
    constructor(x,y){
        this.P = createVector(x,y);
        this.h = 100;
        this.divAngle = 2;
        this.maxR = 400;
        this.points = [];
        this.fillColor = [0,0,0];
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
        push();
        fill(this.fillColor);
        translate(this.P.x, this.P.y);
        beginShape();
        //curveVertex(0, this.h); //linear
        for (let i = 0; i < L; i++){
            curveVertex(this.points[i]*cos(a*i), this.points[i]*sin(a*i));
            //curveVertex(a*i, this.h-this.points[i]);  //linear
        }
        //curveVertex(360, this.h);  //linear, and control point
        //curveVertex(360, this.h);
        endShape(CLOSE);
        pop();
        noFill();
        noStroke();
    }
    updatePoints(){
        let r = map(amp.getLevel(), 0, 1, 0, this.maxR);
        this.points.shift();
        this.points.push(r);
    }
}