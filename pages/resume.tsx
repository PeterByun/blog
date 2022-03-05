import type { ReactElement } from "react";
import Layout from "../components/Layout";

import { H } from "../components-base/H";
import { P } from "../components-base/P";
import { Span } from "../components-base/Span";
import { Container } from "../components-base/Container";

const ProjectSummary = ({
  title,
  jobTitle,
  duration,
  teamDescription,
}: {
  title: string;
  jobTitle?: string;
  duration: string;
  teamDescription: string;
}) => {
  return (
    <>
      <H level={2}>{title}</H>
      <P>개발기간 : {duration} </P>
      <P>담당 직무 : {jobTitle ?? "프론트엔드 개발"} </P>
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

const CompanySummary = ({
  name,
  companySiteUrl,
  description,
  duration,
}: {
  name: string;
  companySiteUrl: string;
  description: string;
  duration: string;
}) => {
  return (
    <>
      <H level={2}>
        <a href={companySiteUrl}> {name} </a>
      </H>
      <P>회사소개: {description}</P>
      <P>기간: {duration}</P>
    </>
  );
};

const Resume = () => {
  return (
    <div className="root">
      <H level={1}>경력</H>

      <Container className="container-2 margin-bottom-1">
        <CompanySummary
          name="코웨이"
          companySiteUrl="https://www.coway.com/"
          description="13년간 국내 업계 1위를 지켜왔고, 현재는 글로벌 시장에서 급속도로
          성장중인 환경가전 업체."
          duration="2021.04 ~ 현재"
        />

        <P>
          코웨이의 디지털 전환을 목표로 하는 DX센터에서 프론트엔드 개발자로써
          <br />
          <strong>
            회원인증 시스템의 프론트엔드를 구축하고 유지보수, 개선
          </strong>{" "}
          업무 수행.
        </P>
      </Container>

      <Container className="container-2 margin-bottom-1">
        <CompanySummary
          name="디토닉"
          companySiteUrl="https://www.dtonic.io/home-kr"
          description="시공간 빅데이터 처리엔진 Geo-Hiker를 개발한 스타트업."
          duration="2020.06 ~ 2021.03(총 10개월)"
        />
        <br />
        ESL(전자가격표시기)팀의 프론트엔드 개발자로써 (
        <a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9E%90%EC%8B%9D_%EB%A7%A4%EB%8C%80_%ED%91%9C%EC%8B%9C%EA%B8%B0">
          ESL
        </a>
        ) 공급사인
        <a href="https://solu-m.com/">SoluM</a>의{" "}
        <strong>
          ESL관리 프로그램(
          <a href="https://solumesl.com/en/solution/aims">AIMS</a>) 프론트엔드를
          개발
        </strong>
        .
      </Container>

      <Container className="container-2 margin-bottom-1">
        <CompanySummary
          name="NeuroTacker(인턴십)"
          companySiteUrl="https://www.neurotrackerx.com/"
          description="운동선수들의 인지능력을 향상시키는 게임(훈련)을 개발하는 몬트리올 소재의 게임회사."
          duration="2018.08 ~ 2018.12(총 3개월)"
        />
        신제품 프로토타입 개발의 연구보조 업무를 수행.
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
            현재는 <a href="https://www.coway.com/">코웨이닷컴</a>,&nbsp;
            <a href="https://apps.apple.com/kr/app/%EC%BD%94%EC%9B%A8%EC%9D%B4%EB%8B%B7%EC%BB%B4/id1594310371">
              코웨이닷컴 앱
            </a>
            ,&nbsp;
            <a href="https://apps.apple.com/kr/app/coway-iocare/id1045884963">
              IoCare 앱
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
          이 중에서 <strong>프론트엔드, JavaScript SDK를 최초 구축</strong>하고{" "}
          <br />
          운영 배포이후엔
          <strong>
            인증서버를 포함한 세개의 서비스 모두 담당하여 유지보수와 개선업무
          </strong>
          를 수행했다.
        </ProjectDescription>

        <ProjectDescription title="주요 성과">
          <dl>
            <dt>안정적인 서비스</dt>
            <dd>
              Unit 테스트, E2E 테스트, DataDog RUM, 코드리뷰, 배포 계획 수립
              등을 통해 <strong>장애 발생(1회)과 장애의 영향을 최소화.</strong>
            </dd>

            <dt>사용자 경험 개선</dt>
            <dd>
              <strong> OTP 인증 과정 중 불필요한 단계를 삭제</strong>.
              <br />
              페이지 진입시 적절한 입력창에 focus 처리. <br />
              <strong>사이트를 키보드만으로 이용 가능하도록 개선</strong>.
            </dd>

            <dt>성능 최적화</dt>
            <dd>
              번들 크기 최적화, 적절한 캐싱 설정을 통해 사이트 로딩시간 단축.
              데스크탑 기준 평균 0.8초에서 0.4초로 감소 했으며,
              <strong>
                Google Lighthouse 성능 지표 78점에서 98점으로 향상.
              </strong>
            </dd>

            <dt>보안성 강화</dt>
            <dd>
              CSP, X-Frame-Options 등 보안과 관련된 설정을 최대한 엄격하게 적용,
              AWS WAF를 사용하여 보안 강화.
            </dd>

            <dt>크로스 브라우징</dt>
            <dd>
              다양한 기기와 브라우저에서 동작 하도록 개발. <br />
              카카오와 네이버의 웹뷰 환경, IE11도 지원.
            </dd>

            <dt>GA를 이용한 이벤트 추적</dt>
            <dd>
              페이지별 사용자 접속, 주요 이벤트 수집을 GA로 수집하도록 제안하여
              도입.
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
            <li>UnGap</li>
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
            개발 중반에 투입되어 최초 운영 배포까지 프로젝트를 담당.
            <br />
            <a href="https://solumesl.com/en/solution/aims">
              AIMS Dashboard 공식 사이트
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
                  <P>
                    <Span className="bg-error-3">문제점</Span>: 백엔드 API
                    개발과 문서 공유가 늦어지는것을 이유로 프론트엔드 개발을
                    진행하지 않았다.
                  </P>
                  <P>
                    <Span className="bg-success-3">해결방법</Span>: API 개발
                    담당자분께 개발중이신 API 응답의 대략적인 형식 공유를
                    부탁드려서
                    <br />
                    <strong>API연동 부분을 제외하고 미리 개발</strong>함으로써
                    해결.
                  </P>
                </li>
                <li>
                  <P>
                    <Span className="bg-error-3">문제점</Span>: 이미 구현한
                    기능에 버그가 많아서 신규기능 개발의 발목을 잡았다.
                  </P>
                  <P>
                    <Span className="bg-success-3">해결방법</Span> Mixin, custum
                    directive, filter, utility 모듈 사용을 통해서
                    <strong>코드 중복을 최소화</strong>하고
                    <br />
                    유닛 테스트를 적용 하여 안정성을 향상시킴으로써 해결.
                  </P>
                </li>
              </ol>
            </dd>
            <dt> QA 대응 </dt>
            <dd>
              메인 프론트엔드 개발자로써 대부분 기능을 개발하였으므로 QA 또한
              전담했다. <br />
              이후 프로젝트 마감 일정에 맞추어서 배포까지 책임지고 완료했다.
            </dd>
          </dl>
        </ProjectDescription>

        <ProjectDescription title="사용된 기술">
          <ul>
            <li>Vue2(Options API)</li>
            <li>JavaScript</li>
            <li>Vuex</li>
            <li>Vue-Router</li>
            <li>Jest</li>
            <li>i18n</li>
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
    // TODO: 컴포넌트화를 하고 DUOAI도 적는다.
  );
};

export default Resume;

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
