var miImagen;
var miFiltro;

function preload(){
  miImagen = loadImage('colores.jpg');
  miFiltro = loadImage('kiwi-bird-silhouettes-vector.png');
}

function setup() { 
  createCanvas(1000, 700);
  
  //para hacer filtros
  miImagen.mask(miFiltro);
  
} 

function draw() { 
  background(220);//en el background tambien se puede colocar la imagen background(miImagen);
  
  image(miImagen, 0, 0); //si queremos cambiar la imagen de tamaño se le colocan dos valores mas
}