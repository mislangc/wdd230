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
    document.getElementById("hamburger").classList.toggle("open");
}

const x = document.getElementById("hamburger")
x.onclick = toggleMenu;

//Monday and Tuesday banner

const d = new Date();
const day = d.getDay();

if (day == 1 || day == 2) {
    const banner = document.querySelector("#banner");
    banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    banner.style.display = "block";
}