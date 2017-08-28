function setup() { 
  createCanvas(400, 400);
   background(242, 223, 206);
  
  //blanca esquina
  strokeWeight(3);
  ellipse(355, 80, 45, 45);
  
  //cuadraditos de color del tictactoe
  noStroke();
  fill(204, 61, 113);
  rect(344, 245, 36, 35);//cuadro superior derecho
  fill(255, 255, 255);
  rect(310, 245, 34, 35);//cuadro superior izquierdo
  rect(344, 280, 36, 35);//cuadro inferior derecha
  fill(245, 157, 204);
  rect(310, 280, 34, 35);//cuadro inferior izquierda
  //tic tac toe verticales de derecha a izquierda
  stroke(0, 0, 0);
  strokeWeight(2);
  line(380, 200, 380, 360);
  line(344, 200, 344, 360);
  line(310, 200, 310, 360);
  //tic tac toe horizontales de arriba a bajo
  line(270, 245, 400, 245);
  line(270, 280, 400, 280);
  line(270, 315, 400, 315);
  
  //color blanco detras de las diagonales
  noStroke();
  fill(255, 255, 255, 220);
  beginShape();
  vertex(25, 100);
  vertex(250, 0);
  vertex(340, 0);
  vertex(264, 36);
  vertex(266, 82);
  vertex(245, 131);
  vertex(132, 197);
  vertex(113, 157);
  vertex(66, 180);
  endShape(CLOSE);
  
  //borde amarillo de azul
  stroke(0, 0, 0);
  strokeWeight(0.5);
  fill(247, 224, 108);
  ellipse(260, 50, 60, 60);
  //azul con bode amarillo
  fill(131, 175, 199);
  ellipse(260, 50, 50, 50);
  
  //roja borde
  fill(207, 75, 81);
  ellipse(260, 130, 60, 60);
  //roja interior
  fill(216, 182, 245);
  ellipse(257, 129, 52, 52);
  
  //rectangulo rosa
  noStroke();
  fill(242, 123, 181);
  rect(0, 80, 70, 55);
    
  stroke(0, 0, 0);
  
  //Circulo esquina izquierda superior
  fill(133, 86, 45);
  ellipse(100, 70, 70, 70);
  noStroke();
  fill(123, 226, 247);
  ellipse(93, 70, 56, 70);
  //borde negro
  stroke(0, 0, 0);
  strokeWeight(3);
  fill(135, 78, 13, 100);
  ellipse(80, 70, 85, 85);
  
  //color final lineas vertivales hacia abajo cafes
  //uno
  strokeWeight(1);
  fill(168, 107, 79);
  beginShape();
  vertex(119, 204);
  vertex(132, 197);
  vertex(220, 400);
  vertex(215, 400);
  endShape(CLOSE);
  //dos
  beginShape();
  vertex(87, 262);
  vertex(96, 255);
  vertex(160, 400);
  vertex(153, 400);
  endShape(CLOSE);
  //tres
  beginShape();
  vertex(101, 252);
  vertex(113, 245);
  vertex(183, 400);
  vertex(175, 400);
  endShape(CLOSE);
  
  //azul
  strokeWeight(1);
  fill(45, 64, 150, 250);
  ellipse(125, 280, 80, 80);
  
  //garritas=lineas esquina superior 
  strokeWeight(1);
  line(0, 30, 14, 30);
  line(0, 33, 14, 33);
  line(0, 36, 14, 36);
  
  //lineas del borde izquierdo
  strokeWeight(2);
  line(0, 120, 14, 108);
  strokeWeight(1);
  line(0, 136, 24, 111);
  stroke(247, 17, 151);
  strokeWeight(2);
  line(0, 136, 14, 138);
  stroke(0, 0, 0);
  strokeWeight(1);
  line(0, 136, 14, 138);
  stroke(222, 214, 57);
  strokeWeight(5);
  line(0, 177, 14, 164);
  stroke(0, 0, 0);
  strokeWeight(2);
  line(0, 176, 14, 163);
  stroke(40, 74, 19);
  strokeWeight(4);
  line(0, 229, 58, 269);
  stroke(0, 0, 0);
  strokeWeight(2);
  line(0, 225, 58, 267);
  
  //colores de las lineas diagonales
    //primero
    fill(196, 10, 91);
    beginShape();
    vertex(25, 100);
    vertex(43, 93);
    vertex(51, 112);
    vertex(35, 120);
    endShape(CLOSE);
    //Segundo
    fill(5, 2, 0, 190);
    beginShape();
    vertex(43, 93);
    vertex(61, 85);
    vertex(70, 105);
    vertex(51, 112);
    endShape(CLOSE);
    //tercero
    fill(131, 168, 131);
    beginShape();
    vertex(79, 77);
    vertex(97, 69);
    vertex(105, 87);
    vertex(88, 95);
    endShape(CLOSE);
    //Cuarto
    fill(41, 40, 69, 240);
    beginShape();
    vertex(97, 69);
    vertex(115, 61);
    vertex(129, 76);
    vertex(105, 87);
    endShape(CLOSE);
        //lineas
        strokeWeight(1);
        line(116, 64, 112, 70);
        line(118, 66, 114, 72);
        line(120, 68, 116, 74);
        line(122, 70, 118, 76);
    //quinto
    strokeWeight(2);
    fill(235, 212, 247);
    beginShape();
    vertex(200, 23);
    vertex(227, 11);
    vertex(240, 25);
    vertex(214, 37);
    endShape(CLOSE);
        //puntos
        strokeWeight(3);
        point(224, 17);
        point(219, 17);
        point(222, 21);
        point(227, 18);
        point(224, 25);
        point(229, 22);
        point(232, 19);
        point(224, 14);
        point(232, 26);
        point(228, 27);
        point(217, 19);
        point(212, 20);
        point(206, 23);
        point(216, 23);
        point(212, 23);
        point(223, 28);
        point(218, 28);
        point(212, 27);
        point(215, 32);
    //sexto
    strokeWeight(1);
    beginShape();
    vertex(35, 120);
    vertex(51, 112);
    vertex(61, 133);
    vertex(45, 140);
    endShape(CLOSE);
        //lineas
        line(41, 123, 42, 127);
        line(45, 125, 42, 127);
        line(41, 123, 47, 120);
        line(46, 115, 50, 121);
        line(52, 123, 47, 127);
        line(44, 131, 47, 137);
        line(47, 131, 53, 127);
        line(47, 131, 50, 135);
        line(55, 126, 54, 132);
    //septimo
    fill(98, 112, 86);
    beginShape();
    vertex(88, 95);
    vertex(105, 87);
    vertex(115, 107);
    vertex(95, 115);
    endShape(CLOSE);
    //octavo
    fill(0, 0, 0);
    beginShape();
    vertex(61, 133);
    vertex(79, 123);
    vertex(89, 142);
    vertex(70, 152);
    endShape(CLOSE);
    //noveno
    fill(209, 204, 212);
    beginShape();
    vertex(115, 107);
    vertex(145, 92);
    vertex(160, 108);
    vertex(125, 125);
    endShape(CLOSE);
        //puntos
        strokeWeight(3);
        point(123, 107);
        point(128, 107);
        point(134, 103);
        point(139, 100);
        point(143, 96);
        point(123, 112);
        point(126, 116);
        point(130, 112);
        point(136, 107);
        point(143, 104);
        point(149, 107);
        point(147, 101);
        point(133, 117);
        point(137, 113);
        point(142, 109);
        point(145, 113);
        point(156, 107);
    //décimo
    strokeWeight(1);
    fill(0, 0, 0);
    beginShape();
    vertex(289, 24);
    vertex(311, 14);
    vertex(323, 34);
    vertex(302, 45);
    endShape(CLOSE);
    //décimoprimero
    beginShape();
    vertex(56, 159);
    vertex(70,152);
    vertex(79, 173);
    vertex(65, 180);
    endShape(CLOSE);
    //décimosegundo
    fill(36, 25, 16, 230);
    beginShape();
    vertex(227, 76);
    vertex(260, 60);
    vertex(270, 80);
    vertex(239, 95);
    endShape(CLOSE);
    //décimotercero
    fill(235, 212, 247);
    beginShape();
    vertex(33, 196);
    vertex(50, 187);
    vertex(59, 208);
    vertex(43, 216);
    endShape(CLOSE);
        //lineas
        strokeWeight(2);
        line(37, 196, 50, 224);
        line(39, 193, 53, 220);
        line(43, 191, 55, 218);
        line(47, 190, 59, 218);
    //décimocuarto
    strokeWeight(1);
    fill(245, 223, 223);
    beginShape();
    vertex(50, 187);
    vertex(65, 180);
    vertex(73, 200);
    vertex(59, 208);
    endShape(CLOSE);
    //décimoquinto
    beginShape();
    vertex(65, 180);
    vertex(79, 173);
    vertex(87, 193);
    vertex(73, 200);
    endShape(CLOSE);
        //puntos
        strokeWeight(3);
        point(70, 182);
        point(74, 182);
        point(77, 178);
        point(71, 188);
        point(79, 182);
        point(77, 186);
        point(74, 191);
        point(77, 192);
        point(80, 188);
        point(83, 192);
        point(76, 196);
    //décimosexto
    strokeWeight(1);
    fill(245, 208, 208);
    strokeWeight(2);
    beginShape();
    vertex(99, 163);
    vertex(113, 157);
    vertex(123, 178);
    vertex(110, 185);
    endShape(CLOSE);
    //décimoseptimo
    strokeWeight(1);
    fill(0, 0, 0);
    beginShape();
    vertex(297, 75);
    vertex(314, 63);
    vertex(322, 79);
    vertex(306, 89);
    endShape(CLOSE);
    //décimooctavo
    fill(255, 255, 255);
    beginShape();
    vertex(43, 216);
    vertex(59, 208);
    vertex(69, 226);
    vertex(53, 235);
    endShape(CLOSE);
    //décimonoveno
    fill(250, 205, 205);
    beginShape();
    vertex(59, 208);
    vertex(73, 200);
    vertex(82, 217);
    vertex(69, 226);
    endShape(CLOSE);
        //puntos
        strokeWeight(2);
        point(63, 211);
        point(67, 207);
        point(67, 211);
        point(71, 203);
        point(72, 207);
        point(71, 211);
        point(76, 211);
        point(65, 215);
        point(68, 215);
        point(73, 213);
        point(78, 217);
        point(73, 217);
        point(73, 220);
        point(69, 219);
    //vigesimo
    strokeWeight(1);
    fill(255, 255, 255);
    beginShape();
    vertex(73, 200);
    vertex(87, 193);
    vertex(95, 209);
    vertex(82, 217);
    endShape(CLOSE);
    //vigesimo primero
    fill(0, 0, 0);
    beginShape();
    vertex(53, 235);
    vertex(69, 226);
    vertex(77, 244);
    vertex(63, 254);
    endShape(CLOSE);
    //vigesimo segundo
    fill(255, 255, 255);
    beginShape();
    vertex(69, 226);
    vertex(82, 217);
    vertex(88, 237);
    vertex(77, 244);
    endShape(CLOSE);
    //vigesimo tercero
    fill(247, 230, 230);
    beginShape();
    vertex(82, 217);
    vertex(95, 209);
    vertex(103, 227);
    vertex(92, 235);
    endShape(CLOSE);
        //lineas
        line(86, 216, 96, 233);
        line(89, 213, 99, 232);
        line(92, 212, 102, 230);
    //vigesidmo cuarto
    fill(0, 0, 0, 200);
    beginShape();
    vertex(211, 152);
    vertex(245, 131);
    vertex(267, 159);
    vertex(233, 182);
    endShape(CLOSE);
        //lineas 
        stroke(255, 255, 255);
        strokeWeight(2);
        line(216, 153, 219, 152);
        line(224, 153, 226, 152);
        line(234, 153, 232, 152);
        line(228, 145, 226, 147);
        line(225, 159, 222, 160);
        line(230, 171, 231, 171);
        line(225, 164, 226, 165);
        line(235, 159, 234, 163);
        line(253, 163, 251, 162);
        line(242, 158, 243, 162);
        line(246, 167, 241, 168);
        line(240, 172, 236, 176);
    //vigesimo quinto
    strokeWeight(1);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    beginShape();
    vertex(310, 99);
    vertex(325, 90);
    vertex(336, 106);
    vertex(321, 115);
    endShape(CLOSE);
    //vigesimo sexto
    fill(255, 255, 255);
    beginShape();
    vertex(63, 254);
    vertex(77, 244);
    vertex(87, 262);
    vertex(72, 273);
    endShape(CLOSE);
    //vigesimo septimo
    fill(0, 0, 0, 200);
    beginShape();
    vertex(77, 244);
    vertex(88, 237);
    vertex(96, 255);
    vertex(87, 262);
    endShape(CLOSE);
    //vigesimo octavo
    fill(255, 255, 255, 200);
    beginShape();
    vertex(92, 235);
    vertex(103, 227);
    vertex(113, 245);
    vertex(101, 252);
    endShape(CLOSE);
    //trigesimo
    fill(0, 0, 0);
    beginShape();
    vertex(239, 186);
    vertex(268, 168);
    vertex(282, 187);
    vertex(252, 206);
    endShape(CLOSE);
  
  //diagonales horizontales de arriba hacia abajo
  strokeWeight(2);
  line(25, 100, 250, 0);
  line(35, 120, 295, 0);
  line(45, 140, 340, 0);
  line(55, 160, 260, 60);
  line(33, 196, 270, 80);
  line(121, 204, 245, 131);
  //minis
  line(43, 216, 87, 193);
  line(53, 235, 95, 210);
  line(63, 254, 103, 227);
  line(72, 273, 120, 240);
	
  //diagonales verticales de izquierda a derecha
  line(33, 196, 133, 400);
  line(50, 187, 153, 400);
  line(65, 180, 160, 400);
  line(25, 100, 175, 400);
  line(43, 93, 183, 400);
  line(61, 85, 215, 400);
  line(79, 77, 220, 400);
  line(97, 69, 125, 125);
  line(115, 61, 160, 108);
  
  //triangulo cafe
  fill(168, 107, 79);
  triangle(113, 157, 364, 33, 123, 178);
  
  //borde rojo
  noFill();
  stroke(247, 100, 74);
  strokeWeight(4);
  ellipse(35, 320, 85, 85);
  //bordeamarillo
  stroke(250, 223, 113);
  fill(206, 228, 245);
  ellipse(35, 320, 55, 55);
    
  //triangulo verde esquina
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(11, 38, 6);
  triangle(0, 280, 75, 380, 0, 380);
  
  //circulo mitad y mitad
  strokeWeight(2);
  fill(0, 0, 0);
  ellipse(33, 322, 25, 25);
  fill(255, 255, 255);
  arc(33, 322, 25, 25, 45, 180);
	  
  //amarillo al lado triangulo verde
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(0,350);
  vertex(25, 374);
  vertex(21, 378);
  vertex(0, 355);
  endShape(CLOSE);
  fill(207, 196, 116);
  beginShape();
  vertex(21, 378);
  vertex(25, 374);
  vertex(50, 400);
  vertex(40, 400);
  endShape(CLOSE);
  //lineas
  stroke(0, 0, 0);
  strokeWeight(2);
  line(11, 366, 13, 364);
  line(21, 378, 25, 374);
  strokeWeight(4);
  line(16, 371, 18, 369);
  
  //naranja y negra
  noStroke();
  fill(255, 89, 0);
  beginShape();
  vertex(0, 275);
  vertex(10, 253);
  vertex(14, 258);
  vertex(0, 282);
  endShape(CLOSE);
  fill(0, 0, 0);
  beginShape();
  vertex(15, 245);
  vertex(31, 211);
  vertex(38, 219);
  vertex(20, 249);
  endShape(CLOSE);
	
  //diagonal que sale desde la esquina inferor izquierda
  stroke(0, 0, 0);
  strokeWeight(2);
  fill(143, 8, 8);
  beginShape();
  vertex(5, 400);
  vertex(98, 329);
  vertex(102, 337);
  vertex(20, 400);
  endShape(CLOSE);
  fill(0, 0, 0, 200);
  beginShape();
  vertex(98, 329);
  vertex(322, 155);
  vertex(327, 162);
  vertex(102, 337);
  endShape(CLOSE);
	
  //linea negra parte inferior
  strokeWeight(6);
  line(78, 340, 230, 400);
} 
