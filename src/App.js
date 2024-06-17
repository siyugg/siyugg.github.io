import React, { useEffect, useState } from "react";
import {
  emailIcon,
  emailIconPink,
  linkedinIcon,
  linkedinIconPink,
  githubIcon,
  githubIconPink,
  linkIcon,
  resumeThumbnail,
} from "./icon";
import logo from "./logo.png";

import "./style.css";

function LoadingScreen() {
  useEffect(() => {
    const hideLoadingScreen = () => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("left-column").classList.remove("hidden");
      document.getElementById("right-column").classList.remove("hidden");
    };

    // Hide loading screen after 2 seconds
    const timeoutId = setTimeout(hideLoadingScreen, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div
      id="loading-screen"
      className="fixed inset-0 background flex justify-center items-center"
    >
      <p className="jump text-base font-bold">Siyu Gao | Portfolio</p>
    </div>
  );
}

function LeftColumn() {
  const [currentSection, setCurrentSection] = useState("");
  const [hoverIcon, setHoverIcon] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("ul li a");

    const onScroll = () => {
      let activeSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          activeSection = section.getAttribute("id");
        }
      });

      setCurrentSection(activeSection);

      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
        if (navLink.href.includes(activeSection)) {
          navLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionHeaders = document.querySelectorAll(".section-header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionHeaders.forEach((header) => {
              header.classList.remove("text-pink-500");
            });
            entry.target.classList.add("text-pink-500");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionHeaders.forEach((header) => {
      observer.observe(header);
    });

    return () => sectionHeaders.forEach((header) => observer.unobserve(header));
  }, []);

  const [isThumbnailVisible, setIsThumbnailVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleThumbnailVisibility = (event) => {
    event.preventDefault(); // Prevents the default action of the link
    setIsThumbnailVisible(!isThumbnailVisible); // Toggles the visibility
  };

  return (
    <div
      id="left-column"
      className="hidden w-1/3 flex flex-col justify-center items-end pr-8 fixed"
    >
      {/* <!--INTRO--> */}
      <div className="inline pt-10 w-full">
        <div className="text-black pt-16 align-text-bottom text-right">
          {/* <span className="block text-5xl">Siyu Gao</span> */}
          <div className="glitch-wrapper-header">
            <div
              className="glitch-header-name text-5xl mt-8"
              data-glitch-name="Siyu Gao"
            >
              Siyu Gao
            </div>
          </div>
          <span className="block text-sm pt-2">
            &lt; Aspiring developer /&gt;
          </span>
        </div>
      </div>

      {/* <!--NAV LIST--> */}
      <div className="flex mt-16 pr-8">
        <ul className="flex flex-col list-none text-sm text-center">
          <li className="mt-4">
            <a
              href="#aboutSection"
              className="text-gray-500 font-semibold hover:text-pink-300 transition duration-200 transform"
            >
              About
            </a>
          </li>
          <li className="mt-4">
            <a
              href="#projectSection"
              className="text-gray-500 font-semibold hover:text-pink-300 transition duration-200"
            >
              Projects
            </a>
          </li>
          <li className="mt-4">
            <a
              href="#skillSection"
              className="text-gray-500 font-semibold hover:text-pink-300 transition duration-200"
            >
              Skills
            </a>
          </li>
          <br />
          <br />
          <li className="mt-4">
            <a
              href="#"
              className="text-gray-500 font-semibold hover:text-pink-300 transition duration-200"
              id="resumeLink"
              onClick={toggleThumbnailVisibility}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* <!-- Resume --> */}
      <div className="overflow-hidden relative mt-2 mr-6">
        <div
          id="resumeThumbnail"
          className={`resume-thumbnail ${isThumbnailVisible ? "visible" : ""}`}
        >
          <a href="./docs/Gao_Siyu_Resume.pdf" download>
            <img
              src={resumeThumbnail}
              alt="Resume Thumbnail"
              className="h-36 blur-1"
            />
          </a>
          <div className="absolute bottom-12 w-full text-center opacity-0 transition-opacity duration-100 hover:opacity-100 text-sm">
            <a
              href="./docs/Gao_Siyu_Resume.pdf"
              download
              className="text-red-500 hover:text-black-700 py-12"
            >
              Download <br /> Resume
            </a>
          </div>
        </div>
      </div>

      {/* <!--CONTACT--> */}
      <div className="glitch-wrapper mt-40 place-content-end">
        <div className="glitch" data-glitch="Get in touch!">
          Get in touch!
        </div>
      </div>
      {/* <!-- Links --> */}
      <div className="flex pb-40 mt-4 mr-2 text-white bottom-0">
        <ul className="flex flex-row list-none space-x-7">
          <li className="shrink-0">
            <a href="https://www.linkedin.com/in/siyu-gao/">
              <img
                src={hoverIcon === "linkedin" ? linkedinIconPink : linkedinIcon}
                alt="LinkedIn"
                onMouseEnter={() => setHoverIcon("linkedin")}
                onMouseLeave={() => setHoverIcon("")}
              />
            </a>
          </li>
          <li className="shrink-0">
            <a href="https://github.com/siyugg">
              <img
                src={hoverIcon === "github" ? githubIconPink : githubIcon}
                alt="Github"
                onMouseEnter={() => setHoverIcon("github")}
                onMouseLeave={() => setHoverIcon("")}
              />
            </a>
          </li>
          <li className="shrink-0">
            <a href="mailto:siyugao52@gmail.com">
              <img
                src={hoverIcon === "email" ? emailIconPink : emailIcon}
                alt="Email"
                onMouseEnter={() => setHoverIcon("email")}
                onMouseLeave={() => setHoverIcon("")}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function RightColumn() {
  return (
    <div
      id="right-column"
      className="flex flex-col justify-center items-center w-2/3 overflow-auto ml-auto hidden"
    >
      {/* <!--Inner wrapper for spacing--> */}
      <div className="pt-32 pr-64 pl-14">
        {/* <!--ABOUT ME--> */}
        <section id="aboutSection">
          <div className="flex flex-col mx-2">
            <div className="glitch-wrapper-header">
              <div className="glitch-header-am" data-glitch-am="ABOUT ME">
                ABOUT ME
              </div>
            </div>
            {/* <!-- <div className="flex place-content-end text-6xl">ABOUT ME</div> --> */}
            <div className="text-justify text-sm leading-relaxed pl-16 pt-8">
              <span className="text-right block">
                Hey there! I'm Siyu, but feel free to call me Suzy.{" "}
              </span>
              <br />
              I am a final year undergraduate student with a strong passion for
              pursuing a career as a software developer. My journey into the
              world of technology began with exploring IoT development, but I
              quickly found my true calling in coding. This shift propelled me
              towards web development, immersing myself in the art of crafting
              logical code into beautiful and dynamic online experiences. It's
              this passion for coding that enables me to effortlessly untangle
              the complexities of technology with creativity and precision.
              <br />
              <br />
              What drives me most is the opportunity to harness technology for
              good. I aspire to create and develop solutions that make a
              tangible difference in people's lives. Each coding challenge I
              encounter pushes me to explore new possibilities and stretch my
              problem-solving abilities to the max.
              <br />
              <br />
              Away from the keyboard, you'll find me exploring fragrances as a
              perfume enthusiast, creating watercolor art, practising Muay Thai,
              and spending quality time with my adorable cat~
            </div>
          </div>
        </section>
        {/* <!--Projects--> */}
        <section id="projectSection">
          {/* <!--Projects Main Wrapper--> */}
          <div className="flex flex-col overflow-auto space-y-6 ml-10">
            {/* <!-- <div className="flex place-content-end text-6xl pr-4 mt-32">PROJECTS</div> --> */}
            <div className="glitch-wrapper-header">
              <div className="glitch-header-p mt-28" data-glitch-p="PROJECTS">
                PROJECTS
              </div>
            </div>
            {/* <!--Project 1--> */}
            {/* <div className="p-6 bg-slate-100 rounded-xl shadow-lg flex overflow-auto items-center space-x-2 mt-6 project1">
              <div>
                <div className="text-lg font-bold text-black pb-2">
                  TourEz (Hackathon: In Progress)
                </div>
                <div className="tech-stack hidden">
                  <div className="tag text-xxs leading-xxs">
                    <span>UI Path</span>
                    <span>Gen AI</span>
                  </div>
                </div>
                <div className="text-slate-500 leading-relaxed text-xs">
                  TourEz is an automation project that seamlessly blends Robotic
                  Process Automation (RPA) with Generative AI to create a
                  comprehensive travel application. It redefines the travel
                  experience, by covering the journey from initial planning to
                  the end of the trip, making it an accessible, enjoyable and
                  hassel-free travelling for everyone!
                </div>
              </div>
            </div> */}
            {/* <!--Project 2--> */}
            <div className="p-6 bg-slate-100 rounded-xl shadow-lg flex flex-col items-center space-x-2 mt-6 project3">
              <div className="flex justify-between w-full items-center">
                <div className="text-lg font-bold text-black pb-2 self-start">
                  AuChain
                </div>
                <div className="flex pb-2 place-content-end pr-4 h-8">
                  <a href="https://github.com/siyugg/AuChain" className="flex">
                    <span className="text-xs">Github</span>
                    <img
                      src={linkIcon}
                      alt="GitHub AuChain"
                      className="h-4 w-4 ml-2 transform"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full flex-wrap">
                <div className="tech-stack hidden self-start">
                  <div className="tag text-xxs leading-xxs">
                    <span>Javascript</span>
                    <span>React Native</span>
                    <span>Solidity</span>
                    <span>Truffle</span>
                    <span>Etherum (ERC 721)</span>
                  </div>
                </div>
                <div className="text-slate-500 leading-relaxed self-end text-xs">
                  A decentralized application (dApp) designed to revolutionize
                  the way we verify the authenticity of physical products. By
                  integrating blockchain technology, Authentic8 enables each
                  product to be tagged with a unique QR code, serving as a
                  digital passport throughout its lifecycle. From production to
                  the end user, this QR code allows for the secure and
                  transparent transfer of ownership, ensuring that consumers can
                  easily verify the authenticity of their purchases through
                  navigating its transaction history.
                </div>
              </div>
            </div>

            {/* <!--Project 3--> */}
            <div className="p-6 bg-slate-100 rounded-xl shadow-lg flex flex-col items-center space-x-2 mt-6 project3">
              <div className="flex justify-between w-full items-center">
                <div className="text-lg font-bold text-black pb-2 self-start">
                  Cinema Paradiso
                </div>
                <div className="flex pb-2 place-content-end pr-4 h-8">
                  <a
                    href="https://github.com/siyugg/Cinema-Paradiso"
                    className="flex"
                  >
                    <span className="text-xs">Github</span>
                    <img
                      src={linkIcon}
                      alt="GitHub Cinema Paradiso"
                      className="h-4 w-4 ml-2 transform"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full flex-wrap">
                <div className="tech-stack hidden self-start">
                  <div className="tag text-xxs leading-xxs">
                    <span>HTML5</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>PHP</span>
                    <span>mySQL</span>
                  </div>
                </div>
                <div className="text-slate-500 leading-relaxed self-end text-xs">
                  Cinema Paradiso is a user-friendly web application designed to
                  streamline the movie booking process for its visitors. It
                  offers a hassle-free experience for users to find and book
                  tickets to their favorite films. The application provides
                  real-time updates on showtimes, seat availability, and
                  pricing, ensuring movie enthusiasts can plan their cinema
                  visits with ease and convenience.
                </div>
              </div>
            </div>
            {/* <!--Proejct 4--> */}
            <div className="p-6 bg-slate-100 rounded-xl shadow-lg flex flex-col items-center space-x-2 mt-6 project4">
              <div className="flex justify-between w-full items-center ">
                <div className="text-lg font-bold text-black pb-2 self-start">
                  TaskWatch
                </div>
                <div className="flex pb-2 place-content-end pr-4 h-8">
                  <a
                    href="https://github.com/siyugg/TaskWatch"
                    className="flex"
                  >
                    <span className="text-xs">Github</span>
                    <img
                      src={linkIcon}
                      alt="GitHub TaskWatch"
                      className="h-4 w-4 ml-2 transform"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full flex-wrap">
                <div className="tech-stack hidden self-start">
                  <div className="tag text-xxs leading-xxs">
                    <span>HTML5</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                  </div>
                </div>
                <div className="text-slate-500 leading-relaxed self-end text-xs">
                  TaskWatch is an intuitive web application designed to elevate
                  time management skills by enabling users to track the time
                  spent on each task and monitor work efficiency. With the
                  ability to add multiple tasks and initiate a stopwatch for
                  each, this tool is perfect for individuals looking to enhance
                  their productivity and gain insights into how their time is
                  allocated, ultimately fostering better time management
                  practices and improving overall task performance.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Skills--> */}
        <section id="skillSection" className="text-right m-2 ml-10">
          {/* <!-- Skills Header --> */}
          {/* <!-- <div className="text-6xl mt-32">Skills</div> --> */}
          <div className="glitch-wrapper-header">
            <div className="glitch-header-s mt-20" data-glitch-s="SKILLS">
              SKILLS
            </div>
          </div>
          {/* <!-- Skills Container --> */}
          <div className="flex flex-wrap justify-center">
            {/* <!-- Intermediate Skills --> */}
            <div className="w-full md:w-1/2 pr-4">
              <div className="bg-slate-100 p-6 rounded-xl shadow-lg">
                <div className="text-lg font-semibold mb-2">Intermediate</div>
                <div className="text-xs">
                  HTML5, CSS (Tailwindcss), PHP, Python, C, AWS (IoT Core),
                  Figma
                </div>
              </div>
            </div>
            {/* <!-- Beginner Skills --> */}
            <div className="w-full md:w-1/2 pt-14">
              <div className="bg-slate-100 p-6 rounded-xl shadow-lg">
                <div className="text-lg font-semibold mb-2">Beginner</div>
                <div className="text-xs">
                  JavaScript, MySQL, React Native, Solidity (Truffle), MATLAB
                </div>
              </div>
            </div>
            {/* <!-- Still Learning --> */}
            <div className="w-full md:w-1/2 pr-4">
              <div className="bg-slate-100 p-6 rounded-xl shadow-lg">
                <div className="text-lg font-semibold mb-2">Still Learning</div>
                <div className="text-xs">
                  React, Node.js, AWS (EC2, S3), REST API, UIPath, Three.js
                </div>
              </div>
            </div>
            {/* <!-- Other Skills --> */}
            <div className="w-full md:w-1/2 pt-16">
              <div className="bg-slate-100 p-6 rounded-xl shadow-lg">
                <div className="text-lg font-semibold mb-2">Other Skills</div>
                <div className="text-xs">
                  Git, Agile Development, JIRA, Docker, Raspberry-Pi, Blockchain
                  (ETH), Ganache
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Closing--> */}
        <footer className="text-right pr-2 mt-36 mb-36">
          <p className="text-xs">&copy; 2024 Siyu Gao. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="flex right-0 w-[100vw] min-h-[100vh] animations">
      <LoadingScreen />
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;
