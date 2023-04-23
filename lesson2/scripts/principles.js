const d = new Date();
const year = d.getFullYear();
const date = d.getDate();
const month = d.getMonth();
const hour = d.getHours()
const mins = d.getMinutes();
const sec = d.getSeconds();

document.querySelector("#copyright").textContent += ` ${year}`;
document.querySelector("#updated").textContent += ` ${month}/${date}/${year} ${hour}:${mins}:${sec}`;