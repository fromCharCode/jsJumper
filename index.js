"use strict";


class Renderer{

    constructor(element){
        this.element = element;
        this.init();
        this.l = true;
    }

    init(){
        let box = document.createElement("div");
        box.style.position = "absolute";
        box.style.top = "20px";
        box.style.left = "20px"
        box.style.backgroundColor = "rgb(165, 42, 42)";
        box.style.width = "20px";
        box.style.height = "20px";

        this.element.appendChild(box);
        this.box = box;
    }

    render(position){
        this.box.style.top = position + "px";
    }
}

class Box{
    constructor(){
        this.position = 0;
        this.speed = 0;
    }

    update(){
        this.speed+= 0.35;
        this.position += this.speed;
    }

    moveUp(){
        this.speed -= 20;
    }
}

class Game{
    constructor(element){
        this.renderer = new Renderer(element);
        this.box = new Box();
        this.element = element;
        this.isRunning = true;
        this.init();
    }

    init(){
        this.element.addEventListener("click", () => {
            this.box.moveUp();
        }, false);
    }

    start(){
        let counter = 0;
        let timer = setInterval(() => {
            counter++;
            if (this.isRunning){
                this.box.update();
            }
            if (this.box.position < 0){
                this.isRunning = false; 
                clearInterval(timer);   
                alert("Game Over: " + counter + " Punkte erreicht");
            } 
            if (this.box.position > 580){
                this.isRunning = false;
                clearInterval(timer);
                alert("Game Over: " + counter + " Punkte erreicht");
            }
            this.renderer.render(this.box.position);
        }, 17);
        console.log(timer);
    }
}

let game = new Game(document.getElementById("game"));
game.start();