const url = 'scripts/data.json';  

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data.company);
    displayCompanies(data.company);
}
function displayCompanies(companies) {
    const cards = document.querySelector("div#company-cards");

    companies.forEach((company) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phoneNum = document.createElement("p");
        let link = document.createElement("a");
        let compName = document.createElement("p");

        address.textContent = `${company.address}`;
        phoneNum.textContent = `${company.phonenumber}`;
        link.textContent = `${company.weburl}`;
        compName.innerHTML = `<strong>${company.name}</strong>`;

        logo.setAttribute("src", company.imageurl);
        logo.setAttribute("alt", `Company logo of ${company.name}`);

        link.setAttribute("href", `${company.weburl}`);
        link.setAttribute("target", "blank");

        card.appendChild(logo);
        card.appendChild(compName);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(link);

        cards.appendChild(card);
    })
}
getCompaniesData();

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("#company-cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
})

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
})