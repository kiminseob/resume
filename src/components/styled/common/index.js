import styled from 'styled-components';

const SC = {};

SC.Header = styled.header`
  display: flex;
  justify-content: space-between;
`;



SC.HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

SC.IntroHeader = styled.h1`
  margin: 0 0 0.8rem 0;
  font-size: 1.8rem;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
  line-height: 1.3;
`;

SC.ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 35%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

SC.MyInfo = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

SC.Aside = styled.aside`
  white-space: pre-line;
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: #444;
`;

SC.H1 = styled.h1`
  margin: 0 0 1.2rem 0;
  font-size: 2.5rem;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.02em;
`;

SC.Bold = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
`;

SC.Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
`;

SC.Subject = styled.h1`
  margin: 0 0 1.5rem 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: #111;
  border-bottom: 3px solid #111;
  display: inline-block;
  padding-bottom: 0.2rem;
`;

SC.Company = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  width: 12rem;
  color: #111;
  flex-shrink: 0;
`;

SC.RowHeader = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #222;
`;


SC.ProjectSection = styled.div`
  margin-left: 1.5rem;
  padding-left: 1rem;
  border-left: 2px solid #eaecef;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

SC.ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

SC.Row = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

SC.FullRow = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

SC.Icon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: 0.5rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

SC.Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

SC.Stack = styled.div`
  font-size: 0.85rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #666;
  background-color: #f6f8fa;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  width: fit-content;
  margin-top: 0.5rem;
`;

SC.Divider = styled.div`
  background-color: #eaecef;
  height: 1px;
  margin: 2.5rem 0;
`;

SC.Wrapper = styled.div`
  margin-bottom: 0.75rem;
`;

SC.RowDivider = styled.div`
  background-color: #f1f3f5;
  height: 1px;
  margin: 1.2rem 0;
`;

SC.List = styled.li`
  font-size: 1rem;
  list-style-type: disc;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.3rem;
`;

SC.MarkerList = styled.li`
  font-size: 0.95rem;
  list-style-type: circle;
  margin-left: 1.2rem;
  margin-bottom: 0.6rem;
  font-weight: 400;
  color: #333;
  line-height: 1.5;
`;

SC.DividerList = styled.li`
  list-style-type: '- ';
  margin-left: 0.8rem;
  font-weight: 400;
  font-size: 0.95rem;
  color: #444;
`;

SC.DotList = styled.li`
  list-style-type: disc;
  margin-left: 1.2rem;
  font-weight: 400;
  font-size: 0.95rem;
  color: #444;
`;

export default SC;
