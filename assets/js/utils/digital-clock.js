const updateTime = () => {
    //Initialize time
    let dataDate = getTime();
    plantillaCard(dataDate);
    //Update every second
    setInterval(() => {
        dataDate = getTime();
        plantillaCard(dataDate);
    }, 1000);

}

const getTime = () => {
    const date = new Date();
    const objectDate = {
        date: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hour: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        minute: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        second: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
        amPm: date.getHours() < 12 ? 'AM' : 'PM',
        greeting: function() {
            const fullTime = date.getHours() * 60 + date.getMinutes();
            if (fullTime >= 1 && fullTime <= 420) { //00:01 to 07:00 
                return "It's time to sleep, good night";
            } else if (fullTime >= 421 && fullTime <= 720) { //07:01 to 12:00
                return "Good morning, It's time to wake up and start your day";
            } else if (fullTime >= 721 && fullTime <= 840) { //12:01 to 14:00
                return "Don´t forget to eat, it's time for lunch";
            } else if (fullTime >= 841 && fullTime <= 960) { //14:01 to 16:00
                return "It's time to work, focus on your tasks";
            } else if (fullTime >= 961 && fullTime <= 1080) { //16:01 to 18:00
                return "It's time to a little rest";
            } else if (fullTime >= 1081 && fullTime <= 1200) { //18:01 to 20:00
                return "It's extra time, you think rest";
            } else {
                return "Good night, it's time to sleep";
            }
        }
    }
    return objectDate;
}

const plantillaCard = (objectDate) => {
    const card = document.getElementById("clockCard");
    card.innerHTML = `
        <p class="clock-label">It's...</p>
        <h1 class="clock-time">${objectDate.hour}:${objectDate.minute}:${objectDate.second}</h2>
        <h2 class="clock-message">${objectDate.date}/${objectDate.month}/${objectDate.year} ${objectDate.amPm}</h3>
        <p>${objectDate.greeting()}</p>
    `
}

updateTime();