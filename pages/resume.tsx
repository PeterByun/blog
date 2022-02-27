import type { ReactElement } from "react";
import Layout from "../components/Layout";

import { H } from "../components-base/H";
import { P } from "../components-base/P";
import { Container } from "../components-base/Container";

const ProjectSummary = ({
  title,
  duration,
  teamDescription,
}: {
  title: string;
  duration: string;
  teamDescription: string;
}) => {
  return (
    <>
      <H level={2}>{title}</H>
      <P>개발기간 : {duration} </P>
      <P>인원 : {teamDescription}</P>
    </>
  );
};

const ProjectDescription = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Container className="container-3 margin-bottom-1">
        <H level={3}>{title}</H>
        {children}
      </Container>
    </>
  );
};

const Resume = () => {
  return (
    <div className="root">
      <H level={1}>경력</H>

      <Container className="container-2 margin-bottom-1">
        <H level={2}>코웨이</H>
        <P>기간: 2021.04 ~ 현재</P>
        <a href="https://www.coway.com/"> 회사 홈페이지</a>
        <P>
          환경가전업계 1위 코웨이 DX센터의 공통플랫폼 개발팀에서 프론트엔드
          개발자로써 회원인증 시스템 프론트엔드를 구축.
          <br />
          이후 조직개편으로 인해 클라이언트 개발팀에서 회원인증 프론트엔드
          유지보수, 개선 업무를 수행.
        </P>
      </Container>

      <Container className="container-2 margin-bottom-1">
        <H level={2}>디토닉</H>
        <P>기간: 2020.06 ~ 2021.03(총 10개월)</P>
        <a href="https://www.dtonic.io/home-kr"> 회사 홈페이지</a> <br />
        <br />
        시공간 빅데이터 처리엔진 Geo-Hiker를 개발한 스타트업 디토닉의 프론트엔드
        개발자로써 ESL협력사인 SoluM의 제품 개발에 참여.
      </Container>

      <Container className="container-2 margin-bottom-1">
        <H level={2}>NeuroTacker(인턴십)</H>
        <P>기간: 2018.08 ~ 2018.12(총 3개월)</P>
        <a href="https://www.neurotrackerx.com/"> 회사 홈페이지</a> <br />
        <br />
        인지능력을 향상시키는 게임을 개발하는 게임회사의 인턴으로써 신제품
        프로토타입 개발의 연구보조 업무를 수행하고 연구실의 상사로부터 추천서를
        받음.
      </Container>

      <hr />

      <H level={1}>프로젝트 경험</H>
      <Container className="container-2 margin-bottom-1">
        <ProjectSummary
          title="코웨이 회원인증"
          duration="2021.05.15 ~ 2021.09.15"
          teamDescription="프론트엔드 1명, 백엔드 3명"
        />

        <ProjectDescription title="프로젝트 소개">
          <P>
            기존의 파편화된 회원 체계를 통합하고 복잡한 회원가입 절차를 간소화
            하기위한 통합 회원 인증 시스템.
            <br />
            현재는 <a href="https://www.coway.com/">코웨이닷컴</a>,{" "}
            <a href="https://apps.apple.com/kr/app/coway-iocare/id1045884963">
              IoCare
            </a>
            에서 사용하고있다.
          </P>
          프로젝트의 UI는 아래 세개의 서비스로 구성되었다.
          <ul>
            <li>
              <a href="https://id.coway.com/login">인증서버</a>
            </li>
            <li>
              <a href="https://id.coway.com/sign-up">프론트엔드</a>
            </li>
            <li> JavaScript SDK </li>
          </ul>
          <strong>프론트엔드 개발자</strong>로써 이 중에서 프론트엔드,
          JavaScript SDK를 최초 구축하고 <br />
          운영 배포이후엔 세개의 서비스 모두 담당하여 유지보수.
        </ProjectDescription>

        <ProjectDescription title="주요 성과">
          <dl>
            <dt>안정적인 서비스</dt>
            <dd>
              Unit 테스트, E2E 테스트, DataDog RUM, 코드리뷰, 배포 계획 수립
              등을 통해 장애 발생(1회)과 장애의 영향을 최소화.
            </dd>

            <dt>사용자 경험 개선</dt>
            <dd>
              OTP 인증 과정 중 불필요한 단계를 삭제.
              <br />
              페이지 진입시 적절한 입력창에 focus 처리. <br />
              사이트를 키보드만으로 이용 가능하도록 개선.
            </dd>

            <dt>성능 최적화</dt>
            <dd>
              번들 크기 최적화, 적절한 캐싱 설정을 통해 사이트 로딩시간 단축.
              데스크탑 기준 평균 0.8초에서 0.4초로 감소 했으며, Google
              Lighthouse 성능 지표 80점에서 98점으로 향상.
            </dd>

            <dt>보안성 강화</dt>
            <dd>
              CSP, X-Frame-Options 등 보안과 관련된 설정을 최대한 엄격하게 적용.
            </dd>

            <dt>크로스 브라우징</dt>
            <dd>
              다양한 기기와 브라우저에서 동일한 동작을 하도록 개발. <br />
              카카오와 네이버의 웹뷰 환경, IE11도 지원.
            </dd>
          </dl>
        </ProjectDescription>

        <ProjectDescription title="사용된 기술">
          <ul>
            <li>Vue2(Composition API)</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Vuex</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>Ungap</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>DataDog RUM</li>
            <li>S3</li>
            <li>CloudFront</li>
            <li>GibhubActions</li>
          </ul>
        </ProjectDescription>
      </Container>

      <Container className="container-2">
        <ProjectSummary
          title="SoluM AIMS Dashboard"
          duration="2020.09 ~ 2021.01"
          teamDescription="프론트엔드 2명, 백엔드 4명, 퍼블리셔 1명"
        />

        <ProjectDescription title="프로젝트 소개">
          <P>
            롯데마트, 엘지 베스트샵, 셰포라 등 대형 매장의 전자 가격표를
            관리하는 프로그램.
            <br />
            <strong>프론트엔드 개발자</strong>로써 개발 중반에 투입되어 최초
            운영 배포까지 프로젝트를 담당.
            <br />
            <a href="https://solumesl.com/en/solution/aims">
              AIMS Dashboard의 소개 사이트
            </a>
          </P>
        </ProjectDescription>

        <ProjectDescription title="주요 성과">
          <dl>
            <dt> 개발 병목현상 해결 </dt>
            <dd>
              개발 일정 중반에 투입되었지만 개발 일정이 상당히 늦은 상황이여서
              아래 문제들을 식별하고 해결했다.
              <br />
              <br />
              <ol>
                <li>
                  백엔드 API 개발과 문서 공유가 늦어진다고 프론트엔드 개발을
                  진행하지 않았다.
                  <br />
                  ➡️ API 개발 담당자분께 개발중이신 API 응답의 대략적인 형식
                  공유를 부탁드려서
                  <br />
                  API연동 부분을 제외하고 미리 개발함으로써 해결.
                </li>

                <li>
                  이미 구현한 기능에 버그가 많아서 신규기능 개발의 발목을
                  잡았다.
                  <br />
                  ➡️ Mixin, custum directive, utility 모듈 제작을 통해서 코드
                  중복을 없애고
                  <br />
                  테스트를 도입하여 안정성을 향상시킴으로써 해결.
                </li>
              </ol>
            </dd>
            <dt> QA 전담</dt>
            <dd>
              개발 중반부터는 메인으로 대부분 기능을 개발하여 QA를 전담하였고,
              성공적으로 운영 배포를 마쳤다.
            </dd>
          </dl>
        </ProjectDescription>

        <ProjectDescription title="사용된 기술">
          <ul>
            <li>Vue2</li>
            <li>JavaScript</li>
            <li>Vuex</li>
            <li>Vue-Router</li>
            <li>Jest</li>
          </ul>
        </ProjectDescription>
      </Container>

      <hr />

      <H level={1}>기술</H>

      <Container className="container-2 margin-bottom-1">
        <H level={2}>Front-end</H>
        <ol>
          <li>JavaScript</li>
          <li>TypesScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>StyledComponent</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>ESLint</li>
          <li>PostCSS</li>
          <li>Vue</li>
          <li>React</li>
          <li>Vuex</li>
          <li>Redux</li>
          <li>VueRouter</li>
          <li>ReactRouter</li>
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
    </div>
  );
};

export default Resume;

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
