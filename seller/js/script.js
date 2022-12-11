let table = document.querySelector("table");
let form = document.querySelector("#form");
let listNames = [
    {
        img:"https://i.pinimg.com/736x/9d/c2/41/9dc2417e68967c6e949d7665b822f020--watercolor-fruit-perfect-food.jpg",
        Name:"Apple",
        Descrition:"1",
        Price:"10",
       
    } ,
    {
        img:"https://static.libertyprim.com/files/familles/grenade-large.jpg?1569271783",
        Name:"Pomegranate",
        Descrition:"1",
        Price:"5",
      
       
    } ,
    {
        img:"https://thegreengrocermanila.com/wp-content/uploads/2015/12/orange-sunkist-seedless-1.jpg",
        Name:"Orange",
        Descrition:"1",
        Price:"2",
       
       
    } ,
    {
        img:"https://static9.depositphotos.com/1642482/1148/i/450/depositphotos_11489971-stock-photo-avocado-cut-in-half.jpg",
        Name:"Avocado",
        Descrition:"1",
        Price:"6",
      
       
    } ,
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzeESt8QepbdfyaG5Q28ImjBh_2ZUZALc68Q&usqp=CAU",
        Name:"Strawberry",
        Descrition:"1",
        Price:"8",
       
       
    } ,
]

function displayProduct(){

  loadProducts();
  let listNames = JSON.parse(localStorage.getItem("listNames"));
  
  let dom_tbody= document.querySelector("#tbody");
      dom_tbody.remove();

  let tbody = document.createElement("tbody");
      tbody.id = "tbody";
      table.appendChild(tbody);

      
  for(let i = 0; i < listNames.length;i++){
    let valueOfproduct = listNames[i];
    // console.log(valueOfproduct)

    
    let tr = document.createElement("tr");
    tr.dataset.i = i;
    tbody.appendChild(tr)
    

    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.className = "productimg";
    img.src = valueOfproduct.img;
    td1.appendChild(img);
    tr.appendChild(td1)


    let td2 = document.createElement("td");
    td2.textContent =listNames[i].Name
    tr.appendChild(td2)


    let td3 = document.createElement("td");
    td3.textContent =listNames[i].Descrition + " Kg" ;
    tr.appendChild(td3);


    let td4 = document.createElement("td");
    td4.textContent = "$"+ listNames[i].Price
    tr.appendChild(td4);


    let edit = document.createElement("img");
    edit.src = "../../image/edit-new-icon-22.png";
    edit.className = "img";
    tr.appendChild(edit);


    let deleteAct = document.createElement("img");
    deleteAct.src = "../../image/trash.png";
    deleteAct.className = "img";
    tr.appendChild(deleteAct);


    edit.addEventListener("click", editProduct);
    deleteAct.addEventListener("click",deleteProduct);
    
  }

};
function deleteProduct(event){
  let delete_index = event.target.parentElement.dataset.i;
  listNames.splice(delete_index,1)
 
  saveProducts();
  displayProduct();
}
function editProduct(event){
  let edit_index = event.target.parentElement.dataset.i;
  let editbutton = document.getElementById("create");
  editbutton.textContent = "Edit";
  form.style.display = "block";


  document.getElementById("name").value = listNames[edit_index].Name;
  document.getElementById("description").value = listNames[edit_index].Descrition;
  document.getElementById("price").value =listNames[edit_index].Price;
  document.getElementById("image").value = listNames[edit_index].img;

  listNames.splice(edit_index,1);

}

function onAddproduct(){
  form.style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";

  
}
function onCreate(){
  let newProuct = {};
  let inputName = document.getElementById("name").value;
  let inputDescription = document.getElementById("description").value;
  let inputPrice = document.getElementById("price").value;
  let inputImage = document.getElementById("image").value;
  newProuct.img = inputImage;
  newProuct.Name = inputName;
  newProuct.Descrition = inputDescription;
  newProuct.Price = inputPrice;
 
  
  if (inputName== ""|| inputDescription ==""||inputPrice==""||inputImage==""){
    alert("You do not completed yet!")
  }else{
    listNames.push(newProuct);
    saveProducts();
  }

}


//................local storade...................//
function saveProducts() {
  localStorage.setItem("listNames", JSON.stringify(listNames));
};

function loadProducts() {
  let listNamesStorage = JSON.parse(localStorage.getItem("listNames"));
  if (listNamesStorage !== null) {
    listNames = listNamesStorage;
  }
};

// saveProducts();
displayProduct();
loadProducts();




