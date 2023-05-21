export const pages = [
  {
    id: 1,
    label: "About Me",
    link: "/",
  },
  {
    id: 2,
    label: "My Resume",
    link: "/resume",
  },
  {
    id: 3,
    label: "My Projects",
    link: "/my-projects",
  },
  {
    id: 4,
    label: "Contact Me",
    link: "/contact-me",
  },
];

export const aboutMeData = {
  name: "Fatih Yuksel",
  title: "Hello! I'm Fatih Yuksel",
  body: "A passionate Front-End Developer who loves to solve problems using code. A few years ago, I embarked on a journey into the fascinating world of software development. Since then, I have been on a constant quest to expand my knowledge and enhance my skills. Although my background is in engineering, I am always on the lookout for opportunities to explore new technologies and learn new things. With an  experience in frontend development, I have a deep understanding of the React ecosystem and its core principles. I am adept at translating design concepts into scalable and efficient code, resulting in seamless user experiences.",
  highlightedBody:
    "As someone who is relatively new to the field, I am always seeking new challenges and projects to work on. I have a keen interest in web development, machine learning, and game development. In fact, I have successfully completed several personal projects in these areas. I believe that taking on new challenges and collaborating with others not only helps me grow as a software engineer but also allows me to make a meaningful impact. I am always excited about the prospect of learning from and working with like-minded individuals.",
  body2:
    "When I'm not busy coding, I cherish spending quality time with my loved ones. Watching movies and playing video games are my go-to activities for relaxation and inspiration outside the realm of programming. I consider myself a lifelong learner and constantly seek out new books, tutorials, and courses to further improve my skills and broaden my knowledge. If you are curious to know more about my skills and experience, please feel free to take a look at my CV. I am always open to discussing potential opportunities to collaborate on exciting projects or even learn from each other's experiences.",
};

export const summaryData = {
  title: "Summary",
  description:
    "Highly skilled and experienced Front-End Developer with a keen eye for detail and a passion for creating visually stunning and highly functional websites. Proficient in HTML, CSS, and JavaScript, and well-versed in popular front-end frameworks such as ReactJS and Angular. Collaborative team player who excels in working closely with designers, back-end developers, and project managers to seamlessly integrate design and functionality. A constant learner who stays up to date with the latest trends and advancements in front-end development. Committed to delivering exceptional user experiences and contributing to the success of web projects through meticulous attention to detail and a performance-driven approach.",
};

export const languageData = [
  {
    icon: "/images/icons/united-kingdom.png",
    language: "English",
    level: "C1",
  },
  {
    icon: "/images/icons/france.png",
    language: "French",
    level: "B1",
  },
  {
    icon: "/images/icons/german.png",
    language: "German",
    level: "A2",
  },
];

export const experienceData = {
  title: "Professional Experience",
  experiences: [
    {
      role: "Front-End Developer, Freelance (2022-Present)",
      description:
        "As a freelance Front-End Developer, I have been responsible for designing and implementing custom front-end solutions for various clients. Leveraging my expertise in ReactJS and other modern web technologies, I collaborate closely with clients to understand their requirements and translate them into functional user interfaces. I design responsive and intuitive UI components, ensuring seamless user experiences across different devices and browsers. Additionally, I implement state management using Redux and handle routing with React Router. Thorough testing and debugging are integral parts of my workflow to maintain code quality and optimize performance. By delivering projects within deadlines, I provide ongoing support and maintenance to ensure client satisfaction.",
      current: true,
    },
    {
      role: "Real Estate Agent, Esra Real Estate (2018-2022)",
      description:
        "During my tenure as a Real Estate Agent at Esra Real Estate, I played a vital role in assisting clients with their property needs. I provided comprehensive guidance and support throughout the buying, selling, and renting processes. To facilitate effective decision-making, I conducted extensive market research and analysis, enabling clients to make informed choices. A key aspect of my role was building and maintaining strong relationships with clients, ensuring their satisfaction throughout the real estate transactions. I created impactful marketing materials and property listings to effectively showcase properties to potential buyers and renters. Negotiating contracts and coordinating property viewings were additional responsibilities, while also utilizing online platforms and tools to streamline property management tasks and enhance customer experiences.",
      current: false,
    },
    {
      role: "Product Manager, TAF (2014-2018)",
      description:
        "As a Product Manager at TAF, I spearheaded the development of various products from ideation to launch. Collaborating with cross-functional teams, including designers, developers, and marketing professionals, I translated market research insights into viable product strategies. Defining product requirements and creating detailed roadmaps were crucial aspects of my role. Prioritizing features and managing agile development processes ensured timely delivery. I conducted user testing and gathered feedback to continuously improve the products. Working closely with stakeholders, I defined go-to-market strategies and supported product adoption through effective communication and training. Monitoring product performance and conducting data analysis enabled data-driven decision-making for future iterations.",
      current: false,
    },
  ],
};

export const contactMeText = {
  title: "Hello there! ",
  body: "I am a Front-End Developer with a passion for solving complex problems with coding.  I bring a unique blend of technical and interpersonal skills to the table. I'm always eager to take on new challenges and collaborate with like-minded individuals. If you'd like to get in touch, simply fill out the form below and I'll get back to you as soon as possible. Looking forward to hearing from you!",
};

export const skills = {
  Soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "⌛️", text: "Time management" },
  ],
  Hard: [
    { icon: "/images/icons/html-5.png", text: "HTML" },
    { icon: "/images/icons/css.png", text: "CSS" },
    { icon: "/images/icons/git_logo.png", text: "GIT" },
    { icon: "/images/icons/react.png", text: "React" },
    { icon: "/images/icons/nextjs.png", text: "Nextjs" },
    { icon: "/images/icons/javascript.jpg", text: "JavaScript" },
    { icon: "/images/icons/typescript.png", text: "TypeScript" },
  ],
};

export const projects = [
  {
    title: "Weather App",
    body1:
      "A UI friendly web application designed to provide accurate and up-to-date weather forecasts for any desired location. With WeatherApp, users can easily access detailed weather information for their chosen city, including the current conditions and forecasts for the upcoming days.",
    body2: "Technologies used: HTML, CSS, JavaScript and OpenWeather API.",
    image: "weather-app.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/React-My-Weather-App",
      },
      {
        text: "Live Site",
        url: "https://weatherapp.fatihyuksel.net",
      },
    ],
  },
  {
    title: "Turkish Kitchen Menu",
    body1:
      "A delightful JavaScript-based web application that brings the rich and diverse flavors of Turkish cuisine right to your fingertips. Turkish Kitchen allows users to explore and select from a wide range of delectable dishes categorized into soups, salads, meats, vegetarien, and desserts.",
    body2: "Technologies used: HTML, CSS, and JavaScript. ",
    image: "turkish-menu.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/turkish-kitchen",
      },
      {
        text: "Live Site",
        url: "https://turkishkitchen.fatihyuksel.net",
      },
    ],
  },
  {
    title: "Todo List App",
    body1:
      "The Todo List App is a straightforward application that helps users manage their tasks effectively. With this app, users can create a list of tasks, edit existing tasks, mark them as complete, and delete tasks when they are no longer needed. Application also gives the information of the number of the tasks.",
    body2: "Technologies used: HTML, CSS, JavaScript and React.",
    image: "todolist.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/react-todo-list",
      },
      {
        text: "Live Site",
        url: "https://todo-list-app.fatihyuksel.net",
      },
    ],
  },
  {
    title: "Haussmann Sols Résine",
    body1:
      "The Flooring Company website is a comprehensive online platform designed to cater to the needs of individuals and businesses seeking high-quality flooring solutions. With a focus on aesthetics, functionality, and customer satisfaction, the website offers a range of features to enhance the user experience.",
    body2: "Technologies used: JavaScript, Nextjs, and Tailwind CSS.",
    image: "haussmann.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/haussmann",
      },
      {
        text: "Live Site",
        url: "https://haussmannsolsresine.fr",
      },
    ],
  },

  {
    title: "Pomodoro App",
    body1:
      "Pomodoro Timer is designed to help you manage your time effectively and boost your productivity using the popular Pomodoro Technique. With Pomodoro Timer, you'll unleash your productivity potential and conquer your tasks with ease. Seeking better time management ? This app will help you stay focused, organized, and on track. ",
    body2: "Technologies used: HTML, CSS, and JavaScript Features.",
    image: "pomodoro.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/pomodoro-app",
      },
      {
        text: "Live Site",
        url: "https://fatihyuksel3109.github.io/pomodoro-app/",
      },
    ],
  },
];

export const contactMeLinks = [
  "https://fatihyuksel3109@gmail.com",
  "https://twitter.com/fyukseI",
  "https://github.com/fatihyuksel3109",
  "https://linkedin.com/in/fatihyuksell",
  "https://medium.com/@fatihyuksel3109",
];
