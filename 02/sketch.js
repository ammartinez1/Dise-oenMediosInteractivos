function setup() { 
  createCanvas(500, 998);
  background(230, 222, 179);
  
  var AlturaTodos = 163;
  var AnchoTodos = 41.6;
  
  var alturaRC = 13.6;
  var alturaInicio = 10;
  var inicioX = 0;
  
  var alturaSegundafila = alturaInicio + AlturaTodos + alturaRC;
  var alturaTercerafila = alturaSegundafila + AlturaTodos - alturaRC;
  var alturaCuartafila = alturaTercerafila + AlturaTodos;
  var alturaQuintafila = alturaCuartafila + AlturaTodos + alturaRC;
  var alturaSextafila = alturaQuintafila + AlturaTodos - alturaRC;
  
  var lineasHorizontalesCruz = alturaInicio + (AlturaTodos/2);
  var lineasVerticalesCruz = AnchoTodos/2;
  var lineasVerticalesCruzY = alturaInicio;
  
  noStroke();
  
  //cuadros color completo con cruz primera fila 
  fill(0, 0, 0);
  rect(inicioX, alturaInicio, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*3, alturaInicio, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*5, alturaInicio, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*9, alturaInicio, AnchoTodos, AlturaTodos);
  //cuadros color completo con cruz segunda fila
  noFill();
  rect(inicioX + AnchoTodos*2, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*4, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*7, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*10, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  //cuadros color completo con cruz tercera fila
  fill(0, 0, 0);
  rect(inicioX + AnchoTodos, alturaTercerafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*6, alturaTercerafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*8, alturaTercerafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*11, alturaTercerafila, AnchoTodos, AlturaTodos);
  //cuadros color completo con cruz cuarta fila
  noFill();
  rect(inicioX, alturaCuartafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*3, alturaCuartafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*5, alturaCuartafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*9, alturaCuartafila, AnchoTodos, AlturaTodos);
  //cuadros color completo con cruz quinta fila
  fill(0, 0, 0);
  rect(inicioX + AnchoTodos*2, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*4, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*7, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*10, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  //cuadros color completo con cruz sexta fila
  noFill();
  rect(inicioX + AnchoTodos, alturaSextafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*6, alturaSextafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*8, alturaSextafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*11, alturaSextafila, AnchoTodos, AlturaTodos);
  
  //cuadros color completo detras cafes primera fila
  fill(196, 172, 147);
  rect(inicioX + AnchoTodos*2, alturaInicio, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*4, alturaInicio, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*7, alturaInicio, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*10, alturaInicio, AnchoTodos, AlturaTodos);
  //cuadros color completo detras cafes segunda fila
  rect(inicioX + AnchoTodos, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*6, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*8, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*11, alturaInicio + AlturaTodos, AnchoTodos, AlturaTodos);
  //cuadros color completo detras cafes tercera fila
  rect(inicioX, alturaTercerafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*3, alturaTercerafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*5, alturaTercerafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*9, alturaTercerafila, AnchoTodos, AlturaTodos);
  //cuadros color completo detras cafes cuarta fila
  rect(inicioX + AnchoTodos, alturaCuartafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*6, alturaCuartafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*8, alturaCuartafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*11, alturaCuartafila, AnchoTodos, AlturaTodos);
  //cuadros color completo detras cafes quinta fila
  rect(inicioX, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*3, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*5, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*9, alturaCuartafila + AlturaTodos, AnchoTodos, AlturaTodos);
  //cuadros color completo detras cafes sexta fila
  rect(inicioX + AnchoTodos*2, alturaSextafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*4, alturaSextafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*7, alturaSextafila, AnchoTodos, AlturaTodos);
  rect(inicioX + AnchoTodos*10, alturaSextafila, AnchoTodos, AlturaTodos);
  
  //cuadros lineas primera fila
  for(alturaInicio; alturaInicio < AlturaTodos; alturaInicio = alturaInicio + alturaRC*2) {
	//rayas rojas
		fill(189, 46, 10);
    rect(inicioX + AnchoTodos, alturaInicio, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*6, alturaInicio, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*8, alturaInicio, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*11, alturaInicio, AnchoTodos, alturaRC);
    //rayas cafes
    fill(66, 30, 3);
		rect(inicioX + AnchoTodos*2, alturaInicio, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*4, alturaInicio, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*7, alturaInicio, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*10, alturaInicio, AnchoTodos, alturaRC);
  }
  
  //cuadros lineas segunda fila
  for(alturaSegundafila; alturaSegundafila < AlturaTodos*2; alturaSegundafila = alturaSegundafila + alturaRC*2) {
	//rayas rojas
    fill(189, 46, 10);
    rect(inicioX, alturaSegundafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*3, alturaSegundafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*5, alturaSegundafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*9, alturaSegundafila, AnchoTodos, alturaRC);
    //rayas cafes
    fill(66, 30, 3);
		rect(inicioX + AnchoTodos, alturaSegundafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*6, alturaSegundafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*8, alturaSegundafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*11, alturaSegundafila, AnchoTodos, alturaRC);
  }
  
  //cuadros lineas tercera fila
  for(alturaTercerafila; alturaTercerafila < AlturaTodos*3; alturaTercerafila = alturaTercerafila + alturaRC*2) {
	//rayas rojas
    fill(189, 46, 10);
    rect(inicioX + AnchoTodos*2, alturaTercerafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*4, alturaTercerafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*7, alturaTercerafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*10, alturaTercerafila, AnchoTodos, alturaRC);
    //rayas cafes
    fill(66, 30, 3);
		rect(inicioX, alturaTercerafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*3, alturaTercerafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*5, alturaTercerafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*9, alturaTercerafila, AnchoTodos, alturaRC);
  }
  
  //cuadros lineas cuarta fila
  for(alturaCuartafila; alturaCuartafila < AlturaTodos*4; alturaCuartafila = alturaCuartafila + alturaRC*2) {
	//rayas rojas
    fill(189, 46, 10);
    rect(inicioX + AnchoTodos*2, alturaCuartafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*4, alturaCuartafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*7, alturaCuartafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*10, alturaCuartafila, AnchoTodos, alturaRC);
    //rayas cafes
    fill(66, 30, 3);
    rect(inicioX + AnchoTodos, alturaCuartafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*6, alturaCuartafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*8, alturaCuartafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*11, alturaCuartafila, AnchoTodos, alturaRC);
  }
  
  //cuadros lineas quinta fila
  for(alturaQuintafila; alturaQuintafila < AlturaTodos*5; alturaQuintafila = alturaQuintafila + alturaRC*2) {
	//rayas rojas
    fill(189, 46, 10);
    rect(inicioX + AnchoTodos, alturaQuintafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*6, alturaQuintafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*8, alturaQuintafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*11, alturaQuintafila, AnchoTodos, alturaRC);
    //rayas cafes
    fill(66, 30, 3);
    rect(inicioX, alturaQuintafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*3, alturaQuintafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*5, alturaQuintafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*9, alturaQuintafila, AnchoTodos, alturaRC);
  }
  
  //cuadros lineas sexta fila
  for(alturaSextafila; alturaSextafila < AlturaTodos*6; alturaSextafila = alturaSextafila + alturaRC*2) {
	//rayas rojas
    fill(189, 46, 10);
    rect(inicioX, alturaSextafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*3, alturaSextafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*5, alturaSextafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*9, alturaSextafila, AnchoTodos, alturaRC);
    //rayas cafes
    fill(66, 30, 3);
    rect(inicioX + AnchoTodos*2, alturaSextafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*4, alturaSextafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*7, alturaSextafila, AnchoTodos, alturaRC);
    rect(inicioX + AnchoTodos*10, alturaSextafila, AnchoTodos, alturaRC);
  }
  
  strokeWeight(2);
  //cruz primera fila	
  stroke(189, 46, 10);
  	//horizontales
  	line(inicioX, lineasHorizontalesCruz, AnchoTodos, lineasHorizontalesCruz);
  	line(inicioX + AnchoTodos*3, lineasHorizontalesCruz, AnchoTodos*4, lineasHorizontalesCruz);
  	line(inicioX + AnchoTodos*5, lineasHorizontalesCruz, AnchoTodos*6, lineasHorizontalesCruz);
  	line(inicioX + AnchoTodos*9, lineasHorizontalesCruz, AnchoTodos*10, lineasHorizontalesCruz);
  	//verticales
		line(lineasVerticalesCruz, lineasVerticalesCruzY, lineasVerticalesCruz, AlturaTodos + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*7, lineasVerticalesCruzY, lineasVerticalesCruz*7, AlturaTodos + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*11, lineasVerticalesCruzY, lineasVerticalesCruz*11, AlturaTodos + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*19, lineasVerticalesCruzY, lineasVerticalesCruz*19, AlturaTodos + lineasVerticalesCruzY);
  //cruz segunda fila
  stroke(0, 0, 0);
  	//horizontales
  	line(inicioX + AnchoTodos*2, lineasHorizontalesCruz + AlturaTodos, AnchoTodos*3, lineasHorizontalesCruz + AlturaTodos);
  	line(inicioX + AnchoTodos*4, lineasHorizontalesCruz + AlturaTodos, AnchoTodos*5, lineasHorizontalesCruz + AlturaTodos);
  	line(inicioX + AnchoTodos*7, lineasHorizontalesCruz + AlturaTodos, AnchoTodos*8, lineasHorizontalesCruz + AlturaTodos);
  	line(inicioX + AnchoTodos*10, lineasHorizontalesCruz + AlturaTodos, AnchoTodos*11, lineasHorizontalesCruz + AlturaTodos);
  	//verticales
		line(lineasVerticalesCruz*5, lineasVerticalesCruzY + AlturaTodos, lineasVerticalesCruz*5, (AlturaTodos*2) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*9, lineasVerticalesCruzY + AlturaTodos, lineasVerticalesCruz*9, (AlturaTodos*2) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*15, lineasVerticalesCruzY + AlturaTodos, lineasVerticalesCruz*15, (AlturaTodos*2) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*21, lineasVerticalesCruzY + AlturaTodos, lineasVerticalesCruz*21, (AlturaTodos*2) + lineasVerticalesCruzY);
  //cruz tercera fila
  stroke(189, 46, 10);
  	//horizontales
  	line(inicioX + AnchoTodos, lineasHorizontalesCruz + (AlturaTodos*2), AnchoTodos*2, lineasHorizontalesCruz + (AlturaTodos*2));
 		line(inicioX + AnchoTodos*6, lineasHorizontalesCruz + (AlturaTodos*2), AnchoTodos*7, lineasHorizontalesCruz + (AlturaTodos*2));
 		line(inicioX + AnchoTodos*8, lineasHorizontalesCruz + (AlturaTodos*2), AnchoTodos*9, lineasHorizontalesCruz + (AlturaTodos*2));
  	line(inicioX + AnchoTodos*11, lineasHorizontalesCruz + (AlturaTodos*2), AnchoTodos*12, lineasHorizontalesCruz + (AlturaTodos*2));
 		//verticales
  	line(lineasVerticalesCruz*3, lineasVerticalesCruzY + (AlturaTodos*2), lineasVerticalesCruz*3, (AlturaTodos*3) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*13, lineasVerticalesCruzY + (AlturaTodos*2), lineasVerticalesCruz*13, (AlturaTodos*3) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*17, lineasVerticalesCruzY + (AlturaTodos*2), lineasVerticalesCruz*17, (AlturaTodos*3) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*23, lineasVerticalesCruzY + (AlturaTodos*2), lineasVerticalesCruz*23, (AlturaTodos*3) + lineasVerticalesCruzY);
  //cruz cuarta fila
  	//horizontales
  	line(inicioX, lineasHorizontalesCruz + (AlturaTodos*3), AnchoTodos, lineasHorizontalesCruz + (AlturaTodos*3));
 		line(inicioX + AnchoTodos*3, lineasHorizontalesCruz + (AlturaTodos*3), AnchoTodos*4, lineasHorizontalesCruz + (AlturaTodos*3));
 		line(inicioX + AnchoTodos*5, lineasHorizontalesCruz + (AlturaTodos*3), AnchoTodos*6, lineasHorizontalesCruz + (AlturaTodos*3));
 		line(inicioX + AnchoTodos*9, lineasHorizontalesCruz + (AlturaTodos*3), AnchoTodos*10, lineasHorizontalesCruz + (AlturaTodos*3));
 		//verticales
  	line(lineasVerticalesCruz, lineasVerticalesCruzY + (AlturaTodos*3), lineasVerticalesCruz, (AlturaTodos*4) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*7, lineasVerticalesCruzY + (AlturaTodos*3), lineasVerticalesCruz*7, (AlturaTodos*4) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*11, lineasVerticalesCruzY + (AlturaTodos*3), lineasVerticalesCruz*11, (AlturaTodos*4) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*19, lineasVerticalesCruzY + (AlturaTodos*3), lineasVerticalesCruz*19, (AlturaTodos*4) + lineasVerticalesCruzY);
  //cruz quinta fila
  stroke(255, 255, 255);
  	//horizontales
  	line(inicioX + AnchoTodos*2, lineasHorizontalesCruz + (AlturaTodos*4), AnchoTodos*3, lineasHorizontalesCruz + (AlturaTodos*4));
 		line(inicioX + AnchoTodos*4, lineasHorizontalesCruz + (AlturaTodos*4), AnchoTodos*5, lineasHorizontalesCruz + (AlturaTodos*4));
 		line(inicioX + AnchoTodos*7, lineasHorizontalesCruz + (AlturaTodos*4), AnchoTodos*8, lineasHorizontalesCruz + (AlturaTodos*4));
 		line(inicioX + AnchoTodos*10, lineasHorizontalesCruz + (AlturaTodos*4), AnchoTodos*11, lineasHorizontalesCruz + (AlturaTodos*4));
 		//verticales
  	line(lineasVerticalesCruz*5, lineasVerticalesCruzY + (AlturaTodos*4), lineasVerticalesCruz*5, (AlturaTodos*5) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*9, lineasVerticalesCruzY + (AlturaTodos*4), lineasVerticalesCruz*9, (AlturaTodos*5) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*15, lineasVerticalesCruzY + (AlturaTodos*4), lineasVerticalesCruz*15, (AlturaTodos*5) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*21, lineasVerticalesCruzY + (AlturaTodos*4), lineasVerticalesCruz*21, (AlturaTodos*5) + lineasVerticalesCruzY);
  //cruz sexta fila
  stroke(0, 0, 0);
  	//horizontales
  	line(inicioX + AnchoTodos, lineasHorizontalesCruz + (AlturaTodos*5), AnchoTodos*2, lineasHorizontalesCruz + (AlturaTodos*5));
 		line(inicioX + AnchoTodos*6, lineasHorizontalesCruz + (AlturaTodos*5), AnchoTodos*7, lineasHorizontalesCruz + (AlturaTodos*5));
 		line(inicioX + AnchoTodos*8, lineasHorizontalesCruz + (AlturaTodos*5), AnchoTodos*9, lineasHorizontalesCruz + (AlturaTodos*5));
 		line(inicioX + AnchoTodos*11, lineasHorizontalesCruz + (AlturaTodos*5), AnchoTodos*12, lineasHorizontalesCruz + (AlturaTodos*5));
 		//verticales
  	line(lineasVerticalesCruz*3, lineasVerticalesCruzY + (AlturaTodos*5), lineasVerticalesCruz*3, (AlturaTodos*6) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*13, lineasVerticalesCruzY + (AlturaTodos*5), lineasVerticalesCruz*13, (AlturaTodos*6) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*17, lineasVerticalesCruzY + (AlturaTodos*5), lineasVerticalesCruz*17, (AlturaTodos*6) + lineasVerticalesCruzY);
  	line(lineasVerticalesCruz*23, lineasVerticalesCruzY + (AlturaTodos*5), lineasVerticalesCruz*23, (AlturaTodos*6) + lineasVerticalesCruzY);
  	
  
  //linea final negra
  noStroke();
  fill(0, 0, 0);
  rect(inicioX, 988, 500, 10); 
  
}