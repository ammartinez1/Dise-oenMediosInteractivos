var name = "flipbook";

var globoX = 400;
var globoY = 800;

var tamañoNubeX = 230;
var tamañoNubeY = 195;
var nube1X = 180;
var nube1Y = 160;
var nube2X = 500;
var nube2Y = 300;
var nube3X = 1000;
var nube3Y = 400;
var nube4X = 1500;
var nube4Y = 187;
var nube5X = 900;
var nube5Y = 100;

var dirX = 1;
var dirY = 2;

var velX = 18;
var velY = 8;

function setup() { 
  createCanvas(1700, 1100);
  frameRate(4);
} 

function draw() { 
  background(235, 235, 235);
  noStroke();
  
  //nubes
    //nube 1
  fill(255, 255, 255);
  ellipse(nube1X, nube1Y, tamañoNubeX, tamañoNubeY);
  ellipse(nube1X - 12, nube1Y + 14, tamañoNubeX, tamañoNubeY);
  ellipse(nube1X + 22, nube1Y + 9, tamañoNubeX, tamañoNubeY);
  ellipse(nube1X + 8, nube1Y + 23, tamañoNubeX, tamañoNubeY);
  ellipse(nube1X + 28, nube1Y - 6, tamañoNubeX, tamañoNubeY);
  ellipse(nube1X + 35, nube1Y + 18, tamañoNubeX, tamañoNubeY);
  ellipse(nube1X + 50, nube1Y, tamañoNubeX, tamañoNubeY);
    //nube 2
  ellipse(nube2X, nube2Y, tamañoNubeX, tamañoNubeY);
  ellipse(nube2X + 22, nube2Y - 10, tamañoNubeX, tamañoNubeY);
  ellipse(nube2X + 44, nube2Y + 5, tamañoNubeX, tamañoNubeY);
  ellipse(nube2X + 17, nube2Y + 13, tamañoNubeX, tamañoNubeY);
  ellipse(nube2X + 50, nube2Y - 12, tamañoNubeX, tamañoNubeY);
    //nube 3
  ellipse(nube3X, nube3Y, tamañoNubeX, tamañoNubeY);
  ellipse(nube3X + 32, nube3Y + 5, tamañoNubeX, tamañoNubeY);
  ellipse(nube3X + 39, nube3Y + 24, tamañoNubeX, tamañoNubeY);
  ellipse(nube3X + 12, nube3Y + 12, tamañoNubeX, tamañoNubeY);
  ellipse(nube3X + 12, nube3Y + 31, tamañoNubeX, tamañoNubeY);
  ellipse(nube3X - 7, nube3Y + 18, tamañoNubeX, tamañoNubeY);
    //nube 4
  ellipse(nube4X, nube4Y, tamañoNubeX, tamañoNubeY);
  ellipse(nube4X - 10, nube4Y + 13, tamañoNubeX, tamañoNubeY);
  ellipse(nube4X - 27, nube4Y + 1, tamañoNubeX, tamañoNubeY);
  ellipse(nube4X - 15, nube4Y - 14, tamañoNubeX, tamañoNubeY);
    //nube 5
  fill(255, 255, 255);
  ellipse(nube5X, nube5Y, tamañoNubeX, tamañoNubeY);
  ellipse(nube5X - 12, nube5Y + 14, tamañoNubeX, tamañoNubeY);
  ellipse(nube5X + 22, nube5Y + 9, tamañoNubeX, tamañoNubeY);
  ellipse(nube5X + 8, nube5Y + 23, tamañoNubeX, tamañoNubeY);
  ellipse(nube5X + 28, nube5Y - 6, tamañoNubeX, tamañoNubeY);
  ellipse(nube5X + 35, nube5Y + 18, tamañoNubeX, tamañoNubeY);
  ellipse(nube5X + 50, nube5Y, tamañoNubeX, tamañoNubeY);
  
  nube1X = nube1X + 3;
  nube2X = nube2X + 3;
  nube3X = nube3X + 2;
  nube4X = nube4X + 2;
  nube5X = nube5X + 2;
  
  //edificio
  fill(70, 70, 70);
    //edificio1
  rect(0, 550, 200, 550);
    //edificio2
  rect(200, 650, 200, 450);
  beginShape();
  vertex(200, 655);
  vertex(240, 580);
  vertex(240, 565);
  vertex(260, 565);
  vertex(260, 550);
  vertex(300, 510);
  vertex(340, 550);
  vertex(340, 565);
  vertex(360, 565);
  vertex(360, 580);
  vertex(400, 655);
  endShape(CLOSE);
    //edificio3
  rect(400, 650, 120, 450);
  rect(410, 630, 100, 20);
  ellipse(460, 630, 80, 80);
  triangle(440, 620, 460, 560, 480, 620);
    //edificio 4, 5, 6, 7, 8, 9, 10, 11 y 12
  beginShape();
      //edificio4
  vertex(520, 1100);
  vertex(520, 700);
  vertex(600, 700);
  vertex(600, 580);
  vertex(620, 580);
  vertex(740, 670);
      //edificio 5
  vertex(740, 500);
  vertex(760, 500);
  vertex(760, 460);
  vertex(830, 460);
  vertex(830, 500);
  vertex(850, 500);
      //edificio 6
  vertex(850, 800);
  vertex(860, 800);
  vertex(860, 600);
  vertex(980, 600);
      //edificio 7
  vertex(980, 640);
  vertex(990, 640);
  vertex(1030, 670);
      //edificio 8
  vertex(1030, 580);
  vertex(1040, 580);
  vertex(1040, 540);
  vertex(1050, 540);
  vertex(1080, 500);
  vertex(1110, 540);
  vertex(1120, 540);
  vertex(1120, 580);
  vertex(1130, 580);
      //edificio 9
  vertex(1130, 650);
  vertex(1140, 650);
  vertex(1140, 630);
  vertex(1160, 630);
  vertex(1160, 610);
  vertex(1180, 610);
  vertex(1180, 590);
  vertex(1300, 590);
  vertex(1300, 610);
  vertex(1320, 610);
  vertex(1320, 630);
  vertex(1340, 630);
  vertex(1340, 650);
  vertex(1350, 650);
      //edificio 10
  vertex(1350, 510);
  vertex(1340, 510);
  vertex(1340, 500);
  vertex(1370, 500);
  vertex(1370, 490);
  vertex(1365, 490);
  vertex(1365, 485);
  vertex(1360, 460);
  vertex(1340, 440);
  vertex(1360, 440);
  vertex(1370, 420);
  vertex(1430, 420);
  vertex(1440, 440);
  vertex(1460, 440);
  vertex(1440, 460);
  vertex(1435, 485);
  vertex(1435, 490);
  vertex(1430, 490);
  vertex(1430, 500);
  vertex(1460, 500);
  vertex(1460, 510);
  vertex(1450, 510);
      //edificio 11
  vertex(1450, 750);
  vertex(1470, 750);
  vertex(1470, 680);
  vertex(1490, 680);
  vertex(1490, 610);
  vertex(1510, 610);
  vertex(1510, 520);
  vertex(1520, 520);
  vertex(1520, 610);
  vertex(1540, 610);
  vertex(1540, 680);
  vertex(1560, 680);
  vertex(1560, 750);
  vertex(1580, 750);
      //edificio 12
  vertex(1580, 600);
  vertex(1700, 480);
  vertex(1700, 1100);
  endShape(CLOSE);
  
  //ventanas edificio 1
  fill(217, 217, 217);
  for (var posY1 = 560; posY1 <= 1090; posY1 = posY1 + 20) {
    for(var posx1 = 15; posx1 <= 180; posx1 = posx1 + 20) {
      rect(posx1, posY1, 10, 10);
    }
  }
  
  //ventanas edificio 2
  strokeWeight(2);
  stroke(255, 255, 255);
  noFill();
  for (var posY2 = 660; posY2 <= 1090; posY2 = posY2 + 60) {
    for(var posx2 = 215; posx2 <= 380; posx2 = posx2 + 30) {
      rect(posx2, posY2, 10, 30);
    }
  }
  rect(260, 590, 80, 40);
  
  //ventanas edificio 3
  for(var posx3 = 410; posx3 <= 515; posx3 = posx3 + 10) {
      line(posx3, 655, posx3, 1100);
  }
  rect(420, 640, 80, 5);
  
  //ventanas edificio 4
  for (var posY4 = 715; posY4 <= 1090; posY4 = posY4 + 80) {
      rect(535, posY4, 50, 50);
  }
  line(610, 590, 610, 1100);
  for(var posY5 = 610; posY5 <= 1090; posY5 = posY5 + 30){
    line(630, posY5, 730, posY5 + 75);    
  }
  
  //ventanas edificio 5
  for (var posY6 = 510; posY6 <= 1090; posY6 = posY6 + 60) {
    for(var posx6 = 750; posx6 <= 830; posx6 = posx6 + 20) {
      rect(posx6, posY6, 10, 30);
    }
  }
  rect(770, 470, 20, 20);
  rect(800, 470, 20, 20);
  
  //ventanas edificio 6
  for (var posY7 = 615; posY7 <= 1090; posY7 = posY7 + 50) {
      rect(890, posY7, 60, 20);
  }
  line(870, 610, 870, 1090);
  line(970, 610, 970, 1090);
 
  //ventana edificio 7
  line(990, 650, 990, 1090);
  line(990, 650, 1020, 675);
  line(1020, 675, 1020, 1090);
  
  //ventanas edificio 8
  fill(217, 217, 217);
  for (var posY8 = 590; posY8 <= 1090; posY8 = posY8 + 21) {
    for(var posx8 = 1043; posx8 <= 1115; posx8 = posx8 + 21) {
      rect(posx8, posY8, 10, 10);
    }
  }
  for (var posy8 = 550; posy8 <= 570; posy8 = posy8 + 20) {
    for(var posX8 = 1055; posX8 <= 1095; posX8 = posX8 + 20) {
      rect(posX8, posy8, 8, 8);
    }
  }
  
  //ventanas edificio 9
  noFill();
  for(var posx9 = 1140; posx9 <= 1340; posx9 = posx9 + 13) {
      line(posx9, 655, posx9, 1090);
  }
  rect(1150, 640, 180, 5);
  rect(1170, 620, 140, 5);
  
  //ventana edificio 10
  for (var posY10 = 520; posY10 <= 1090; posY10 = posY10 + 60) {
    for(var posx10 = 1365; posx10 <= 1440; posx10 = posx10 + 30) {
      rect(posx10, posY10, 10, 30);
    }
  }
  
  //ventana edificio 11
  for (var posY11 = 690; posY11 <= 1090; posY11 = posY11 + 20) {
      line(1480, posY11, 1550, posY11);
  }
  rect(1500, 620, 30, 50);
  
  //ventana edificio 12
  for(var posY12 = 620; posY12 <= 1200; posY12 = posY12 + 30){
    line(1590, posY12, 1690, posY12 - 100);    
  }

  //globo
  noStroke();
  fill(0, 0, 0);
  ellipse(globoX, globoY, 250, 300);
  beginShape();
  vertex(globoX - 85, globoY + 110);
  vertex(globoX + 85, globoY + 110);
  vertex(globoX + 40, globoY + 173);
  vertex(globoX - 40, globoY + 173);
  endShape(CLOSE);
  //canasta
  beginShape();
  vertex(globoX- 40, globoY + 221);
  vertex(globoX + 40, globoY + 221);
  vertex(globoX + 38, globoY + 266);
  vertex(globoX + 30, globoY + 270);
  vertex(globoX - 30, globoY + 270);
  vertex(globoX - 38, globoY + 266);
  endShape(CLOSE);
  //cuerdas
  rect(globoX - 40, globoY + 173, 5, 49);
  rect(globoX + 35, globoY + 173, 5, 49); 
  //colores globo
  fill(255, 255, 255);
  ellipse(globoX, globoY, 169, 300);
  beginShape();
  vertex(globoX - 58, globoY + 110);
  vertex(globoX + 58, globoY + 110);
  vertex(globoX + 13, globoY + 173);
  vertex(globoX - 13, globoY + 173);
  endShape(CLOSE);
  fill(0, 0, 0);
  ellipse(globoX, globoY, 93, 300);
  beginShape();
  vertex(globoX - 32, globoY + 110);
  vertex(globoX + 32, globoY + 110);
  vertex(globoX, globoY + 173);
  vertex(globoX, globoY + 173);
  endShape(CLOSE);
  //persona dentro del globo
  ellipse(globoX, globoY + 200, 20, 20);
  ellipse(globoX, globoY + 230, 40, 40);
  
  globoX = globoX + (velX * dirX);
  globoY = globoY - (velY * dirY);
  
  if(globoX > 550 && globoX < 600 || globoX >700 && globoX <750){
    dirY = - dirY;
  }
    
  if(frameCount < 70){
    saveCanvas(name + frameCount, 'jpg');
  }
}
