// todo: Get Start Code JavaScript App-Js
// ? Selected input's Element HTML DOM :-
let $ = document;
const textName = $.querySelector(".input-name");
const textFamily = $.querySelector(".input-family");
const textPhone = $.querySelector(".input-phone");
const textNumber = $.querySelector("input-number");
const textEmail = $.querySelector(".input-email");
const textPrice = $.querySelector(".input-price");
const textDateWent = $.querySelector(".input-Date-Went");
const textDateReturn = $.querySelector(".input-Date-Return");
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