const randomBackground = () => {
    const body = document.getElementById("body");
    const images = ["main-bg-1.jpg", "main-bg-2.jpg", "main-bg-3.jpg", "main-bg-4.jpg", "main-bg-5.jpg"];

    //initial background
    let i = Math.floor(Math.random() * images.length);
    body.style.background = `url("../../assets/images/${images[i]}") no-repeat center / cover fixed`;
    
    //change background every 15 seconds
    setInterval(() => {
        i = Math.floor(Math.random() * images.length);
        body.style.background = `url("../../assets/images/${images[i]}") no-repeat center / cover fixed`;
    }, 15000);
}

export { randomBackground };