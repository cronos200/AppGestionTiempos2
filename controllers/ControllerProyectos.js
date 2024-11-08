import { proyectos } from "../models/ModelProyectos.js";

export function listarProyectos(){
    for (let index = 0; index < proyectos.length; index++) {
        console.log(proyectos[index]);
        //CREACION DE ETIQUETAS
        let proyecto = document.createElement('div')
        let nombreProyecto = document.createElement("h2")
        let imgProyecto = document.createElement('img')
        let duracionProyecto = document.createElement('p')
        let tipoProyecto = document.createElement('p')
        let empresProyecto = document.createElement('p')
        let dificultadProyecto = document.createElement('p')
        //AQUI MOSTRAMOS LAS ETIQUETAS
        nombreProyecto.textContent = proyectos[index].nombre
        // AQUI ES PARA MOSTRAR EL ORDEN DEL PROYECTO DENTRO DEL DIV
        proyecto.append(imgProyecto, nombreProyecto, duracionProyecto, tipoProyecto, empresProyecto, dificultadProyecto)
        // SIRVE PARA QUE EN EL HTML SE PUEDA CONSTRUIR LA INFORMACION y append 
        document.getElementById('contenido').append(proyecto)
        console.log(proyecto);
    }
}

export function filtrarPorEmpresa(){

}

export function filtrarPorProyecto(){

}

export function filtrarPorTipoProyecto(){

}