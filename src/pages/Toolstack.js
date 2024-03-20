import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiCodepen, DiSublime } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiCodesandbox,
  SiIntellijidea,
  SiWindows,
  SiTableau,
  SiPowerbi,
  SiGooglecolab,
  SiAnaconda,
  SiJupyter,
} from "react-icons/si";

function Toolstack() {
  const toolStacks = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiCodesandbox />, name: "CodeSandbox" },
    { icon: <DiCodepen />, name: "Codepen" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    { icon: <DiSublime />, name: "Sublime Text" },
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiGooglecolab />, name: "Google Colab" },
    { icon: <SiAnaconda />, name: "Anaconda" },
    { icon: <SiJupyter />, name: "Jupyter" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStacks.map((tool, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons" title={tool.name}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
