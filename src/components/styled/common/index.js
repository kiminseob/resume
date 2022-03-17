import styled from 'styled-components';

const SC = {};

SC.Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

SC.MyInfo = styled.div`
  font-size: 0.8rem;
`;

SC.Aside = styled.aside`
  white-space: pre-line;
  margin: 0.8rem 0;
`;

SC.H1 = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 2rem;
`;

SC.Subject = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 1.8rem;
`;

SC.Company = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  width: 11rem;
`;

SC.Job = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
`;

SC.RowHeader = styled.h3`
  margin: 0.3rem 0 0 0;
  font-size: 1.05rem;
`;

SC.Row = styled.div`
  display: flex;
`;

SC.FullRow = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
`;

SC.Icon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
`;

SC.Column = styled.div`
  display: flex;
  flex-direction: column;
`;

SC.Stack = styled.i`
  font-size: 0.8rem;
  letter-spacing: -0.3px;
  line-height: 2;
  color: gray;
`;

SC.Divider = styled.div`
  background-color: #f1f3f5;
  height: 2px;
  margin: 2rem 0;
`;

SC.List = styled.li`
  list-style-type: '• ';
`;

SC.MarkerList = styled.li`
  list-style-type: '✓ ';
  margin-left: 0.7rem;
`;

export default SC;
