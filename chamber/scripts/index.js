const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.querySelector("#date-today").textContent = `${new Date().toLocaleDateString("en-UK",options)}`;

document.querySelector("#lower-footer").textContent += `Last Modification ${document.lastModified}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburger")
x.onclick = toggleMenu;