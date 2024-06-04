import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "../experience/Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "../experience/ExperienceImg";
import Educations from "../../containers/education/Educations";
import "../education/EducationComponent.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import "../contact/ContactComponent.css";
import {
  greeting,
  contactPageData,
  projectsHeader,
  projects,
  experience,
  socialMediaLinks,
} from "../../portfolio.js";
import { style } from "glamor";
import ProjectsImg from "../projects/ProjectsImg";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "../projects/Projects.css";
import resume from "../../assests/resume.pdf";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Home(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <div className="basic-experience" id="experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="experience-info">
        <div className="experience-heading-img-div">
          <ExperienceImg theme={theme} />
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      </div>
      <div className="basic-education" id="education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major certifications.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        {/* <Certifications theme={props.theme} /> */}
      </div>
      <div className="basic-projects" id="projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
        <div className="repo-cards-div-main">
          {projects.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} />;
          })}
        </div>
        <br />
        <br />
        <br />
        <div className="more-projects">
          {" "}
          <a {...styles} className="general-btn" href={socialMediaLinks.github}>
            More Projects (Github)
          </a>
        </div>

        <br />
        <br />
      </div>
      <div className="basic-contact" id="contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                {...styles}
                className="general-btn"
                download="HarshaVardhan_Mupparaju_Resume"
                href={resume}
              >
                See my Resume
              </a>
            </div>
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
                style={{
                  border: "none",
                }}
              />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
