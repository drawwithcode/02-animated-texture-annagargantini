function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);
  
    for (let h = windowHeight/5; h < windowHeight*4/5; h += 25){ 
    
    drawLine(h);
  }
}


function drawLine(h){
  
  translate(sin(frameCount/50)*10, 0); //la riga di cerchi oscilla 

  for (let x = windowWidth/3; x < windowWidth*2/3; x += 25){ 
    for (let i = 1; i < (sin(-x/2)*6) || i < (sin(x/2)*6); i ++){ //in questo modo lo stroke non è mai == 0 
      
  noFill();
  stroke(240);
  strokeWeight(i);
  
  ellipse(x, h, sin(frameCount/50)*50); // riga di cerchi, raggio varia al ritmo della traslazione

  }
  
}
}


