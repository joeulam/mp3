export interface NavInfo {
  title: string;
  url: string;
}

export const navBarLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Projects",
    url: "/Projects",
  },
  {
    title: "Experience",
    url: "/Experience",
  },
  {
    title: "Certification",
    url: "/Certifications",
  },
  {
    title: "Education",
    url: "/Education",
  },
  {
    title: "Blog",
    url: "/Blog",
  },
];

export const projectList = [
  {
    title: "Lamb Inventory (in progress)",
    description: "A inventory tracker",
    techStack:
      "Tech Stack: Nextjs, csstailwind, Ant design UI, Firebase, and Vercel",
    webUrl: "https://lammarktradinginventory.vercel.app/",
    githubUrl: "https://github.com/joeulam/lammarktradinginventory",
  },
  {
    title: "Calico (in progress)",
    description: "A fiscal tracker with a cute twist to it",
    techStack:
      "Tech Stack: Nextjs, csstailwind, Ant design UI, MongoDB, Auth0, and Vercel",
    webUrl: "https://calicos.vercel.app/",
    githubUrl: "https://github.com/joeulam/Calico",
  },
  {
    title: "Eportfolio V2",
    description: "An online portfolio",
    techStack: "Tech Stack: Nextjs, MUI, CSSTailWind",
    webUrl: "https://joeyresume.vercel.app/",
    githubUrl: "https://github.com/joeulam/personal-web-2",
  },
  {
    title: "Emotion checker",
    description:
      "A computer vision project that picks up the user's facial emotion and returns a confidence score along with the current emotion",
    techStack: "Tech Stack: Python, CV2, Tensorflow, Matplot, and Panda",
    webUrl: "",
    githubUrl: "https://github.com/joeulam/Facial-emotion-detection",
  },
  {
    title: "PhotoPort",
    description: "A website that stores and display a photography portfolio",
    techStack: "Tech Stack: Nextjs and Tailwindcss",
    webUrl: "https://photography-page-kg45ga2xq-joeulam.vercel.app/",
    githubUrl: "https://github.com/joeulam/Photography-page",
  },
  {
    title: "CrossoverTrader",
    description:
      "A python script that performs automatic trades using algorithms that produced a ROI of 2.37%",
    techStack: "Tech Stack: Python, alpaca api, finnhub, yfinance, and matplot",
    webUrl: "",
    githubUrl: "https://github.com/joeulam/Algo-trading",
  },
  {
    title: "Scrapper",
    description:
      "A python script that scrapes trade data from capitol hill and returns recent activities.",
    techStack: "Tech Stack: Python, Numpy, Panda, Matplot, and Beautiful soup",
    webUrl: "",
    githubUrl: "https://github.com/joeulam/Stock-data-ana",
  },
  {
    title: "Spotter",
    description:
      "A vision detection program that detects human faces. Running on the tensorflow py framework.",
    techStack: "Tech Stack: Tensorflow",
    webUrl: "",
    githubUrl: "",
  },
  {
    title: "HEYO",
    description: "A desktop mental health app",
    techStack: "Tech Stack: Electron and PostgreSQL",
    webUrl: "",
    githubUrl: "https://github.com/joeulam/wellness-electron",
  },
  {
    title: "Eportfolio",
    description: "An online project portfolio",
    techStack: "Tech Stack: Tailwind css and Nextjs",
    webUrl: "https://joeyweb.vercel.app/",
    githubUrl: "https://github.com/joeulam/ssrtest",
  },
];

export const workExperience = [
  {
    companyTitle: "The Andrew Mellon Foundation",
    jobTitle: "Consultant",
    date: "10/2024 - Present",
    responsibility: ["Developed and integrated internal taxonomy tree"],
  },
  {
    companyTitle: "The Andrew Mellon Foundation",
    date: "06/2024 - 08/2024",
    jobTitle: "IT Intern",
    responsibility: [
      "Developed and integrated 5 API endpoints into Mellon's backend API to facilitate seamless data synchronization with a custom migration application, integrating data from Fluxx, Contentful, and a proprietary database.",
      "Designed and implemented a custom internal tool that enables communication teams to independently sync data, reducing dependency on the IT team for synchronization tasks.",
      "Developed an internal tool allowing data migration from Fluxx to Contentful in Mellon custom middleware.",
      "Optimized grant migration processes, resulting in an 18% reduction in data transfer time.",
    ],
  },
  {
    companyTitle: "Boston University",
    jobTitle: "IT Support Specialist",
    date: "08/2023 - Present",
    responsibility: [
      "Created and handled over 500 tickets on service now",
      "Handled professor's technical issues at Wheelock, Law and Business school",
    ],
  },
  {
    companyTitle: "Robo Mind Tech",
    jobTitle: "Intern",
    date: "04/2023 - 07/2023",
    responsibility: [
      "Innovative Drone Curriculum: Developed and implemented a curriculum integrating Python, OpenCV (cv2), and DJI technology, enhancing students' technical skills and fostering their interest in emerging technologies",
      "Inventory System Optimization: Collaborated with team members to establish and improve an efficient inventory management",
    ],
  },
];

export const certifications = [
  {
    title: "Responsive Web Design",
    givenBy: "Freecodecamp",
  },
  {
    title: "Data Analysis with python",
    givenBy: "Freecodecamp",
  },
  {
    title: "AWS Academy Graduate",
    givenBy: "AWS Academy Cloud Foundations",
  },
  {
    title: "Python",
    givenBy: "Kaggle",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "C++",
  "Python",
  "Kotlin",
  "Typescript",
  "TailWindCSS",
  "Node.js",
  "Nextjs",
];

export const leadership = [
  {
    title: "BU Finance & Investment Club",
    position: "Quantitative senior",
  },
  {
    title: "Biztech Boston University Club",
    position: "Member in the Biztech x Accenture Consulting Case Competition",
  },
];

export const education = [
  {
    school: "Boston University",
    major: "Bachelors, Computer Science and Economics",
  },
  {
    school: "Benjamin N Cardozo Highschool",
    major: "Computer Science",
  },
];

export const blogPost = [
  {
    id:1,
    title: "1/27/25 update on my main project Calico",
    blog: "We have finished up on our authentication process allowing for users to sign up and login into the application",
  },
  {
    id:2,
    title: "1/20/25 update",
    blog: `As winter break ends and the second semester begins I think its
                a perfect time to gather myself together and start focusing on
                how to balance all my time commitment. My plan is complete
                calico within the next 2 months`,
  },
  {
    id:3,
    title: "1/1/25 Happy New Years update",
    blog: `Happy new years everyone im proud to announce the start of my
                next major project calico. Calico is an fiscial tracker that
                could be used as an alternative to Mint which has been
                discontinued`,
  },
  {
    id:4,
    title: "12/20/25 End of semester update",
    blog: `Im proud to announce that as the final week comes to an end we
                have ended the semester with a 3.57 GPA and made the deans list`,
  },
];
