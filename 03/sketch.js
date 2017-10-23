var posXgotaMoradaDos1 = 360;
var posXgotaMoradaDos2 = 360;
var posXgotaMoradaDos3 = 360;
var posXgotaMoradaDos4 = 360;
var posXgotaMoradaDos5 = 360;
var posXgotaMoradaDos6 = 360;
var posXgotaMoradaDos7 = 360;

var posXgotaNaranjaDos1 = 0;
var posXgotaNaranjaDos2 = 0;
var posXgotaNaranjaDos3 = 0;
var posXgotaNaranjaDos4 = 0;
var posXgotaNaranjaDos5 = 0;
var posXgotaNaranjaDos6 = 0;
var posXgotaNaranjaDos7 = 0;

var posYgotaAntigravedadDos1 = 360;
var posYgotaAntigravedadDos2 = 360;
var posYgotaAntigravedadDos3 = 360;
var posYgotaAntigravedadDos4 = 360;
var posYgotaAntigravedadDos5 = 360;
var posYgotaAntigravedadDos6 = 360;
var posYgotaAntigravedadDos7 = 360;

var posYgotas1 = 0;
var posYgotas2 = 0;
var posYgotas3 = 0;
var posYgotas4 = 0;
var posYgotas5 = 0;
var posYgotas6 = 0;
var posYgotas7 = 0;

var movCuadriculados1 = 0;
var movCuadriculados2 = 0;
var movCuadriculados3 = 0;
var movCuadriculados4 = 0;
var movCuadriculados5 = 0;
var movCuadriculados6 = 0;

var tamañoOtrocirculoenmovimiento = 400;

var Xrebotin2= 330;
var Yrebotin2 = 0;
var dirXrebotin2 = 30;
var dirYrebotin2 = 10;

var posYgotaAntigravedad1 = 360;
var posYgotaAntigravedad2 = 360;
var posYgotaAntigravedad3 = 360;
var posYgotaAntigravedad4 = 360;
var posYgotaAntigravedad5 = 360;
var posYgotaAntigravedad6 = 360;
var posYgotaAntigravedad7 = 360;

var cambiocolorcirculocolores = 12;

var movGranellipse = 400;

var tamañoTrio2 = 60;
var movXtrio2 = 290;
var movYtrio2 = 130;

var tamañoTrio = 60;
var movXtrio = 290;
var movYtrio = 130;

var posXgotaMorada1 = 360;
var posXgotaMorada2 = 360;
var posXgotaMorada3 = 360;
var posXgotaMorada4 = 360;
var posXgotaMorada5 = 360;
var posXgotaMorada6 = 360;
var posXgotaMorada7 = 360;

var posXgotaNaranja1 = 0;
var posXgotaNaranja2 = 0;
var posXgotaNaranja3 = 0;
var posXgotaNaranja4 = 0;
var posXgotaNaranja5 = 0;
var posXgotaNaranja6 = 0;
var posXgotaNaranja7 = 0;

var veldirXcuadrosverdes = 30;
var veldirYcuadrosverdes = 10;
var posXcuadrosverdes = 110;
var posYcuadradosverdes = 10;

var tamañoCirculodespcuadricula = 400;
var tamañoCirculosRededor = 80;

var movlinea1 = 0;
var movlinea2 = 0;
var movlinea3 = 0;
var movlinea4 = 0;
var movlinea5 = 0;
var movlinea6 = 0;

var posYgota1 = 0;
var posYgota2 = 0;
var posYgota3 = 0;
var posYgota4 = 0;
var posYgota5 = 0;
var posYgota6 = 0;
var posYgota7 = 0;

var X = 330;
var Y = 0;
var dirX = 30;
var dirY = 10;

var XY1 = 200;
var primerCirculo = 40;

var tiempo = 0;

var miCancion;
var miAmplitud;

//para que comience donde es
var comienzo;

function preload(){
  miCancion = loadSound('Assets/069 - akira ifukube - godzilla - main title (1954).mp3');
}

function setup() { 
  createCanvas(400, 400);
  miCancion.setVolume(0.3);
  miCancion.play();
  
  comienzo = millis();
  print(comienzo);
  
  tiempo = millis();
} 

function draw() { 
 
  
  if (millis() < (600 + comienzo)){
		background(0, 0 ,0);
	}
  
  if (millis() > (600 + comienzo) && millis() < (700 + comienzo)){
		background(255, 255 ,255);
	}
  
  if (millis() > 700 + comienzo){
		background(0, 0 ,0);
	}
  
  noStroke();
  
  //circulo rojo que crece
  if (millis() > (700 + comienzo) && millis() < (1000 + comienzo) || millis() > (1100 + comienzo) && millis() < (1400 + comienzo) || millis() > (1500 + comienzo) && millis() < (1800 + comienzo) ||millis() > (1900 + comienzo) && millis() < (2200 + comienzo) || millis() > (2300 + comienzo) && millis() < (2600 + comienzo) || millis() > (2700 + comienzo) && millis() < (3000 + comienzo) || millis() > (3100 + comienzo) && millis() < (3400 + comienzo) || millis() > (3500 + comienzo) && millis() < (3800 + comienzo)){
    fill(255, 0, 0);
    ellipse(XY1, XY1, primerCirculo, primerCirculo);
    primerCirculo = primerCirculo + 1
  }
  
  //tres circulos esquina
  	//circulo morado
  if(millis() > (3800 + comienzo) && millis() < (4200 + comienzo)){
    fill(85, 51, 222);
    ellipse(350, 40, 20, 20);
  }
  	//circulo azul
  if(millis() > (3900 + comienzo) && millis() < (4200 + comienzo)){
    fill(17, 87, 133);
    ellipse(320, 40, 20, 20);
  }
  	//circulo verde
  if(millis() > (4000 + comienzo) && millis() < (4200 + comienzo)){
    fill(5, 105, 70);
    ellipse(290, 40, 20, 20);
  }
  
  //lineas de colores 
  	//linea morada
  strokeWeight(10);
  if(millis() > (4500 + comienzo) && millis() < (4900 + comienzo)){
    stroke(85, 51, 222);
    line(200, 0, 0, 200);
  }
  	//linea azul
  if(millis() > (4600 + comienzo) && millis() < (4900 + comienzo)){
    stroke(17, 87, 133);
    line(240, 0, 0, 240);
  }
  	//linea verde
  if(millis() > (4700 + comienzo) && millis() < (4900 + comienzo)){
    stroke(5, 105, 70);
    line(280, 0, 0, 280);
  }
  
  //tres triangulos
  noStroke();
  	//triangulo morado
  if(millis() > (5200 + comienzo) && millis() < (5600 + comienzo)){
    fill(85, 51, 222);
    triangle(140, 70, 170, 130, 110, 130);
  }
  	//triangulo azul
  if(millis() > (5300 + comienzo) && millis() < (5600 + comienzo)){
    fill(17, 87, 133);
    triangle(210, 160, 240, 220, 180, 220);
  }
  	//triangulo verde
  if(millis() > (5400 + comienzo) && millis() < (5700 + comienzo)){
    fill(5, 105, 70);
    triangle(280, 250, 310, 310, 250, 310);
  }
  
  //cuadro rebotin
  if(millis() > (5700 + comienzo) && millis() < (6400 + comienzo)){
    fill(242, 242, 5);
  	rect(X, Y, 20, 20);
  	X= X+dirX;
  	Y = Y + dirY;
  	if(X < 0|| X > width - 20){
    dirX = - dirX;
  	}
  	if(Y < 0){
    dirY = - dirY;
    }
  }
  
  //tres circulos
  	//verde
  if(millis() > (6400 + comienzo) && millis() < (6800 + comienzo)){
    fill(19, 240, 8);
    ellipse(200, 230, 80, 80);
  }
  	//rojo
  if(millis() > (6500 + comienzo) && millis() < (6800 + comienzo)){
    fill(255, 0, 0, 100);    ellipse(170, 200, 80, 80);
  }
  	//azul
  if(millis() > (6600 + comienzo) && millis() < (6800 + comienzo)){
    fill(14, 38, 97, 160);
    ellipse (230, 200, 80, 80);
  }
  
  //rectangulos de color
  	//verde
  if (millis() > (7200+ comienzo) && millis() < (7600 + comienzo)){
    fill(40, 143, 34);
    rect(0, 0, 400, 133);
  }
  	//rojo
  if (millis() > (7300 + comienzo) && millis() < (7600 + comienzo)){
    fill(117, 34, 34);
    rect(0, 133, 400, 133);
  }
  	//azul
  if (millis() > (7400 + comienzo) && millis() < (7600 + comienzo)){
    fill(39, 54, 87);
    rect(0, 266, 400, 134);
  }

  //diamantes 
  	//verde
  if (millis() > (7900 + comienzo) && millis() < (8300 + comienzo)){
    fill(40, 143, 34);
    beginShape();
    vertex(100,160);
    vertex(120, 200);
    vertex(100, 240);
    vertex(80, 200);
    endShape(CLOSE);
  }
  	//rojo
  if (millis() > (8000 + comienzo) && millis() < (8300 + comienzo)){
    fill(117, 34, 34);
    beginShape();
    vertex(200,160);
    vertex(220, 200);
    vertex(200, 240);
    vertex(180, 200);
    endShape(CLOSE);
  }
  	//azul
  if (millis() > (8100 + comienzo) && millis() < (8300 + comienzo)){
    fill(39, 54, 87);
    beginShape();
    vertex(300,160);
    vertex(320, 200);
    vertex(300, 240);
    vertex(280, 200);
    endShape(CLOSE);
  }
  
  //lineas verticales
  	//verde
  strokeWeight(30);
  if(millis() > (8600 + comienzo) && millis() < (9000 + comienzo)){
    stroke(40, 143, 34);
    line(300, 0, 300, 400);
  }
  	//roja
  if(millis() > (8700 + comienzo) && millis() < (9000 + comienzo)){
    stroke(117, 34, 34);
    line(200, 0, 200, 400);
  }
  	//azul
  if(millis() > (8800 + comienzo) && millis() < (9000 + comienzo)){
    stroke(39, 54, 87);
    line(100, 0, 100, 400);
  }
  
  //gotas
  noStroke();
  fill(12, 171, 245);
  if(millis() > (9000 + comienzo) && millis() < (9125 + comienzo)){
    rect(0, 0, 400, 40);
  }
  if(millis() > (9125 + comienzo) && millis() < (9250 + comienzo)){
    rect(57, 0, 343, 40);
    rect(0, posYgota1, 57, 40);
    posYgota1 = posYgota1 + 40;
  }
  if(millis() > (9250 + comienzo) && millis() < (9375 + comienzo)){
    rect(57, 0, 228, 40);
    rect(342, 0, 58, 40);
    rect(285, posYgota2 , 57, 40);
    posYgota2 = posYgota2 + 40;
  }
  if(millis() > (9375 + comienzo) && millis() < (9500 + comienzo)){
    rect(57, 0, 114, 40);
    rect(228, 0, 57, 40);
    rect(342, 0, 58, 40);
    rect(171, posYgota3, 57, 40);
    posYgota3 = posYgota3 + 40;
  }
  if(millis() > (9500 + comienzo) && millis() < (9625 + comienzo)){
    rect(114, 0, 57, 40);
    rect(228, 0, 57, 40);
    rect(342, 0, 58, 40);
    rect(57, posYgota4, 57, 40);
    posYgota4 = posYgota4 + 40;
  }
  if(millis() > (9625 + comienzo) && millis() < (9750 + comienzo)){
    rect(114, 0, 57, 40);
    rect(228, 0, 57, 40);
    rect(342, posYgota5, 58, 40);
    posYgota5 = posYgota5 + 40;
  }
  if(millis() > (9750 + comienzo) && millis() < (9875 + comienzo)){
    rect(228, 0, 57, 40);
    rect(114, posYgota6, 57, 40);
    posYgota6 = posYgota6 + 40;
  }
  if(millis() > (9875 + comienzo) && millis() < (10000 + comienzo)){
    rect(228, posYgota7, 57, 40);
    posYgota7 = posYgota7 + 40;
  }
  
  //ciculo despues de gotas
  if(millis() > (10000 + comienzo) && millis() < (10100 + comienzo) || millis() > (10200 + comienzo) && millis() < (10300 + comienzo) || millis() > (10400 + comienzo) && millis() < (10600 + comienzo)){
    fill(227, 16, 227);
    ellipse(200, 200, 200, 200);
  }
  
  //cuadricula
  if(millis() > (10600 + comienzo) && millis() < (11800 + comienzo)){
    fill(237, 33, 115);
    rect(0, 80, movlinea1, 40);
    movlinea1 = movlinea1 + 40;
  }
  if(millis() > (10800 + comienzo) && millis() < (11800 + comienzo)){
    fill(161, 33, 235);
    rect(0, 180, movlinea2, 40);
    movlinea2 = movlinea2 + 40;
  }
  if(millis() > (11000 + comienzo) && millis() < (11800 + comienzo)){
    fill(35, 45, 235);
    rect(0, 280, movlinea3, 40);
    movlinea3 = movlinea3 + 40;
  }
  if(millis() > (11300 + comienzo) && millis() < (11800 + comienzo)){
    fill(235, 98, 35);
    rect(80, 0, 40, movlinea4);
    movlinea4 = movlinea4 + 40;
  }
  if(millis() > (11400 + comienzo) && millis() < (11800 + comienzo)){
    fill(235, 178, 35);
    rect(180, 0, 40, movlinea5);
    movlinea5 = movlinea5 + 40;
  }
  if(millis() > (11500 + comienzo) && millis() < (11800 + comienzo)){
    fill(188, 235, 35);
    rect(280, 0, 40, movlinea6);
    movlinea6 = movlinea6 + 40;
  }
  
  //circulo blanco en movimiento
	if(millis() > (11800 + comienzo) && millis() < (13500 + comienzo)){
		fill(255, 255, 255);
		ellipse(200, 200, tamañoCirculodespcuadricula, tamañoCirculodespcuadricula);
		tamañoCirculodespcuadricula = tamañoCirculodespcuadricula - 3;
	}
  //circulo blanco quieto
	if(millis() > (13500 + comienzo) && millis() < (15400 + comienzo)){
		fill(255, 255, 255);
		ellipse(200, 200, 100,100);
	}
  //circulos alrededor circulo blanco
	if(millis() > (13700 + comienzo) && millis() < (15400 + comienzo)){
		fill(77, 112, 69);
		ellipse(160, 130, tamañoCirculosRededor, tamañoCirculosRededor)
		tamañoCirculosRededor = tamañoCirculosRededor - 0.5;
	}
	if(millis() > (13800 + comienzo) && millis() < (15400 + comienzo)){
		fill(110, 68, 109);
		ellipse(300, 100, tamañoCirculosRededor + 5, tamañoCirculosRededor + 5);
	}
	if(millis() > (13900 + comienzo) && millis() < (15400 + comienzo)){
		fill(110, 100, 68);
		ellipse(200, 320, tamañoCirculosRededor + 10, tamañoCirculosRededor + 10);
	}
	if(millis() > (14300 + comienzo) && millis() < (15400 + comienzo)){
		fill(110, 68, 68);
		ellipse(60, 220, tamañoCirculosRededor + 15, tamañoCirculosRededor + 15)
	}
	if(millis() > (14400 + comienzo) && millis() < (15400 + comienzo)){
		fill(68, 110, 91);
		ellipse(330, 250, tamañoCirculosRededor + 20, tamañoCirculosRededor + 20);
	}
	if(millis() > (14500 + comienzo) && millis() < (15400 + comienzo)){
		fill(26, 121, 128);
		ellipse(30, 60, tamañoCirculosRededor + 25, tamañoCirculosRededor + 25);
	}
	if(millis() > (14900 + comienzo) && millis() < (15400 + comienzo)){
		fill(128, 27, 113);
		ellipse(80, 370, tamañoCirculosRededor + 30, tamañoCirculosRededor + 30)
	}
	if(millis() > (15000 + comienzo) && millis() < (15400 + comienzo)){
		fill(209, 196, 50);
		ellipse(300, 40, tamañoCirculosRededor + 35, tamañoCirculosRededor + 35);
	}
	if(millis() > (15100 + comienzo) && millis() < (15400 + comienzo)){
		fill(207, 86, 50);
		ellipse(280, 370, tamañoCirculosRededor + 40, tamañoCirculosRededor + 40);
	}
  
  //tres cuadrados quietos
  if(millis() > (15600 + comienzo) && millis() < (16100 + comienzo)){
    fill(132, 245, 122);
    rect(110, 10, 40, 40);
  }
  if(millis() > (15700 + comienzo) && millis() < (16100 + comienzo)){
    fill(132, 245, 122);
    rect(60, 10, 40, 40);
  }
  if(millis() > (15800 + comienzo) && millis() < (16100 + comienzo)){
    fill(132, 245, 122);
    rect(10, 10, 40, 40);
  }
  //tres cuadrados en movimiento
  if(millis() > (16100 + comienzo) && millis() < (17300 + comienzo)){
    fill(132, 245, 122);
    rect(posXcuadrosverdes, posYcuadradosverdes, 40, 40);
    rect(posXcuadrosverdes - 50, posYcuadradosverdes, 40, 40);
    rect(posXcuadrosverdes - 100, posYcuadradosverdes, 40, 40);
    posXcuadrosverdes = posXcuadrosverdes + veldirXcuadrosverdes;
    posYcuadradosverdes = posYcuadradosverdes + veldirYcuadrosverdes;
    if(posXcuadrosverdes < 0 || posXcuadrosverdes > width - 40){
      veldirXcuadrosverdes = - veldirXcuadrosverdes;
    }
    if(posYcuadradosverdes > height - 40){
      veldirYcuadrosverdes = - veldirYcuadrosverdes;
    }
  }
  
  //"gotas" naranjas
  fill(255, 140, 0);
  if(millis() > (17300 + comienzo) && millis() < (17425 + comienzo)){
    rect(0, 0, 40, 400);
  }
  if(millis() > (17425 + comienzo) && millis() < (17550 + comienzo)){
    rect(0, 57, 40, 343);
    rect(posXgotaNaranja1,0,  40, 57);
    posXgotaNaranja1 = posXgotaNaranja1 + 40;
  }
  if(millis() > (17550 + comienzo) && millis() < (17675 + comienzo)){
    rect(0, 57, 40, 228);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranja2, 285,  40, 57);
    posXgotaNaranja2 = posXgotaNaranja2 + 40;
  }
  if(millis() > (17675 + comienzo) && millis() < (17800 + comienzo)){
    rect(0, 57, 40, 114);
    rect(0, 228, 40, 57);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranja3, 171,  40, 57);
    posXgotaNaranja3 = posXgotaNaranja3 + 40;
  }
  if(millis() > (17800 + comienzo) && millis() < (17925 + comienzo)){
    rect(0, 114, 40, 57);
    rect(0, 228, 40, 57);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranja4, 57,  40, 57);
    posXgotaNaranja4 = posXgotaNaranja4 + 40;
  }
  if(millis() > (17925 + comienzo) && millis() < (18050 + comienzo)){
    rect(0, 114, 40, 57);
    rect(0, 228, 40, 57);
    rect(posXgotaNaranja5, 342, 40, 58);
    posXgotaNaranja5 = posXgotaNaranja5 + 40;
  }
  if(millis() > (18050 + comienzo) && millis() < (18175 + comienzo)){
    rect(0, 228, 40, 57);
    rect(posXgotaNaranja6, 114, 40, 57);
    posXgotaNaranja6 = posXgotaNaranja6 + 40;
  }
  if(millis() > (18175 + comienzo) && millis() < (18300 + comienzo)){
    rect(posXgotaNaranja7, 228, 40, 57);
    posXgotaNaranja7 = posXgotaNaranja7 + 40;
  }
  
  //triangulos vinotinto
  if(millis() > (18300 + comienzo) && millis() < (18500 + comienzo) || millis() > (18600 + comienzo) && millis() < (18800 + comienzo)){
    fill(82, 0, 0);
    triangle(200, 40, 250, 360, 150, 360);
    triangle(173, 40, 92, 311, 14, 374);
    triangle(227, 40, 386, 374, 308, 311);
  }
  
  //cambio fondos
  if(millis() > (18900 + comienzo) && millis() < (19100 + comienzo)){
    background(255, 255, 255);
  }
  if(millis() > (19100 + comienzo) && millis() < (19300 + comienzo)){
    background(45, 77, 3);
  }
  
  //cuadrados X4
  if(millis() > (19600 + comienzo) && millis() < (19800 + comienzo)){
    fill(255, 111, 0);
    rect(100, 100, 80, 80);
    rect(220, 100, 80, 80);
    rect(100, 220, 80, 80);
    rect(220, 220, 80, 80);
  }
  if(millis() > (20000 + comienzo) && millis() < (20200 + comienzo)){
    fill(255, 111, 0);
    rect(100, 100, 80, 80);
    rect(100, 220, 80, 80);
  }
  if(millis() > (20200 + comienzo) && millis() < (20400 + comienzo)){
    fill(255, 111, 0);
    rect(220, 100, 80, 80);
    rect(220, 220, 80, 80);
  }
  
  //"gotas" moradas
  fill(77, 48, 138);
  if(millis() > (20400 + comienzo) && millis() < (20525 + comienzo)){
    rect(360, 0, 40, 400);
  }
  if(millis() > (20525 + comienzo) && millis() < (20650 + comienzo)){
    rect(360, 57, 40, 343);
    rect(posXgotaMorada1,0,  40, 57);
    posXgotaMorada1 = posXgotaMorada1 - 40;
  }
  if(millis() > (20650 + comienzo) && millis() < (20775 + comienzo)){
    rect(360, 57, 40, 228);
    rect(360, 342, 40, 58);
    rect(posXgotaMorada2, 285,  40, 57);
    posXgotaMorada2 = posXgotaMorada2 - 40;
  }
  if(millis() > (20775 + comienzo) && millis() < (20900 + comienzo)){
    rect(360, 57, 40, 114);
    rect(360, 228, 40, 57);
    rect(360, 342, 40, 58);
    rect(posXgotaMorada3, 171,  40, 57);
    posXgotaMorada3 = posXgotaMorada3 - 40;
  }
  if(millis() > (20900 + comienzo) && millis() < (21025 + comienzo)){
    rect(360, 114, 40, 57);
    rect(360, 228, 40, 57);
    rect(360, 342, 40, 58);
    rect(posXgotaMorada4, 57,  40, 57);
    posXgotaMorada4 = posXgotaMorada4 - 40;
  }
  if(millis() > (21025 + comienzo) && millis() < (21150 + comienzo)){
    rect(360, 114, 40, 57);
    rect(360, 228, 40, 57);
    rect(posXgotaMorada5, 342, 40, 58);
    posXgotaMorada5 = posXgotaMorada5 - 40;
  }
  if(millis() > (21150 + comienzo) && millis() < (21275 + comienzo)){
    rect(360, 228, 40, 57);
    rect(posXgotaMorada6, 114, 40, 57);
    posXgotaMorada6 = posXgotaMorada6 - 40;
  }
  if(millis() > (21275 + comienzo) && millis() < (21400 + comienzo)){
    rect(posXgotaMorada7, 228, 40, 57);
    posXgotaMorada7 = posXgotaMorada7 - 40;
  }
  
  //puntos que desaparecen
  if(millis() > (21400 + comienzo) && millis() < (21600 + comienzo)){
    fill(82, 0, 0);
    ellipse(130, 80, 40, 40);
    fill(0, 64, 255);
    ellipse(221, 322, 40, 40);
    fill(255, 0, 225);
    ellipse(313, 166, 40, 40);
    fill(85, 255, 0);
    ellipse(31, 306, 40, 40);
    fill(255, 139, 97);
    ellipse(305, 361, 40, 40);
    fill(97, 92, 173);
    ellipse(250, 33, 40, 40);
    fill(168, 104, 104);
    ellipse(130, 216, 40, 40);
    fill(255, 255, 0);
    ellipse(31, 140, 40, 40);
    fill(76, 122, 68);
    ellipse(348, 312, 40, 40);
    fill(0, 255, 234);
    ellipse(351, 28, 40, 40);
    fill(99, 5, 107);
    ellipse(218, 131, 40, 40);
    fill(234, 130, 250);
    ellipse(125, 350, 40, 40);
    fill(24, 17, 217);
    ellipse(264, 244, 40, 40);
    fill(255, 89, 0);
    ellipse(375, 109, 40, 40);
    fill(177, 165, 201);
    ellipse(53, 28, 40, 40);
  }
  if(millis() > (21600 + comienzo) && millis() < (21800 + comienzo)){
    fill(97, 92, 173);
    ellipse(250, 33, 40, 40);
    fill(168, 104, 104);
    ellipse(130, 216, 40, 40);
    fill(255, 255, 0);
    ellipse(31, 140, 40, 40);
    fill(76, 122, 68);
    ellipse(348, 312, 40, 40);
    fill(0, 255, 234);
    ellipse(351, 28, 40, 40);
    fill(99, 5, 107);
    ellipse(218, 131, 40, 40);
    fill(234, 130, 250);
    ellipse(125, 350, 40, 40);
    fill(24, 17, 217);
    ellipse(264, 244, 40, 40);
    fill(255, 89, 0);
    ellipse(375, 109, 40, 40);
    fill(177, 165, 201);
    ellipse(53, 28, 40, 40);
  }
  if(millis() > (21800 + comienzo) && millis() < (22000 + comienzo)){
    fill(99, 5, 107);
    ellipse(218, 131, 40, 40);
    fill(234, 130, 250);
    ellipse(125, 350, 40, 40);
    fill(24, 17, 217);
    ellipse(264, 244, 40, 40);
    fill(255, 89, 0);
    ellipse(375, 109, 40, 40);
    fill(177, 165, 201);
    ellipse(53, 28, 40, 40);
  }

  //trio
  if(millis() > (22300 + comienzo) && millis() < (22500 + comienzo) || millis() > (22600 + comienzo) && millis() < (22800 + comienzo) || millis() > (22900 + comienzo) && millis() < (23100 + comienzo)){
    fill(214, 110, 240);
    ellipse(movXtrio, movYtrio, tamañoTrio, tamañoTrio);
    ellipse(movXtrio - 50, movYtrio + 40, tamañoTrio, tamañoTrio);
    ellipse(movXtrio - 100, movYtrio + 80, tamañoTrio, tamañoTrio);
    tamañoTrio = tamañoTrio - 1;
    movXtrio = movXtrio - 5;
    movYtrio = movYtrio + 3;
  }
  //trio 2
  if(millis() > (23300 + comienzo) && millis() < (23400 + comienzo) || millis() > (23500 + comienzo) && millis() < (23600 + comienzo) || millis() > (23700 + comienzo) && millis() < (23800 + comienzo)){
    fill(47, 99, 55);
    ellipse(movXtrio2, movYtrio2, tamañoTrio2, tamañoTrio2);
    ellipse(movXtrio2 - 50, movYtrio2 + 40, tamañoTrio2, tamañoTrio2);
    ellipse(movXtrio2 - 100, movYtrio2 + 80, tamañoTrio2, tamañoTrio2);
    tamañoTrio2 = tamañoTrio2 - 1;
    movXtrio2 = movXtrio2 - 5;
    movYtrio2 = movYtrio2 + 3;
  }
  
  //gran morada!!!
  if(millis() > (24000 + comienzo) && millis() < (24500 + comienzo)){
    ellipse(movGranellipse, 400, 400, 400);
    movGranellipse = movGranellipse - 60;
    if(movGranellipse < -200)
      movGranellipse = movGranellipse + 700;
  }
  
  //cuadros colores
  if(millis() > (24500 + comienzo) && millis() < (24600 + comienzo)){
    fill(173, 12, 12);
    rect(0, 0, 400, 400);
    fill(171, 62, 12);
    rect(40, 40, 360, 360);
    fill(171, 81, 12);
    rect(80, 80, 320, 320);
    fill(171, 113, 12);
    rect(120, 120, 280, 280);
    fill(171, 150, 12);
    rect(160, 160, 240, 240);
    fill(171, 171, 12);
    rect(200, 200, 200, 200);
  }
    if(millis() > (24700 + comienzo) && millis() < (24800 + comienzo)){
    fill(107, 6, 6);
    rect(0, 0, 400, 400);
    fill(133, 8, 8);
    rect(40, 40, 360, 360);
    fill(173, 12, 12);
    rect(80, 80, 320, 320);
    fill(171, 62, 12);
    rect(120, 120, 280, 280);
    fill(171, 81, 12);
    rect(160, 160, 240, 240);
    fill(171, 113, 12);
    rect(200, 200, 200, 200);
  }
    if(millis() > (24900 + comienzo) && millis() < (25000 + comienzo)){
    fill(36, 2, 2);
    rect(0, 0, 400, 400);
    fill(71, 3, 3);
    rect(40, 40, 360, 360);
    fill(107, 6, 6);
    rect(80, 80, 320, 320);
    fill(133, 8, 8);
    rect(120, 120, 280, 280);
    fill(173, 12, 12);
    rect(160, 160, 240, 240);
    fill(171, 62, 12);
    rect(200, 200, 200, 200);
  }
  if(millis() > (25100 + comienzo) && millis() < (25200 + comienzo)){
    fill(36, 2, 2);
    rect(80, 80, 320, 320);
    fill(71, 3, 3);
    rect(120, 120, 280, 280);
    fill(107, 6, 6);
    rect(160, 160, 240, 240);
    fill(133, 8, 8);
    rect(200, 200, 200, 200);
  }
  if(millis() > (25300 + comienzo) && millis() < (25400 + comienzo)){
    fill(36, 2, 2);
    rect(160, 160, 240, 240);
    fill(71, 3, 3);
    rect(200, 200, 200, 200);
  }
  
  // ciculo cambia color
  if(millis() > (25400 + comienzo) && millis() < (25800 + comienzo)){
    for (var circulo = 255; circulo > 0; circulo = circulo - 21) {
    fill(circulo, cambiocolorcirculocolores, 188);
    ellipse(200, 200, circulo, circulo);
      cambiocolorcirculocolores = cambiocolorcirculocolores + 1;
    }
  }
  
  //circulos (T-T)
  fill(87, 255, 98);
  if(millis() > (25800 + comienzo) && millis() < (26200 + comienzo)){
    ellipse(100, 300, 100, 100);
  }
  if(millis() > (25900 + comienzo) && millis() < (26200 + comienzo)){
    ellipse(200, 200, 100, 100);
  }
  if(millis() > (26000 + comienzo) && millis() < (26200 + comienzo)){
    ellipse(300, 100, 100, 100);
  }
  if(millis() > (26500 + comienzo) && millis() < (26600 + comienzo) || millis() > (26700 + comienzo) && millis() < (26800 + comienzo) || millis() > (26900 + comienzo) && millis() < (27000 + comienzo)){
    ellipse(100, 300, 100, 100);
    ellipse(200, 200, 100, 100);
    ellipse(300, 100, 100, 100);
  }
  
  //gotas que desafian la ley de gravedad (ºOº)
    fill(255, 89, 155);
  if(millis() > (27300 + comienzo) && millis() < (27425 + comienzo)){
    rect(0, 360, 400, 40);
  }
  if(millis() > (27425 + comienzo) && millis() < (27550 + comienzo)){
    rect(57, 360, 343, 40);
    rect(0, posYgotaAntigravedad1, 57, 40);
    posYgotaAntigravedad1 = posYgotaAntigravedad1 - 40;
  }
  if(millis() > (27550 + comienzo) && millis() < (27675 + comienzo)){
    rect(57, 360, 228, 40);
    rect(342, 360, 58, 40);
    rect(285, posYgotaAntigravedad2 , 57, 40);
    posYgotaAntigravedad2 = posYgotaAntigravedad2 - 40;
  }
  if(millis() > (27675 + comienzo) && millis() < (27800 + comienzo)){
    rect(57, 360, 114, 40);
    rect(228, 360, 57, 40);
    rect(342, 360, 58, 40);
    rect(171, posYgotaAntigravedad3, 57, 40);
    posYgotaAntigravedad3 = posYgotaAntigravedad3 - 40;
  }
  if(millis() > (27800 + comienzo) && millis() < (27925 + comienzo)){
    rect(114, 360, 57, 40);
    rect(228, 360, 57, 40);
    rect(342, 360, 58, 40);
    rect(57, posYgotaAntigravedad4, 57, 40);
    posYgotaAntigravedad4 = posYgotaAntigravedad4 - 40;
  }
  if(millis() > (27925 + comienzo) && millis() < (28050 + comienzo)){
    rect(114, 360, 57, 40);
    rect(228, 360, 57, 40);
    rect(342, posYgotaAntigravedad5, 58, 40);
    posYgotaAntigravedad5 = posYgotaAntigravedad5 - 40;
  }
  if(millis() > (28050 + comienzo) && millis() < (28175 + comienzo)){
    rect(228, 360, 57, 40);
    rect(114, posYgotaAntigravedad6, 57, 40);
    posYgotaAntigravedad6 = posYgotaAntigravedad6 - 40;
  }
  if(millis() > (28175 + comienzo) && millis() < (28300 + comienzo)){
    rect(228, posYgotaAntigravedad7, 57, 40);
    posYgotaAntigravedad7 = posYgotaAntigravedad7 - 40;
  }
  
  //lineas diagonales de arcoiris (*O*)
  strokeWeight(20);
  if(millis() > (28500 + comienzo) && millis() < (29200 + comienzo)){
    stroke(255, 89, 0);
    line(-10, 350, 50, 410);
  }
  if(millis() > (28550 + comienzo) && millis() < (29250 + comienzo)){
    stroke(209, 62, 62);
    line(-10, 300, 100, 410);
  }
  if(millis() > (28600 + comienzo) && millis() < (29300 + comienzo)){
    stroke(238, 255, 0);
    line(-10, 250, 150, 410);
  }
  if(millis() > (28650 + comienzo) && millis() < (29350 + comienzo)){
    stroke(85, 255, 0);
    line(-10, 200, 200, 410);
  }
  if(millis() > (28700 + comienzo) && millis() < (29400 + comienzo)){
    stroke(0, 255, 183);
    line(-10, 150, 250, 410);
  }
  if(millis() > (28750 + comienzo) && millis() < (29450 + comienzo)){
    stroke(0, 196, 255);
    line(-10, 100, 300, 410);
  }
  if(millis() > (28800 + comienzo) && millis() < (29500 + comienzo)){
    stroke(0, 72, 255);
    line(-10, 50, 350, 410);
  }
  if(millis() > (28850 + comienzo) && millis() < (29550 + comienzo)){
    stroke(111, 0, 255);
    line(-10, 0, 400, 410);
  }
  if(millis() > (28900 + comienzo) && millis() < (29600 + comienzo)){
    stroke(170, 0, 255);
    line(30, -10, 420, 380);
  }
  if(millis() > (28950 + comienzo) && millis() < (29650 + comienzo)){
    stroke(234, 0, 255);
    line(80, -10, 420, 330);
  }
  if(millis() > (29000 + comienzo) && millis() < (29700 + comienzo)){
    stroke(255, 0, 123);
    line(130, -10, 420, 280);
  }
  if(millis() > (29050 + comienzo) && millis() < (29750 + comienzo)){
    stroke(255, 0, 51);
    line(180, -10, 420, 230);
  }
  if(millis() > (29100 + comienzo) && millis() < (29800 + comienzo)){
    stroke(255, 111, 0);
    line(230, -10, 420, 180);
  }
  if(millis() > (29150 + comienzo) && millis() < (29850 + comienzo)){
    stroke(255, 153, 0);
    line(280, -10, 420, 130);
  }
  if(millis() > (29200 + comienzo) && millis() < (29900 + comienzo)){
    stroke(255, 213, 0);
    line(330, -10, 420, 80);
  }
  if(millis() > (29250 + comienzo) && millis() < (29950 + comienzo)){
    stroke(255, 255, 0);
    line(380, -10, 420, 30);
  }
  
  //tres circulos otra vez 
  noStroke();
  	//verde
  if(millis() > (30000 + comienzo) && millis() < (30400 + comienzo)){
    fill(19, 240, 8);
    ellipse(200, 230, 120, 120);
  }
  	//rojo
  if(millis() > (30100 + comienzo) && millis() < (30400 + comienzo)){
    fill(255, 0, 0, 100);    
    ellipse(170, 200, 120, 120);
  }
  	//azul
  if(millis() > (30200 + comienzo) && millis() < (30400 + comienzo)){
    fill(14, 38, 97, 160);
    ellipse (230, 200, 120, 120);
  }
  
  //lineas verticales otra vez 
  	//naranja
  strokeWeight(30);
  if(millis() > (30800 + comienzo) && millis() < (31200 + comienzo)){
    stroke(255, 89, 0);
    line(300, 0, 300, 400);
  }
  	//roja
  if(millis() > (30900 + comienzo) && millis() < (31200 + comienzo)){
    stroke(117, 34, 34);
    line(200, 0, 200, 400);
  }
  	//rosa
  if(millis() > (31000 + comienzo) && millis() < (31200 + comienzo)){
    stroke(148, 12, 12);
    line(100, 0, 100, 400);
  }
  
  noStroke();
  //cuadro rebotin #2
  if(millis() > (31200 + comienzo) && millis() < (31900 + comienzo)){
    fill(13, 117, 148);
  	rect(Xrebotin2, Yrebotin2, 40, 40);
  	Xrebotin2 = Xrebotin2 + dirXrebotin2;
  	Yrebotin2 = Yrebotin2 + dirYrebotin2;
  	if(Xrebotin2 < 0|| Xrebotin2 > width){
    dirXrebotin2 = - dirXrebotin2;
  	}
  	if(Yrebotin2 < 0){
    dirYrebotin2 = - dirYrebotin2;
    }
  }
  
  //otro circulo en movimiento
  if(millis() > (32000 + comienzo) && millis() < (34000 + comienzo)){
		fill(151, 199, 48);
		ellipse(200, 200, tamañoOtrocirculoenmovimiento, tamañoOtrocirculoenmovimiento);
		tamañoOtrocirculoenmovimiento = tamañoOtrocirculoenmovimiento - 3;
	}
  
  //triangulos que aparecen y desaparecen (ºoº)
  if(millis() > (34100 + comienzo) && millis() < (34200 + comienzo)){
    fill(255, 234, 0);
    triangle(100, 50, 140, 350, 60, 350);
  }
  if(millis() > (34300 + comienzo) && millis() < (34400 + comienzo)){
    fill(123, 255, 0);
    triangle(200, 50, 240, 350, 160, 350);
  }
  if(millis() > (34500 + comienzo) && millis() < (34600 + comienzo)){
    fill(255, 89, 0);
    triangle(300, 50, 340, 350, 260, 350);
  }
  
  //cuadricula #2
  if(millis() > (34800 + comienzo) && millis() < (36200 + comienzo)){
    fill(0, 238, 255);
    rect(80, 0, 40, movCuadriculados4);
    movCuadriculados4 = movCuadriculados4 + 40;
  }
  if(millis() > (35000 + comienzo) && millis() < (36200 + comienzo)){
    fill(229, 111, 235);
    rect(180, 0, 40, movCuadriculados5);
    movCuadriculados5 = movCuadriculados5 + 40;
  }
  if(millis() > (35200 + comienzo) && millis() < (36200 + comienzo)){
    fill(230, 64, 64);
    rect(280, 0, 40, movCuadriculados6);
    movCuadriculados6 = movCuadriculados6 + 40;
  }
  if(millis() > (35500 + comienzo) && millis() < (36200 + comienzo)){
    fill(115, 168, 47);
    rect(0, 80, movCuadriculados1, 40);
    movCuadriculados1 = movCuadriculados1 + 40;
  }
  if(millis() > (35700 + comienzo) && millis() < (36200 + comienzo)){
    fill(80, 51, 176);
    rect(0, 180, movCuadriculados2, 40);
    movCuadriculados2 = movCuadriculados2 + 40;
  }
  if(millis() > (35900 + comienzo) && millis() < (36200 + comienzo)){
    fill(230, 222, 64);
    rect(0, 280, movCuadriculados3, 40);
    movCuadriculados3 = movCuadriculados3 + 40;
  }
  
  //gotas de arriba y abajo
  
  if(millis() > (36400 + comienzo) && millis() < (36525 + comienzo)){
    fill(255, 89, 155);
    rect(0, 360, 400, 40);
    fill(12, 171, 245);
    rect(0, 0, 400, 40);
  }
  if(millis() > (36525 + comienzo) && millis() < (36650 + comienzo)){
    fill(12, 171, 245);
    rect(57, 0, 343, 40);
    rect(0, posYgotas1, 57, 40);
    posYgotas1 = posYgotas1 + 40;
    fill(255, 89, 155);
    rect(57, 360, 343, 40);
    rect(0, posYgotaAntigravedadDos1, 57, 40);
    posYgotaAntigravedadDos1 = posYgotaAntigravedadDos1 - 40;
  }
  if(millis() > (36650 + comienzo) && millis() < (36775 + comienzo)){
    fill(12, 171, 245);
    rect(57, 0, 228, 40);
    rect(342, 0, 58, 40);
    rect(285, posYgotas2 , 57, 40);
    posYgotas2 = posYgotas2 + 40;
    fill(255, 89, 155);
    rect(57, 360, 228, 40);
    rect(342, 360, 58, 40);
    rect(285, posYgotaAntigravedadDos2 , 57, 40);
    posYgotaAntigravedadDos2 = posYgotaAntigravedadDos2 - 40;
  }
  if(millis() > (36775 + comienzo) && millis() < (36900 + comienzo)){
    fill(12, 171, 245);
    rect(57, 0, 114, 40);
    rect(228, 0, 57, 40);
    rect(342, 0, 58, 40);
    rect(171, posYgotas3, 57, 40);
    posYgotas3 = posYgotas3 + 40;
    fill(255, 89, 155);
    rect(57, 360, 114, 40);
    rect(228, 360, 57, 40);
    rect(342, 360, 58, 40);
    rect(171, posYgotaAntigravedadDos3, 57, 40);
    posYgotaAntigravedadDos3 = posYgotaAntigravedadDos3 - 40;
  }
  if(millis() > (36900 + comienzo) && millis() < (37025 + comienzo)){
    fill(12, 171, 245);
    rect(114, 0, 57, 40);
    rect(228, 0, 57, 40);
    rect(342, 0, 58, 40);
    rect(57, posYgotas4, 57, 40);
    posYgotas4 = posYgotas4 + 40;
    fill(255, 89, 155);
    rect(114, 360, 57, 40);
    rect(228, 360, 57, 40);
    rect(342, 360, 58, 40);
    rect(57, posYgotaAntigravedadDos4, 57, 40);
    posYgotaAntigravedadDos4 = posYgotaAntigravedadDos4 - 40;
  }
  if(millis() > (37025 + comienzo) && millis() < (37150 + comienzo)){
    fill(12, 171, 245);
    rect(114, 0, 57, 40);
    rect(228, 0, 57, 40);
    rect(342, posYgotas5, 58, 40);
    posYgotas5 = posYgotas5 + 40;
    fill(255, 89, 155);
    rect(114, 360, 57, 40);
    rect(228, 360, 57, 40);
    rect(342, posYgotaAntigravedadDos5, 58, 40);
    posYgotaAntigravedadDos5 = posYgotaAntigravedadDos5 - 40;
  }
  if(millis() > (37150 + comienzo) && millis() < (37275 + comienzo)){
    fill(12, 171, 245);
    rect(228, 0, 57, 40);
    rect(114, posYgotas6, 57, 40);
    posYgotas6 = posYgotas6 + 40;
    fill(255, 89, 155);
    rect(228, 360, 57, 40);
    rect(114, posYgotaAntigravedadDos6, 57, 40);
    posYgotaAntigravedadDos6 = posYgotaAntigravedadDos6 - 40;
  }
  if(millis() > (37275 + comienzo) && millis() < (37400 + comienzo)){
    fill(12, 171, 245);
    rect(228, posYgotas7, 57, 40);
    posYgotas7 = posYgotas7 + 40;
    fill(255, 89, 155);
    rect(228, posYgotaAntigravedadDos7, 57, 40);
    posYgotaAntigravedadDos7 = posYgotaAntigravedadDos7 - 40;
  }
  
  //blanco
  if(millis() > (37600 + comienzo) && millis() < (37700 + comienzo)){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito
  if(millis() > (37700 + comienzo) && millis() < (37900 + comienzo) || millis() > (38100 + comienzo) && millis() < (38300 + comienzo) || millis() > (38500 + comienzo) && millis() < (38700 + comienzo) || millis() > (38900 + comienzo) && millis() < (39100 + comienzo) || millis() > (39300 + comienzo) && millis() < (39500 + comienzo) || millis() > (39700 + comienzo) && millis() < (39900 + comienzo)){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > (37900 + comienzo) && millis() < (38100 + comienzo) || millis() > (38300 + comienzo) && millis() < (38500 + comienzo) || millis() > (38700 + comienzo) && millis() < (38900 + comienzo) || millis() > (39100 + comienzo) && millis() < (39300 + comienzo) || millis() > (39500 + comienzo) && millis() < (39700 + comienzo)){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //blanco 2
  if(millis() > (40100 + comienzo) && millis() < (40200 + comienzo)){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito 2
  if(millis() > (40400 + comienzo) && millis() < (40600 + comienzo)){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > (40600 + comienzo) && millis() < (40700 + comienzo)){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //blanco 3
  if(millis() > (40800 + comienzo) && millis() < (40900 + comienzo)){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito 3
  if(millis() > (40900 + comienzo) && millis() < (41100 + comienzo) || millis() > (41300 + comienzo) && millis() < (41500 + comienzo) || millis() > (41700 + comienzo) && millis() < (41900 + comienzo) || millis() > (42100 + comienzo) && millis() < (42300 + comienzo)){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > (41100 + comienzo) && millis() < (41300 + comienzo) || millis() > (41500 + comienzo) && millis() < (41700 + comienzo) || millis() > (41900 + comienzo) && millis() < (42100 + comienzo)){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //blanco 3
  if(millis() > (42400 + comienzo) && millis() < (42500 + comienzo)){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito4
  if(millis() > (42600 + comienzo) && millis() < (42800 + comienzo) || millis() > (43000 + comienzo) && millis() < (43200 + comienzo) || millis() > (43400 + comienzo) && millis() < (43600 + comienzo) || millis() > (43800 + comienzo) && millis() < (44000 + comienzo) || millis() > (44200 + comienzo) && millis() < (44400 + comienzo) || millis() > (44600 + comienzo) && millis() < (44800 + comienzo) || millis() > (45000 + comienzo) && millis() < (45200 + comienzo)){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > (42800 + comienzo) && millis() < (43000 + comienzo) || millis() > (43200 + comienzo) && millis() < (43400 + comienzo) || millis() > (43600 + comienzo) && millis() < (43800 + comienzo) || millis() > (44000 + comienzo) && millis() < (44200 + comienzo) || millis() > (44400 + comienzo) && millis() < (44600 + comienzo) || millis() > (44800 + comienzo) && millis() < (45000 + comienzo) || millis() > (45200 + comienzo) && millis() < (45400 + comienzo)){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //tres circulos esquina
  	//circulo morado
  if(millis() > (45500 + comienzo) && millis() < (45900 + comienzo)){
    fill(85, 51, 222);
    ellipse(350, 40, 20, 20);
  }
  	//circulo azul
  if(millis() > (45600 + comienzo) && millis() < (45900 + comienzo)){
    fill(17, 87, 133);
    ellipse(320, 40, 20, 20);
  }
  	//circulo verde
  if(millis() > (45700 + comienzo) && millis() < (45900 + comienzo)){
    fill(5, 105, 70);
    ellipse(290, 40, 20, 20);
  }
  
  //lineas de colores 
  	//linea morada
  strokeWeight(10);
  if(millis() > (46200 + comienzo) && millis() < (46600 + comienzo)){
    stroke(85, 51, 222);
    line(200, 0, 0, 200);
  }
  	//linea azul
  if(millis() > (46300 + comienzo) && millis() < (46600 + comienzo)){
    stroke(17, 87, 133);
    line(240, 0, 0, 240);
  }
  	//linea verde
  if(millis() > (46400 + comienzo) && millis() < (46600 + comienzo)){
    stroke(5, 105, 70);
    line(280, 0, 0, 280);
  }
  
  //tres triangulos
  noStroke();
  	//triangulo morado
  if(millis() > (46900 + comienzo) && millis() < (47300 + comienzo)){
    fill(85, 51, 222);
    triangle(140, 70, 170, 130, 110, 130);
  }
  	//triangulo azul
  if(millis() > (47000 + comienzo) && millis() < (47300 + comienzo)){
    fill(17, 87, 133);
    triangle(210, 160, 240, 220, 180, 220);
  }
  	//triangulo verde
  if(millis() > (47100 + comienzo) && millis() < (47300 + comienzo)){
    fill(5, 105, 70);
    triangle(280, 250, 310, 310, 250, 310);
  }
  
  //"gotas" naranjas y moradas chocando entre si 
  if(millis() > (47300 + comienzo) && millis() < (47425 + comienzo)){
    fill(255, 140, 0);
    rect(0, 0, 40, 400);
    fill(90, 41, 194);
    rect(360, 0, 40, 400);
  }
  if(millis() > (47425 + comienzo) && millis() < (47550 + comienzo)){
    fill(255, 140, 0);
    rect(0, 57, 40, 343);
    rect(posXgotaNaranjaDos1,0,  40, 57);
    posXgotaNaranjaDos1 = posXgotaNaranjaDos1 + 40;
    fill(90, 41, 194);
    rect(360, 57, 40, 343);
    rect(posXgotaMoradaDos1,0,  40, 57);
    posXgotaMoradaDos1 = posXgotaMoradaDos1 - 40;
  }
  if(millis() > (47550 + comienzo) && millis() < (47675 + comienzo)){
    fill(255, 140, 0);
    rect(0, 57, 40, 228);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranjaDos2, 285,  40, 57);
    posXgotaNaranjaDos2 = posXgotaNaranjaDos2 + 40;
    fill(90, 41, 194);
    rect(360, 57, 40, 228);
    rect(360, 342, 40, 58);
    rect(posXgotaMoradaDos2, 285,  40, 57);
    posXgotaMoradaDos2 = posXgotaMoradaDos2 - 40;
  }
  if(millis() > (47675 + comienzo) && millis() < (47800 + comienzo)){
    fill(255, 140, 0);
    rect(0, 57, 40, 114);
    rect(0, 228, 40, 57);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranjaDos3, 171,  40, 57);
    posXgotaNaranjaDos3 = posXgotaNaranjaDos3 + 40;
    fill(90, 41, 194);
    rect(360, 57, 40, 114);
    rect(360, 228, 40, 57);
    rect(360, 342, 40, 58);
    rect(posXgotaMoradaDos3, 171,  40, 57);
    posXgotaMoradaDos3 = posXgotaMoradaDos3 - 40;
  }
  if(millis() > (47800 + comienzo) && millis() < (47925 + comienzo)){
    fill(255, 140, 0);
    rect(0, 114, 40, 57);
    rect(0, 228, 40, 57);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranjaDos4, 57,  40, 57);
    posXgotaNaranjaDos4 = posXgotaNaranjaDos4 + 40;
    fill(90, 41, 194);
    rect(360, 114, 40, 57);
    rect(360, 228, 40, 57);
    rect(360, 342, 40, 58);
    rect(posXgotaMoradaDos4, 57,  40, 57);
    posXgotaMoradaDos4 = posXgotaMoradaDos4 - 40;
  }
  if(millis() > (47925 + comienzo) && millis() < (48050 + comienzo)){
    fill(255, 140, 0);
    rect(0, 114, 40, 57);
    rect(0, 228, 40, 57);
    rect(posXgotaNaranjaDos5, 342, 40, 58);
    posXgotaNaranjaDos5 = posXgotaNaranjaDos5 + 40;
    fill(90, 41, 194);
    rect(360, 114, 40, 57);
    rect(360, 228, 40, 57);
    rect(posXgotaMoradaDos5, 342, 40, 58);
    posXgotaMoradaDos5 = posXgotaMoradaDos5 - 40;
  }
  if(millis() > (48050 + comienzo) && millis() < (48175 + comienzo)){
    fill(255, 140, 0);
    rect(0, 228, 40, 57);
    rect(posXgotaNaranjaDos6, 114, 40, 57);
    posXgotaNaranjaDos6 = posXgotaNaranjaDos6 + 40;
    fill(90, 41, 194);
    rect(360, 228, 40, 57);
    rect(posXgotaMoradaDos6, 114, 40, 57);
    posXgotaMoradaDos6 = posXgotaMoradaDos6 - 40;
  }
  if(millis() > (48175 + comienzo) && millis() < (48300 + comienzo)){
    fill(255, 140, 0);
    rect(posXgotaNaranjaDos7, 228, 40, 57);
    posXgotaNaranjaDos7 = posXgotaNaranjaDos7 + 40;
    fill(90, 41, 194);
    rect(posXgotaMoradaDos7, 228, 40, 57);
    posXgotaMoradaDos7 = posXgotaMoradaDos7 - 40;
  }
  
  //tres rectangulos
  if(millis() > (48400 + comienzo) && millis() < (48800 + comienzo)){
    fill(250, 10, 50);
    rect(50, 50, 300, 300);
  }
  if(millis() > (48500 + comienzo) && millis() < (48800 + comienzo)){
    fill(0, 0, 0);
    rect(90, 90, 220, 220);
  }
  if(millis() > (48600 + comienzo) && millis() < (48800 + comienzo)){
    fill(43, 85, 194);
    rect(130, 130, 140, 140);
  }
  
  //diamantes dos
  	//verde
  if (millis() > (49100 + comienzo) && millis() < (49500 + comienzo)){
    fill(40, 143, 34);
    beginShape();
    vertex(100,160);
    vertex(120, 200);
    vertex(100, 240);
    vertex(80, 200);
    endShape(CLOSE);
  }
  	//rojo
  if (millis() > (49200 + comienzo) && millis() < (49500 + comienzo)){
    fill(117, 34, 34);
    beginShape();
    vertex(200,160);
    vertex(220, 200);
    vertex(200, 240);
    vertex(180, 200);
    endShape(CLOSE);
  }
  	//azul
  if (millis() > (49300 + comienzo) && millis() < (49500 + comienzo)){
    fill(39, 54, 87);
    beginShape();
    vertex(300,160);
    vertex(320, 200);
    vertex(300, 240);
    vertex(280, 200);
    endShape(CLOSE);
  }
  
  //cuadrados X4 otra vez
  if(millis() > (49800 + comienzo) && millis() < (50000 + comienzo)){
    fill(58, 75, 117);
    rect(100, 100, 80, 80);
    rect(220, 100, 80, 80);
    rect(100, 220, 80, 80);
    rect(220, 220, 80, 80);
  }
  if(millis() > (50200 + comienzo) && millis() < (50400 + comienzo)){
    fill(58, 75, 117);
    rect(100, 100, 80, 80);
    rect(100, 220, 80, 80);
  }
  if(millis() > (50400 + comienzo) && millis() < (50600 + comienzo)){
    fill(58, 75, 117);
    rect(220, 100, 80, 80);
    rect(220, 220, 80, 80);
  }
}