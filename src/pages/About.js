import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faStar, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './about.css';
import Footer from './Footer';
import Carousel from './Slide';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'black', color: 'white' }
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'black', color: 'white' }
};

const About = () => {
  const timeline = [
    {
      icon: workIcon,
      date: 'Aug 2023-Oct 2023',
      title: 'SDE-Frontend',
      subtitle: 'Revolute Tech',
      desc: 'My primary responsibilities included translating UI/UX design wireframes into actual code, ensuring a seamless and visually appealing user experience.'
    },
    {
      icon: workIcon,
      date: 'Jan 2023-Jul 2023',
      title: 'React Developer',
      subtitle: 'TheTechBridge',
      desc: 'During my internship, I worked on the project Version 2 for Educase where I played a crucial role in developing the web panel using REACTJS. I was responsible for creating and implementing a Custom Hook and managed to single-handedly complete the project. My focus on optimizing the applications performance ensured a seamless and efficient user experience.'
    },
    {
      icon: workIcon,
      date: 'Jul 2022-Nov 2022',
      title: 'Cyber Security Intern',
      subtitle: 'Olcademy',
      desc: 'Spearheaded cybersecurity initiatives as an intern at Olcademy, focusing on securing the payment infrastructure and entire website against hacking threats and malware attacks.'
    },
    {
      icon: workIcon,
      date: 'Nov 2021 - Feb 2022',
      title: 'Project Manager Intern',
      subtitle: 'Olcademy',
      desc: 'Orchestrated and effectively supervised a team specializing in Software Testing and Cyber Security during the internship tenure. Directed and optimized team performance, implementing strategies that significantly increased efficiency and productivity. Maintained consistent communication with the senior management team, providing regular project updates and swiftly addressing any concerns or hurdles that arose.'
    },
    {
      icon: workIcon,
      date: 'Oct 2020 - Nov 2020',
      title: 'Web Developer Intern',
      subtitle: 'Sarp MindFire Pvt.Ltd',
      desc: 'Spearheaded frontend development tasks as a Web Developer intern, contributing to the creation of user-centric interfaces. Demonstrated proficiency in handling two pivotal projects: the development of a Legal Advisory platform and a School Website, ensuring a seamless user experience. Conducted rigorous testing protocols to validate website functionalities, guaranteeing optimal performance and user-friendliness.'
    },
    { icon: starIcon } // Assuming this is a separator or placeholder
  ];

  return (
    <>
      <div>
        <div className='about-intro'>
          <div className='about-img'>
            <img src="https://media4.giphy.com/media/Vnk8f29XU6GSZK8uGJ/giphy.gif" alt="img" />
          </div>
          <div className='about-text'>
            <div className='box1'>
              <p className='text1'>
                Hi! I am a Full Stack Developer with expertise in building scalable web applications. I have hands-on experience in designing, developing, and deploying software solutions using various programming languages, including Python, Java, and JavaScript. Additionally, I have a solid understanding of Machine Learning algorithms and their implementation in real life projects. As a Full Stack Developer, I have a strong foundation in Data Structures and Algorithms, which I have implemented using C++. With my knowledge, I can efficiently design and develop scalable solutions for complex problems.
                I have participated in multiple hackathons, where I have honed my skills in rapid prototyping, problem-solving, and collaboration. I am adept at developing innovative solutions within tight timeframes, using a variety of programming languages and tools.
              </p>
            </div>
          </div>
        </div>

        <div className='educational'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="Yearly-timeline">
                  <div className="timeline">
                    <div className='edu1'>
                      <h1>Education</h1>
                    </div>
                    <a href="https://www.cuchd.in/" className="timeline-content">
                      <div className="timeline-icon"><FontAwesomeIcon icon={faInstagram} /></div>
                      <h3 className="title">2021-24</h3>
                      <h4>Chandigarh University</h4>
                      <p className="description">Bachelor of Engineering in Computer Science and Engineering</p>
                    </a>
                  </div>

                  <div className="timeline">
                    <a href="https://www.gpp7.org.in/" className="timeline-content">
                      <div className="timeline-icon"><FontAwesomeIcon icon={faTwitter} /></div>
                      <h3 className="title">2018-21</h3>
                      <h4>Diploma in Computer Science & Engineering</h4>
                    </a>
                  </div>

                  <div className="timeline">
                    <a href="http://www.shivaminternationalschool.com/index.html" className="timeline-content">
                      <div className="timeline-icon"><FontAwesomeIcon icon={faFacebook} /></div>
                      <h3 className="title">2009-2018</h3>
                      <h4>Primary and Secondary Education</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='experience'>
          <div className="App">
            <div className='exp'>
              <h1>Experience</h1>
            </div>
            <VerticalTimeline>
              {timeline.map((t, i) => {
                const contentStyle = t.icon.iconStyle || { background: 'white', color: 'black' };
                const arrowStyle = i === 0 ? { borderRight: '7px solid white' } : undefined;

                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={contentStyle}
                    contentArrowStyle={arrowStyle}
                    date={t.date}
                    icon={t.icon.icon}
                    iconStyle={t.icon.iconStyle}
                  >
                    {t.title ? (
                      <>
                        <h3 className="vertical-timeline-element-title">{t.title}</h3>
                        {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
                        {t.desc && <p>{t.desc}</p>}
                      </>
                    ) : (
                      undefined
                    )}
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <div className='exp'>
        <h1>Hackathons Gallery</h1>
        <Carousel />
      </div>
      {/* <div className='exp'>
        <h1>Certificate Gallery</h1>
        <Carousel2 />
      </div> */}
    </>
  );
}

export default About;
