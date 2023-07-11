const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

console.log(new Date().toLocaleDateString("en-UK",options));

async function getFruitsData() {
    const response = await fetch(url);
    const data =  await response.json();
    outputOrder(data);
}

const orderButton = document.querySelector("#place-order");

orderButton.addEventListener("click", getFruitsData);

function outputOrder(prutas) {
    const name = document.querySelector("#output-name");
    const email = document.querySelector("#output-email");
    const phone = document.querySelector("#output-phone");
    const fruits = document.querySelector("#output-fruits");
    const outputFirstFruit = document.querySelector("#output-first-fruit");
    const outputSecondFruit = document.querySelector("#output-second-fruit");
    const outputThirdFruit = document.querySelector("#output-third-fruit");
    const instructions = document.querySelector("#output-instructions");
    const date = document.querySelector("#output-date");
    const carbohydrates = document.querySelector("#output-carbohydrates");
    const protein = document.querySelector("#output-protein");
    const fat = document.querySelector("#output-fat");
    const sugar = document.querySelector("#output-sugar");
    const calories = document.querySelector("#output-calories");
    const submitButton = document.querySelector("#submit-button");
    
    const inputName = document.querySelector("#fname").value
    const inputEmail = document.querySelector("#email").value
    const inputPhone = document.querySelector("#phonum").value
    const inputInstructions = document.querySelector("#instructions").value

    const inputFirstFruit = document.querySelector("#ffruit").value
    const inputSecondFruit = document.querySelector("#sfruit").value
    const inputThirdFruit = document.querySelector("#tfruit").value

    if (inputName != "") { 
        name.innerHTML = `Name: <strong>${inputName}</strong>`;
    }
    if (inputEmail != "") { 
        email.innerHTML = `Email: <strong>${inputEmail}</strong>`;
    }
    if (inputPhone != "") { 
        phone.innerHTML = `Number: <strong>${inputPhone}</strong>`;
    }
    if (inputInstructions != "") { 
        instructions.innerHTML = `Special Instructions: <strong>${inputInstructions}</strong>`;
    }

    let totalCarbohydrates = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;

    prutas.forEach((fruit) => {
        if (inputFirstFruit != "") { 
            if (fruit.id == inputFirstFruit) {
                outputFirstFruit.innerHTML = `Fruits: <strong>${fruit.name}</strong>`;
                totalCarbohydrates += parseFloat(fruit.nutritions.carbohydrates);
                totalProtein += parseFloat(fruit.nutritions.protein);
                totalFat += parseFloat(fruit.nutritions.fat);
                totalSugar += parseFloat(fruit.nutritions.sugar);
                totalCalories += parseInt(fruit.nutritions.calories);
            };  
        }
        if (inputSecondFruit != "") { 
            if (fruit.id == inputSecondFruit) {
                outputSecondFruit.innerHTML = `, <strong>${fruit.name}</strong>`;
                totalCarbohydrates += parseFloat(fruit.nutritions.carbohydrates);
                totalProtein += parseFloat(fruit.nutritions.protein);
                totalFat += parseFloat(fruit.nutritions.fat);
                totalSugar += parseFloat(fruit.nutritions.sugar);
                totalCalories += parseInt(fruit.nutritions.calories);
            };
        };
        if (inputThirdFruit != "") { 
            if (fruit.id == inputThirdFruit) {
                outputThirdFruit.innerHTML = `, <strong>${fruit.name}</strong>`;
                totalCarbohydrates += parseFloat(fruit.nutritions.carbohydrates);
                totalProtein += parseFloat(fruit.nutritions.protein);
                totalFat += parseFloat(fruit.nutritions.fat);
                totalSugar += parseFloat(fruit.nutritions.sugar);
                totalCalories += parseInt(fruit.nutritions.calories);
            };
        };
    });
    if (inputFirstFruit != "" && inputName != "" && inputEmail != "" && inputPhone != "") {
        carbohydrates.innerHTML = `Total Carbohydrates: <strong>${(totalCarbohydrates).toFixed(1)}</strong>`;
        protein.innerHTML = `Total Protein: <strong>${(totalProtein).toFixed(1)}</strong>`;
        fat.innerHTML = `Total Fat: <strong>${(totalFat).toFixed(1)}</strong>`;
        sugar.innerHTML = `Total Sugar: <strong>${(totalSugar).toFixed(1)}</strong>`;
        calories.innerHTML = `Total Calories: <strong>${totalCalories}</strong>`;
        date.innerHTML = `Order date: <strong>${new Date().toLocaleDateString("en-UK",options)}</strong>`;
        submitButton.style.display = "block";
        document.querySelector("#show-customer-order").style.display = "block";
    }
    else {
        alert("Fill the required fields before placing order.");
    }

}   
document.querySelector("#submit-button").addEventListener("click", submitOrder);

function submitOrder() {
    let totalOrdersStorage = localStorage.getItem("totalOrders");
    console.log(totalOrdersStorage);
    if (totalOrdersStorage === null) {
        let value = 1;
        document.querySelector("#total-orders").textContent = value;
        localStorage.setItem("totalOrders", value);
    }
    else {
        let toInt = parseInt(totalOrdersStorage);
        toInt += 1;
        localStorage.setItem("totalOrders", toInt);
    }
};