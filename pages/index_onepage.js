import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Clients from "../src/components/Clients";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import Testimonials from "../src/components/Testimonials";
import Service from "../src/components/Service";
import ResumeSection from "../src/components/ResumeSection";
import Pricing from "../src/components/Pricing";
import ContactSection from "../src/components/ContactSection";
import {
  CodingSkills,
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
import Team from "../src/components/Team";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { createSkillsDot, dotResize } from "../src/utils";
import { useSelector } from "react-redux";

const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexOnePage = () => {
  const about = useSelector(state => state.user.about);
  const [firstName, lastName] = about.name.split(' ');
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Layout noHeader>
      <header className="header">
        <div className="head-top">
          {/* menu button */}
          <a href="#" className="menu-btn">
            <span />
          </a>
          {/* logo */}
          <div className="logo hover-masks-logo">
            <a href="#">
              <span className="mask-lnk">
                {firstName} <strong>{lastName}</strong>
              </span>
              <span className="mask-lnk mask-lnk-hover">
                Download <strong>CV</strong>
              </span>
            </a>
          </div>
          {/* top menu */}
          <div className="top-menu hover-masks">
            <div className="top-menu-nav">
              <div className="menu-topmenu-container">
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <a href="#section-started">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-about">Resume</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-portfolio">Works</a>
                  </li>
                  <li className="menu-item">
                    <a href="#section-contacts">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Wrapper */}
      <div className="wrapper">
        {/* Section Started */}
        <div className="section started" id="section-started">
          {/* background */}
          <div
            className="video-bg jarallax"
            style={{ backgroundImage: "url(images/started_image_p.jpg)" }}
          >
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
          {/* started content */}
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <h1 className="h-title">
                  Hello, {`I’m`} <strong>{about.name}</strong>, {about.title}.
                  <br/>
                  Based in {about.address}.
                </h1>
                <TypingAnimation extraClassName={"typed-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
          {/* mosue button */}
          <a href="#" className="mouse_btn" style={{ display: "none" }}>
            <span className="icon fas fa-chevron-down" />
          </a>
        </div>
        {/* Section About */}
        <div id="section-about">
          <About />
        </div>
        {/* Section Service */}
        <Service />
        {/* Section Pricing */}
        <Pricing />
        {/* Section Resume */}
        <ResumeSection />
        {/* Section Design Skills */}
        <DesignSkills />
        {/* Section Languages Skills */}
        <LanguagesSkills />
        {/* Section Coding Skills */}
        <CodingSkills />
        {/* Section Knowledge Skills */}
        <KnowledgeSkills />
        {/* Section Interests */}
        <Interests />
        {/* Section Team */}
        <Team />
        {/* Section Testimonials */}
        <Testimonials />
        {/* Section Clients */}
        <Clients />
        {/* Section Custom Text */}
        <CustomText />
        {/* Works */}
        <div className="section works" id="section-portfolio">
          <div className="content">
            {/* title */}
            <div className="title">
              <div className="title_inner">Portfolio</div>
            </div>
            <ItemIsotope />
            <div className="clear" />
          </div>
        </div>
        {/* Contacts */}
        <div id="section-contacts">
          <ContactSection />
        </div>
        {/* Section Started */}
        <div className="section started section-title" id="section-map">
          {/* background */}
          <div className="video-bg">
            <div className="map" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
            <div className="video-bg-mask" />
            <div className="video-bg-texture" id="grained_container" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexOnePage;
