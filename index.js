let elemento = document.getElementById("section__productos")
let priceFinal = document.getElementById("priceFinal")

let formProds = document.getElementById("formProds")
formProds.addEventListener("submit",FormuData)

let boton = document.getElementById("boton")

const productos = [{name:"", cant:"",cost:""}]
let section__prod = document.createElement("div")

let cfinalButton = document.getElementById("pFinal")
cfinalButton.addEventListener("click",buttonPFinal)


const costos = []
let precioFinal = 0


const domEl = ()=>{
  
}


function buttonPFinal() {
  let agregarCosto = document.createElement("div")
  agregarCosto.innerHTML =`<p>Costo total : </p>
                          <li>$ ${precioFinal}</li>`
  console.log(priceFinal.appendChild(agregarCosto))
}



function FormuData(el){
    el.preventDefault()
    let form = el.target
    
    productos.name = form.children[1].value
    productos.cant = form.children[3].value
    productos.cost = form.children[5].value
    
    let section__prod = document.createElement("div")
    section__prod.className = "div__prod"
    let totalPrice = productos.cost * productos.cant
    section__prod.innerHTML = `<ul><li>Producto:${productos.name}</li><li>Cantidad:${productos.cant}</li><li>Precio Total:$${totalPrice}</li><ul>`
    
    /*calcular precio total*/
    costos.push(totalPrice)
    console.log(elemento.appendChild(section__prod))
  
    /* usar esta funcion para sumar costo total*/
  
    precioFinal= 0
    for (let i = 0; i < costos.length; i++) {
      precioFinal += costos[i]
  }}


/*probar map y despues filter*/

const mapa = ()=>{
 let filtrarPorNombre = productos.filter = ()=>{
    return productos.includes("a")
  }
}



buttonPFinal()