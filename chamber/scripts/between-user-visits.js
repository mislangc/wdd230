//Week 7: Use local Storage to get the days between user visits in days

//if (localStorage.getItem("numVisits") >= 1) {
//    document.querySelector("h1").textContent = "Welcome back!";
//    const visits = localStorage.getItem("numVisits");
//    const convertFirst = parseInt(visits);
//    const addOne = convertFirst + 1;
//    localStorage.setItem("numVisits", addOne);
//}
//else {
//    localStorage.setItem("numVisits", 1);
//}

if (localStorage.getItem("lastVisitDate") != 0) {
    const lastVisit = localStorage.getItem("lastVisitDate");
    const dateToday = new Date();
    var dif = Math.abs(dateToday - new Date(lastVisit));
    const between = dif/(1000 * 3600 * 24);
    const days = Math.round(between);
    if (days > 1) {
        document.querySelector("#last-visit").textContent = `Last visit: ${days} days ago`;
    }
    if (days == 1) {
        document.querySelector("#last-visit").textContent = `Last visit: ${days} day ago`;
    }
    
}

const date = new Date();
localStorage.setItem("lastVisitDate", date);

