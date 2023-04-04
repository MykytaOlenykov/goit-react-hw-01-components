import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Section = styled.section`
  width: 300px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};
  text-align: center;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 0;
  width: 100%;
  color: ${props => props.theme.colors.primary};

  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 16px;
  line-height: 1.5;
`;

export const Percentage = styled.span`
  font-size: 20px;
  line-height: 1.5;
`;
