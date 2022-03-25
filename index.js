/*dom*/
let elemento = document.getElementById("section__productos");
let priceFinalSection = document.getElementById("priceFinal");
let formProds = document.getElementById("formProds");
let boton = document.getElementById("boton");
let section__prod = document.createElement("div");
let cfinalButton = document.getElementById("calcButton");
let botonBuscar = document.getElementById("botonBuscar");
let inputBuscar = document.getElementById("inputBuscar");
let divCostoFinal = document.getElementById("div__costoFinal");
let containerProd = document.getElementById("div__mostrador")
let prod__filtrado = document.getElementById("prueba")


cfinalButton.addEventListener("click", buttonPFinal);
botonBuscar.addEventListener("click", filtrado);
formProds.addEventListener("submit", FormuData);
const prodsDelete = [];
let costosBorrados = 0;
let productosAgregados = [];
let costos = [];
let precioFinal = 0;
arrayNew = [];


class Productos {
  constructor(name, cant, cost) {
    this.name = name;
    this.cant = cant;
    this.cost = cost;
  }
}

function buttonPFinal() {
  let agregarCosto = divCostoFinal;
  //restamos elementos eliminados para que el valor final sea el correcto
  costosBorrados = 0;
  for (let i = 0; i < prodsDelete.length; i++) {
    costosBorrados += prodsDelete[i];
  }
  //modificamos el dom con el valor correcto
  agregarCosto.innerHTML = `<p>Costo total: $${
    precioFinal - costosBorrados
  }</p>`;
  priceFinalSection.appendChild(agregarCosto);
}

function FormuData(el) {
  el.preventDefault();
  let form = el.target;

  const products = form.children[1].value;
  const quantity = form.cant.value;
  const cost = form.cost.value;
  let totalPrice = cost * quantity;
  let prodNew = new Productos(products, quantity, cost);

  let filtrado = prodNew.name;
  productosAgregados.push(filtrado);
  
  /* Crear cards con productos */
 
  let section__prod = document.createElement("div");
  section__prod.className = "card addCard";

  section__prod.innerHTML = ` <img src="./img/carrito2.png"><ul><li>Producto: ${products} </li><li>Cantidad:${quantity}</li><li>Precio Total:$${totalPrice}</li></ul>`;


 /* Crear una card que muestre el producto agregado reciente */

 

 containerProd.innerHTML = `<h4>Resúmen</h4> <div class="cardIzq__text"> <img src="./img/carrito2.png"><ul><li>Producto: ${products} </li><li>Cantidad:${quantity}</li><li>Precio Total:$${totalPrice}</li></ul><img class="addLogo" src="./img/ProdAdd.png"><div>`
 containerProd.className = "cardIzq"

 



  /*funcion para eliminar cada elemento de mi tabla*/

  let eliminar = document.createElement("button");
  eliminar.className = "btn btn-secondary";
  eliminar.innerText = "Eliminar";
  section__prod.appendChild(eliminar);
  eliminar.className="btn-danger"

  eliminar.addEventListener("click", (event) => {
    Swal.fire({
      icon:'warning',
      title: 'Estas seguro?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        
        let ver = event.target.parentNode.remove();
        Toastify({
          text: "Producto Eliminado",
          style: {
            background: "green",
          },
          offset: {
            x: 10,
            y: 530, 
          },
        }).showToast();
        console.log(ver);
        prodsDelete.push(totalPrice);
        console.log(prodsDelete);
        arrayNew = [];
        productosAgregados = []
      } else if (result.isDenied) {
        Swal.fire('Operación cancelada', '', 'error')
      }
    })
  });

  /*calcular precio total*/
  console.log(costos.push(totalPrice));
  console.log(elemento.appendChild(section__prod));

  //  usar esta funcion para sumar costo total
  precioFinal = 0;
  for (let i = 0; i < costos.length; i++) {
    precioFinal += costos[i];
  }
}

function filtrado() {
  
  let inputDeFiltrado = inputBuscar.value;
  let buscar = productosAgregados.find((i) => i === inputDeFiltrado);
  
  if(buscar == "" || buscar == undefined){
   prod__filtrado.innerHTML = `<h5>Tu producto NO fue encontrado <h5> <ul>Producto = ${buscar}</ul>`
  }else{
  prod__filtrado.innerHTML = `<h5>Tu producto Fue encontrado <h5> <ul>Producto = ${buscar}</ul>`
}
}



function deleteAll() {
  let DeleteAllBtn = document.createElement("button");
  DeleteAllBtn.className = "btn btn-secondary"
  DeleteAllBtn.innerText = "Borrar Todo";
  priceFinalSection.appendChild(DeleteAllBtn);
  DeleteAllBtn.addEventListener("click", borrarTodo);


  function borrarTodo() { 
   
   
    
      let divs = elemento.getElementsByClassName("card");
      let arra = (arrayNew.length = 0);
      console.log(arra);
      while (divs.length > 0) {
        elemento.removeChild(divs[0]);
        precioFinal = 0;
        costos = [];
        productosAgregados = [];

        containerProd.innerHTML = ""
      }
 
    divCostoFinal.innerHTML = `<p>Costo total: $${precioFinal}</p>`;
  }
}

function main() {
  deleteAll();
  buttonPFinal();
  filtrado();
}

main();

/*   agregar cantidad de productos seleccionados
let e = document.createElement("div")
e.innerHTML = `<h4>${costos.length}</h4>`
priceFinalSection.append(e)
console.log(e)*/
