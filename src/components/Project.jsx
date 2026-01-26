import React from 'react';
import SC from './styled/common';
import { projects } from '../data/projects';

function Project() {
  return (
    <>
      <SC.Divider />
      <section>
        <SC.Subject>개인 프로젝트</SC.Subject>

        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '3rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <SC.Company style={{ width: 'auto' }}>{project.title.split(' - ')[0]}</SC.Company>
            </div>

            <SC.ProjectSection>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <SC.ProjectTitle>{project.title}</SC.ProjectTitle>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <SC.Icon src="icon/expand.png" />
                  </a>
                )}
              </div>

              <SC.Wrapper>
                <SC.Stack>{project.stack}</SC.Stack>
              </SC.Wrapper>

              <SC.Wrapper>
                <ul>
                  <SC.List>
                    <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                  </SC.List>
                  {project.description.map((desc, i) => (
                    <SC.MarkerList key={i}>{desc}</SC.MarkerList>
                  ))}
                </ul>
              </SC.Wrapper>

              <SC.Wrapper>
                <ul>
                  <SC.List>
                    <SC.Wrapper>팀 구성</SC.Wrapper>
                  </SC.List>
                  <SC.MarkerList>{project.team}</SC.MarkerList>
                </ul>
              </SC.Wrapper>

              <SC.Wrapper>
                <ul>
                  <SC.List>
                    <SC.Wrapper>주요 업무 및 문제 해결</SC.Wrapper>
                  </SC.List>
                  {project.role.map((role, i) => (
                    <SC.MarkerList key={i}>{role}</SC.MarkerList>
                  ))}
                </ul>
              </SC.Wrapper>

              <SC.Wrapper>
                <ul>
                  <SC.List>
                    <SC.Wrapper>성과</SC.Wrapper>
                  </SC.List>
                  {project.result.map((res, i) => (
                    <SC.MarkerList key={i}>{res}</SC.MarkerList>
                  ))}
                </ul>
              </SC.Wrapper>
            </SC.ProjectSection>
          </div>
        ))}
      </section>
    </>
  );
}

export default Project;
