let elemento = document.getElementById("section__productos")
let priceFinalSection = document.getElementById("priceFinal")
let formProds = document.getElementById("formProds")
formProds.addEventListener("submit",FormuData)
let boton = document.getElementById("boton")
let section__prod = document.createElement("div")
let cfinalButton = document.getElementById("calcButton")
cfinalButton.addEventListener("click",buttonPFinal)



let divCostoFinal = document.getElementById("div__costoFinal")

const productos = [{name:"", cant:"",cost:""}]

const prodsDelete = []
let costosBorrados = 0

let costos = []
let precioFinal = 0
console.log(costos)


function buttonPFinal() {
  let agregarCosto = divCostoFinal
  //restamos elementos eliminados para que el valor final sea el correcto
  costosBorrados = 0;
  for (let i = 0; i < prodsDelete.length; i++) {
    costosBorrados += prodsDelete[i]
 }
 //modificamos el dom con el valor correcto
  agregarCosto.innerHTML =`<p>Costo total: $${precioFinal - costosBorrados}</p>`   
  priceFinalSection.appendChild(agregarCosto)
}



function FormuData(el){
    el.preventDefault()
    let form = el.target
    
    productos.name = form.children[1].value
    productos.cant = form.children[3].value
    productos.cost = form.children[5].value
    
    let section__prod = document.createElement("div")
    section__prod.className = "card addCard"
    let totalPrice = productos.cost * productos.cant
    section__prod.innerHTML = `<img src="./img/carrito2.png"><ul><li>Producto:${productos.name}</li><li>Cantidad:${productos.cant}</li><li>Precio Total:$${totalPrice}</li></ul>`
 

    /*funcion para eliminar cada elemento de mi tabla*/

    let eliminar = document.createElement("button")
    eliminar.className = "btn btn-primary"
    eliminar.innerText = "Eliminar"
    section__prod.appendChild(eliminar)

    eliminar.addEventListener("click", (event) =>{
     let ver = event.target.parentNode.remove()
    prodsDelete.push(totalPrice)
    console.log(prodsDelete)
     
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


function deleteAll() {
  
  let DeleteAllBtn = document.createElement("button")
  DeleteAllBtn.innerText = "borrar Todo"
  priceFinalSection.appendChild(DeleteAllBtn)

  DeleteAllBtn.addEventListener("click",borrarTodo)
  
  function borrarTodo() {
    let divs =  elemento.getElementsByClassName("card")
    
    while(divs.length > 0){                   
      elemento.removeChild(divs[0]);
      precioFinal = 0;
      
  }
}
}

function main(){

  deleteAll()
  buttonPFinal()

}


main()

