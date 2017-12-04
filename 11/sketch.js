var elMurcielago;

var miImagen;
var pasto = []; //son arboles :3

var Moscas = [];

var puntaje = 0;

var milliSecond;

var colorFondo = 100;
var estado = 0;

var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3;
var PERDISTE = 4;

function preload() {
  miImagen = loadImage("arbol.png");
}

function touchMoved(){
  return false;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  estado = INTRO; 

  elMurcielago = new Murcielaguito(240, 90);
  
  //lugares iniciales de los arboles
  for (var i = 0; i < 25; i = i + 1){
    pasto.push(i*220);
  }
  
  //crear 100 moscas
  for (var a = 0; a < 60; a = a + 1){
    Moscas.push(new Mosquita(a*100 + 300, random(20, height - 200)));
  }

}

function draw() {
  
  var milliSecond = millis();
  print(milliSecond);
  background(227, 254, 255);
  fill(39, 87, 23);
  //pasto
  rect(0, height*0.95, width*2, height*0.10);
  
  //Para dibujar los arboles y que se muevan
  for(var i = 0; i < pasto.length; i = i + 1){
    image(miImagen, pasto[i], height*0.82, 100, 100);
    pasto[i] = pasto[i] - 1;
    if(pasto[i] <= -60){
      pasto[i] = width;
    }
  }
  
  if (estado == INTRO) {
    //background(0, 0, 0);
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("Ayuda a PekaPeka a comerse todas las moscas!!", width / 2, height / 2);
    text("Pasa por encima de ellas para comertelas", width / 2, height / 1.8);

  } else if (estado == JUEGO) {
  
    //cada vez que se presiona el mouse el personaje se eleva
    if(mouseIsPressed){
      elMurcielago.subir();
    }else { //si no se presiona cae
      elMurcielago.bajar();
    }
  
    //moscas
    for (var a = 0; a < Moscas.length; a = a + 1) {
      Moscas[a].dibujarse();
      elMurcielago.comer(Moscas[a]);
      Moscas[a].x = Moscas[a].x - 1;
    }
  
    elMurcielago.dibujarse();
  
    textSize(18);
    text("Puntaje: " + elMurcielago.moscas, 50, 30);
    
    if(elMurcielago.moscas/Moscas.length >= 0.25) {
      estado = OUTRO;
      elMurcielago.moscas = 0;
    }
    
    if(milliSecond > 15000 && elMurcielago.moscas < 15){
      estado = PERDISTE;
    }
  }else{
      fill(0);
      textAlign(CENTER);
      textSize(50);
      text("¡¡¡GANASTE!!!", width/2, height/2);
  }
}

function mouseReleased() { // si suelta mouse cambia de estado

  if (estado == INTRO) {
      estado = JUEGO;
  } else if (estado == JUEGO) {
    if(elMurcielago.moscas/Moscas.length >= 0.25) {
     estado = OUTRO;
    }
  } else {
    estado = INTRO
  }

}

function Murcielaguito(x, y) {
  this.x = x;
  this.y = y;
  this.moscas = 0;

  this.dibujarse = function() {
    //var x = 200;
    //var y = 143;
    noStroke();
    this.y = constrain(this.y, 0, height - 90); //para que no se salga de la pantalla
    fill(56, 48, 42);
    //cuerpo
    beginShape();
    vertex(this.x, this.y - 53);
    vertex(this.x + 17, this.y - 44);
    vertex(this.x + 27, this.y - 64);
    vertex(this.x + 48, this.y - 77);
    vertex(this.x + 74, this.y - 75);
    vertex(this.x + 77, this.y - 47);
    vertex(this.x + 57, this.y - 30);
    vertex(this.x + 37, this.y - 25);
    vertex(this.x + 49, this.y + 2);
    vertex(this.x + 37, this.y + 22);
    vertex(this.x + 104, this.y - 25);
    vertex(this.x + 198, this.y - 34);
    vertex(this.x + 192, this.y + 48);
    vertex(this.x + 172, this.y + 35);
    vertex(this.x + 156, this.y + 33);
    vertex(this.x + 145, this.y + 40);
    vertex(this.x + 142, this.y + 60);
    vertex(this.x + 125, this.y + 46);
    vertex(this.x + 114, this.y + 45);
    vertex(this.x + 103, this.y + 48);
    vertex(this.x + 97, this.y + 59);
    vertex(this.x + 98, this.y + 72);
    vertex(this.x + 84, this.y + 61);
    vertex(this.x + 73, this.y + 57);
    vertex(this.x + 62, this.y + 57);
    vertex(this.x + 53, this.y + 67);
    vertex(this.x + 56, this.y + 112);
    vertex(this.x + 33, this.y + 140);
    vertex(this.x + 26, this.y + 154);
    vertex(this.x + 15, this.y + 143);
    vertex(this.x, this.y + 164);
    vertex(this.x - 15, this.y + 143);
    vertex(this.x - 26, this.y + 154);
    vertex(this.x - 33, this.y + 140);
    vertex(this.x - 56, this.y + 112);
    vertex(this.x - 53, this.y + 67);
    vertex(this.x - 62, this.y + 57);
    vertex(this.x - 73, this.y + 57);
    vertex(this.x - 84, this.y + 61);
    vertex(this.x - 98, this.y + 72);
    vertex(this.x - 97, this.y + 59);
    vertex(this.x - 103, this.y + 48);
    vertex(this.x - 114, this.y + 45);
    vertex(this.x - 125, this.y + 46);
    vertex(this.x - 142, this.y + 60);
    vertex(this.x - 145, this.y + 40);
    vertex(this.x - 156, this.y + 33);
    vertex(this.x - 172, this.y + 35);
    vertex(this.x - 192, this.y + 48);
    vertex(this.x - 198, this.y - 34);
    vertex(this.x - 104, this.y - 25);
    vertex(this.x - 37, this.y + 22);
    vertex(this.x - 49, this.y + 2);
    vertex(this.x - 37, this.y - 25);
    vertex(this.x - 57, this.y - 30);
    vertex(this.x - 77, this.y - 47);
    vertex(this.x - 74, this.y - 75);
    vertex(this.x - 48, this.y - 77);
    vertex(this.x - 27, this.y - 64);
    vertex(this.x - 17, this.y - 44);
    endShape(CLOSE);
    //ojos
    fill(0, 0, 0);
    ellipse(this.x - 20, this.y - 26, 20, 20);
    ellipse(this.x + 20, this.y - 26, 20, 20);
    //nariz y orejas
    fill(122, 80, 61);
    ellipse(this.x, this.y, 41, 25);
    beginShape();
    vertex(this.x + 33, this.y - 58);
    vertex(this.x + 37, this.y - 42);
    vertex(this.x + 54, this.y - 40);
    vertex(this.x + 69, this.y - 51);
    vertex(this.x + 67, this.y - 66);
    vertex(this.x + 49, this.y - 68);
    endShape(CLOSE);
    beginShape();
    vertex(this.x - 33, this.y - 58);
    vertex(this.x - 37, this.y - 42);
    vertex(this.x - 54, this.y - 40);
    vertex(this.x - 69, this.y - 51);
    vertex(this.x - 67, this.y - 66);
    vertex(this.x - 49, this.y - 68);
    endShape(CLOSE);
    //naricita
    fill(0, 0, 0);
    ellipse(this.x - 10, this.y, 5, 8);
    ellipse(this.x + 10, this.y, 5, 8);
  }
//función para que vuele
  this.subir = function() {
    this.y = this.y - 5;
  }
//función para que caiga 
  this.bajar = function() {
    this.y = this.y + 5;
  }
  
  //cuando el murcielago pasa por encima de las moscas se las come
  this.comer = function(moscas) {
    if((moscas.x >= (this.x - 40) && moscas.x <= (this.x + 40)) && (moscas.y >= this.y && moscas.y <= (this.y + 50))) {
      moscas.y = -400;
      this.moscas = this.moscas + 1;
    }
  }
}

function Mosquita(x, y){
  this.x = x;
  this.y = y;
  this.tamañoX = 30;
  this.tamañoY = 20;
  
  this.dibujarse = function(){
    fill(194, 186, 186);
    rectMode(CENTER);
    ellipse(this.x + 3, this.y - 15, this.tamañoX - 20, this.tamañoY);
    ellipse(this.x - 4, this.y - 15, this.tamañoX - 20, this.tamañoY);
    fill(97, 97, 97);
    ellipse(this.x, this.y, this.tamañoX, this.tamañoY);
      //ojo
    fill(0, 0, 0);
    ellipse(this.x - 8, this.y, this.tamañoX - 20, this.tamañoY - 10);
  }
  
}
