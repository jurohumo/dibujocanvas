var cuadro = document.getElementById("area");
var papel = cuadro.getContext("2d");
var state = 0;
var x;
var y;

cuadro.addEventListener("mousedown", pressMouse);
cuadro.addEventListener("mouseup", upMouse);
cuadro.addEventListener("mousemove", moveMouse);

function pressMouse(event){
    console.log(event); 
    state = event.buttons;
    x = event.layerX;
    y = event.layerY;
}

function upMouse(event){
    console.log(event);
    state = event.buttons;
    x = event.layerX;
    y = event.layerY;  
}

function moveMouse(event){
    if (state == 1) {
        dibujarLinea("black", x, y,event.layerX, event.layerY,papel);
        x = event.layerX;
        y = event.layerY;
        //dibujarLinea("black", x, y,event.layerX, event.layerY,papel);
    }
    
}

dibujarLinea("blue", 0,0,0,300,papel);
dibujarLinea("blue", 0,300,300,300,papel);
dibujarLinea("blue", 300,300,300,0,papel);
dibujarLinea("blue", 300,0,0,0,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

cuadro.addEventListener("touchstart", pressHand);

cuadro.addEventListener("touchend", upHand);

cuadro.addEventListener("touchmove", moveHand);

function pressHand(event) {
    state = 1;
    alert(event);
    x = event.pageX;
    y = event.pageY;
}

function upHand(event){
    state = 0;
    x = event.pageX;
    y = event.pageY;  
}

function moveMouse(event){
    if (state == 1) {
        dibujarLinea("black", x, y,event.pageX, event.pageY,papel);
        x = event.pageX;
        y = event.pageY;
        //dibujarLinea("black", x, y,event.layerX, event.layerY,papel);
    }
    
}
