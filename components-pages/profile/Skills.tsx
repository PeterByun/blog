import { H } from "../../components-base/H";
import { Container } from "../../components-base/Container";

export const Skills = () => {
  return (
    <>
      <H level={1}>기술</H>

      <Container className="container-2 margin-bottom-1">
        <H level={2}>Front-end</H>
        <ol>
          <li>JavaScript</li>
          <li>TypesScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Emotion</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>ESLint</li>
          <li>Vue</li>
          <li>React</li>
          <li>Vuex</li>
          <li>Redux</li>
          <li>Jest</li>
          <li>Cypress</li>
          <li>i18n</li>
        </ol>
      </Container>

      <Container className="container-2 margin-bottom-1">
        <H level={2}>DevOps</H>
        <ol>
          <li>Linux</li>
          <li>AWS S3</li>
          <li>AWS CloudFront</li>
          <li>AWS WAF</li>
          <li>AWS EC2</li>
          <li>Github Actions</li>
        </ol>
      </Container>
    </>
  );
};
