// alert("Sanity test")

const today = new Date()
const christmas = new Date(today.getFullYear(), 11, 25)

if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() +1)
}

const one_day = 1000* 60 * 60 * 24 //Multiplying these values together gives us the total number of milliseconds in one day
const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / (one_day))

// console.log(daysLeft)

document.getElementById("text").innerHTML = "Christmas"
document.getElementById("countdown").innerHTML = `In ${daysLeft} days`