const hours = new Date().getHours() // get the current hour
const welcome = document.querySelector('#welcome')

function greetByTime(hours){
    const isMorning = hours >= 4 && hours < 12 // Good morning!
    const isAfternoon = hours >= 12 && hours < 17 // Good afternoon!
    const isEvening = hours >= 17 || hours < 4 // Good evening!

    if (isMorning == true) {
        welcome.textContent = "Good morning!"
    }
    
    if (isAfternoon == true) {
        welcome.textContent = "Good afternoon!"
    }

    if (isEvening == true) {
        welcome.textContent = "Good evening!"
    }
}

//Run function
greetByTime(hours)