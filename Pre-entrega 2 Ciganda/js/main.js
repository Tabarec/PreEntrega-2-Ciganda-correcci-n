let precioParaEliminar= parseInt(prompt("Ingrese un precio, todos los objetos cuyo valor sea mayor al ingresado serán eliminados de la lista "))

const Objeto = function(nombre,precio){
    this.nombre=nombre
    this.precio=precio
}

let objeto1= new Objeto("casa", 100000)
let objeto2= new Objeto("puerta", 1500)
let objeto3= new Objeto("auto", 20000)
let objeto4= new Objeto("libro", 5)
let objeto5= new Objeto("impresora", 200)
let objeto6= new Objeto("calculadora", 50)
let objeto7= new Objeto("avion", 500000)
let objeto8= new Objeto("computadora", 7000)
let objeto9= new Objeto("auriculares", 12)
let objeto10= new Objeto("taladro", 3500)

let todosLosObjetos= [objeto1,objeto2,objeto3,objeto4,objeto5,objeto6,objeto7,objeto8,objeto9,objeto10]

function eliminar(objeto){
    if(isNaN(precioParaEliminar)){
       alert("Ingrese un número");
       precioParaEliminar= parseInt(prompt("Ingrese un precio, todos los objetos cuyo valor sea mayor al ingresado serán eliminados de la lista "))
    }

    else {
        if(objeto.precio>precioParaEliminar){
        todosLosObjetos= todosLosObjetos.filter((x) => x !== objeto);
    }
}
}

function filtrarParaEliminar(){
    todosLosObjetos.forEach(eliminar)
}

filtrarParaEliminar()

console.log(todosLosObjetos)
