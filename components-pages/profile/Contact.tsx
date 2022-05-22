import { H } from "../../components-base/H";
import { Container } from "../../components-base/Container";

export const Contact = () => {
  return (
    <Container className="container-2 contact-container">
      <H level={2}>연락처</H>

      <dl>
        <dt>Phone</dt>
        <dd>
          <a href="tel:+8201095369050"> 01095369050</a>
        </dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto: peter1035k@gmail.com"> peter1035k@gmail.com</a>
        </dd>
        <dt>Github</dt>
        <dd>
          <a href="https://github.com/PeterByun">
            https://github.com/PeterByun
          </a>
        </dd>
      </dl>
    </Container>
  );
};
