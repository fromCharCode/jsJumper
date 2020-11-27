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


    render(){
        if (this.l == true){
            this.box.style.top = "40px";   
            this.l = false;
        } else {
            this.box.style.top = "20px";
            this.l = true;
        }
    }
}

let renderer = new Renderer(document.getElementById("game"));

setInterval(() => {
    renderer.render();
}, 17);