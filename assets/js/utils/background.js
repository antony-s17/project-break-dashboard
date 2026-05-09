const randomBackground = () => {
    const body = document.getElementById("body");
    const images = ["main-bg-1.jpg", "main-bg-2.jpg", "main-bg-3.jpg", "main-bg-4.jpg", "main-bg-5.jpg",
                    "main-bg-6.jpg", "main-bg-7.jpg", "main-bg-8.jpg", "main-bg-9.jpg", "main-bg-10.jpg"];

    //pre-load images
    images.forEach(img => {
        const preload = new Image();
        preload.src = `./assets/images/${img}`;
    });
    //initial background
    let i = Math.floor(Math.random() * images.length);
    body.style.background = `url("./assets/images/${images[i]}") no-repeat center / cover fixed`;
    
    //change background every 15 seconds
    setInterval(() => {
        i = Math.floor(Math.random() * images.length);
        body.style.background = `url("./assets/images/${images[i]}") no-repeat center / cover fixed`;
    }, 15000);
}

export { randomBackground };