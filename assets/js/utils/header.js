const header = () => {
    const header = document.getElementById("header");
    header.innerHTML = `
        <header class="main-header glass-bar">
        <a href="index.html" class="header-title">
            <i class="fa-solid fa-layer-group"></i>Dashboard
        </a>
        <nav class="header-nav">
            <a href="digital-clock.html"><i class="fa-regular fa-clock"></i> Clock </a>
            <a href="weather-station.html"><i class="fa-solid fa-cloud-sun"></i> Weather </a>
            <a href="favorites-links.html"><i class="fa-solid fa-link"></i> Links </a>
            <a href="generate-password.html"><i class="fa-solid fa-lock"></i> Password </a>
        </nav>
        </header>
    `;
}

export default header;