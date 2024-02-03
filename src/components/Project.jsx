import React from 'react';
import SC from './styled/common';

function Project() {
  return (
    <>
      <SC.Divider />
      <section>
        <SC.Subject>개인 프로젝트</SC.Subject>
        {/* <SC.Aside>연습</SC.Aside>
        <SC.Row>
          <SC.Column>
            <SC.Company>To-Do List</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>할일 목록 작성 페이지</SC.RowHeader>
              <SC.Row>
                <a
                  href="https://github.com/kiminseob/react-todo-list-step1/tree/inseop-mobx"
                  target="_blank"
                >
                  <SC.Icon src="icon/github.png" />
                </a>
                <a
                  href="https://kiminseob.github.io/react-todo-list-step1/"
                  target="_blank"
                >
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <SC.Stack>React, javascript, mobx</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row>
        <SC.Row>
          <SC.Column>
            <SC.Company>Movie List</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>영화 목록 페이지</SC.RowHeader>
              <SC.Row>
                <a
                  href="https://github.com/kiminseob/react_movie_app"
                  target="_blank"
                >
                  <SC.Icon src="icon/github.png" />
                </a>
                <a
                  href="https://kiminseob.github.io/movieql-client"
                  target="_blank"
                >
                  <SC.Icon src="icon/expand.png" />
                </a>
                <a
                  href="https://kiminseob.github.io/react_movie_app"
                  target="_blank"
                >
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <SC.Stack>React, javascript, GraphQL, Apollo React</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row> */}
        {/* <SC.Aside>사이드 프로젝트</SC.Aside> */}
        <SC.Row>
          <SC.Column>
            <SC.Company>굿푸리</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>회사 근처 맛집 등록 사이트</SC.RowHeader>
              <SC.Row>
                <a href="https://goodfoodlist.inseop.pe.kr" target="_blank">
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <SC.Description>
                음식점에 대한 평가 및 비용을 기록하는 사이트 입니다.
              </SC.Description>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, typescript, mobx</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row>
        <SC.Row>
          <SC.Column>
            <SC.Company>포레스트짐</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>PT샵 웹 페이지</SC.RowHeader>
              <SC.Row>
                <a href="https://forestgym.inseop.pe.kr" target="_blank">
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <SC.Description>
                친구가 운영하는 1:1 pt샵의 웹 사이트를 만들어주기 위해 개발하고
                있습니다.
              </SC.Description>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, typescript, material-ui</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row>
        <SC.Divider />
      </section>
    </>
  );
}

export default Project;
