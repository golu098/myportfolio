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
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodesandbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodepen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSublime />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
    </Row>
  );
}

export default Toolstack;