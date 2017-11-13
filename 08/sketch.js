var tamañoNube = 40;

var elPez;
var losPeces = [];
var numPeces = 7;

var laRana;
var lasRanas = [];
var numRanas = 2;

var pato;
var elPato = [];
var numPato = 1;

var laMosca;
var lasMoscas = [];
var numMoscas = 40;

var laPlantaMarina;
var lasPlantasMarinas = [];
var numPlantasMarinas = 3;

var elAlga;
var lasAlgas = [];
var numAlgas = 10;

function setup() { 
  createCanvas(700, 500);
  noStroke();
  
  //elPato = new Patito();
  for (var t = 0; t < numPato; t = t + 1) {
    elPato [t] = new Patito();
  }
  
  //elPez = new Pececito();
  for (var i = 0; i < numPeces; i = i + 1) {
    losPeces[i] = new Pececito();
  }
  
  //laRana = new Ranita();
  for (var j = 0; j < numRanas; j = j + 1) {
    lasRanas[j] = new Ranita();
  }
  
  //laMosca = new Mosquita();
  for (var u = 0; u < numMoscas; u = u + 1) {
    lasMoscas[u] = new Mosquita();
  }
  
  //laPlantaMarina = new PlantitaMarina();
  for (var p = 0; p < numPlantasMarinas; p = p + 1) {
    lasPlantasMarinas[p] = new PlantitaMarina();
  }
  
  //elAlga = new Alguita();
  for (var s = 0; s < numAlgas; s = s + 1){
    lasAlgas[s] = new Alguita();
  }
} 

function draw() { 
  background(220);
  //agua
  fill(79, 140, 168);
	rect(0, 320, 700, 380);
  //tierra
  fill(2, 168, 35);
	rect(0, 250, 700, 70);
  //cielo
  fill(177, 235, 245);
	rect(0, 0, 700, 250);
  fill(255, 255, 255);
  //nube1
  ellipse(30, 30, tamañoNube, tamañoNube);
	ellipse(61, 34, tamañoNube, tamañoNube);
	ellipse(26, 50, tamañoNube, tamañoNube);
	ellipse(48, 57, tamañoNube, tamañoNube);
	ellipse(68, 53, tamañoNube, tamañoNube);
	//nube 2
	ellipse(200, 71, tamañoNube, tamañoNube);
	ellipse(178, 95, tamañoNube, tamañoNube);
	ellipse(227, 83, tamañoNube, tamañoNube);
	ellipse(194, 103, tamañoNube, tamañoNube);
	ellipse(220, 106, tamañoNube, tamañoNube);
	//nube 3
	ellipse(388, 60, tamañoNube, tamañoNube);
	ellipse(372, 85, tamañoNube, tamañoNube);
	ellipse(404, 94, tamañoNube, tamañoNube);
	ellipse(424, 101, tamañoNube, tamañoNube);
	ellipse(420, 66, tamañoNube, tamañoNube);
  //nube 4
  ellipse(500, 30, tamañoNube, tamañoNube);
	ellipse(531, 34, tamañoNube, tamañoNube);
	ellipse(496, 50, tamañoNube, tamañoNube);
	ellipse(518, 57, tamañoNube, tamañoNube);
	ellipse(538, 53, tamañoNube, tamañoNube);
  //nube 5
  ellipse(670, 101, tamañoNube, tamañoNube);
	ellipse(648, 125, tamañoNube, tamañoNube);
	ellipse(697, 113, tamañoNube, tamañoNube);
	ellipse(664, 133, tamañoNube, tamañoNube);
	ellipse(690, 136, tamañoNube, tamañoNube);
  
  //peces
  //elPez.dibujarse();
  //elPez.moverse();
  for (var i = 0; i < numPeces; i = i + 1) {
    losPeces[i].dibujarse();
    losPeces[i].moverse();
    
    //nacen peces cuando tocan las plantas marinas
    for (var p = 0; p < numPlantasMarinas; p = p + 1){
      var distanciaCentro = dist(lasPlantasMarinas[p].x, lasPlantasMarinas[p].y, losPeces[i].x, losPeces[i].y);
      
      if(distanciaCentro < lasPlantasMarinas[p].tamaño){
        losPeces[i].nacer();
      }
    }
    
    //el pato se come a los peces 
    for (var t = 0; t < numPato; t = t + 1) {
      var disCentro = dist(elPato[t].x, elPato[t].y, losPeces[i].x, losPeces[i].y);

      if (disCentro < elPato[t].tamañoX/3) {
        losPeces[i].morir();
      }
    }
  }
  
  //algas
  //elAlga.dibujarse();
  for(var s = 0; s < numAlgas; s = s + 1){
    lasAlgas[s].dibujarse();
    
    for (var i = 0; i < numPeces; i = i + 1) {
    	var distanCentro = dist(losPeces[i].x, losPeces[i].y, lasAlgas[s].x, (lasAlgas[s].y - 70));
    
    	if (distanCentro < losPeces[i].tamañoX) {
      	lasAlgas[s].morir();
      }
    }
  }
  
  //mosca
  //laMosca.dibujarse();
  //laMosca.moverse();
  for (var u = 0; u < numMoscas; u = u + 1) {
    lasMoscas[u].dibujarse();
    lasMoscas[u].moverse();
    
    //las ranitas se comen a las moscas
    for (var j = 0; j < numRanas; j = j + 1) {
      var distCentro = dist(lasRanas[j].x, lasRanas[j].y, lasMoscas[u].x, lasMoscas[u].y);

      if (distCentro < lasRanas[j].tamañoX/2) {
        lasMoscas[u].morir();
      }
    }
  }
  
  //rana
  //laRana.dibujarse();
  //laRana.moverse();
  for (var j = 0; j < numRanas; j = j + 1) {
    lasRanas[j].dibujarse();
    lasRanas[j].moverse();
  }
  
  //pato
  //pato.dibujarse();
  //pato.moverse();
  for (var t = 0; t < numPato; t = t + 1) {
    elPato[t].dibujarse();
    elPato[t].moverse();
  }
  
  //plantas marinas
  //laPlantaMarina.dibujarse();
  for (var p = 0; p < numPlantasMarinas; p = p + 1){
    lasPlantasMarinas[p].dibujarse();
  }
}

// familia Pececito
function Pececito() {
  var bodyColor = color(random(255), random(255), random(255));
  this.x = random(0, width);
  this.y = random(350, height - 30);
  this.tamanoX = 60;
  this.tamanoY = 30;
  this.dirPezX = 1;
	this.dirPezY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
  		fill(bodyColor);
      ellipse(this.x, this.y, this.tamanoX, this.tamanoY);
  		triangle(this.x + 20, this.y, this.x+50, this.y-15, this.x+50, this.y+15);
  		triangle(this.x-5, this.y-13, this.x+5, this.y-13, this.x+5, this.y-25);
  		triangle(this.x+10, this.y+12, this.x+20, this.y+10, this.x+20, this.y+25);
  			//ojo
  		fill(0, 0, 0);
  		ellipse(this.x-20, this.y, this.tamanoX-50, this.tamanoY-20);
    }
  }

  this.moverse = function() {
    this.x = this.x + (3*(-this.dirPezX));
    if(this.x > width + 40 || this.x < -60){
      this.x = width + 40;
    }
    this.y = this.y + (1 * this.dirPezY);
    if(this.y > height - 30 || this.y < 350){
      this.dirPezY = -this.dirPezY;
    }
  }

  this.morir = function() {
    this.viva = false;
  }
  
  this.nacer = function() {
    this.viva = true;
  }
}

//familia rana
function Ranita() {
  this.x = random(0, width);
  this.y = random(250, 290);
  this.tamañoX = 50;
  this.tamañoY = 40;
  this.dirRanaX = 1;
	this.dirRanaY = 1;

  this.dibujarse = function() {
    fill(49, 107, 61);
  	ellipse(this.x, this.y, this.tamañoX, this.tamañoY);
  	ellipse(this.x - 25, this.y - 5, this.tamañoX - 35, this.tamañoY + 5);
  	beginShape();
  	vertex(this.x - 23, this.y + 16);
  	vertex(this.x - 26, this.y + 28);
  	vertex(this.x - 27, this.y + 18);
  	vertex(this.x - 40, this.y + 22);
  	vertex(this.x - 30, this.y + 15);
  	vertex(this.x - 44, this.y + 15);
  	vertex(this.x - 28, this.y + 10);
  	endShape(CLOSE);
  	ellipse(this.x + 25, this.y - 5, this.tamañoX - 35, this.tamañoY + 5);
  	beginShape();
  	vertex(this.x + 23, this.y + 16);
  	vertex(this.x + 26, this.y + 28);
  	vertex(this.x + 27, this.y + 18);
  	vertex(this.x + 40, this.y + 22);
  	vertex(this.x + 30, this.y + 15);
  	vertex(this.x + 44, this.y + 15);
  	vertex(this.x + 28, this.y + 10);
  	endShape(CLOSE);
  		//ojos
  	fill(0, 0, 0);
  	ellipse(this.x - 10, this.y - 15, this.tamañoX - 40, this.tamañoY - 30);
  	ellipse(this.x + 10, this.y - 15, this.tamañoX - 40, this.tamañoY - 30);
  }

  this.moverse = function() {
    this.x = this.x + (2*this.dirRanaX);
    if(this.x > width || this.x < 0){
      this.dirRanaX = -this.dirRanaX;
    }
    this.y = this.y + (4 * this.dirRanaY);
    if(this.y > 290 || this.y < 40){
      this.dirRanaY = -this.dirRanaY;
    }
  }
}

//familia pato
function Patito() {
  this.x = random(0, width);
  this.y = random(360, 320);
  this.tamañoX = 70;
  this.tamañoY = 40;
  this.dirPatoX = 1;
	this.dirPatoY = 1;

  this.dibujarse = function() {
    fill(255, 229, 84);
  	triangle(this.x + 40, this.y - 45, this.x + 60, this.y - 40, this.x + 40, this.y - 35);
  	fill(201, 144, 69);
  	beginShape();
  	vertex(this.x + 21, this.y - 30);
  	vertex(this.x + 33, this.y - 30);
  	vertex(this.x + 23, this.y - 10);
  	vertex(this.x + 11, this.y - 10);
  	endShape(CLOSE);
  	ellipse(this.x + 30, this.y - 40, this.tamañoX - 40, this.tamañoY - 10);
  	ellipse(this.x, this.y, this.tamañoX, this.tamañoY);
  	fill(186, 129, 63);
  	beginShape();
  	vertex(this.x - 21, this.y - 16);
  	vertex(this.x - 21, this.y + 16);
  	vertex(this.x - 45, this.y + 5);
  	vertex(this.x - 45, this.y - 5);
  	endShape(CLOSE);
  		//ojo
  	fill(0, 0, 0);
  	ellipse(this.x + 34, this.y - 42, this.tamañoX - 60, this.tamañoY - 30);
  }

  this.moverse = function() {
    this.x = this.x + (2*this.dirPatoX);
    if(this.x > width + 40 || this.x < -60){
      this.x = -40;
    }
    this.y = this.y + (0.7 * this.dirPatoY);
    if(this.y > 360 || this.y < 320){
      this.dirPatoY = -this.dirPatoY;
    }
  }
}
 //familia mosquita
function Mosquita() {
  this.x = random(0, width);
  this.y = random(20, 215);
  this.tamañoX = 30;
  this.tamañoY = 20;
  this.dirMoscaX = 1;
	this.dirMoscaY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(194, 186, 186);
  		ellipse(this.x + 3, this.y - 15, this.tamañoX - 20, this.tamañoY);
  		ellipse(this.x - 4, this.y - 15, this.tamañoX - 20, this.tamañoY);
  		fill(97, 97, 97);
  		ellipse(this.x, this.y, this.tamañoX, this.tamañoY);
  			//ojo
  		fill(0, 0, 0);
  		ellipse(this.x - 8, this.y, this.tamañoX - 20, this.tamañoY - 10);
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-2, 2);
    if(this.x > width || this.x < 0){
      this.disMoscaX = - this.dirMoscaX
    }
    this.y = this.y + random(-2, 2);
    if(this.y > 220 || this.y < 20){
      this.dirMoscaY = -this.dirMoscaY
    }
  }

  this.morir = function() {
    this.viva = false;
  }
  
  this.nacer = function() {
    
  }
}

//familia plantas marinas
function PlantitaMarina(){
  this.x = random(30, width - 30);
  this.y = 485;
  this.tamaño = 30;
  this.dirMoscaX = 1;
	this.dirMoscaY = 1;
  this.viva = true;

  this.dibujarse = function() {
    fill(153, 196, 106);
    ellipse(this.x, this.y, this.tamaño, this.tamaño);
		beginShape();
		vertex(this.x - 12, this.y + 15);
		vertex(this.x - 34, this.y + 5);
		vertex(this.x - 26, this.y + 1);
		vertex(this.x - 31, this.y - 9);
		vertex(this.x - 18, this.y - 8);
		vertex(this.x - 17, this.y - 21);
		vertex(this.x - 9, this.y - 17);
		vertex(this.x - 2, this.y - 25);
		vertex(this.x + 4, this.y - 16);
		vertex(this.x + 12, this.y - 22);
		vertex(this.x + 14, this.y - 15);
		vertex(this.x + 26, this.y - 20);
		vertex(this.x + 24, this.y - 10);
		vertex(this.x + 33, this.y - 8);
		vertex(this.x + 28, this.y - 1);
		vertex(this.x + 33, this.y + 5);
		vertex(this.x + 12, this.y + 15);
		endShape(CLOSE);
  }
}

//familia plantas marinas
function Alguita(){
  this.x = random(20, width - 20);
  this.y = 500;
  this.viva = true;
  
  this.dibujarse = function() {
    fill(140, 190, 35);
  	beginShape();
  	vertex(this.x, this.y);
  	vertex(this.x + 3, this.y - 20);
  	vertex(this.x - 1, this.y - 50);
  	vertex(this.x + 2, this.y - 75);
  	vertex(this.x + 12, this.y - 70);
  	vertex(this.x + 9, this.y - 50);
  	vertex(this.x + 13, this.y - 30);
  	vertex(this.x + 10, this.y);
  	endShape(CLOSE);
  }
  
  this.morir = function() {
    this.viva = false;
  }
  
}

