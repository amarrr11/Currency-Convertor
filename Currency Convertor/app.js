const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


//saare country aajaye
for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    //starting me USD rhe and to mai INT rhe
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target); //jb v currency change ho to update flag call lgaye
  });
}


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
  
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
  
    const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  
    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        
        if (!rate) {
          msg.innerText = "Exchange rate not available!";
          return;
        }
  
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate!";
        console.error("API Fetch Error:", error);
    }
  };
  

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode]; //IN
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault(); //form jb submit hota h t page refresh hota hai, hm chahte na ho
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});