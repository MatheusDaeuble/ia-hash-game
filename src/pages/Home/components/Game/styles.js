import styled from 'styled-components';
import { colors } from '../../../../styles';

export const Container = styled.div`
  margin: 10px;
  padding: ${({ size }) => size / 2.2}px;
  box-shadow: 0px 0px 3px 0px ${colors.gray};
  border-radius: 10px;
  background-color: ${colors.white};
  height: 200px;
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
