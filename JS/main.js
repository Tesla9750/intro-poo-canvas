const canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");


//Obtienen las dimenciones de la pantalla actual
const window_height=window.innerHeight;
const window_width=window.innerWidth;

//El canvas tiene las mismas dimenciones que la pantalla
canvas.height=window_height;
canvas.width=window_width;

//Crea un fondo para el canvas
canvas.style.background='#ff8';

//Crea una clase
class Circle{
    constructor(x,y,radius,color, text){
        //Propiedades
        this.posX=x;
        this.posY=y;
        this.radius=radius;
        this.color=color;
        this.text=text; 
    }

    //Metodos   
    draw(Context){
        //Dibuja un circulo
        Context.beginPath();
        Context.strokeStyle=this.color;  
        Context.textAlign = "center";
        Context.textBaseLine = "middle";
        Context.font = "15px Arial";
        Context.fillText(this.text, this.posX, this.posY);
        Context.lineWidth=4;   
        Context.arc(this.posX,this.posY,this.radius,0,Math.PI*2,false);
        Context.stroke();
        Context.closePath();
    }

}

let arrayCircle=[];

for (let i=0; i<10;i++) {
    let randomX = Math.random() * window_width ;
    let randomY = Math.random()  * window_height;
    let randomRadius =  Math.floor(Math.random() * 100 + 25 );


    let miCirculo = new Circle(randomX,randomY,randomRadius,'Blue', i+1);

    //agrega el objeto al array
    arrayCircle.push(miCirculo);
    arrayCircle[i].draw(ctx);

}

/* let miCirculo = new Circle(100,100,50,'Blue', "awa de uwu");
miCirculo.draw(ctx);

let miCirculo2 = new Circle(280,280,50,'Red', "Tec");
miCirculo2.draw(ctx); */