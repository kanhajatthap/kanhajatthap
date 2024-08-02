import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  indiainfotech,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS",
    icon: web,
  },
  {
    title: "Next JS",
    icon: mobile,
  },
  {
    title: "HTML and CSS",
    icon: backend,
  },
  {
    title: "Tailwind CSS",
    icon: backend,
  },
  {
    title: "UI Material",
    icon: backend,
  },
  {
    title: "Bootstrap",
    icon: backend,
  },
  {
    title: "WordPress",
    icon: creator,
  },
  {
    title: "Figma",
    icon: creator,
  },
  {
    title: "Photoshop",
    icon: creator,
  },
  {
    title: "Hosting Manage (WP)",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "India Infotech",
    company_website: "https://www.indiainfotech.com/",
    icon: indiainfotech,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Present",
    points: [
      "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
      "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
      "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
      "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Web Designer",
    company_name: "IT Pramukh",
    company_website: "#",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2014 - Dec 2016",
    points: [
      "Designing visually compelling and user-friendly websites, employing HTML, CSS, and Photoshop to create seamless and aesthetically pleasing user interfaces.",
      "Collaborating closely with cross-functional teams, including developers and product managers, to translate design concepts into fully functional and engaging web experiences.",
      "Implementing responsive design practices to guarantee optimal performance and visual consistency across diverse devices and screen sizes.",
      "Conducting thorough design reviews, actively participating in feedback sessions, and contributing to the refinement of web designs for enhanced quality and user satisfaction.",
    ],
  },
  {
    title: "Graphic Design",
    company_name: "HP Softech",
    company_website: "https://hpsoftech.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2013 - 2014",
    points: [
      "Crafting visually engaging graphics and designs for various digital platforms, employing tools like Photoshop",
      "Collaborating seamlessly with cross-functional teams, including designers and product managers, to produce compelling and high-quality visual content.",
      "Developing and refining responsive design elements, ensuring optimal user experiences across diverse devices.",
      "Conducting thorough graphic design code reviews, actively participating in constructive feedback sessions to enhance the overall quality of design deliverables.",
    ],
  },    
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Kanha Jatthap",
  fullName: "Kanha Jatthap",
  email: "kanhajatthap@gmail.com",
  role: "Frontend Developer",
  about: `With a dynamic skill set encompassing React JS, Next JS, JavaScript, GitHub, Redux, Material UI, HTML, CSS, WordPress, Tailwind CSS, Bootstrap, Figma, and Photoshop, I am a seasoned frontend developer. My journey began with 2 years in graphic design, evolving into 4 years of expertise in HTML, CSS, and Photoshop. Over the last 2 years, I've honed my skills in WordPress and specialized in React JS and Next JS. Passionate about creating visually stunning and functionally seamless user interfaces, I am dedicated to bringing innovation and excellence to every project.`,
  projectsIntro: `My portfolio is a testament to my skills and experience, presenting real-world examples of my work. Through concise project descriptions and live demos, I showcase my proficiency in solving intricate problems, adeptness with diverse technologies, and effective project management. Explore these projects to witness firsthand the depth of my capabilities and the quality of my contributions.






  `,
};

const publicUrls = {
  resume:
    "#resumehere",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/kanhajatthap/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/kanhajatthap",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
