let elemento = document.getElementById("section__productos")
let priceFinal = document.getElementById("priceFinal")

let formProds = document.getElementById("formProds")
formProds.addEventListener("submit",FormuData)

let boton = document.getElementById("boton")

const productos = [{name:"", cant:"",cost:""}]
let section__prod = document.createElement("div")

let cfinalButton = document.getElementById("calcButton")
cfinalButton.addEventListener("click",buttonPFinal)

let divCostoFinal = document.getElementById("div__costoFinal")




const costos = []
let precioFinal = 0



function buttonPFinal() {
  let agregarCosto = divCostoFinal
  agregarCosto.innerHTML =`<p>Costo total: $${precioFinal}</p>`                          
  priceFinal.appendChild(agregarCosto)
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
    section__prod.innerHTML = `<img src="./img/carrito2.png"><ul><li>Producto:${productos.name}</li><li>Cantidad:${productos.cant}</li><li>Precio Total:$${totalPrice}</li></ul>`
 

    /*funcion para eliminar cada elemento de mi tabla*/

    let eliminar = document.createElement("button")
    eliminar.innerText = "Eliminar"
    section__prod.appendChild(eliminar)

    eliminar.addEventListener("click", (event) =>{
     event.target.parentNode.remove()
     
   
    })

    /*calcular precio total*/
    costos.push(totalPrice)
    console.log(elemento.appendChild(section__prod))
  
    /* usar esta funcion para sumar costo total*/
    precioFinal= 0
    for (let i = 0; i < costos.length; i++) {
      precioFinal += costos[i]
   }
 }

  console.log(costos)


buttonPFinal()