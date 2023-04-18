const d = new Date();
const year = d.getFullYear();

const copyright_message = ` ${year} .:|:. Carl Benedcit P. Mislang .:|:. Philippines`;
document.querySelector("#copyright").textContent += copyright_message;

const date = d.getDate();
const month = d.getMonth();
const hour = d.getHours();
const minutes = d.getMinutes();
const seconds = d.getSeconds();

const updated_message = ` ${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;
document.querySelector("#updated").textContent += updated_message;
