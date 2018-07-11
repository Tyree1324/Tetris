function setup(){
    createCanvas(700,700);
}
function draw(){
    drawtetrisShape1();
    drawtetrisShape2();
    drawtetrisShape3();
    drawtetrisShape4();
    drawtetrisShape5();
    drawtetrisShape6();
    drawtetrisShape7();
}
function drawtetrisShape1(){
    fill('Blue');
    push();
    beginShape();
    vertex(30, 20);
    vertex(85, 20);
    vertex(85, 75);
    vertex(30, 75);
    endShape(CLOSE);
    
    
    beginShape();
    vertex(30, 75);
    vertex(85, 75);
    vertex(85, 130);
    vertex(30, 130);
    endShape(CLOSE);
    
    beginShape();
    vertex(30, 130);
    vertex(85, 130);
    vertex(85, 185);
    vertex(30, 185);
    endShape(CLOSE);
    
    beginShape();
    vertex(30, 185);
    vertex(85, 185);
    vertex(85, 240);
    vertex(30, 240);
    endShape(CLOSE);
    pop();
}

function drawtetrisShape2(){
    fill('Orange');
    translate(0,60);
    push();
    beginShape();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,52);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,52);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();  
}
function drawtetrisShape3(){
    fill('Yellow');
    translate(-123,100);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,55);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(-55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
}
function drawtetrisShape4(){
    fill('Red');
    translate(150,2);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,-55);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
}
function drawtetrisShape5(){
    fill('#ff00a1');
    translate(0,-206);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,55);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,55);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(-55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
}
function drawtetrisShape6(){
    fill('purple');
    translate(150,-110);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(-55,55);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
}
function drawtetrisShape7(){
    fill('#0ad64e');
    translate(-50,100);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(0,55);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
    
    translate(55,0);
    push();
    vertex(100,20);
    vertex(155,20);
    vertex(155,75);
    vertex(100,75);
    endShape(CLOSE);
    pop();
}
    



    