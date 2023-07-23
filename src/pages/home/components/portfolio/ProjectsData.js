
export const ProjectsData = [
    {
        id: 1,
        title: "Social Networking site for close friends",
        shortDescription: "Social Circle connects friends who are physically separated and allows them to enjoy good times together",
        description: "This is, by far, the most intricate and time-intensive web app I have developed to date. Social Circle represents a full-stack application, meticulously crafted using Django and React, combining all the knowledge and skills I have acquired throughout my journey. On the backend, the Django Rest Framework forms the foundation for a REST API that supplies data to the React frontend. Additionally, the frontend was styled using Tailwind CSS, while Redux Toolkit efficiently handles state management, ensuring a smooth user experience. The inspiration behind this creation arose from the cherished moments spent with my friends, particularly during the challenging times of the COVID pandemic, where connecting remotely became our norm. Despite the distance, we gathered virtually at night, engaging in banter and games, almost as if we were all in the same room. Two of our treasured games, custom quizzes created by some of us and Cards Against Humanity, are proudly featured on the site. To enhance the user experience, this web app boasts a comprehensive authentication system encompassing registration, email activation, login, and password reset functionalities. Upon login, users are redirected to a personalized dashboard where they can indulge in quizzes (with Cards Against Humanity currently in development). They are also able to see and edit their profile information. In the quizzes section, users can create their own quizzes, which become accessible and playable for all users. Following a quiz, players are redirected to a results page, where they can view their scores and even review correct answers. The site is currently live, and as time progresses, I intend to enrich it further with additional features, catering to friends within our social circle who may not be geographically close, so we can maintain our cherished connections, just as we did before.",
        projectUrl: "/daniel-website/projects_thumbnail/social-circle-img.png",
        gitHubUrl: "https://github.com/Leynad21/TodoApp-backend",
        isFeatured: true,
        website: "https://my-social-circle.netlify.app"
    },
    {
        id: 2,
        title: "Music controller app integrated with Spotify",
        shortDescription: "A web app that enables users to create a room and connect their Spotify account, and grant music control permissions to other users within the room",
        description: "In this web app, a user connects to the site and can create a room, granting specific permissions such as setting the number of votes required to skip to the next song. The inspiration behind this app came from my experiences with friends, where we often had dinners together with music, and there was a constant struggle among people wanting to play their own music or listen to different songs. This idea had always been on my mind as something I wanted to implement on my coding journey, as it would be highly beneficial for my social group. To develop this app, I utilized Django on the backend and React on the frontend. It's worth noting that I found a tutorial online with a similar app concept, which led me to leverage a substantial portion of their code and design. This allowed me to focus more on the technical challenges and functionalities of the app itself. While I reused many of their ideas for the design and backend, the frontend was entirely rebuilt using the most updated features of React in 2023. Through this process, I further honed my skills in Django and Django Rest Framework.",
        projectUrl: "/daniel-website/projects_thumbnail/music-controller-img.png",
        gitHubUrl: "https://github.com/Leynad21/music-controller",
        isFeatured: true,
        website: ""
    },
    {
        id: 3,
        title: "Netflix clone",
        shortDescription: "A Netflix frontend clone adeptly fetching the latest and most compelling movies and shows",
        description: "After already investing a lot of effort in HTML and CSS, I decided to take a step further and build something more akin to real-life applications - an established design that is widely recognized. Netflix, being a platform familiar to almost everyone, with many regularly watching shows on it, inspired me to create a Netflix clone as faithful to the original as possible. I added functionality to the clone, enabling it to fetch and display the most recent movies and shows. To achieve this, I utilized the Movies DB API for fetching the data.",
        projectUrl: "/daniel-website/projects_thumbnail/netflix-clone-img.png",
        gitHubUrl: "https://github.com/Leynad21/Netflix-clone",
        isFeatured: true,
        website: "https://netflix-clone-leynad.netlify.app"
    },
    {
        id: 4,
        title: "Todo app using Django and React",
        shortDescription: "A full stack todo app built using Django on the backend to create a RESTful API, implemented with React on the frontend",
        description: "A notes app is a simple application, however I consider it one of the best apps for learning core web development concepts like CRUD operations. CRUD operations are ubiquitous in web development, making it essential for me to create a fully functional notes app that incorporates these operations to master the concepts effectively. Simultaneously, I utilized React Context for state management to practice this feature, as props drilling can be inefficient in larger apps and often they require a context manager as complexity scales.",
        projectUrl: "/daniel-website/projects_thumbnail/todo-img.png",
        gitHubUrl: "https://github.com/Leynad21/TodoApp-frontend",
        isFeatured: false,
        website: "https://todo-app-leynad.netlify.app"
    },
    {
        id: 5,
        title: "FlashCard app GUI with tkinter",
        shortDescription: "A flash card app GUI using Tkinter, designed to help users accelerate their language learning or study any other dual topic. The app presents a series of cards with information on one side, and the corresponding translation or answer on the other side.",
        description: "Creating a flashcards app using Tkinter was a great learning experience for me, especially since it was one of the first GUIs that I ever created. The app presents a series of cards with information on one side, and the corresponding translation or answer on the other side. Although the project was guided, I was able to gain a complete understanding of how GUIs work and solidify my knowledge of Python and the Tkinter library. This project allowed me to learn about the different aspects of developing a user-friendly interface, including the importance of customizability and ease-of-use.",
        projectUrl: "/daniel-website/projects_thumbnail/flashCard.png",
        gitHubUrl: "https://github.com/Leynad21/flash-card-GUI-tkinter",
        isFeatured: false
    },
    {
        id: 6,
        title: "Stock price and news SMS alert",
        shortDescription: "This application is designed to send a customized SMS alert to the user whenever there is a significant change in the stock price",
        description: "In this guided project I developed a stock price alert application using the alphavantage, newsapi, and twilio APIs. This application is designed to send a customized SMS alert to the user whenever the price of a particular stock varies by a certain amount. The application also automatically triggers a request to find the most recent news about the company whose stock is being monitored. This information is included in the SMS alert along with the alert about the price change. Overall, this project provided an excellent opportunity for me to dive deeper into the world of APIs and gain a better understanding of their functionality. By integrating multiple APIs, I was able to create a sophisticated application that provides users with up-to-date information about their stock investments in real-time. The project also allowed me to develop my skills in coding, data analysis, and application development, making it a valuable experience overall.",
        projectUrl: "/daniel-website/projects_thumbnail/stock-twilio.jpg",
        gitHubUrl: "",
        isFeatured: false
    },
    {
        id: 7,
        title: "Automate internet speed test using Selenium",
        shortDescription: "A bot that automates several steps and performs web scraping on the web using Selenium",
        description: "In this project, I created a bot script using Selenium that would navigate to the Speedtest website, run a speed test, retrieve the resulting data, and use that data to post a tweet on Twitter about the internet download and upload speeds. Overall, this project was a valuable learning experience that not only helped me to develop my skills in web scraping and automation but also provided me with the knowledge and tools to tackle similar projects in the future.",
        projectUrl: "/daniel-website/projects_thumbnail/selenium-internet-automatio.png",
        gitHubUrl: "",
        isFeatured: false
    },
    {
        id: 8,
        title: "Note-taking app",
        shortDescription: "A user-friendly note-taking application featuring essential CRUD functionality that allows the user to create notes in a post-it format",
        description: "A notes app is a simple application, however I consider it one of the best apps for learning core web development concepts like CRUD operations. CRUD operations are ubiquitous in web development, making it essential for me to create a fully functional notes app that incorporates these operations to master the concepts effectively. Simultaneously, I utilized React Context for state management to practice this feature, as props drilling can be inefficient in larger apps and often they require a context manager as complexity scales.",
        projectUrl: "/daniel-website/projects_thumbnail/notes-app-img.png",
        gitHubUrl: "https://github.com/Leynad21/to-do-note-react/tree/main",
        isFeatured: false,
        website: "https://my-notes-leynad21.netlify.app"
    },
    {
        id: 9,
        title: "Snake game",
        shortDescription: "A simple yet fun game created using OOP that involved moving a snake around the screen and collecting food items",
        description: "The first Python snake game that I created was a simple yet fun game that involved moving a snake around the screen and collecting food items. As I wrote the code and tested it out, I was amazed at how my knowledge of Python was being put into practice. I was able to see the immediate results of my efforts as the game started to come to life on the screen. \
        One of the things that made the game even more exciting for me was that I was able to put the concepts of object-oriented programming (OOP) into practice. By creating classes for the snake, food, and scoreboard, I was able to organize my code and make it more modular.",
        projectUrl: "/daniel-website/projects_thumbnail/snake-gam.png",
        gitHubUrl: "https://github.com/Leynad21/first-snake-game",
        isFeatured: false
    },
    {
        id: 10,
        title: "Turtle road cross game",
        shortDescription: "A game built using Python and the Turtle graphics library",
        description: "I thoroughly enjoyed creating this game. It was a great opportunity for me to practice OOP and logic coding in Python, and it was especially rewarding to create a game that I loved playing as a child.",
        projectUrl: "/daniel-website/projects_thumbnail/turtle-road-cros.png",
        gitHubUrl: "https://github.com/Leynad21/turtle-road-cross",
        isFeatured: false
    },
];
