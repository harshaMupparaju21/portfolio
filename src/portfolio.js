/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
  splashDuration: 2000, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to true if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Harsha",
  logo_name: " Harsha Vardhan Mupparaju",
  // nickname: "harsha",
  full_name: "Harsha Mupparaju",
  subTitle: "Full stack developer, Java and Javascript enthusiast",
  resumeLink: "./assets/resume.pdf",
  mail: "mailto:hmuppara@asu.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/harshaMupparaju21",
  linkedin: "https://www.linkedin.com/in/harshamupparaju/",
  gmail: "hmuppara@asu.edu",
};

const skills = {
  data: [
    {
      title: "Fullstack Development",
      fileName: "FullStackImg",
      skills: [
        // "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:coffeescript",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "##6DB33F",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Kafka ",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Devops and Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        // "⚡ Experience working on multiple cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },

        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arizona State University, Tempe, AZ",
      subtitle: "Master’s in Computer Software Engineering",
      logo_path: "seal.png",
      alt_name: "Arizona State University, Tempe, AZ",
      duration: "Aug 2022 - May 2024",
      additionalInfo: "CGPA: 4.0",
      descriptions: [
        " CSE 546: Cloud Computing",
        "SER 501: Advanced Data Structures and Algorithms",
        "SER 515: Foundations of Software Engineering",
        "SER 531: Semantic Web Engineering",
        "CSE 566: Software Project, Process and Quality Management",
        "SER 423: Mobile Systems",
        "SER 502: Languages and Programming Paradigms",
        "CSE 565: Software Verification, Validation and Testing",
        "SER 594: Game Programming and Design",
        // " Cloud Computing, Mobile Systems, Data Structures & Algorithms, Software Engineering Foundations",
      ],
      website_link: "http://www.ssgec.ac.in/",
    },
    {
      title: "National Institute of Technology, Warangal, Telangana, India",
      subtitle: "Bachelor’s, Electronics and Communications Engineering",
      logo_path: "nitww.png",
      alt_name: "NTIW",
      duration: "Aug 2015 - May 2019",
      descriptions: [],
      //   "⚡ I have secured 9.82 CGPA.",
      // ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "sample title",
      subtitle: "sample subtitle",
      logo_path: "mongo.png",
      certificate_link: "https://google.com",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Associate Applications Engineer ",
          company: "Oracle",
          // company_url: "https://www.crestinfosystems.com/",
          logo_path: "oracle.png",
          duration: "Aug 2021 - Jan 2022",
          location: "Bangalore, India",
          description: [
            `Crafted React UI pages that optimized Use Case creation for product owners, slashing the duration from 15 minutes with Postman to just 5 minutes`,
            "Enhanced real-time insight processing by 70% and cut DynamoDB costs by implementing caching with Redis.",
            "Employed AWS Lambda and S3 for batch insight processing, targeting lower-priority insights by publishing them to a Kafka topic and for tracking the insight journey post saving in AWS Dynamo DB",
            "Developed retry functionality in Java for Error topics to ensure recovery of insights from Kafka, avoiding data loss.Developed retry functionality in Java for Error topics to ensure recovery of insights from Kafka, avoiding data loss.",
            "Leveraged SonarQube to boost code coverage and quality. Utilized Cucumber for crafting acceptance test cases.",
          ],
          color: "#0071C5",
        },
        {
          title: "Software Engineer",
          company: "CGI",
          // company_url: "https://www.crestinfosystems.com/",
          logo_path: "cgi.png",
          duration: "July 2019 - Jul 2021",
          location: "Bangalore, India",
          description: [
            `Developed REST services and utilized JMS queue for dynamic processing of 2 million transactions daily, improving
            risk analysis for SWIFT, FEDWIRE, NACHA, and SEPA protocols.Tested and validated the application using Junit.`,
            "Member Evaluation Framework - Developed from scratch an MVP for a comprehensive skill management tailored for internal teams, significantly streamlining tasks that previously required manual input to just 10 minutes.",
            'Introduced "Good Guy" feature to specifically address and minimize false positive transactions efficiently',
            "Implemented L1 and L2 message workflows with reusable scripts, reducing creation time from 15 minutes to one",
            "Successfully resolved over 200 client-reported issues, leading to a 20% reduction in client complaints",
          ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Non technical",
      experiences: [
        {
          title: "Graduate Teaching Assistant ",
          company: "Arizona State University",
          // company_url: "https://bauddhikgeeks.tech/",
          logo_path: "seal.png",
          duration: "May 2023 - May 2024",
          location: "Tempe, AZ",
          description: [
            "Designing and evaluating assignments, mentoring undergraduate students in courses SER 232 - Computer System Fundamentals, SER 402 - Computing Capstone Project II and CSE 310 - Data Structures and Algorithms.",
          ],
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Smart Driving Assistant",
      url: "link", // add link
      description:
        "A mobile application that enhances road safety by leveraging smartphone sensors to monitor driver behaviors in real-time, offering speed alerts, crash detection, and gamified rewards for safe driving.  ",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "expo",
          iconifyClass: "logos-expo",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
        {
          name: "Firebase",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
        // {
        //   name: "Live Demo",
        //   url:
        //     "",
        //   iconifyClass: "mdi:web",
        // },
      ],
    },
    {
      id: "1",
      name: "Hybrid Cloud Smart Classroom Assistant",
      // url: "https://github.com/",
      description:
        "A cloud-based smart classroom assistant for efficient video processing and face recognition from classroom footage using AWS Lambda and tested the system to successfully processes 100 requests in a minute.",
      languages: [
        {
          name: "AWS Lambda",
          iconifyClass: "logos-aws-lambda",
        },
        {
          name: "Amazon S3",
          iconifyClass: "logos-aws-s3",
        },
        {
          name: "DynamoDB",
          iconifyClass: "logos-aws-dynamodb",
        },
        {
          name: "Kubernetes",
          iconifyClass: "logos-kubernetes",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Docker",
          iconifyClass: "logos-docker",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devfolio",
        //   url: "",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
      ],
    },
    {
      id: "2",
      name:
        "Implementation of Generalized Frequency Division Multiplexing in Cognitive Radio",
      url: "https://github.com/kevalvavaliya/Adoptisity",
      description:
        "Designed and implemented a GFDM-based transmitter-receiver system using MATLAB and generated characteristic ROC curves to model the system performance in different channels and in cognitive radio environment.",
      languages: [
        // {
        //   name: "HTML5",
        //   iconifyClass: "logos-html-5",
        // },
        // {
        //   name: "CSS3",
        //   iconifyClass: "logos-css-3",
        // },
        // {
        //   name: "JavaScript",
        //   iconifyClass: "logos-javascript",
        // },
        // {
        //   name: "Wix",
        //   iconifyClass: "bxl:wix",
        // },
      ],
      links: [
        {
          name: "IEEE Publication",
          url: " https://ieeexplore.ieee.org/document/8933175 ",
          iconifyClass: "mdi:web",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
