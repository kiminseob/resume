import React from 'react';
import SC from './styled/common';

function Project() {
  return (
    <>
      <section>
        <SC.Subject>개인 프로젝트</SC.Subject>
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
        </SC.Row>
        <SC.Row>
          <SC.Column>
            <SC.Company>굿푸리</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>우리 회사 근처 맛집 등록 (데모 링크)</SC.RowHeader>
              <SC.Row>
                <a href="https://goodfoodlist.inseop.pe.kr" target="_blank">
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
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
              <SC.RowHeader>PT샵 웹페이지 (데모 링크)</SC.RowHeader>
              <SC.Row>
                <a href="https://forestgym.inseop.pe.kr" target="_blank">
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <SC.Stack>React, typescript, material-ui</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row>
      </section>
      <SC.Divider />
    </>
  );
}

export default Project;
