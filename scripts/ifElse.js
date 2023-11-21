var edad=35
var luz="Rojo"
if (edad>=18){
    console.log("Mayor de Edad")
}
else{
    console.log("Menor de Edad")
}

if(edad>=18 && edad<30){
    console.log("Puede entrar")
}
else{
    console.log("NO ENTRA")
}

if (luz.toLowerCase()=="verde"){
    console.log("Avanza")
}
else if (luz.toLowerCase()=="amarillo"){
    console.log("precaución")
}
else if(luz.toLowerCase()=="rojo"){
    console.log("detenerse")
}
else{
    console.log("no es un valor válido")
}