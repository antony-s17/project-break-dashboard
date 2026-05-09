# Project Break 1 - Dashboard
📌 Description
Web dashboard developed to apply core concepts of JavaScript, DOM manipulation, API consumption, asynchronous programming, and localStorage.

The project is composed of 4 independent modules that are later integrated into a main dashboard:

  🕒 Digital clock with date
  🌤️ Weather station
  🔐 Secure password generator
  🔗 Favorite links manager with persistence
  🌄 Dynamic random background across all pages

Each module works independently and is structured with its own HTML, CSS, and JavaScript files.

🚀 Demo
GithubPages: https://antony-s17.github.io/project-break-dashboard/index.html

🛠️ Technologies
HTML5
CSS3
JavaScript
Fetch API
LocalStorage

📂 Project structure

PROJECT-BREAK-DASHBOARD/
├── assets/
│   ├── css/
│   │   ├── pages/
│   │   │   ├── clockPage.css
│   │   │   ├── dashboardPage.css
│   │   │   ├── linksPage.css
│   │   │   ├── passwordPage.css
│   │   │   └── weatherPage.css
│   │   ├── reset.css
│   │   └── styles.css
│   │
│   ├── images/
│   │   ├── main-bg-1.jpg
│   │   ├── main-bg-2.jpg
│   │   ├── main-bg-3.jpg
│   │   ├── main-bg-4.jpg
│   │   ├── main-bg-5.jpg
│   │   ├── main-bg-6.jpg
│   │   ├── main-bg-7.jpg
│   │   ├── main-bg-8.jpg
│   │   ├── main-bg-9.jpg
│   │   └── main-bg-10.jpg
│   │
│   └── js/
│       ├── utils/
│       │   ├── background.js
│       │   ├── digital-clock.js
│       │   ├── favorites-links.js
│       │   ├── generate-password.js
│       │   ├── header.js
│       │   └── weather-station.js
│       │
│       └── main.js
│
├── digital-clock.html
├── favorites-links.html
├── generate-password.html
├── weather-station.html
└── index.html


⚙️ Installation
1. Clone the repository:
git clone https://github.com/antony-s17/project-break-dashboard.git

2. Open the project folder in Visual Studio Code.
3. Run the project using Live Server and open: index.html

▶️ Usage
The dashboard runs directly in the browser.

From the main index.html, you can access each module:

  🕒 Digital Clock: displays current time, date, and location.
  🌤️ Weather Station: shows current weather and hourly forecast using WeatherAPI.
  🔐 Password Generator: creates secure random passwords.
  🔗 Links Manager: stores favorite links using localStorage.

The background image changes automatically every 15 seconds.

🌤️ API used
Weather data is provided by: WeatherAPI (https://www.weatherapi.com/)

🧠 Key features
- Real-time clock using setInterval
- API consumption with fetch + async/await
- Persistent storage using localStorage
- DOM manipulation
- Global dynamic background system

📌 Buenas prácticas aplicadas
- Clear separation of modules (HTML / CSS / JS)
- Modular and reusable code structure
- Single responsibility functions
- Avoid code duplication
- Scalable project architecture

📤 Convencional Commits
This project follows Conventional Commits:

- feat: new features
- fix: bug fixes
- style: UI and style changes
- refactor: code improvements 
- without behavior changes
- chore: maintenance tasks

👨‍💻 Author
GitHub: https://github.com/antony-s17

