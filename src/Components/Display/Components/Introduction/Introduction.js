import React from "react";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";

// STYLED COMPONENTS
import {
  Container,
  SectionHeader,
  SkillsList,
  Skill,
  SkillTitle
} from "./IntroductionStyles";

const Introduction = () => {
  return (
    <Container>
      <SectionHeader>My Skills</SectionHeader>
      <SkillsList>
        <Skill>
          <FontAwesomeIcon icon={faReact} />
          <SkillTitle>ReactJS</SkillTitle>
        </Skill>
        <Skill>
          <FontAwesomeIcon icon={faNodeJs} />
          <SkillTitle>NodeJS</SkillTitle>
        </Skill>
        <Skill>
          <FontAwesomeIcon icon={faDatabase} />
          <SkillTitle>SQL</SkillTitle>
        </Skill>
        <Skill>
          <FontAwesomeIcon icon={faHtml5} />
          <SkillTitle>HTML5</SkillTitle>
        </Skill>
        <Skill>
          <FontAwesomeIcon icon={faCss3Alt} />
          <SkillTitle>CSS3</SkillTitle>
        </Skill>
        <Skill>
          <FontAwesomeIcon icon={faJsSquare} />
          <SkillTitle>JavaScript</SkillTitle>
        </Skill>
      </SkillsList>
    </Container>
  );
};
export default Introduction;
