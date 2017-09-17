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

var tiempo = millis();

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  
  if (millis() < 600){
		background(0, 0 ,0);
	}
  
  if (millis() > 600 && millis() < 700){
		background(255, 255 ,255);
	}
  
  if (millis() > 700){
		background(0, 0 ,0);
	}
  
  noStroke();
  
  //circulo rojo que crece
  if (millis() > 700 && millis() < 1000 || millis() > 1100 && millis() < 1400 || millis() > 1500 && millis() < 1800 ||millis() > 1900 && millis() < 2200 || millis() > 2300 && millis() < 2600 || millis() > 2700 && millis() < 3000 || millis() > 3100 && millis() < 3400 || millis() > 3500 && millis() < 3800){
    fill(255, 0, 0);
    ellipse(XY1, XY1, primerCirculo, primerCirculo);
    primerCirculo = primerCirculo + 1
  }
  
  //tres circulos esquina
  	//circulo morado
  if(millis() > 3800 && millis() < 4200){
    fill(85, 51, 222);
    ellipse(350, 40, 20, 20);
  }
  	//circulo azul
  if(millis() > 3900 && millis() < 4200){
    fill(17, 87, 133);
    ellipse(320, 40, 20, 20);
  }
  	//circulo verde
  if(millis() > 4000 && millis() < 4200){
    fill(5, 105, 70);
    ellipse(290, 40, 20, 20);
  }
  
  //lineas de colores 
  	//linea morada
  strokeWeight(10);
  if(millis() > 4500 && millis() < 4900){
    stroke(85, 51, 222);
    line(200, 0, 0, 200);
  }
  	//linea azul
  if(millis() > 4600 && millis() < 4900){
    stroke(17, 87, 133);
    line(240, 0, 0, 240);
  }
  	//linea verde
  if(millis() > 4700 && millis() < 4900){
    stroke(5, 105, 70);
    line(280, 0, 0, 280);
  }
  
  //tres triangulos
  noStroke();
  	//triangulo morado
  if(millis() > 5200 && millis() < 5600){
    fill(85, 51, 222);
    triangle(140, 70, 170, 130, 110, 130);
  }
  	//triangulo azul
  if(millis() > 5300 && millis() < 5600){
    fill(17, 87, 133);
    triangle(210, 160, 240, 220, 180, 220);
  }
  	//triangulo verde
  if(millis() > 5400 && millis() < 5700){
    fill(5, 105, 70);
    triangle(280, 250, 310, 310, 250, 310);
  }
  
  //cuadro rebotin
  if(millis() > 5700 && millis() < 6400){
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
  if(millis() > 6400 && millis() < 6800){
    fill(19, 240, 8);
    ellipse(200, 230, 80, 80);
  }
  	//rojo
  if(millis() > 6500 && millis() < 6800){
    fill(255, 0, 0, 100);    ellipse(170, 200, 80, 80);
  }
  	//azul
  if(millis() > 6600 && millis() < 6800){
    fill(14, 38, 97, 160);
    ellipse (230, 200, 80, 80);
  }
  
  //rectangulos de color
  	//verde
  if (millis() >7200 && millis() < 7600){
    fill(40, 143, 34);
    rect(0, 0, 400, 133);
  }
  	//rojo
  if (millis() >7300 && millis() < 7600){
    fill(117, 34, 34);
    rect(0, 133, 400, 133);
  }
  	//azul
  if (millis() >7400 && millis() < 7600){
    fill(39, 54, 87);
    rect(0, 266, 400, 134);
  }

  //diamantes 
  	//verde
  if (millis() >7900 && millis() < 8300){
    fill(40, 143, 34);
    beginShape();
    vertex(100,160);
    vertex(120, 200);
    vertex(100, 240);
    vertex(80, 200);
    endShape(CLOSE);
  }
  	//rojo
  if (millis() >8000 && millis() < 8300){
    fill(117, 34, 34);
    beginShape();
    vertex(200,160);
    vertex(220, 200);
    vertex(200, 240);
    vertex(180, 200);
    endShape(CLOSE);
  }
  	//azul
  if (millis() > 8100 && millis() < 8300){
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
  if(millis() > 8600 && millis() < 9000){
    stroke(40, 143, 34);
    line(300, 0, 300, 400);
  }
  	//roja
  if(millis() > 8700 && millis() < 9000){
    stroke(117, 34, 34);
    line(200, 0, 200, 400);
  }
  	//azul
  if(millis() > 8800 && millis() < 9000){
    stroke(39, 54, 87);
    line(100, 0, 100, 400);
  }
  
  //gotas
  noStroke();
  fill(12, 171, 245);
  if(millis() > 9000 && millis() < 9125){
    rect(0, 0, 400, 40);
  }
  if(millis() > 9125 && millis() < 9250){
    rect(57, 0, 343, 40);
    rect(0, posYgota1, 57, 40);
    posYgota1 = posYgota1 + 40;
  }
  if(millis() > 9250 && millis() < 9375){
    rect(57, 0, 228, 40);
    rect(342, 0, 58, 40);
    rect(285, posYgota2 , 57, 40);
    posYgota2 = posYgota2 + 40;
  }
  if(millis() > 9375 && millis() < 9500){
    rect(57, 0, 114, 40);
    rect(228, 0, 57, 40);
    rect(342, 0, 58, 40);
    rect(171, posYgota3, 57, 40);
    posYgota3 = posYgota3 + 40;
  }
  if(millis() > 9500 && millis() < 9625){
    rect(114, 0, 57, 40);
    rect(228, 0, 57, 40);
    rect(342, 0, 58, 40);
    rect(57, posYgota4, 57, 40);
    posYgota4 = posYgota4 + 40;
  }
  if(millis() > 9625 && millis() < 9750){
    rect(114, 0, 57, 40);
    rect(228, 0, 57, 40);
    rect(342, posYgota5, 58, 40);
    posYgota5 = posYgota5 + 40;
  }
  if(millis() > 9750 && millis() < 9875){
    rect(228, 0, 57, 40);
    rect(114, posYgota6, 57, 40);
    posYgota6 = posYgota6 + 40;
  }
  if(millis() > 9875 && millis() < 10000){
    rect(228, posYgota7, 57, 40);
    posYgota7 = posYgota7 + 40;
  }
  
  //ciculo despues de gotas
  if(millis() > 10000 && millis() < 10100 || millis() > 10200 && millis() < 10300 || millis() > 10400 && millis() < 10600){
    fill(227, 16, 227);
    ellipse(200, 200, 200, 200);
  }
  
  //cuadricula
  if(millis() > 10600 && millis() < 11800){
    fill(237, 33, 115);
    rect(0, 80, movlinea1, 40);
    movlinea1 = movlinea1 + 40;
  }
  if(millis() > 10800 && millis() < 11800){
    fill(161, 33, 235);
    rect(0, 180, movlinea2, 40);
    movlinea2 = movlinea2 + 40;
  }
  if(millis() > 11000 && millis() < 11800){
    fill(35, 45, 235);
    rect(0, 280, movlinea3, 40);
    movlinea3 = movlinea3 + 40;
  }
  if(millis() > 11300 && millis() < 11800){
    fill(235, 98, 35);
    rect(80, 0, 40, movlinea4);
    movlinea4 = movlinea4 + 40;
  }
  if(millis() > 11400 && millis() < 11800){
    fill(235, 178, 35);
    rect(180, 0, 40, movlinea5);
    movlinea5 = movlinea5 + 40;
  }
  if(millis() > 11500 && millis() < 11800){
    fill(188, 235, 35);
    rect(280, 0, 40, movlinea6);
    movlinea6 = movlinea6 + 40;
  }
  
  //circulo blanco en movimiento
	if(millis() > 11800 && millis() < 13500){
		fill(255, 255, 255);
		ellipse(200, 200, tamañoCirculodespcuadricula, tamañoCirculodespcuadricula);
		tamañoCirculodespcuadricula = tamañoCirculodespcuadricula - 3;
	}
  //circulo blanco quieto
	if(millis() > 13500 && millis() < 15400){
		fill(255, 255, 255);
		ellipse(200, 200, 100,100);
	}
  //circulos alrededor circulo blanco
	if(millis() > 13700 && millis() < 15400){
		fill(77, 112, 69);
		ellipse(160, 130, tamañoCirculosRededor, tamañoCirculosRededor)
		tamañoCirculosRededor = tamañoCirculosRededor - 0.5;
	}
	if(millis() > 13800 && millis() < 15400){
		fill(110, 68, 109);
		ellipse(300, 100, tamañoCirculosRededor + 5, tamañoCirculosRededor + 5);
	}
	if(millis() > 13900 && millis() < 15400){
		fill(110, 100, 68);
		ellipse(200, 320, tamañoCirculosRededor + 10, tamañoCirculosRededor + 10);
	}
	if(millis() > 14300 && millis() < 15400){
		fill(110, 68, 68);
		ellipse(60, 220, tamañoCirculosRededor + 15, tamañoCirculosRededor + 15)
	}
	if(millis() > 14400 && millis() < 15400){
		fill(68, 110, 91);
		ellipse(330, 250, tamañoCirculosRededor + 20, tamañoCirculosRededor + 20);
	}
	if(millis() > 14500 && millis() < 15400){
		fill(26, 121, 128);
		ellipse(30, 60, tamañoCirculosRededor + 25, tamañoCirculosRededor + 25);
	}
	if(millis() > 14900 && millis() < 15400){
		fill(128, 27, 113);
		ellipse(80, 370, tamañoCirculosRededor + 30, tamañoCirculosRededor + 30)
	}
	if(millis() > 15000 && millis() < 15400){
		fill(209, 196, 50);
		ellipse(300, 40, tamañoCirculosRededor + 35, tamañoCirculosRededor + 35);
	}
	if(millis() > 15100 && millis() < 15400){
		fill(207, 86, 50);
		ellipse(280, 370, tamañoCirculosRededor + 40, tamañoCirculosRededor + 40);
	}
  
  //tres cuadrados quietos
  if(millis() > 15600 && millis() < 16100){
    fill(132, 245, 122);
    rect(110, 10, 40, 40);
  }
  if(millis() > 15700 && millis() < 16100){
    fill(132, 245, 122);
    rect(60, 10, 40, 40);
  }
  if(millis() > 15800 && millis() < 16100){
    fill(132, 245, 122);
    rect(10, 10, 40, 40);
  }
  //tres cuadrados en movimiento
  if(millis() > 16100 && millis() < 17300){
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
  if(millis() > 17300 && millis() < 17425){
    rect(0, 0, 40, 400);
  }
  if(millis() > 17425 && millis() < 17550){
    rect(0, 57, 40, 343);
    rect(posXgotaNaranja1,0,  40, 57);
    posXgotaNaranja1 = posXgotaNaranja1 + 40;
  }
  if(millis() > 17550 && millis() < 17675){
    rect(0, 57, 40, 228);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranja2, 285,  40, 57);
    posXgotaNaranja2 = posXgotaNaranja2 + 40;
  }
  if(millis() > 17675 && millis() < 17800){
    rect(0, 57, 40, 114);
    rect(0, 228, 40, 57);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranja3, 171,  40, 57);
    posXgotaNaranja3 = posXgotaNaranja3 + 40;
  }
  if(millis() > 17800 && millis() < 17925){
    rect(0, 114, 40, 57);
    rect(0, 228, 40, 57);
    rect(0, 342, 40, 58);
    rect(posXgotaNaranja4, 57,  40, 57);
    posXgotaNaranja4 = posXgotaNaranja4 + 40;
  }
  if(millis() > 17925 && millis() < 18050){
    rect(0, 114, 40, 57);
    rect(0, 228, 40, 57);
    rect(posXgotaNaranja5, 342, 40, 58);
    posXgotaNaranja5 = posXgotaNaranja5 + 40;
  }
  if(millis() > 18050 && millis() < 18175){
    rect(0, 228, 40, 57);
    rect(posXgotaNaranja6, 114, 40, 57);
    posXgotaNaranja6 = posXgotaNaranja6 + 40;
  }
  if(millis() > 18175 && millis() < 18300){
    rect(posXgotaNaranja7, 228, 40, 57);
    posXgotaNaranja7 = posXgotaNaranja7 + 40;
  }
  
  //triangulos vinotinto
  if(millis() > 18300 && millis() < 18500 || millis() > 18600 && millis() < 18800){
    fill(82, 0, 0);
    triangle(200, 40, 250, 360, 150, 360);
    triangle(173, 40, 92, 311, 14, 374);
    triangle(227, 40, 386, 374, 308, 311);
  }
  
  //cambio fondos
  if(millis() > 18900 && millis() < 19100){
    background(255, 255, 255);
  }
  if(millis() > 19100 && millis() < 19300){
    background(45, 77, 3);
  }
  
  //cuadrados X4
  if(millis() > 19600 && millis() < 19800){
    fill(255, 111, 0);
    rect(100, 100, 80, 80);
    rect(220, 100, 80, 80);
    rect(100, 220, 80, 80);
    rect(220, 220, 80, 80);
  }
  if(millis() > 20000 && millis() < 20200){
    fill(255, 111, 0);
    rect(100, 100, 80, 80);
    rect(100, 220, 80, 80);
  }
  if(millis() > 20200 && millis() < 20400){
    fill(255, 111, 0);
    rect(220, 100, 80, 80);
    rect(220, 220, 80, 80);
  }
  
  //"gotas" moradas
  fill(77, 48, 138);
  if(millis() > 20400 && millis() < 20525){
    rect(360, 0, 40, 400);
  }
  if(millis() > 20525 && millis() < 20650){
    rect(360, 57, 40, 343);
    rect(posXgotaMorada1,0,  40, 57);
    posXgotaMorada1 = posXgotaMorada1 - 40;
  }
  if(millis() > 20650 && millis() < 20775){
    rect(360, 57, 40, 228);
    rect(360, 342, 40, 58);
    rect(posXgotaMorada2, 285,  40, 57);
    posXgotaMorada2 = posXgotaMorada2 - 40;
  }
  if(millis() > 20775 && millis() < 20900){
    rect(360, 57, 40, 114);
    rect(360, 228, 40, 57);
    rect(360, 342, 40, 58);
    rect(posXgotaMorada3, 171,  40, 57);
    posXgotaMorada3 = posXgotaMorada3 - 40;
  }
  if(millis() > 20900 && millis() < 21025){
    rect(360, 114, 40, 57);
    rect(360, 228, 40, 57);
    rect(360, 342, 40, 58);
    rect(posXgotaMorada4, 57,  40, 57);
    posXgotaMorada4 = posXgotaMorada4 - 40;
  }
  if(millis() > 21025 && millis() < 21150){
    rect(360, 114, 40, 57);
    rect(360, 228, 40, 57);
    rect(posXgotaMorada5, 342, 40, 58);
    posXgotaMorada5 = posXgotaMorada5 - 40;
  }
  if(millis() > 21150 && millis() < 21275){
    rect(360, 228, 40, 57);
    rect(posXgotaMorada6, 114, 40, 57);
    posXgotaMorada6 = posXgotaMorada6 - 40;
  }
  if(millis() > 21275 && millis() < 21400){
    rect(posXgotaMorada7, 228, 40, 57);
    posXgotaMorada7 = posXgotaMorada7 - 40;
  }
  
  //puntos que desaparecen
  if(millis() > 21400 && millis() < 21600){
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
  if(millis() > 21600 && millis() < 21800){
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
  if(millis() > 21800 && millis() < 22000){
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
  if(millis() > 22300 && millis() < 22500 || millis() > 22600 && millis() < 22800 || millis() > 22900 && millis() < 23100){
    fill(214, 110, 240);
    ellipse(movXtrio, movYtrio, tamañoTrio, tamañoTrio);
    ellipse(movXtrio - 50, movYtrio + 40, tamañoTrio, tamañoTrio);
    ellipse(movXtrio - 100, movYtrio + 80, tamañoTrio, tamañoTrio);
    tamañoTrio = tamañoTrio - 1;
    movXtrio = movXtrio - 5;
    movYtrio = movYtrio + 3;
  }
  //trio 2
  if(millis() > 23300 && millis() < 23400 || millis() > 23500 && millis() < 23600 || millis() > 23700 && millis() < 23800){
    fill(47, 99, 55);
    ellipse(movXtrio2, movYtrio2, tamañoTrio2, tamañoTrio2);
    ellipse(movXtrio2 - 50, movYtrio2 + 40, tamañoTrio2, tamañoTrio2);
    ellipse(movXtrio2 - 100, movYtrio2 + 80, tamañoTrio2, tamañoTrio2);
    tamañoTrio2 = tamañoTrio2 - 1;
    movXtrio2 = movXtrio2 - 5;
    movYtrio2 = movYtrio2 + 3;
  }
  
  //gran morada!!!
  if(millis() > 24000 && millis() < 24500){
    ellipse(movGranellipse, 400, 400, 400);
    movGranellipse = movGranellipse - 60;
    if(movGranellipse < -200)
      movGranellipse = movGranellipse + 700;
  }
  
  //cuadros colores
  if(millis() > 24500 && millis() < 24600){
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
    if(millis() > 24700 && millis() < 24800){
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
    if(millis() > 24900 && millis() < 25000){
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
  if(millis() > 25100 && millis() < 25200){
    fill(36, 2, 2);
    rect(80, 80, 320, 320);
    fill(71, 3, 3);
    rect(120, 120, 280, 280);
    fill(107, 6, 6);
    rect(160, 160, 240, 240);
    fill(133, 8, 8);
    rect(200, 200, 200, 200);
  }
  if(millis() > 25300 && millis() < 25400){
    fill(36, 2, 2);
    rect(160, 160, 240, 240);
    fill(71, 3, 3);
    rect(200, 200, 200, 200);
  }
  
  // ciculo cambia color
  if(millis() > 25400 && millis() < 25800){
    for (var circulo = 255; circulo > 0; circulo = circulo - 21) {
    fill(circulo, cambiocolorcirculocolores, 188);
    ellipse(200, 200, circulo, circulo);
      cambiocolorcirculocolores = cambiocolorcirculocolores + 1;
    }
  }
  
  //circulos (T-T)
  fill(87, 255, 98);
  if(millis() > 25800 && millis() < 26200){
    ellipse(100, 300, 100, 100);
  }
  if(millis() > 25900 && millis() < 26200){
    ellipse(200, 200, 100, 100);
  }
  if(millis() > 26000 && millis() < 26200){
    ellipse(300, 100, 100, 100);
  }
  if(millis() > 26500 && millis() < 26600 || millis() > 26700 && millis() < 26800 || millis() > 26900 && millis() < 27000){
    ellipse(100, 300, 100, 100);
    ellipse(200, 200, 100, 100);
    ellipse(300, 100, 100, 100);
  }
  
  //gotas que desafian la ley de gravedad (ºOº)
    fill(255, 89, 155);
  if(millis() > 27300 && millis() < 27425){
    rect(0, 360, 400, 40);
  }
  if(millis() > 27425 && millis() < 27550){
    rect(57, 360, 343, 40);
    rect(0, posYgotaAntigravedad1, 57, 40);
    posYgotaAntigravedad1 = posYgotaAntigravedad1 - 40;
  }
  if(millis() > 27550 && millis() < 27675){
    rect(57, 360, 228, 40);
    rect(342, 360, 58, 40);
    rect(285, posYgotaAntigravedad2 , 57, 40);
    posYgotaAntigravedad2 = posYgotaAntigravedad2 - 40;
  }
  if(millis() > 27675 && millis() < 27800){
    rect(57, 360, 114, 40);
    rect(228, 360, 57, 40);
    rect(342, 360, 58, 40);
    rect(171, posYgotaAntigravedad3, 57, 40);
    posYgotaAntigravedad3 = posYgotaAntigravedad3 - 40;
  }
  if(millis() > 27800 && millis() < 27925){
    rect(114, 360, 57, 40);
    rect(228, 360, 57, 40);
    rect(342, 360, 58, 40);
    rect(57, posYgotaAntigravedad4, 57, 40);
    posYgotaAntigravedad4 = posYgotaAntigravedad4 - 40;
  }
  if(millis() > 27925 && millis() < 28050){
    rect(114, 360, 57, 40);
    rect(228, 360, 57, 40);
    rect(342, posYgotaAntigravedad5, 58, 40);
    posYgotaAntigravedad5 = posYgotaAntigravedad5 - 40;
  }
  if(millis() > 28050 && millis() < 28175){
    rect(228, 360, 57, 40);
    rect(114, posYgotaAntigravedad6, 57, 40);
    posYgotaAntigravedad6 = posYgotaAntigravedad6 - 40;
  }
  if(millis() > 28175 && millis() < 28300){
    rect(228, posYgotaAntigravedad7, 57, 40);
    posYgotaAntigravedad7 = posYgotaAntigravedad7 - 40;
  }
  
  //lineas diagonales de arcoiris (*O*)
  strokeWeight(20);
  if(millis() > 28500 && millis() < 29200){
    stroke(255, 89, 0);
    line(-10, 350, 50, 410);
  }
  if(millis() > 28550 && millis() < 29250){
    stroke(209, 62, 62);
    line(-10, 300, 100, 410);
  }
  if(millis() > 28600 && millis() < 29300){
    stroke(238, 255, 0);
    line(-10, 250, 150, 410);
  }
  if(millis() > 28650 && millis() < 29350){
    stroke(85, 255, 0);
    line(-10, 200, 200, 410);
  }
  if(millis() > 28700 && millis() < 29400){
    stroke(0, 255, 183);
    line(-10, 150, 250, 410);
  }
  if(millis() > 28750 && millis() < 29450){
    stroke(0, 196, 255);
    line(-10, 100, 300, 410);
  }
  if(millis() > 28800 && millis() < 29500){
    stroke(0, 72, 255);
    line(-10, 50, 350, 410);
  }
  if(millis() > 28850 && millis() < 29550){
    stroke(111, 0, 255);
    line(-10, 0, 400, 410);
  }
  if(millis() > 28900 && millis() < 29600){
    stroke(170, 0, 255);
    line(30, -10, 420, 380);
  }
  if(millis() > 28950 && millis() < 29650){
    stroke(234, 0, 255);
    line(80, -10, 420, 330);
  }
  if(millis() > 29000 && millis() < 29700){
    stroke(255, 0, 123);
    line(130, -10, 420, 280);
  }
  if(millis() > 29050 && millis() < 29750){
    stroke(255, 0, 51);
    line(180, -10, 420, 230);
  }
  if(millis() > 29100 && millis() < 29800){
    stroke(255, 111, 0);
    line(230, -10, 420, 180);
  }
  if(millis() > 29150 && millis() < 29850){
    stroke(255, 153, 0);
    line(280, -10, 420, 130);
  }
  if(millis() > 29200 && millis() < 29900){
    stroke(255, 213, 0);
    line(330, -10, 420, 80);
  }
  if(millis() > 29250 && millis() < 29950){
    stroke(255, 255, 0);
    line(380, -10, 420, 30);
  }
  
  //tres circulos otra vez 
  noStroke();
  	//verde
  if(millis() > 30000 && millis() < 30400){
    fill(19, 240, 8);
    ellipse(200, 230, 120, 120);
  }
  	//rojo
  if(millis() > 30100 && millis() < 30400){
    fill(255, 0, 0, 100);    
    ellipse(170, 200, 120, 120);
  }
  	//azul
  if(millis() > 30200 && millis() < 30400){
    fill(14, 38, 97, 160);
    ellipse (230, 200, 120, 120);
  }
  
  //lineas verticales otra vez 
  	//naranja
  strokeWeight(30);
  if(millis() > 30800 && millis() < 31200){
    stroke(255, 89, 0);
    line(300, 0, 300, 400);
  }
  	//roja
  if(millis() > 30900 && millis() < 31200){
    stroke(117, 34, 34);
    line(200, 0, 200, 400);
  }
  	//rosa
  if(millis() > 31000 && millis() < 31200){
    stroke(148, 12, 12);
    line(100, 0, 100, 400);
  }
  
  noStroke();
  //cuadro rebotin #2
  if(millis() > 31200 && millis() < 31900){
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
  if(millis() > 32000 && millis() < 34000){
		fill(151, 199, 48);
		ellipse(200, 200, tamañoOtrocirculoenmovimiento, tamañoOtrocirculoenmovimiento);
		tamañoOtrocirculoenmovimiento = tamañoOtrocirculoenmovimiento - 3;
	}
  
  //triangulos que aparecen y desaparecen (ºoº)
  if(millis() > 34100 && millis() < 34200){
    fill(255, 234, 0);
    triangle(100, 50, 140, 350, 60, 350);
  }
  if(millis() > 34300 && millis() < 34400){
    fill(123, 255, 0);
    triangle(200, 50, 240, 350, 160, 350);
  }
  if(millis() > 34500 && millis() < 34600){
    fill(255, 89, 0);
    triangle(300, 50, 340, 350, 260, 350);
  }
  
  //cuadricula #2
  if(millis() > 34800 && millis() < 36200){
    fill(0, 238, 255);
    rect(80, 0, 40, movCuadriculados4);
    movCuadriculados4 = movCuadriculados4 + 40;
  }
  if(millis() > 35000 && millis() < 36200){
    fill(229, 111, 235);
    rect(180, 0, 40, movCuadriculados5);
    movCuadriculados5 = movCuadriculados5 + 40;
  }
  if(millis() > 35200 && millis() < 36200){
    fill(230, 64, 64);
    rect(280, 0, 40, movCuadriculados6);
    movCuadriculados6 = movCuadriculados6 + 40;
  }
  if(millis() > 35500 && millis() < 36200){
    fill(115, 168, 47);
    rect(0, 80, movCuadriculados1, 40);
    movCuadriculados1 = movCuadriculados1 + 40;
  }
  if(millis() > 35700 && millis() < 36200){
    fill(80, 51, 176);
    rect(0, 180, movCuadriculados2, 40);
    movCuadriculados2 = movCuadriculados2 + 40;
  }
  if(millis() > 35900 && millis() < 36200){
    fill(230, 222, 64);
    rect(0, 280, movCuadriculados3, 40);
    movCuadriculados3 = movCuadriculados3 + 40;
  }
  
  //gotas de arriba y abajo
  
  if(millis() > 36400 && millis() < 36525){
    fill(255, 89, 155);
    rect(0, 360, 400, 40);
    fill(12, 171, 245);
    rect(0, 0, 400, 40);
  }
  if(millis() > 36525 && millis() < 36650){
    fill(12, 171, 245);
    rect(57, 0, 343, 40);
    rect(0, posYgotas1, 57, 40);
    posYgotas1 = posYgotas1 + 40;
    fill(255, 89, 155);
    rect(57, 360, 343, 40);
    rect(0, posYgotaAntigravedadDos1, 57, 40);
    posYgotaAntigravedadDos1 = posYgotaAntigravedadDos1 - 40;
  }
  if(millis() > 36650 && millis() < 36775){
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
  if(millis() > 36775 && millis() < 36900){
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
  if(millis() > 36900 && millis() < 37025){
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
  if(millis() > 37025 && millis() < 37150){
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
  if(millis() > 37150 && millis() < 37275){
    fill(12, 171, 245);
    rect(228, 0, 57, 40);
    rect(114, posYgotas6, 57, 40);
    posYgotas6 = posYgotas6 + 40;
    fill(255, 89, 155);
    rect(228, 360, 57, 40);
    rect(114, posYgotaAntigravedadDos6, 57, 40);
    posYgotaAntigravedadDos6 = posYgotaAntigravedadDos6 - 40;
  }
  if(millis() > 37275 && millis() < 37400){
    fill(12, 171, 245);
    rect(228, posYgotas7, 57, 40);
    posYgotas7 = posYgotas7 + 40;
    fill(255, 89, 155);
    rect(228, posYgotaAntigravedadDos7, 57, 40);
    posYgotaAntigravedadDos7 = posYgotaAntigravedadDos7 - 40;
  }
  
  //blanco
  if(millis() > 37600 && millis() < 37700){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito
  if(millis() > 37700 && millis() < 37900 || millis() > 38100 && millis() < 38300 || millis() > 38500 && millis() < 38700 || millis() > 38900 && millis() < 39100 || millis() > 39300 && millis() < 39500 || millis() > 39700 && millis() < 39900){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > 37900 && millis() < 38100 || millis() > 38300 && millis() < 38500 || millis() > 38700 && millis() < 38900 || millis() >39100 && millis() < 39300 || millis() > 39500 && millis() < 39700){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //blanco 2
  if(millis() > 40100 && millis() < 40200){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito 2
  if(millis() > 40400 && millis() < 40600){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > 40600 && millis() < 40700){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //blanco 3
  if(millis() > 40800 && millis() < 40900){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito 3
  if(millis() > 40900 && millis() < 41100 || millis() > 41300 && millis() < 41500 || millis() > 41700 && millis() < 41900 || millis() > 42100 && millis() < 42300){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > 41100 && millis() < 41300 || millis() > 41500 && millis() < 41700 || millis() > 41900 && millis() < 42100){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //blanco 3
  if(millis() > 42400 && millis() < 42500){
    fill(255, 255, 255);
    ellipse(200, 200, 400, 400);
  }
  
  //palpito4
  if(millis() > 42600 && millis() < 42800 || millis() > 43000 && millis() < 43200 || millis() > 43400 && millis() < 43600 || millis() > 43800 && millis() < 44000 || millis() > 44200 && millis() < 44400 || millis() > 44600 && millis() < 44800 || millis() > 45000 && millis() < 45200){
    fill(252, 8, 118);
    ellipse(200, 200, 200, 200);
  }
  if(millis() > 42800 && millis() < 43000 || millis() > 43200 && millis() < 43400 || millis() > 43600 && millis() < 43800 || millis() > 44000 && millis() < 44200 || millis() > 44400 && millis() < 44600 || millis() > 44800 && millis() < 45000 || millis() > 45200 && millis() < 45400){
    fill(255, 0, 64);
    ellipse(200, 200, 180, 180);
  }
  
  //tres circulos esquina
  	//circulo morado
  if(millis() > 45500 && millis() < 45900){
    fill(85, 51, 222);
    ellipse(350, 40, 20, 20);
  }
  	//circulo azul
  if(millis() > 45600 && millis() < 45900){
    fill(17, 87, 133);
    ellipse(320, 40, 20, 20);
  }
  	//circulo verde
  if(millis() > 45700 && millis() < 45900){
    fill(5, 105, 70);
    ellipse(290, 40, 20, 20);
  }
  
  //lineas de colores 
  	//linea morada
  strokeWeight(10);
  if(millis() > 46200 && millis() < 46600){
    stroke(85, 51, 222);
    line(200, 0, 0, 200);
  }
  	//linea azul
  if(millis() > 46300 && millis() < 46600){
    stroke(17, 87, 133);
    line(240, 0, 0, 240);
  }
  	//linea verde
  if(millis() > 46400 && millis() < 46600){
    stroke(5, 105, 70);
    line(280, 0, 0, 280);
  }
  
  //tres triangulos
  noStroke();
  	//triangulo morado
  if(millis() > 46900 && millis() < 47300){
    fill(85, 51, 222);
    triangle(140, 70, 170, 130, 110, 130);
  }
  	//triangulo azul
  if(millis() > 47000 && millis() < 47300){
    fill(17, 87, 133);
    triangle(210, 160, 240, 220, 180, 220);
  }
  	//triangulo verde
  if(millis() > 47100 && millis() < 47300){
    fill(5, 105, 70);
    triangle(280, 250, 310, 310, 250, 310);
  }
  
  //"gotas" naranjas y moradas chocando entre si 
  if(millis() > 47300 && millis() < 47425){
    fill(255, 140, 0);
    rect(0, 0, 40, 400);
    fill(90, 41, 194);
    rect(360, 0, 40, 400);
  }
  if(millis() > 47425 && millis() < 47550){
    fill(255, 140, 0);
    rect(0, 57, 40, 343);
    rect(posXgotaNaranjaDos1,0,  40, 57);
    posXgotaNaranjaDos1 = posXgotaNaranjaDos1 + 40;
    fill(90, 41, 194);
    rect(360, 57, 40, 343);
    rect(posXgotaMoradaDos1,0,  40, 57);
    posXgotaMoradaDos1 = posXgotaMoradaDos1 - 40;
  }
  if(millis() > 47550 && millis() < 47675){
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
  if(millis() > 47675 && millis() < 47800){
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
  if(millis() > 47800 && millis() < 47925){
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
  if(millis() > 47925 && millis() < 48050){
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
  if(millis() > 48050 && millis() < 48175){
    fill(255, 140, 0);
    rect(0, 228, 40, 57);
    rect(posXgotaNaranjaDos6, 114, 40, 57);
    posXgotaNaranjaDos6 = posXgotaNaranjaDos6 + 40;
    fill(90, 41, 194);
    rect(360, 228, 40, 57);
    rect(posXgotaMoradaDos6, 114, 40, 57);
    posXgotaMoradaDos6 = posXgotaMoradaDos6 - 40;
  }
  if(millis() > 48175 && millis() < 48300){
    fill(255, 140, 0);
    rect(posXgotaNaranjaDos7, 228, 40, 57);
    posXgotaNaranjaDos7 = posXgotaNaranjaDos7 + 40;
    fill(90, 41, 194);
    rect(posXgotaMoradaDos7, 228, 40, 57);
    posXgotaMoradaDos7 = posXgotaMoradaDos7 - 40;
  }
  
  //tres rectangulos
  if(millis() > 48400 && millis() < 48800){
    fill(250, 10, 50);
    rect(50, 50, 300, 300);
  }
  if(millis() > 48500 && millis() < 48800){
    fill(0, 0, 0);
    rect(90, 90, 220, 220);
  }
  if(millis() > 48600 && millis() < 48800){
    fill(43, 85, 194);
    rect(130, 130, 140, 140);
  }
  
  //diamantes dos
  	//verde
  if (millis() >49100 && millis() < 49500){
    fill(40, 143, 34);
    beginShape();
    vertex(100,160);
    vertex(120, 200);
    vertex(100, 240);
    vertex(80, 200);
    endShape(CLOSE);
  }
  	//rojo
  if (millis() >49200 && millis() < 49500){
    fill(117, 34, 34);
    beginShape();
    vertex(200,160);
    vertex(220, 200);
    vertex(200, 240);
    vertex(180, 200);
    endShape(CLOSE);
  }
  	//azul
  if (millis() > 49300 && millis() < 49500){
    fill(39, 54, 87);
    beginShape();
    vertex(300,160);
    vertex(320, 200);
    vertex(300, 240);
    vertex(280, 200);
    endShape(CLOSE);
  }
  
  //cuadrados X4 otra vez
  if(millis() > 49800 && millis() < 50000){
    fill(58, 75, 117);
    rect(100, 100, 80, 80);
    rect(220, 100, 80, 80);
    rect(100, 220, 80, 80);
    rect(220, 220, 80, 80);
  }
  if(millis() > 50200 && millis() < 50400){
    fill(58, 75, 117);
    rect(100, 100, 80, 80);
    rect(100, 220, 80, 80);
  }
  if(millis() > 50400 && millis() < 50600){
    fill(58, 75, 117);
    rect(220, 100, 80, 80);
    rect(220, 220, 80, 80);
  }
}