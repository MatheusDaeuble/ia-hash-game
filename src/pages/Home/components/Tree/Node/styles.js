import styled from 'styled-components';
import { colors } from '~/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: bold;
    margin-bottom: -10px;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 20px;
  padding: ${({ size }) => size / 2.2}px;
  box-shadow: 0px 0px 3px 0px ${colors.gray};
  border-radius: 10px;
  background-color: ${colors.white};
  align-items: center;
  z-index: 1;
  border: ${({ selected }) => (selected ? 'solid 4px red' : '')};
`;

export const Hash = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2px;
  background-color: ${colors.black};
  color: red;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  justify-content: center;
  background-color: ${colors.white};
  color: black;
  padding: ${({ size }) => size / 2}px;
  font-size: 150%;
`;

export const XStyled = styled.div`
  font-size: ${({ size }) => size / 2}px;
  color: ${colors.primary};
`;

export const OStyled = styled.div`
  font-size: ${({ size }) => size / 2}px;
  color: ${colors.danger};
`;
