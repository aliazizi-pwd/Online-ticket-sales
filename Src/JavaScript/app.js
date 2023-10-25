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
          
     selectCity.innerHTML = '';
     dataBaseValues.forEach((city) => {
          selectCity.innerHTML += `<option>${city}</option>`;
     });

     textPrice.value = `${priceCountry[valueChange]}$`;
     
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
               country : selectCountry.value,
               city : selectCity.value,
               price : textPrice.value, 
          };
          
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
}
