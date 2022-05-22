import { H } from "../../components-base/H";
import { Container } from "../../components-base/Container";

const SkillLogo = (props: { fileName: string }) => {
  return (
    <img
      className="skill-logo"
      src={`/assets/icons/skills/${props.fileName}`}
      alt={props.fileName}
      width="100"
      height="100"
    />
  );
};

export const Skills = () => {
  return (
    <>
      <H level={1}>기술</H>

      <H level={2}>Front-end</H>

      <Container className="skills-container container-1 margin-bottom-1">
        <SkillLogo fileName="babel.svg" />
        <SkillLogo fileName="css-3.svg" />
        <SkillLogo fileName="html-5.svg" />
        <SkillLogo fileName="cypress.svg" />
        <SkillLogo fileName="eslint.svg" />
        <SkillLogo fileName="github.svg" />
        <SkillLogo fileName="javascript.svg" />
        <SkillLogo fileName="typescript.svg" />
        <SkillLogo fileName="vue.svg" />
        <SkillLogo fileName="react.svg" />
        <SkillLogo fileName="webpack.svg" />
        <SkillLogo fileName="jest.svg" />
        <SkillLogo fileName="emotion.png" />
        <SkillLogo fileName="vue-i18n.png" />
      </Container>

      <H level={2}>DevOps</H>
      <Container className="skills-container container-1 margin-bottom-1">
        <SkillLogo fileName="linux-tux.svg" />
        <SkillLogo fileName="github-actions.svg" />
        <SkillLogo fileName="aws-cloudfront.svg" />
        <SkillLogo fileName="aws-ec2.svg" />
        <SkillLogo fileName="aws-s3.svg" />
        <SkillLogo fileName="aws-waf.svg" />
      </Container>
    </>
  );
};
