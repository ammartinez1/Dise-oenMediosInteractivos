var angulo = 0;
//variables Sol
var centroSolX = 0;
var centroSolY = 0;
//variables cohete
var coheteX = 213;
var coheteY = 90;

function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);
} 

function draw() { 
  noStroke();
  background(1, 4, 36);
  angulo = angulo + 0.3;
    
  var misSegundos = second();
  var movSegundero = map(misSegundos, 0, 60, 0, 360);
  
  var misMinutos = minute();
  var movMinutero = map(misMinutos, 0, 60, 0, 360);
  
  var misHoras = hour();
  var movHorario = map(misHoras, 0, 12, 0, 360);
  
  var misDias = day();
  var movDias = map(misDias, 0, 360, 0, 360);
  
  push();
  //sol
  fill(251, 255, 0);
  translate(200, 200);
  rotate(angulo);
  ellipse(centroSolX, centroSolY, 40, 40);
	triangle(centroSolX, centroSolY - 40, centroSolX - 7, centroSolY - 24, centroSolX + 8, centroSolY - 24);
	triangle(centroSolX + 29, centroSolY - 25, centroSolX + 13, centroSolY - 22, centroSolX + 24, centroSolY - 9);
	triangle(centroSolX + 37, centroSolY + 11, centroSolX + 25, centroSolY - 2, centroSolX + 20, centroSolY + 14);
	triangle(centroSolX + 13, centroSolY + 35, centroSolX + 15, centroSolY + 19, centroSolX + 0, centroSolY + 25);
	triangle(centroSolX - 21, centroSolY + 30, centroSolX - 7, centroSolY + 23, centroSolX - 20, centroSolY + 14);
	triangle(centroSolX - 38, centroSolY, centroSolX - 23, centroSolY + 8, centroSolX - 23, centroSolY - 7);
	triangle(centroSolX - 27, centroSolY - 28, centroSolX - 21, centroSolY - 12, centroSolX - 11, centroSolY - 23);
  pop();
  
  //estrellas
   fill(255, 255, 255);
  if(movSegundero > 45 && movSegundero < 90 || movSegundero > 135 && movSegundero < 180 || movSegundero > 225 && movSegundero < 270 || movSegundero > 315 && movSegundero < 360){
      ellipse(10, 10, 10, 10);
      ellipse(60, 45, 10, 10);
      ellipse(179, 10, 10, 10);
      ellipse(289, 81, 10, 10);
      ellipse(357, 35, 10, 10);
      ellipse(144, 173, 10, 10);
      ellipse(10, 133, 10, 10);
      ellipse(91, 251, 10, 10);
      ellipse(55, 346, 10, 10);
      ellipse(213, 288, 10, 10);
      ellipse(293, 245, 10, 10);
      ellipse(327, 386, 10, 10);
      ellipse(171, 372, 10, 10);
      ellipse(366, 146, 10, 10);
      ellipse(371, 305, 10, 10);
  } else{
      ellipse(87, 14, 10, 10);
      ellipse(30, 48, 10, 10);
      ellipse(204, 53, 10, 10);
      ellipse(259, 79, 10, 10);
      ellipse(324, 17, 10, 10);
      ellipse(109, 113, 10, 10);
      ellipse(53, 169, 10, 10);
      ellipse(56, 251, 10, 10);
      ellipse(103, 371, 10, 10);
      ellipse(213, 240, 10, 10);
      ellipse(270, 188, 10, 10);
      ellipse(281, 354, 10, 10);
      ellipse(158, 336, 10, 10);
      ellipse(348, 196, 10, 10);
      ellipse(327, 305, 10, 10);
  }
  
  //cucu-->cohete
  if(movHorario == 0){
    fill(153, 0, 0);
		beginShape();
		vertex(coheteX,coheteY);
		vertex(coheteX + 17,coheteY-2);
		vertex(coheteX + 12, coheteY + 8);
		vertex(coheteX + 3, coheteY + 14);
		vertex(coheteX - 6, coheteY + 3);
		endShape(CLOSE);
		fill(230, 147, 46);
		triangle(coheteX - 12, coheteY + 5, coheteX, coheteY + 18, coheteX - 19, coheteY + 22);
		fill(255, 255, 255);
		beginShape();
		vertex(coheteX + 3, coheteY + 14);
		vertex(coheteX - 6, coheteY + 3);
		vertex(coheteX - 14, coheteY + 4);
		vertex(coheteX - 1, coheteY + 21);
		endShape(CLOSE);
		fill(165, 237, 232);
		ellipse(coheteX + 5, coheteY + 5, 5, 5);
    
    coheteX = coheteX + 3;
		coheteY = coheteY - 1;
  }
  
  push();
    //tierra alrededor sol
  //dias
  fill(0, 166, 255);
  translate(200, 200);
  rotate(movDias);
  ellipse(0, -100, 40, 40);
  fill(105, 158, 30);
  //groenlandia
  beginShape();
  vertex(-2, -119);
  vertex(0, -118);
  vertex(0, -117.5);
  vertex(0, -113);
  vertex(-1, -118);
  vertex(-0.5, -119);
  vertex(-1.4, -120);
  endShape(CLOSE);
  //america
  beginShape();
  vertex(-3.5, -119.8);
  vertex(-2, -117.5);
  vertex(-3, -117.5);
  vertex(-3.2, -118);
  vertex(-3.8, -117.5);
  vertex(-4, -118);
  vertex(-8, -116.8);
  vertex(-7, -116);
  vertex(-7, -115);
  vertex(-6, -115);
  vertex(-5.4, -116.6);
  vertex(-5, -117.2);
  vertex(-5, -116);
  vertex(-4, -117);
  vertex(-3, -115);
  vertex(-4, -115);
  vertex(-3.5, -114.5);
  vertex(-4.5, -113.5);
  vertex(-5, -114);
  vertex(-5.5, -113.5);
  vertex(-7, -113);
  vertex(-7, -112);
  vertex(-9, -110);
  vertex(-10, -109.5);
  vertex(-10, -107.5);
  vertex(-11, -109);
  vertex(-12, -109);
  vertex(-14, -108);
  vertex(-14.5, -107);
  vertex(-14, -104);
  vertex(-13.5, -105.5);
  vertex(-13, -106);
  vertex(-13.5, -103.5);
  vertex(-12.5, -102.5);
  vertex(-13.5, -100.3);
  vertex(-13, -100.1);
  vertex(-13, -99.7);
  vertex(-11.5, -101);
  vertex(-8.5, -99.2);
  vertex(-6, -98);
  vertex(-5.8, -95.5);
  vertex(-2, -94);
  vertex(-1.5, -93);
  vertex(-4.5, -90.5);
  vertex(-4.5, -90.1);
  vertex(-6.5, -89);
  vertex(-7, -88);
  vertex(-9, -89);
  vertex(-8, -87.5);
  vertex(-9.5, -87);
  vertex(-9, -85);
  vertex(-6, -83);
  vertex(-10, -84);
  vertex(-12, -86.5);
  vertex(-12.5, -89);
  vertex(-16, -90);
  vertex(-17, -92);
  vertex(-17, -95);
  vertex(-14.5, -99);
  vertex(-14.5, -101);
  vertex(-15, -101);
  vertex(-15.5, -101.7);
  vertex(-17, -102);
  vertex(-17, -105);
  vertex(-18.5, -106);
  vertex(-20, -108);
  vertex(-17.5, -113);
  vertex(-11, -118);
  endShape(CLOSE);
  //europa
  beginShape();
  vertex(7, -119);
  vertex(6, -118.5);
  vertex(7.5, -117.5);
  vertex(7, -117);
  vertex(9, -116.5);
  vertex(8.5, -118.5);
  endShape(CLOSE);
  beginShape();
  vertex(9, -118);
  vertex(10, -117);
  vertex(9.5, -116.5);
  vertex(8.5, -116.5);
  vertex(7, -116);
  vertex(8, -115);
  vertex(6.5, -115);
  vertex(6, -114);
  vertex(7.5, -113);
  vertex(9, -113.5);
  vertex(9, -114.5);
  vertex(9.5, -115);
  vertex(11, -114);
  vertex(10.5, -115.5);
  vertex(10.8, -115.7);
  vertex(12, -114);
  vertex(11.5, -113.5);
  vertex(12.5, -113.5);
  vertex(12.5, -114.5);
  vertex(13, -114.5);
  vertex(13, -116);
  endShape(CLOSE);
  //africa
  beginShape();
  vertex(14, -114.5);
  vertex(13.5, -113.5);
  vertex(15.5, -111.5);
  vertex(15, -111);
  vertex(13.5, -111.5);
  vertex(13, -110.5);
  vertex(11.5, -111.5);
  vertex(11, -113);
  vertex(9, -112.7);
  vertex(5, -109.7);
  vertex(4.5, -105.5);
  vertex(7, -103);
  vertex(13.5, -102);
  vertex(14, -97);
  vertex(13, -94);
  vertex(12, -91);
  vertex(10.5, -87);
  vertex(15, -89);
  vertex(17, -92);
  vertex(18, -92.5);
  vertex(20, -98);
  vertex(20, -100);
  vertex(16.5, -108);
  vertex(19, -104.5);
  vertex(17.5, -110);
  endShape(CLOSE);
  
  //luna alrededor tierra
  //horas
  fill(161, 161, 161);
  translate(0, -100);
  rotate(movHorario);
  ellipse(0, -35, 15, 15);
  fill(122, 122, 122);
  ellipse(0, -29, 5, 5);
  ellipse(-4, -38, 5, 5);
  ellipse(5, -35, 5, 5);
  pop();
  
  push();
  //Asteroide
  //minutos
  fill(255, 179, 0);
  translate(200, 200);
  rotate(movMinutero);
  triangle(-1, -132, -1, -148, -30, -141);
  ellipse(0, -140, 20, 15);
  pop();
  
  push();
  //Nave espacial
  //segundos
  translate(200, 200);
  rotate(movSegundero);
  fill(255, 255, 255);
  ellipse(0, -175, 20, 20);
  fill(71, 146, 245);
  ellipse(0, -174, 10, 10);
  fill(230, 0, 255);
  ellipse(0, -180, 30, 10);
  pop();
}
