let elemento = document.getElementById("section__productos")
let priceFinalSection = document.getElementById("priceFinal")
let formProds = document.getElementById("formProds")
formProds.addEventListener("submit",FormuData)
let boton = document.getElementById("boton")
let section__prod = document.createElement("div")
let cfinalButton = document.getElementById("calcButton")
cfinalButton.addEventListener("click",buttonPFinal)


let divCostoFinal = document.getElementById("div__costoFinal")


class Productos {
  constructor(name,cant,cost){
    this.name = name;
    this.cant = cant;
    this.cost = cost;
  }
}



const prodsDelete = []
let costosBorrados = 0
let productosAgregados = []
let costos = []
let precioFinal = 0


let botonBuscar = document.getElementById("botonBuscar")
let inputBuscar = document.getElementById("inputBuscar")





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
    

    const products = form.children[1].value;
    const quantity = form.cant.value;
    const cost = form.cost.value;
   let prodNew = new Productos (products,quantity,cost)
   productosAgregados = prodNew

   
   let arrayNew = Object.keys(prodNew).map(function(key) {
   return prodNew[key];
    
   
});
   


   botonBuscar.addEventListener("click",res)
   
   function res(){
    let valor = inputBuscar.value
    
    let doc = document.getElementById("div__buscador")
     let buscar = arrayNew.find(i=> i === valor )
     console.log("el producto existe = ", buscar)
   
     let newEl = document.createElement("div")
     newEl.innerHTML = `<li>${buscar}</li>`
    
   }

 
   



    let section__prod = document.createElement("div")
    section__prod.className = "card addCard"
    let totalPrice = cost * quantity
    section__prod.innerHTML = `<img src="./img/carrito2.png"><ul><li>Producto: ${products} </li><li>Cantidad:${quantity}</li><li>Precio Total:$${totalPrice}</li></ul>`
 
    

    /*funcion para eliminar cada elemento de mi tabla*/

    let eliminar = document.createElement("button")
    eliminar.className = "btn btn-primary"
    eliminar.innerText = "Eliminar"
    section__prod.appendChild(eliminar)

    eliminar.addEventListener("click", (event) =>{
     let ver = event.target.parentNode.remove()
     console.log(ver)
    prodsDelete.push(totalPrice)
    console.log(prodsDelete)
    arrayNew = []
    })

    /*calcular precio total*/
   costos.push(totalPrice)
    console.log(elemento.appendChild(section__prod))
  
   //  usar esta funcion para sumar costo total
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
   
    if(costos.length > 0){

      
    let divs =  elemento.getElementsByClassName("card")
    let arra = arrayNew.length = 0
    console.log(arra)
    while(divs.length > 0){                   
      elemento.removeChild(divs[0]);
      precioFinal = 0;
      costos = []  
      
    }
    
  }else{
    costos = 0
    
    alert("No tienes productos agregados aún")
  }
 divCostoFinal.innerHTML = `<p>Costo total: $${precioFinal}</p>`
}
}


 

function main(){

  deleteAll()
  buttonPFinal()
  
}


main()


/*   agregar cantidad de productos seleccionados
let e = document.createElement("div")
e.innerHTML = `<h4>${costos.length}</h4>`
priceFinalSection.append(e)
console.log(e)*/


