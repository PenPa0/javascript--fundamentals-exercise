const picture = document.createElement("img")
picture.setAttribute("src","vehicle.jpg")

const vehicle = document.getElementById("vehicle")
vehicle.appendChild(picture)

document.getElementById("manufacturer").innerHTML = "Manufacturer: Mitsubishi"
document.getElementById("model").innerHTML = "Make and Model: Lancer GSR 94-96"
document.getElementById("engine").innerHTML = "Engine: 1.3 4G13"
document.getElementById("bodyType").innerHTML = "Body Style: Sedan"