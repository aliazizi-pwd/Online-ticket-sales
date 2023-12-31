// todo: Get Start Code JavaScript App-Js
// ? Selected input's Element HTML DOM :-
let $ = document;
const textName = $.querySelector(".input-name");
const textFamily = $.querySelector(".input-family");
const textPhone = $.querySelector(".input-phone");
const textNumber = $.querySelector(".input-number");
const textEmail = $.querySelector(".input-email");
const textPrice = $.querySelector(".input-price");
const textModal = $.querySelector(".modal-text");
const ticketShow = $.querySelector(".Ticket-the-show");
const statusBuy = $.querySelector(".status-Buy");
// todo Selected (select : City and Country) Element HTML DOM :-
const selectCountry = $.getElementById("country");
const selectCity = $.getElementById("city");
// todo Selected Button's Element HTML DOM :-
const btnTicketSales = $.querySelector(".btn-ticket-Sales");
const btnClearAll = $.querySelector(".btn-clearAll");
// todo Check list People


// todo : Write DataBase
const country = {
     Usa : ['New York','Los Angeles','Chicago','Houston','San Antonio','San Diego'],
     Iran : ['Tehran','Isfahan','Fars','Qom','Hamadan','shiraz'],
     Turkey : ['Konya','Mardin','Izmir','Trabzon','Fethiye','Istanbul'],
     Canada : ['Toronto','Montreal','Calgary','Edmonton','Ottawa','Winnipeg'],
     Italy : ['Rome','Milan','Naples','Turin','Bologna','Florence'],
     France : ['Paris','Nice','Lyon','Lille','Marseille','Bordeaux'],
};

const priceCountry = {
     Usa : ['1000'],
     Iran : ['450'],
     Turkey : ['750'],
     Canada : ['150'],
     Italy : ['950'],
     France : ['850'],
};

selectCountry.addEventListener("change" , () => {
     let valueChange = selectCountry.value;
     let dataBaseValues = country[valueChange];

     if (selectCountry.value === "select Country") {
          selectCity.innerHTML = "";
          selectCity.innerHTML = `<option>select City</option>`;
          textPrice.value = "";
     } else {
          selectCity.innerHTML = '';
          dataBaseValues.forEach((city) => {
               selectCity.innerHTML += `<option>${city}</option>`;
          });
     
          let prices = priceCountry[valueChange][0] * textNumber.value;
          textPrice.value = `${prices}$`;    
     }   
});

let valuesObjectData;
let row = 0;
let isDecision = true;
const inputAll = $.querySelectorAll("input");
btnTicketSales.addEventListener("click" , getAddPeople);
function getAddPeople () {
     inputAll.forEach ( (inputs) => {
          if (inputs.value === "") {
               textModal.innerText = "Please type all requested information";
               isDecision = false;
          }
     });

     if (isDecision) {
          // True
          // Change Status...
          statusBuy.innerHTML = "You can reach people who bought tickets";
          statusBuy.classList.remove("text-danger");
          statusBuy.classList.add("text-success");

          row++;
          const post = $.createElement("div");
          post.classList.add("item-people");
          
          const objectDataList = {
               id : row,
               name : textName.value,
               family : textFamily.value,
               city : selectCity.value,
               price : textPrice.value, 
          };

          // Delete values input
          textName.value = "";
          textFamily.value = "";
          textEmail.value = "";
          textNumber.value = "";
          textPrice.value = "";
          textPhone.value = "";
          selectCity.innerHTML = `<option>select City</option>`;

          valuesObjectData = Object.values(objectDataList);

          const postInsetOne = $.createElement("div");
          const postInsetTwo = $.createElement("div");

          const postUL = $.createElement("ul");
          postUL.classList.add("post-inset");

          const btnCheck = $.createElement("button");
          btnCheck.innerHTML = `<i class='fa fa-check'></i>`;
          btnCheck.classList.add("complete");

          const btnTrash = $.createElement("button");
          btnTrash.innerHTML = `<i class='fa fa-trash'></i>`;
          btnTrash.classList.add("trash");

          valuesObjectData.forEach( (data) => {
               postUL.innerHTML += `<li>${data}</li>`;
          });  

          postInsetOne.appendChild(postUL);
          postInsetTwo.appendChild(btnCheck);
          postInsetTwo.appendChild(btnTrash);
          post.appendChild(postInsetOne);
          post.appendChild(postInsetTwo);
          ticketShow.appendChild(post);
     }

     setTimeout ( () => {
          textModal.innerText = "";
     } , 3000);

     getLocalStorage(valuesObjectData);
}


// addEvent Click form show People and Changed list
let iscomplete = false;
let isTrash = false;
ticketShow.addEventListener("click" , getChangeListPeople);
function getChangeListPeople (e) {
     let targetUser = e.target;
     let parentItem = targetUser.parentElement.parentElement;
     if (targetUser.classList.contains("complete") === true) {
          parentItem.classList.toggle("tiked");
          iscomplete = true;
     } else if (targetUser.classList.contains("trash") === true) {
          parentItem.remove();
          isTrash = true;
          row--;
          if (row === 0) {
               statusBuy.innerHTML = "No one has bought tickets yet";
               statusBuy.classList.remove("text-success");
               statusBuy.classList.add("text-danger");
          }
     }
}

// localStorage save data...
function getLocalStorage (list) {
     let data;
     if (localStorage.getItem(data) === null) {
          data = [];
     } else {
          data.push(list);
     }
     localStorage.setItem(JSON.stringify(list) , data);
}


// ClearAll
btnClearAll.addEventListener("click" , () => {
          textName.value = "";
          textFamily.value = "";
          textEmail.value = "";
          textNumber.value = "";
          textPrice.value = "";
          textPhone.value = "";
          selectCity.innerHTML = `<option>select City</option>`;
});