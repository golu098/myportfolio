import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiOpensource,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiGithub,
  DiBootstrap,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiReactrouter,
  SiReacthookform,
  SiNodemon,
  SiNodedotjs,
  SiExpress,
  SiFigma,
} from "react-icons/si";

import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techStacks = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiBootstrap />, name: "Bootstrap" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiReactrouter />, name: "React Router" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <DiGithub />, name: "GitHub" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStacks.map((tech, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons" title={tech.name}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
