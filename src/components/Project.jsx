import React from 'react';
import SC from './styled/common';

function Project() {
  return (
    <>
      <SC.Divider />
      <section>
        <SC.Subject>개인 프로젝트</SC.Subject>
        <SC.Row>
          <SC.Column>
            <SC.Company>Support Cone</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>창작자를 위한 후원 플랫폼</SC.RowHeader>
              <SC.Row>
                <a href="https://support-cone.vercel.app" target="_blank">
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <SC.Description>
                창작자가 팬들로부터 간편하게 후원을 받고 소통할 수 있는
                플랫폼입니다. 카카오페이를 연동하여 간편 결제를 지원하며,
                창작자별 맞춤형 페이지를 제공합니다.
              </SC.Description>
            </SC.Row>
            <SC.Row>
              <SC.Stack>Next.js, TypeScript, Tailwind CSS, MongoDB</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row>
        <SC.Divider />
      </section>
    </>
  );
}

export default Project;
