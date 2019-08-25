import React from 'react';

// STYLED COMPONENTS
import {
    Container,
    SectionHeader,
    SkillsList,
    Skill
  } from './IntroductionStyles';

const Introduction = () => {
    return (
        <Container>
            <SectionHeader>My Skills</SectionHeader>
            <SkillsList>
                <Skill>ReactJS</Skill>
                <Skill>NodeJS</Skill>
                <Skill>PostgreSQL</Skill>
                <Skill>HTML5</Skill>
                <Skill>CSS3</Skill>
                <Skill>Javascript</Skill>
            </SkillsList>
        </Container>
    )
}
export default Introduction;