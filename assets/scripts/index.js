
// 1. Selecionar Elementos //

const newProduct = document.getElementById("newProduct");
const newProductBtn = document.getElementById("addListBtn");
const list = document.getElementById("ul");


// 2. Criando a lista de itens //

function createListItem(){
    return `<li class="list-group-item d-flex justify-content-between"> ${newProduct.value} <button class="btn btn btn-danger">-</button></li>`
}


// 3. Deixando os botões funcionais //

   //adicionar//

    newProductBtn.addEventListener("click", () => {
        const li = createListItem();
        list.innerHTML += li;
    })


    //excluir//

    document.addEventListener("click", (event) => {
        
        if (event.target.innerText === "-") {
          const li = event.target.parentElement;
          list.removeChild(li);
        }
      });
      