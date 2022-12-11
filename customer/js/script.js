let products = JSON.parse(localStorage.getItem("listNames"));
 

for (let i= 0;i< products.length;i++){
    loadProducts();

    //create class container
    let div = document.createElement("div");
    div.classList.add("container");
    
    //create class maim-card and append in container
    let contain = document.createElement("div");
    contain.classList.add("main-card");
    div.appendChild(contain);
    
    //create class card and append in main-card
    let card = document.createElement("div");
    card.classList.add("card");
    contain.appendChild(card);
    
    
    //create class img and append in card
    let image1 = document.createElement("div");
    image1.classList.add("img");
    card.appendChild(image1);

    
    //create class and link image,and append in img
    let image = document.createElement("img");
    image.dataset.index = i;
    image.addEventListener("click",onDetail)
    
    image.className = "image";
    image.setAttribute("src",products[i].img);
    image1.appendChild(image)
    
    //create class h2
    let name = document.createElement("h1");
    name.innerText =products[i].Name;
    card.appendChild(name)
    
    // create class h3
    let price = document.createElement("h2");
    price.innerText ="$" + products[i].Price;
    card.appendChild(price)


    let description = document.createElement("h2");
    description.textContent =listNames[i].Descrition + " Kg" ;
    card.appendChild(description);
    
    
    //create class
    let btn = document.createElement("div");
    btn.classList.add("btn");
    card.appendChild(btn)



    let but = document.createElement("button");
    but.textContent = "Add to card",
    btn.appendChild(but)
    card.appendChild(btn)

    document.querySelector(".container").appendChild(card);
        
}
function loadProducts() {
    let listNamesStorage = JSON.parse(localStorage.getItem("listNames"));
    if (listNamesStorage !== null) {
        listNames = listNamesStorage;
    }
  };

function show(element){
    element.style.display = "block";
}
function hide(element){
    element.style.display = "none";
}


let dom_detail_container = document.getElementById("dialog_container");
let dom_detail = document.getElementById("product_dialog");


function  onDetail(event){
    // console.log(dom_detail_container);
    let onDetail_index = event.target.dataset.index;
    dom_detail_container.style.display = "block";
    // console.log(onDetail_index)

    

    let product_dialog = document.createElement("div");
    product_dialog.id = "product_dialog";
    dom_detail_container.appendChild(product_dialog);

    // console.log(product_dialog)

    let dom_dialog = document.querySelector("dialog");
    dom_dialog.remove();
    console.log(dom_dialog);
    let dialog = document.createElement("dialog");
    dialog.open = "open"
    product_dialog.appendChild(dialog);
    console.log(dialog);


    let header = document.createElement("header");
    header.textContent = "Product Detail"
    dialog.appendChild(header);

    let section = document.createElement("section");
    section.id = "section_detail";
    dialog.appendChild(section);
    
    let div = document.createElement("div");
    div.className = "detail_pImg";
    section.appendChild(div);
    
    let img = document.createElement("img");
    img.src = products[onDetail_index].img;

    img.className = "img";
    div.appendChild(img);
    
    let div1 = document.createElement("div");
    div1.className = "detail_name";
    section.appendChild(div1);
    
    let h = document.createElement("h2");
    h.textContent = "Name: " + products[onDetail_index].Name;
    h.className = "name";
    div1.appendChild(h);


    let h1 = document.createElement("h2");
    h1.className = "price";
    h1.textContent = "$"  + products[onDetail_index].Price;
    div1.appendChild(h1);


    let h2 = document.createElement("h2");
    h2.textContent = products[onDetail_index].Descrition + " Kg";
    h2.className = "discription";

    div1.appendChild(h2);
    
    let menu = document.createElement("menu");
    let button1  = document.createElement("button");
    button1.id = "onCancleDetail";
    button1.textContent = "Cancel";
    button1.addEventListener("click",onCancleDetail)
    menu.appendChild(button1);

    let button2 = document.createElement("button");
    button2.id = "onAddToCard";
    button2.textContent = "Add to Card";
    menu.appendChild(button2);
    dialog.appendChild(menu);
    console.log(document)
}
function onCancleDetail(){
    dom_detail_container.style.display = "none";
    console.log("HEllo")
}

const input_field = document.getElementById("myInput");

input_field.addEventListener('keyup',(event)=>{
    let card = document.querySelectorAll('.card');
    card.forEach(element => {
            if (input_field.value != ""){
                if (element.childNodes[1].textContent == input_field.value){
                    element.style.display = "block";
                }else {
                    element.style.display = "none";
                }
            }else {
                window.location.reload();
                element.style.display = "block";
            }
        });

})
