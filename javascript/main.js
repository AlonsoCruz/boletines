console.log("Hola mundo desde un archivo externo¡¡")

//represenracion del DOM
//query selector solo puede seleccionar el primer elemento o selector
let table = document.querySelector(".table");
console.log(table);

//querySelectorAll puede seleccionar todos los elementos para luego recorrerlos con
//forEach que recibe una funcion y despues los imprimimos
let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
});

console.log(links); 

let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log("XXXXXXXXXXXXXXXXXXXXD");
    })
});



