//variables para el triqui
var triquiXhorizontal = 10; 
var triquiYhorizontal = 40;
var triquiXvertical = 25;
var triquiYvertical = 25;
//variables pez
var colapezX = 15;
var colapezY = 110;
var cuerpopezX = 45;
var cuerpopezY = 100;
var tamañoPezX = 35;
var tamañoPezY = 25;
//variables Sol
var centroSolX = 35;
var centroSolY = 145;


var colorSelect = 0;
var herramienta = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
} 

function draw() { 
  
  ///botones que cambian de herramienta
		//triqui
	stroke(0, 0, 0);
	strokeWeight(3);
  line(triquiXhorizontal, triquiYhorizontal, triquiXhorizontal + 50, triquiYhorizontal);
	line(triquiXhorizontal, triquiYhorizontal + 20, triquiXhorizontal + 50, triquiYhorizontal + 20);
	line(triquiXvertical, triquiYvertical, triquiXvertical, triquiYvertical + 50);
	line(triquiXvertical + 20, triquiYvertical, triquiXvertical + 20, triquiYvertical + 50);
    //pez
	noStroke();
	fill(0, 0, 0);
	triangle(colapezX, colapezY, colapezX, colapezY - 20, colapezX + 15, colapezY - 10);
	ellipse(cuerpopezX, cuerpopezY, tamañoPezX, tamañoPezY);
		//sol
	ellipse(centroSolX, centroSolY, 25, 25);
	triangle(centroSolX, centroSolY - 25, centroSolX - 5, centroSolY - 15, centroSolX + 5, centroSolY - 15);
	triangle(centroSolX + 20, centroSolY - 15, centroSolX + 9, centroSolY - 13, centroSolX + 16, centroSolY - 4);
	triangle(centroSolX + 23, centroSolY + 8, centroSolX + 16, centroSolY, centroSolX + 13, centroSolY + 10);
	triangle(centroSolX + 8, centroSolY + 24, centroSolX + 10, centroSolY + 13, centroSolX + 1, centroSolY + 16);
	triangle(centroSolX - 11, centroSolY + 23, centroSolX - 2, centroSolY + 16, centroSolX - 12, centroSolY + 12);
	triangle(centroSolX - 24, centroSolY + 3, centroSolX - 14, centroSolY + 8, centroSolX - 15, centroSolY - 3);
	triangle(centroSolX - 18, centroSolY - 17, centroSolX - 15, centroSolY - 6, centroSolX - 8, centroSolY - 13);
		//carro
	ellipse(29, 208, 15, 15);
	ellipse(57, 208, 15, 15);
	beginShape();
	vertex(30, 180);
	vertex(50, 180);
	vertex(65, 190);
	vertex(80, 190);
	vertex(80, 205);
	vertex(10, 205);
	vertex(10, 190);
	vertex(20, 190);
	endShape(CLOSE);
  	//rombo
	beginShape();
	vertex(35, 220);
	vertex(50, 245);
	vertex(35, 270);
	vertex(20, 245);
	endShape(CLOSE);
	
  //botones que cambian de color
  	//pincel rosa
	stroke(0, 0, 0);
	strokeWeight(10);
	line(160, 30, 130, 70);
	noStroke();
	fill(189, 42, 187);
	triangle(176, 10, 170, 30, 157, 20);
	ellipse(160, 30, 20, 20);
		//pincel verde
	stroke(0, 0, 0);
	strokeWeight(10);
	line(200, 30, 170, 70);
	noStroke();
	fill(77, 189, 40);
	triangle(216, 10, 210, 30, 197, 20);
	ellipse(200, 30, 20, 20);
		//pincel rojo
	stroke(0, 0, 0);
	strokeWeight(10);
	line(240, 30, 210, 70);
	noStroke();
	fill(173, 24, 24);
	triangle(256, 10, 250, 30, 237, 20);
	ellipse(240, 30, 20, 20);
		//pincel azul
	stroke(0, 0, 0);
	strokeWeight(10);
	line(280, 30, 250, 70);
	noStroke();
	fill(18, 62, 145);
	triangle(296, 10, 290, 30, 277, 20);
	ellipse(280, 30, 20, 20);
		//pincel amarillo
  stroke(0, 0, 0);
	strokeWeight(10);
	line(320, 30, 290, 70);
	noStroke();
	fill(235, 235, 14);
	triangle(336, 10, 330, 30, 317, 20);
	ellipse(320, 30, 20, 20);
		//borrador
	stroke(0, 0, 0);
	strokeWeight(1);
	fill(255, 255, 255);
	rect(349, 37, 40, 30);

  
  if (mouseIsPressed) {
    if(mouseX > triquiXhorizontal && mouseX < triquiXhorizontal + 50 && mouseY > triquiYvertical && mouseY < triquiYvertical + 50){
      strokeWeight(3);
      herramienta = 0;
    } 
    if(mouseX > cuerpopezX && mouseX < cuerpopezX + tamañoPezX && mouseY > cuerpopezY && mouseY < cuerpopezY + tamañoPezY){
      herramienta = 1;
    }
    
    if(mouseX > centroSolX - 24 && mouseX < centroSolX + 23 && mouseY > centroSolY - 25 && mouseY < centroSolY + 24){
      herramienta = 2;
    }
    
    if(mouseX > 10 && mouseX < 80 && mouseY > 180 && mouseY < 205){
      herramienta = 3;
    }
    
    if(mouseX > 20 && mouseX < 50 && mouseY > 220 && mouseY < 270){
      herramienta = 5;
    }
      
    
    if(mouseX > 190 && mouseX < 210 && mouseY > 20 && mouseY < 40){
      colorSelect = 0;
    }
    
    if(mouseX > 230 && mouseX < 250 && mouseY > 20 && mouseY < 40){
      colorSelect = 1;
    }
    
    if(mouseX > 270 && mouseX < 290 && mouseY > 20 && mouseY < 40){
      colorSelect = 2;
    }
    
    if(mouseX > 310 && mouseX < 330 && mouseY > 20 && mouseY < 40){
      colorSelect = 3;
    }
    
    if(mouseX > 349 && mouseX < 389 && mouseY > 37 && mouseY < 67){
      herramienta = 4;
      colorSelect = 4;
    }
    
    if(mouseX > 150 && mouseX < 170 && mouseY > 20 && mouseY < 40){
      colorSelect = 5;
    }
       
    
  	//colores
  	if(colorSelect == 0){
    	fill(77, 189, 40);
    	stroke(77, 189, 40);
  	}
  	if(colorSelect == 1){
    	fill(173, 24, 24);
    	stroke(173, 24, 24);
  	}
  	if(colorSelect == 2){
    	fill(18, 62, 145);
    	stroke(18, 62, 145);
  	}
  	if(colorSelect == 3){
    	fill(235, 235, 14);
    	stroke(235, 235, 14);
  	}
  	if(colorSelect == 4){
    	fill(255, 255, 255);
    	stroke(255, 255, 255);
  	}
    if(colorSelect == 5){
      fill(189, 42, 187);
      stroke(189, 42, 187);
    }
  
  	//herramientas
  	if(herramienta == 0){
			strokeWeight(3);
			line(mouseX - 25, mouseY - 10, mouseX + 25, mouseY - 10);
			line(mouseX - 25, mouseY + 10, mouseX + 25, mouseY + 10);
			line(mouseX - 10, mouseY - 25, mouseX - 10, mouseY + 25);
			line(mouseX + 10, mouseY - 25, mouseX + 10, mouseY + 25);
  	}
  	if(herramienta == 1){
    	triangle(mouseX - 30, mouseY + 10, mouseX - 30, mouseY - 10, mouseX + 15, mouseY);
			ellipse(mouseX, mouseY, tamañoPezX, tamañoPezY);
  	}
  	if(herramienta == 2){
    	ellipse(mouseX, mouseY, 25, 25);
			triangle(mouseX, mouseY - 25, mouseX - 5, mouseY - 15, mouseX + 5, mouseY - 15);
			triangle(mouseX + 20, mouseY - 15, mouseX + 9, mouseY - 13, mouseX + 16, mouseY - 4);
			triangle(mouseX + 23, mouseY + 8, mouseX + 16, mouseY, mouseX + 13, mouseY + 10);
			triangle(mouseX + 8, mouseY + 24, mouseX + 10, mouseY + 13, mouseX + 1, mouseY + 16);
			triangle(mouseX - 11, mouseY + 23, mouseX - 2, mouseY + 16, mouseX - 12, mouseY + 12);
			triangle(mouseX - 24, mouseY + 3, mouseX - 14, mouseY + 8, mouseX - 15, mouseY - 3);
			triangle(mouseX - 18, mouseY - 17, mouseX - 15, mouseY - 6, mouseX - 8, mouseY - 13);
  	}
  	if(herramienta == 3){
    	ellipse(mouseX - 1, mouseY + 28, 15, 15);
			ellipse(mouseX + 27, mouseY + 28, 15, 15);
			beginShape();
			vertex(mouseX, mouseY);
			vertex(mouseX + 20, mouseY);
			vertex(mouseX + 35, mouseY + 10);
			vertex(mouseX + 50, mouseY + 10);
			vertex(mouseX + 50, mouseY + 25);
			vertex(mouseX - 20, mouseY + 25);
			vertex(mouseX - 20, mouseY + 10);
			vertex(mouseX - 10, mouseY + 10);
			endShape(CLOSE);
  	}
  	if(herramienta == 4){
    	rect(mouseX, mouseY, 40, 30);
  	}
    
    if(herramienta == 5){
    	beginShape();
			vertex(mouseX, mouseY);
			vertex(mouseX + 15, mouseY + 25);
			vertex(mouseX, mouseY + 50);
			vertex(mouseX - 15, mouseY + 25);
			endShape(CLOSE);
  	}
  
  }
  
}
