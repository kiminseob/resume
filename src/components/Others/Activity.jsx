import React from 'react';
import SC from '../styled/common';

function Activity() {
  return (
    <section>
      <div style={{ marginBottom: '1rem' }}>
        <SC.Company style={{ width: 'auto' }}>수상 및 활동</SC.Company>
      </div>

      <div>
        <ActivityItem
          date="2019.11"
          title="AI 빅스비 캡슐 챌린지 - 입상"
          links={[
            { type: 'github', url: 'https://github.com/revoiceStudio/private_bixby' },
            { type: 'notion', url: 'https://canyon-honey-f8b.notion.site/2019-09-2019-10-57a930f39b704cd1bfcfa6647451130d' }
          ]}
        />
        <ActivityItem
          date="2019.09"
          title="NUGU Play 공모전 - 우수상 (셀보이스)"
          links={[
            { type: 'notion', url: 'https://canyon-honey-f8b.notion.site/2019-07-2019-09-5bb063ad7f1a4eda81301065ade2bed7' }
          ]}
        />
        <ActivityItem
          date="2019.05"
          title="NUGU Play 공모전 - 우수상 (멀티 배팅 게임)"
          links={[
            { type: 'notion', url: 'https://canyon-honey-f8b.notion.site/LAST-BREAD-2019-02-2019-04-9db2593ec77b4b0a8b27576f0365f75b' }
          ]}
        />
        <ActivityItem
          date="2019.03"
          title="클라우드캠 API 공모전 - 우수상"
          links={[
            { type: 'github', url: 'https://github.com/kiminseob/cloudcam' }
          ]}
        />
        <ActivityItem
          date="2018.12"
          title="NUGU Play 공모전 - 최우수상 (항공권 검색)"
          links={[
            { type: 'github', url: 'https://github.com/kiminseob/nuguAir' },
            { type: 'notion', url: 'https://canyon-honey-f8b.notion.site/NUGU-AIR-2018-11-2020-05-bfaf89c465494bf390aa5afde6b97e91' }
          ]}
        />
        <ActivityItem
          date="2017.11"
          title="LG 스마트 센서 앱 공모전 - 장려상"
          links={[
            { type: 'github', url: 'https://github.com/kiminseob/LG-smart-ThinkQ' },
            { type: 'notion', url: 'https://canyon-honey-f8b.notion.site/Closet-Manager-2017-11-2017-12-f9d3f493fd1f41c694819878fc2818e7' }
          ]}
        />
        <ActivityItem date="2017" title="KT 모바일 퓨처리스트 활동" />
      </div>
    </section>
  );
}

function ActivityItem({ date, title, links }) {
  return (
    <div style={{ display: 'flex', marginBottom: '0.5rem', alignItems: 'center' }}>
      <div style={{ minWidth: '70px', fontSize: '0.9rem', color: '#888', fontWeight: 500 }}>
        {date}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.95rem', color: '#333', fontWeight: 400 }}>
          {title}
        </div>
        {links && links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <SC.Icon
              src={link.type === 'github' ? 'icon/github.png' : 'icon/notion.png'}
              style={{ width: '14px', height: '14px', opacity: 0.5, marginTop: '2px' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Activity;
