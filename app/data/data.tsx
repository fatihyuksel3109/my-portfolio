export const pages = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "Resume",
    link: "/resume",
  },
  {
    id: 3,
    label: "Projects",
    link: "/my-projects",
  },
  {
    id: 4,
    label: "Contact",
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
    "Highly skilled and experienced Software Developer with a keen eye for detail and a passion for creating visually stunning, highly functional websites and applications. Proficient in HTML, CSS, and JavaScript, with deep expertise in modern front-end frameworks such as ReactJS, Next.js, and React Native, as well as strong back-end development experience with Node.js. A collaborative team player who excels in integrating design and functionality by working closely with designers, back-end developers, and project managers. Dedicated to staying at the forefront of industry trends and advancements, I am committed to delivering exceptional user experiences across web and mobile platforms. My meticulous attention to detail and performance-driven approach ensure the success of every project I undertake.",
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
      role: "Software Developer, Hogarth WW (Jan 2022 - Present)",
      description: `Contributed to global-scale digital production workflows by developing high-quality, pixel-perfect, and fully responsive user interfaces using HTML, CSS, JavaScript, and React.js/Next.js.
Worked in close collaboration with designers, QA, and localization teams to deliver accurate, design-consistent experiences across all screen sizes and platforms.
Built dynamic UI components and frontend logic, improving interactivity, user engagement, and site performance.
Integrated with Node.js and MongoDB backends to support content management and internal admin tools.
Developed and maintained Python automation scripts to optimize localization processes, reducing manual effort and increasing operational efficiency.`,
      current: true,
    },
    {
      role: "Software Developer, Creosafe (Jan 2020 - Dec 2021)",
      description: `Utilized React and TypeScript to implement technical enhancements and new features, significantly improving application speed and overall user experience.
Created reusable and modular UI components, promoting consistency and maintainability across the front-end codebase.
Developed essential application systems such as user authentication and multi-filter search logic, ensuring secure access and advanced user interaction capabilities.
Employed Redux Toolkit for efficient global state management, enabling smoother data flow and simplified debugging throughout the application.
Integrated sessionStorage-based data handling to maintain session persistence and optimize performance during user activity.`,
      current: false,
    },
    {
      role: "Front-End Developer, Fanus (Sep 2017 - Dec 2019)",
      description: `Delivered custom web applications for multiple international clients in the fintech and energy sectors, working in agile teams across time zones.
At Mobilab Solutions (Germany), contributed as a Full-Stack Developer by building backend APIs with Express.js, managing data with PostgreSQL, and developing intuitive frontends.
At Ekip.co (UK) and Anywai (Switzerland), developed real-time crypto dashboards using React.js, Next.js, and TypeScript, focused on live stock market data visualization.
Managed global application state with Redux and Zustand, ensuring smooth and predictable user interactions.
Delivered responsive, theme-consistent designs using Ant Design components and customized styles.`,
      current: false,
    },
  ],
}

export const contactMeText = {
  title: "Hello there! ",
  body: "I am a Front-End Developer with a passion for solving complex problems with coding.  I bring a unique blend of technical and interpersonal skills to the table. I'm always eager to take on new challenges and collaborate with like-minded individuals. If you'd like to get in touch, simply fill out the form below and I'll get back to you as soon as possible. Looking forward to hearing from you!",
};

export const skills = {
  Hard: [
    { icon: "/images/icons/html-5.png", text: "HTML" },
    { icon: "/images/icons/css.png", text: "CSS" },
    { icon: "/images/icons/git_logo.png", text: "GIT" },
    { icon: "/images/icons/svn-icon.png", text: "SVN" },
    { icon: "/images/icons/react.png", text: "React / React Native" },
    { icon: "/images/icons/nextjs.png", text: "Nextjs" },
    { icon: "/images/icons/javascriptt.png", text: "JavaScript" },
    { icon: "/images/icons/typescript.png", text: "TypeScript" },
  ],
  Soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "⌛️", text: "Time management" },
    { icon: "🤔", text: "Problem Solving" },
  ],
};

export const projects = [
  {
    title: "Menu App",
    body1:
      "A user-friendly mobile application designed to revolutionize your dining experience. The Menu App offers an extensive range of features. Whether you're a food enthusiast, a frequent diner, or simply looking for a new culinary adventure, the Menu App is your go-to companion.",
    body2: "Technologies used: NextJS, TypeScript, Tailwind CSS",
    image: "menu-app.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/menu-app",
      },
      {
        text: "Live Site",
        url: "https://menu-app-orcin.vercel.app/",
      },
    ],
  },
  {
    title: "Car Rent",
    body1:
      "A user friendly website designed to revolutionize your travel experience. DriveEasy offers an extensive range of features and services to cater to all your transportation needs. Whether you're an avid traveler, a frequent commuter, or simply looking for a convenient way to explore new destinations, DriveEasy is your go-to companion.",
    body2: "Technologies used: NextJS, TypeScript, Tailwind CSS",
    image: "car-rent.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/car-rent",
      },
      {
        text: "Live Site",
        url: "https://car-rent-lemon.vercel.app/",
      },
    ],
  },
  {
    title: "Weather App",
    body1:
      "A UI friendly web application designed to provide accurate and up-to-date weather forecasts for any desired location. With WeatherApp, users can easily access detailed weather information for their chosen city, including the current conditions and forecasts for the upcoming days.",
    body2: "Technologies used: HTML, CSS, JavaScript and OpenWeather API.",
    image: "weather-app.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/fatihyuksel3109/weather-app",
      },
      {
        text: "Live Site",
        url: "https://fatihyuksel3109.github.io/weather-app/",
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
        url: "https://fatihyuksel3109.github.io/turkish-kitchen/",
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
];

export const contactMeLinks = [
  "https://fatihyuksel3109@gmail.com",
  "https://twitter.com/fyukseI",
  "https://github.com/fatihyuksel3109",
  "https://linkedin.com/in/fatihyuksell",
  "https://medium.com/@fatihyuksel3109",
];
