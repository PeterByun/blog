import { ReactElement } from "react";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";

import { H } from "../components-base/H";
import { Container } from "../components-base/Container";

export default function Page() {
  const CanvasContact = dynamic(
    () => import("../components-pages/index/CanvasContact"),
    {
      ssr: false,
      loading: () => {
        return <div className="canvas-contact-loading"></div>;
      },
    }
  );

  return (
    <section className="index-root">
      <H level={2}>
        안녕하세요! <br />
        <br />
        안정적이고 편리한 서비스를 만들기위해 노력하는
        <br />
        <br />
        2년 경력의 프론트엔드 개발자 변동혁 입니다.
        <br />
        <br />
        Sephora, Macy's, Xiaomi 등 전세계의 유통업체에 공급된 전자가격표 관리
        시스템 AIMS의 프론트엔드와
        <br />
        <br />
        국내 1위 실물 구독 업체 코웨이의 회원/인증 시스템 프론트엔드를
        개발했습니다.
      </H>
      <br />

      <CanvasContact className="margin-bottom-1" />

      <Container className="container-2 contact-container">
        <H level={2}>연락처</H>

        <dl>
          <dt>전화번호</dt>
          <dd>
            <a href="tel:+8201095369050"> 01095369050</a>
          </dd>
          <dt>이메일</dt>
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
    </section>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
