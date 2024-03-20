import React from 'react';
import "./project.css";
import Footer from './Footer';
import { FaReact } from "react-icons/fa";
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import Github from "./Github";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";

import {
  SiHtml5,
  SiTailwindcss,
  // SiMaterialui,
  SiExpress,
  SiReactrouter,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiApifox,
  SiTableau,
  SiMicrosoftexcel,
  SiPython,
  SiAzuredataexplorer,
  SiGooglecolab,
  SiSqlite,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";

const Projects = () => {

  
      


  return (

    <>
     <h1 className="project-heading" style={{ textAlign: 'center' }}>
  Professional <strong style={{ color: 'purple' }}>Skillset </strong>
</h1>



<Techstack/>
<h1 className="project-heading" style={{ textAlign: 'center', color: 'purple' }}>
  <strong style={{ color: 'purple' }}>Tool</strong> I Use
</h1>


       
<Toolstack/>
<h1 className="project-heading" style={{ textAlign: 'center' }}>
  Days <strong style={{ color: 'purple' }}>I Code On <SiGithub/> </strong>
</h1>
<Github/>


      {/* </div> */}
      <div className='work-container'>

        <div className="section">
          <h1 style={{ textAlign: 'center', fontWeight: 800 }} className="a2">
            Projects
          </h1>
          <div className="allProjects">
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/c3C6FvF/Screenshot-2023-11-17-17-25-59.png"
                      alt="Study Notion"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Study Notion</h2>
                  <p>
                    StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content.
                    StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.


                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    <FaReact />
                    <SiReactrouter/>
                    <SiTailwindcss />
                    {/* <SiMaterialui /> */}
                  </div>

                  <div>
  <a
    href="https://study-notion-2.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/StudyNotionMERN"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>

                  
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/86Y723s/image.png"
                      alt="Dashboard-1-1"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2> Shoppy-Admin Dashboard </h2>

                  <p>
Developed a React-Tailwind dashboard featuring orders, employees, customers, and calendars, along with Kanban boards, rich text editors, and multiple chart types. Integrated user profile management, shopping cart, messaging, and notifications for enhanced functionality. This project demonstrates proficiency in React.js, Tailwind CSS, and data visualization techniques for comprehensive business solutions.</p>                  <div>
                  <SiHtml5 />

<DiCss3 />
<IoLogoJavascript />
<SiTailwindcss />
<SiReactrouter/>
<SiReact/>

                      
                  </div>

                  <div>
  <a
href='https://shopy-dashboard.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/Shopy_Dashboard"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>


   

            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/wWxfFfg/Screenshot-2024-01-28-00-57-44.png"
                      alt="Sight Stream"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Sight Stream App</h2>

                  <p>I've developed a comprehensive video calling chat app that seamlessly integrates features such as real-time messaging, high-quality video calls, and screen sharing. With a user-friendly interface and robust functionality, users can engage in dynamic conversations, making it a versatile platform for both personal and professional communication. Experience a smooth and immersive communication experience with our app's innovative features and reliable performance.                  </p>
                  <div>
                  <SiHtml5 />

                    <DiCss3 />
                    <IoLogoJavascript />
                    <SiTailwindcss />
                    <SiReactrouter/>
                    <SiReact/>
                    <SiApifox/>
                  </div>

                  <div>
  <a
                      href='https://sightstream.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/shivkant098/sightstream"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>

                        
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://github.com/golu098/Modern-HR-Dashboard/assets/95178381/0c4cebdd-ec2d-4ddb-a731-1dae8eed5588"
                      alt="Dashboard-1-1"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Human Resource Dashboard  </h2>

                  <p>
                  The Human Resource Dashboard provides a comprehensive overview of employee demographics and performance metrics within the organization. It visually represents data on gender distribution, marital status, and departmental distribution, enabling HR professionals to analyze workforce diversity and allocation. Additionally, the dashboard highlights monthly income for each employee, offering insights into salary distribution across different departments. Job satisfaction and performance ratings are also displayed, allowing HR managers to monitor employee engagement and productivity levels.             </p>
                  <div>
                      <SiTableau/>
                      <SiMicrosoftexcel/>
                      <SiMysql/>
                      <SiPython/>
                      <SiAzuredataexplorer/>
                      <SiGooglecolab/>
            
                      
                  </div>

                  <div>
  <a
href='https://github.com/golu098/Modern-HR-Dashboard/assets/95178381/0c4cebdd-ec2d-4ddb-a731-1dae8eed5588'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/Modern-HR-Dashboard"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>


            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/74rBs6M/Dashboard-1-1.png" alt="Dashboard-1-1"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>FinTech Dashboard  </h2>

                  <p>
                  Crafted in Tableau, my FinTech dashboard unlocks a treasure trove of financial insights for data analysts. It consolidates key metrics into a unified, interactive platform, empowering deeper exploration through intuitive visualizations. Unearth hidden trends and patterns, guiding data-driven decisions to optimize financial performance. Real-time updates ensure you're always informed, while clear data presentations foster collaborative discussions, empowering your team for success.

                     </p>
                  <div>
                      <SiTableau/>
                      <SiMicrosoftexcel/>
                      <SiSqlite/>
                      <SiPython/>
                      <SiAzuredataexplorer/>
                      <SiGooglecolab/>

                      
                  </div>

                  <div>
  <a
                      href='https://drive.google.com/file/d/1QaudCXwcwZdZAfA1trtCud_cNieq5njf/view?usp=sharing'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/FinTech-Dashboard"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>

            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/Ry5KCY5/image.png"
                      alt="Dashboard-1-1"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2> GrabbGrove </h2>

                  <p>
                  GrabbGrove is an innovative e-commerce platform offering a wide range of clothing for women, men, and children. With seamless navigation, customers can browse through our diverse collections and easily add items to their cart. Our secure checkout process ensures a smooth payment experience, providing multiple payment options for convenience. Stay updated with the latest trends and promotions by subscribing to our newsletter. For personalized recommendations and order tracking, create an account with us and enjoy the benefits of hassle-free shopping. Whether it's fashion for the whole family or convenient shopping features, GrabbGrove has you covered.</p>
                  <div>
                  <SiHtml5 />

<DiCss3 />
<IoLogoJavascript />
<SiTailwindcss />
<SiReactrouter/>
<SiReact/>
<SiApifox/>

                      
                  </div>

                  <div>
  <a
href='https://assignment-two-chi.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
    href="https://github.com/golu098/grabbGrove"
    target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>
           
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/0KCTSNK/Screenshot-2023-11-17-17-35-54.png"
                      alt="Modern-Weather-App"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Modern Weather App</h2>
                  <p>Developed a weather application by integrating an open API, showcasing real-time humidity data and a comprehensive 10-day weather forecast.
                    Created a distinctive visual representation of weather data by integrating color variations while ensuring accurate data integration.
                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                  </div>
                  <div>
  <a
                      href='https://modern-weather-app.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/Modern_weather_app"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>


            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                {/* <div className="project_videocontainer"> */}
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/fF8pMXn/Screenshot-2024-01-10-21-58-43.png"
                      alt="organic store"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Vidyarthi Khata</h2>
                  <p>
                    Developed a web application enabling users to efficiently monitor and track their expenses. Implemented intuitive features for easy expense management, providing users with a seamless platform to oversee and analyze their financial activities in real-time.
                    Empowering financial control with a comprehensive expense monitoring web application.


                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <SiTailwindcss />
                  </div>
                  <div>
  <a
                      href="https://vidyarthi-khata.vercel.app/"
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/vidyarthi-khata"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>

            {/* <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>DropBox Clone -Backend</h2>
                  <p>
                    Backend API for a google drive like app built using NodeJS,
                    Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                    operations for users, files and folders.
                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    <a
                      href="https://drive-system.herokuapp.com/user/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        URL for the API
                      </span>
                    </a>
                    <a
                      href="https://github.com/imbickydutta/file-system-backend"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/3CGCfSK/Screenshot-2024-01-10-21-45-27.png"
                      alt="organic store"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Organic Store</h2>
                  <p>
                  Developed a dynamic and user-friendly web application for an organic store, offering a diverse range of products including fresh vegetables, fruits, juices, and handmade crafts. Implemented features such as product categorization, user authentication, and an intuitive shopping cart system, enhancing the overall user experience. Employed modern web technologies to create a seamless and visually appealing platform for users to explore and purchase organic and artisanal items.
                  </p>
                  <div>
                  <SiHtml5 />
                    <DiCss3 />
                    <SiTailwindcss />
                 <SiReact/>
                 <SiReactrouter/>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                     </div>
                     <div>
  <a
                      href='https://organicstore-two.vercel.app/'
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/test-1"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                      alt="PulsePlus-Clone"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>PulsePlus Clone</h2>
                  <p>
                  PulsePlus revolutionizes healthcare access through its E-commerce platform, facilitating the seamless purchase of medicines online. Beyond just a pharmaceutical hub, users can consult with healthcare professionals and conveniently book diagnostic tests at nearby laboratories. With a user-friendly interface and robust features, PulsePlus aims to enhance the accessibility and efficiency of healthcare services, bringing the pharmacy, doctor's consultation, and diagnostic testing all under one digital roof.                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                    <SiTailwindcss />
                  </div>
                  <div>
  <a
                      href="https://pulseplus.vercel.app/"
                      target="_blank"
    rel="noreferrer"
  >
    <button type="button" class="btns1 green">
    <CgWebsite 
 className="github-icon" />
See this Live
    </button>
  </a>
  <a
                      href="https://github.com/golu098/pulseplus"
                      target="_blank"
    rel="noreferrer"
  >
    {/* &nbsp;&nbsp;&nbsp; */}
        <button type="button" class="btns1 green">
        <  BsGithub
 className="demo-icon"/>

       View Code
    </button>
  </a>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}


export default Projects;
