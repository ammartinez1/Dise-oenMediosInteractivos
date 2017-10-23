var miImagen;

var X = 0;
var Y = 0;

function preload(){
  miImagen = loadImage('animales-omnivoros-hamster.jpg');
}

function setup() { 
  createCanvas(1000, 500);
} 

function draw() { 

  noStroke();//en el background tambien se puede colocar la imagen background(miImagen);
  
  miImagen.loadPixels();
  
  var pix = miImagen.get(mouseX, mouseY);
  print(pix);
  var miRojo = pix [0];
  var miVerde = pix [1];
  var miAzul = pix [2];
  var miTrans = pix [3];
  //image(miImagen, 0, 0); //si queremos cambiar la imagen de tamaño se le colocan dos valores mas

  //se creo una ellipse con el color del segundo pixel de la imagen
  fill(miRojo, miVerde, miAzul, miTrans);
  ellipse(mouseX, mouseY, 20, 20);
  
}