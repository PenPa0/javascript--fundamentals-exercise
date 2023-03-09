// window.alert("sanity check")
const yearTime = new Date()

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let monthNow = month[yearTime.getMonth()]

let date = yearTime.getDate()

let time = yearTime.toLocaleString([],{hour: "2-digit",minute: "2-digit", second: "numeric"})

let day;
switch (yearTime.getDay()) {
    case 0:
        day = "Sunday";
        break
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
    

let show = `<span>${monthNow} ${date}</span><br>${time}`   
document.getElementById("timeDisplay").innerHTML = show
document.getElementById("days").innerHTML = day

// document.getElementById("monthInText").innerHTML = monthNow
// document.getElementById("date").innerHTML = date
// document.getElementById("time").innerHTML = time
/* 
[✔]month 
[✔]date of month
[✔]time of day
[✔]hour of day
[✔]day */
// console.log(day)
// console.log(monthNow)
// console.log(date)
// console.log(`This is time ${time}`)