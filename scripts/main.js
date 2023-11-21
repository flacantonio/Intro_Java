console.log('Hola Mundo')
console.log("Hola de nuevo")
console.log(4*3)
document.write("Hola desde el main.js") 
//alert("Prueba de alert")
console.log("------")

var nombre="Toño"
console.log(nombre)
console.log(typeof nombre)
console.log("------")

var numero=45.45
console.log(numero)
console.log(typeof numero)
console.log(parseInt(numero))
console.log("------")

var numeroError=parseInt("Hola")
console.log(numeroError)
console.log(typeof numeroError)
console.log("------")

var boleano=true
console.log(boleano)
console.log(typeof boleano)
console.log("------")

var variableNula=null
console.log(variableNula)
console.log(typeof variableNula)
console.log("------")

var sinDefinir
console.log(typeof sinDefinir)
console.log("------")

var persona = {
    nombre:"Toño",
    edad:38,
    ciudad:"Tulancingo",
}

console.log(persona.nombre)
console.log(persona.edad)
console.log("nombre: " + persona.nombre + ". Edad: " + persona.edad)