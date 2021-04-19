import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  flex-direction: column;

  margin: 10px;
  border-radius: 10px;
  align-items: center;
  z-index: 1;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 10px 30px;
  border-radius: 10px;
  align-items: center;
  z-index: 1;
`;

export const Status = styled.div`
  display: flex;
  margin: 10px;
  border-radius: 10px;
  align-items: center;
  z-index: 1;

  h1 {
    font-size: 23px;
  }
`;
