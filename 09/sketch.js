
var saltar = false;

var Mago;
var elMago = [];
var numMago = 1;

var Ogro;
var losOgros = [];
var numOgros = 5;



function setup() { 
  createCanvas(800, 600);
  noStroke();
  
  textAlign(CENTER, CENTER);
  
  //Mago = new Maguito();
  for (var t = 0; t < numMago; t = t + 1) {
    elMago[t] = new Maguito();
  }
  //Ogro = new Ogrito();
  for (var i = 0; i < numOgros; i = i + 1) {
    losOgros[i] = new Ogrito();
  }
} 

function draw() { 
  background(94, 94, 94);
  
  //suelo
  fill(51, 47, 44);
  rect(0, 500, 800, 100);
  
  //montañas
  fill(179, 179, 179);
  beginShape();
	vertex(0, 500);
  vertex(0, 400);
  vertex(20, 440);
	vertex(80, 300);
	vertex(120, 420);
	vertex(170, 100);
	vertex(220, 400);
	vertex(240, 360);
	vertex(270, 470);
	vertex(370, 380);
	vertex(470, 470);
	vertex(480, 300);
	vertex(500, 400);
	vertex(540, 40);
	vertex(580, 370);
  vertex(620, 260);
	vertex(680, 460);
	vertex(740, 400);
  vertex(800, 450);
	vertex(800, 500);
	endShape(CLOSE);
  
  //nevados
  fill(255, 255, 255);
  beginShape();
  vertex(80, 300);
  vertex(100, 360);
  vertex(90, 340);
  vertex(87, 350);
  vertex(84, 330);
  vertex(80, 360);
  vertex(76, 340);
  vertex(72, 350);
  vertex(70, 330);
  vertex(56, 360);
  endShape(CLOSE);
  beginShape();
  vertex(170, 100);
  vertex(186, 200);
  vertex(180, 240);
  vertex(175, 210);
  vertex(172, 230);
  vertex(166, 200);
  vertex(160, 240);
  vertex(155, 220);
  vertex(149, 235);
  endShape(CLOSE)
  
  //luna
  fill(255, 255, 255, 20);
  ellipse(400, 100, 210, 210);
  fill(255, 255, 255, 20);
  ellipse(400, 100, 200, 200);
  fill(255, 255, 255, 20);
  ellipse(400, 100, 190, 190);
  fill(255, 255, 255, 30);
  ellipse(400, 100, 180, 180);
  fill(255, 255, 255, 40);
  ellipse(400, 100, 170, 170);
  fill(255, 255, 255, 50);
  ellipse(400, 100, 160, 160);
  fill(255, 255, 255);
  ellipse(400, 100, 150, 150);
  
  for (var t = 0; t < numMago; t = t + 1) {
  if (keyIsPressed && keyCode == RIGHT_ARROW) {
      elMago[t].moverseDerecha();
    } else if(keyIsPressed && keyCode == LEFT_ARROW){
      elMago[t].moverseIzquierda();
    } if(keyIsPressed && keyCode == UP_ARROW){
      elMago[t].Saltar();
    } if(keyIsPressed && keyCode == CONTROL){
      elMago[t].dispararDerecha();
    } else if(keyIsPressed && keyCode == ALT){
      elMago[t].dispararIzquierda();
    }
    elMago[t].dibujarse();
    
    //losOgros matan al mago 
    for (var i = 0; i < numOgros; i = i + 1) {
      if( elMago[t].x > losOgros[i].x && elMago[t].y > losOgros[i].y ||
          elMago[t].x < losOgros[i].x + 60 && elMago[t].y < losOgros[i].y) {
        		elMago[t].morir();
      }
    } 
  }
  
  //Mago.dibujarse();
  //Ogro.dibujarse();
  //Ogro.moverse();
  for (var i = 0; i < numOgros; i = i + 1) {
    losOgros[i].dibujarse();
    losOgros[i].moverse();
    //losOgros matan al mago 
   for (var t = 0; t < numMago; t = t + 1) {
      if( elMago[t].dispararIzquierda.x + 120 > losOgros[i].x && elMago[t].dispararIzquierda.y > losOgros[i].y ||
          elMago[t].dispararIzquierda.x + 120 < losOgros[i].x && elMago[t].dispararIzquierda.y < losOgros[i].y + 76 ||
        elMago[t].dispararDerecha.x - 48> losOgros[i].x && elMago[t].dispararDerecha.y > losOgros[i].y ||
          elMago[t].dispararDerecha.x - 48< losOgros[i].x && elMago[t].dispararDerecha.y < losOgros[i].y + 76) {
        		losOgros[i].morir();
      }
    } 
  }
	
}

//mago
function Maguito(){
  this.x = random(0, 600);
  this.y = 470;
  this.dirY = 1;
  this.viva = true;
  
  this.dibujarse = function(){
    if(this.viva == true){
      noStroke();
		//cara
		fill(242, 193, 153);
		rect(this.x, this.y, 72, 86);
		//vestimenta
		fill(9, 7, 140);
    	//abrigo
		beginShape();
		vertex(this.x, this.y + 39);
		vertex(this.x + 72, this.y + 39);
		vertex(this.x + 79, this.y + 87);
		vertex(this.x - 7, this.y + 87);
		endShape(CLOSE);
	    //gorro
		beginShape();
		vertex(this.x, this.y);
		vertex(this.x + 72, this.y);
		vertex(this.x + 36, this.y - 48);
		vertex(this.x + 11, this.y - 37);
		vertex(this.x + 29, this.y - 38);
		endShape(CLOSE);
		//barba
		fill(255, 255, 255);
		ellipse(this.x + 19, this.y + 38, 16, 16);
		ellipse(this.x + 31, this.y + 38, 16, 16);
		ellipse(this.x + 43, this.y + 38, 16, 16);
		ellipse(this.x + 54, this.y + 38, 16, 16);
		ellipse(this.x + 24, this.y + 47, 16, 16);
		ellipse(this.x + 35, this.y + 47, 16, 16);
		ellipse(this.x + 48, this.y + 47, 16, 16);
		ellipse(this.x + 31, this.y + 55, 16, 16);
		ellipse(this.x + 42, this.y + 55, 16, 16);
		ellipse(this.x + 37, this.y + 61, 16, 16);
		//ojos
		fill(0, 0, 0);
		ellipse(this.x + 29, this.y + 14, 5, 5);
		ellipse(this.x + 44, this.y + 14, 5, 5);
    }
  }
  this.moverseDerecha = function(){
  	this.x = this.x + 3;
 	}
	this.moverseIzquierda = function(){
   	this.x = this.x - 3;
 	}		
  this.Saltar = function(){
    this.y = this.y - (2*this.dirY);
    if(this.y < 320 || this.y > 480){
      this.dirY = -this.dirY;
    } 
  }
  this.dispararDerecha = function(){
    if(this.viva == true){
    //mano
    fill(242, 193, 153);
		ellipse(this.x - 23, this.y + 32, 7, 7);
		//varita
		fill(74, 42, 0);
		beginShape();
		vertex(this.x - 25, this.y + 30);
		vertex(this.x - 48, this.y + 14);
		vertex(this.x - 50, this.y + 17);
		vertex(this.x - 26, this.y + 34);
		endShape(CLOSE);
		//manga
		fill(9, 7, 140);
		beginShape();
		vertex(this.x, this.y + 39);
		vertex(this.x - 22, this.y + 27);
		vertex(this.x - 21, this.y + 38);
		vertex(this.x, this.y + 47);
		endShape(CLOSE);
    }
  }
  this.dispararIzquierda = function(){
    if(this.viva == true){
      //mano
    fill(242, 193, 153);
		ellipse(this.x + 95, this.y + 32, 7, 7);
		//varita
		fill(74, 42, 0);
		beginShape();
		vertex(this.x + 97, this.y + 30);
		vertex(this.x + 120, this.y + 14);
		vertex(this.x + 122, this.y + 17);
		vertex(this.x + 98, this.y + 34);
		endShape(CLOSE);
		//manga
		fill(9, 7, 140);
		beginShape();
		vertex(this.x + 72, this.y + 39);
		vertex(this.x + 94, this.y + 27);
		vertex(this.x + 93, this.y + 38);
		vertex(this.x + 72, this.y + 47);
		endShape(CLOSE);
    }
  }
  this.morir = function(){
    this.viva = false;
  }
}
 //ogro
function Ogrito(){
  this.x = random(-300, -110);
  this.y = 470;
  this.dirX = 1;
  this.vel = random(1, 2);
  this.viva = true;
  
  this.dibujarse = function(){
    if(this.viva == true){
      noStroke();
		//cara y brazo
		fill(48, 112, 45);
		rect(this.x, this.y, 72, 86);
		ellipse(this.x + 73, this.y + 42, 32, 14);
		ellipse(this.x + 89, this.y + 35, 10, 18);
		//cuernos
		fill(122, 117, 107);
		triangle(this.x, this.y, this.x + 20, this.y, this.x + 10, this.y - 15);
		triangle(this.x + 52, this.y, this.x + 72, this.y, this.x + 62, this.y - 15);
		//dientes
		triangle(this.x + 20, this.y + 35, this.x + 28, this.y + 35, this.x + 24, this.y + 25);
		triangle(this.x + 45, this.y + 35, this.x + 54, this.y + 35, this.x + 50, this.y + 25);
		strokeWeight(1);
		stroke(0, 0, 0);
		line(this.x + 20, this.y + 35, this.x + 54, this.y + 35);
		//vestimenta
		noStroke();
		fill(46, 45, 39);
		beginShape();
		vertex(this.x, this.y + 50);
		vertex(this.x + 72, this.y + 50);
		vertex(this.x + 72, this.y + 80);
		vertex(this.x + 68, this.y + 76);
		vertex(this.x + 64, this.y + 80);
		vertex(this.x + 60, this.y + 73);
		vertex(this.x + 56, this.y + 83);
		vertex(this.x + 52, this.y + 70);
		vertex(this.x + 48, this.y + 75);
		vertex(this.x + 44, this.y + 73);
		vertex(this.x + 40, this.y + 78);
		vertex(this.x + 36, this.y + 74);
		vertex(this.x + 32, this.y + 80);
		vertex(this.x + 28, this.y + 73);
		vertex(this.x + 26, this.y + 82);
		vertex(this.x + 22, this.y + 77);
		vertex(this.x + 18, this.y + 80);
		vertex(this.x + 14, this.y + 73);
		vertex(this.x + 10, this.y + 79);
		vertex(this.x + 6, this.y + 72);
		vertex(this.x, this.y + 80);
		endShape(CLOSE);
		//madera
		fill(74, 42, 0);
		ellipse(this.x + 90, this.y + 27, 7, 7);
		beginShape();
		vertex(this.x + 88, this.y + 24);
		vertex(this.x + 99, this.y + 6);
		vertex(this.x + 111, this.y + 16);
		vertex(this.x + 93, this.y + 30);
		endShape(CLOSE);
		ellipse(this.x + 106, this.y + 10, 15, 15);
		//ojos
		fill(0, 0, 0);
		ellipse(this.x + 19, this.y + 14, 5, 5);
		ellipse(this.x + 55, this.y + 14, 5, 5);
    }
  }
  this.moverse = function(){
    this.x = this.x + (1*this.dirX*this.vel);
    if(this.x > width + 100 || this.x < - 100){
      this.x = - 100;
    }
  }
}