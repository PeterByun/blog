import type { ReactElement } from "react";
import Layout from "../components/Layout";

import { H } from "../components-base/H";
import { P } from "../components-base/P";
import { Span } from "../components-base/Span";
import { Container } from "../components-base/Container";

const HistoryDescription = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => {
  return (
    <div className="history-description">
      <strong>{title}</strong> <br />
      {description}
    </div>
  );
};

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
      <HistoryDescription
        title="개발기간"
        description={duration}
      ></HistoryDescription>
      <HistoryDescription
        title="담당업무"
        description={jobTitle ?? "프론트엔드 개발"}
      ></HistoryDescription>
      <HistoryDescription
        title="인원"
        description={teamDescription}
      ></HistoryDescription>
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
  jobDescription,
}: {
  name: string;
  companySiteUrl: string;
  description: string;
  duration: string;
  jobDescription: React.ReactNode;
}) => {
  return (
    <>
      <H level={2}>
        <a href={companySiteUrl}> {name} </a>
      </H>
      <HistoryDescription title="회사소개" description={description} />
      <HistoryDescription title="재직기간" description={duration} />
      <HistoryDescription title="담당업무" description={jobDescription} />
    </>
  );
};

const Resume = () => {
  return (
    <div className="resume-root">
      <H level={1}>경력사항</H>

      <Container className="container-2 margin-bottom-1">
        <CompanySummary
          name="코웨이"
          companySiteUrl="https://www.coway.com/"
          description="13년간 국내 업계 1위를 지켜왔고, 현재는 글로벌 시장에서 급속도로
          성장중인 환경가전 업체."
          duration="2021.04 ~ 현재"
          jobDescription={
            <>
              코웨이의 디지털 전환을 목표로 하는 DX센터에서 프론트엔드
              개발자로써 아래의 업무 수행.
              <ol>
                <li>
                  <strong>
                    통합회원 시스템의 프론트엔드를 구축하고 유지보수/운영/개선.
                  </strong>
                </li>
                <li>
                  <strong>실시간 코디매칭 서비스 고도화(내재화).</strong>
                </li>
              </ol>
            </>
          }
        />
      </Container>

      <Container className="container-2 margin-bottom-1">
        <CompanySummary
          name="디토닉"
          companySiteUrl="https://www.dtonic.io/home-kr"
          description="시공간 빅데이터 처리엔진 Geo-Hiker, ESL(Electronic Shelf Labeling System)을 판매하는 빅데이터 스타트업."
          duration="2020.06 ~ 2021.03 (총 10개월)"
          jobDescription={
            <>
              개발본부의 프론트엔드 개발자로써{" "}
              <a href="https://ko.wikipedia.org/wiki/%EC%A0%84%EC%9E%90%EC%8B%9D_%EB%A7%A4%EB%8C%80_%ED%91%9C%EC%8B%9C%EA%B8%B0">
                ESL
              </a>
              공급사인 <a href="https://solu-m.com/">SoluM</a>의{" "}
              <strong>
                ESL관리 프로그램(
                <a href="https://solumesl.com/en/solution/aims">AIMS</a>)의
                프론트엔드를 개발
              </strong>
              .
            </>
          }
        />
      </Container>

      <Container className="container-2 margin-bottom-1">
        <CompanySummary
          name="NeuroTacker(인턴십)"
          companySiteUrl="https://www.neurotrackerx.com/"
          description="운동선수들의 인지능력을 향상시키는 게임(훈련)을 개발하는 몬트리올의 게임회사."
          duration="2018.08 ~ 2018.12(총 3개월)"
          jobDescription={"신제품 프로토타입 개발을 위한 연구보조 업무를 수행."}
        />
      </Container>

      <hr />

      <H level={1}>프로젝트 경험</H>
      <Container className="container-2 margin-bottom-1">
        <ProjectSummary
          title="코웨이 실시간 코디매칭 서비스 고도화(내재화)"
          duration="2022.04.4 ~ 2021.04.22"
          teamDescription="프론트엔드 3명, 백엔드 2명"
        />

        <ProjectDescription title="프로젝트 소개">
          <P>
            고객이 거주하는 지역에 가까운 코디들에게 제품 구매에 관한 상담을
            실시간으로 신청할 수 있는 서비스. <br />
            기존에 협력사에서 개발을 완료하고 운영중이였지만, 새로운 기능을
            추가하거나 수정하기 어려운 문제가 있어서 <br />
            코웨이 내부 인력이 재개발을 진행.
            <br />
            <a href="https://matching.coway.com">기존 서비스 주소</a>
          </P>
        </ProjectDescription>

        <ProjectDescription title="성과">
          <div>
            리팩토링을 통한 유지보수성과 성능 개선
            <ol>
              <li>
                <span>
                  기존에 Vue2의 Options API로 작성된 서비스를 React Hook기반으로
                  Atomic Design 원칙을 적용하여 재작성.
                </span>
                <span>
                  <Span className="bg-success-3">효과</Span>
                  <ul>
                    <li>
                      컴포넌트를 작은 단위부터 조립하여 개발할 수 있데 됨으로써
                      재사용성 개선.
                    </li>

                    <li>
                      컴포넌트 내부에서 변화가 같이 일어나는 코드는 한 곳에
                      모아져서 유지보수성 개선.
                    </li>
                    <li>
                      공통 로직을 Hook으로 분리함으로써 중복되는 코드 감소.
                    </li>
                  </ul>
                </span>
              </li>

              <li>
                무거운 라이브러리(Vuetify, 다수의 애니메이션 라이브러리)로
                작성된 기능을 Request Animation Frame, SVG, CSS Animation을
                사용하여 재작성.
                <P>
                  <Span className="bg-success-3">효과</Span>: 최종적으로 번들
                  크기를 약 50% 정도 감소하여 느린 로딩속도 개선.
                </P>
              </li>
            </ol>
            <br />
          </div>
        </ProjectDescription>
      </Container>

      <Container className="container-2 margin-bottom-1">
        <ProjectSummary
          title="코웨이 통합회원"
          duration="2021.05.15 ~ 2021.09.15"
          teamDescription="프론트엔드 1명, 백엔드 3명, 기획자 2명"
        />

        <ProjectDescription title="프로젝트 소개">
          <P>
            기존의 파편화된 회원 체계를 통합하고 복잡한 회원가입 절차를 간소화
            하기위한 통합 회원 인증 시스템.
            <br />
            현재는 <a href="https://www.coway.com/">코웨이닷컴</a>,{" "}
            <a href="https://apps.apple.com/kr/app/%EC%BD%94%EC%9B%A8%EC%9D%B4%EB%8B%B7%EC%BB%B4/id1594310371">
              코웨이닷컴 앱
            </a>
            ,{" "}
            <a href="https://apps.apple.com/kr/app/coway-iocare/id1045884963">
              IoCare 앱
            </a>
            에서 사용하고있다.
          </P>
          프로젝트의 UI는 아래 세개의 서비스로 구성되었다.
          <ul>
            <li>
              <a href="https://id.coway.com/login">인증서버</a>
              <ul>
                <li>
                  로그인, 휴면 계정 해제, 휴대전화 중복 계정 처리, 간편로그인 등
                  기능 제공.
                </li>
              </ul>
            </li>
            <li>
              <a href="https://id.coway.com/sign-up">프론트엔드</a>
              <ul>
                <li>
                  회원가입, 회원전환, 아이디 찾기, 비밀번호 찾기, 내 정보 수정
                  등 기능 제공.
                </li>
              </ul>
            </li>
            <li>
              <P>JavaScript SDK </P>
              <ul>
                <li>
                  클라이언트에서 인증서버, 프론트엔드의 기능과 본인인증을
                  간편하게 사용할 수 있는 인터페이스를 제공.
                </li>
              </ul>
            </li>
          </ul>
          이 중에서 <strong>프론트엔드, JavaScript SDK를 최초 구축</strong>하고{" "}
          <br />
          출시 이후엔
          <strong>
            인증서버를 포함한 세개의 서비스 모두 담당하여 유지보수와 개선업무
          </strong>
          를 수행했다.
        </ProjectDescription>

        <ProjectDescription title="성과">
          <P>
            당시 출시 예정이던 코웨이닷컴에 통합회원 기능을 적시에, 안정적으로
            제공하여 <br />
            코웨이 디지털 전환의 발판을 마련하는데 기여. <br />
            출시 이후엔 모니터링을 통한 버그 제거, 기능 개선을 통해서 <br />
            온라인 고객에게 코웨이의 첫인상이라고 할 수 있는
            <strong>
              로그인, 회원가입 등 회원관련 기능에 대한 사용자 경험을 개선.
            </strong>
          </P>
        </ProjectDescription>
      </Container>

      <Container className="container-2">
        <ProjectSummary
          title="SoluM AIMS Dashboard"
          duration="2020.09 ~ 2021.01"
          teamDescription="프론트엔드 2명, 백엔드 4명, 퍼블리셔 1명, 디자이너 1명, 기획자 1명"
        />

        <ProjectDescription title="프로젝트 소개">
          <P>
            롯데마트, 엘지 베스트샵, 셰포라 등 매장의 전자 가격표를 관리하는
            프로그램.
            <br />
            개발 중반에 투입되어 개발/QA 대응/최초 배포까지 진행.
            <br />
            <a href="https://solumesl.com/en/solution/aims">
              AIMS Dashboard 공식 사이트
            </a>
          </P>
        </ProjectDescription>

        <ProjectDescription title="성과">
          <dl>
            <dt> 개발 병목현상 해결 </dt>
            <dd>
              개발 중반에 투입될 당시 일정이 상당히 촉박한 상황이여서 일정내에
              프로젝트를 완료하기 위해 아래 문제들을 식별하고 해결했다. <br />
              덕분에 AIMS는 적시에 출시되었고 현재는 전 세계의 셰포라, LG
              베스트샵, 홈플러스, 롯데마트 등 대형 유통업체들을 고객으로 서비스
              하고있다. <br />
              <ol>
                <li>
                  <P>
                    <Span className="bg-error-3">문제점</Span>: 기획, 디자인,
                    프론트엔드, 백엔드 등 프로젝트의 일부 과정에서 지연이
                    발생하여 프로젝트 전체 일정이 지연되는 현상.
                  </P>
                  <P>
                    <Span className="bg-success-3">해결방법</Span>: 프로젝트
                    관계자분들과 적극적으로 의사소통하여 우선순위가 높은데
                    지연되었거나, 식별되지 않은 작업을 찾아내고 <br />
                    담당자분들께 공유 드려서 병목현상 완화. <br />
                    미리 개발 가능한 UI를 식별하고 백엔드 개발자분들과 협업 하여
                    프론트엔드 작업 지연 예방.
                  </P>
                </li>
                <li>
                  <P>
                    <Span className="bg-error-3">문제점</Span>: 컴포넌트
                    재사용성이 부족하여 버그가 발생했을 때 수정해야할 코드가
                    많았고 프로그램의 동작을 예측하기 어려웠다.
                  </P>
                  <P>
                    <Span className="bg-success-3">해결방법</Span> Mixin, custum
                    directive, filter, 공통 모듈 개발, 컴포넌트 분리 등을 통해서
                    <strong>코드 중복을 최소화</strong>하고
                    <br />
                    <strong>유닛 테스트를 적용</strong>
                    하여 안정성을 향상시킴으로써 해결.
                  </P>
                </li>
              </ol>
            </dd>
          </dl>
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
    </div>
  );
};

export default Resume;

Resume.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
