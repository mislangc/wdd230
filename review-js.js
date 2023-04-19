const food = "spaghetti";
// testing comment
/* testing comment 2 
testing testing
*/

/* testing /* comment *\/ number three */
const d = new Date();
//"Current Date: " + dayName + ", " + monthName + " " + d.getDate() +", " + year;
//Answer 4:
const currentdate = `Current Date ${dayName}, ${monthName} ${d.getDate()}, ${year}`;
//Answer 5:
const quantity = document.querySelector("#q").value;
//Answer 6:
document.querySelector("p").innerHTML = "Welcome to <em>our</em> neighborhood!";
//Answer 7:
function getTemperature(a, b) {
    return a * b;
}
const temp = getTemperature();
document.querySelector("#temp").value = temp;
//Answer 8:
//wrong
document.querySelectorAll("div").value = divs;
//right answer
const divs = document.querySelectorAll("div");
//Answer 9:
let citynames = ["New Yor","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
function getC (list, query) {
    return list.filter((word) => word.includes(query));
}
const filterletterC = getC(citynames, "C");

let filterC = citynames.filter(city => city.charAt(0) === "C");