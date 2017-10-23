var miImagen;
var miFiltro;

function preload(){
  miImagen = loadImage('Animales-raros-del-mundo.jpg');
}

function setup() { 
  createCanvas(800, 400);
} 

function draw() { 
  background(220);//en el background tambien se puede colocar la imagen background(miImagen);
  
  //para cambiar los colores de las imagenes
  //para cambiar solo la transparencia se dejan los tre valores al máximo y solo se varia la transparencia tint(255, 255, 255, #);
  tint(210, 150, 200);
  
  image(miImagen, 0, 0); //si queremos cambiar la imagen de tamaño se le colocan dos valores mas
}
