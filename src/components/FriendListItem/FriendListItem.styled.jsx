import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  margin-right: 12px;
  height: 10px;
  width: 10px;
  border-radius: 50%;

  background-color: ${({ theme, status }) =>
    status ? theme.colors.statusOnline : theme.colors.statusOffline};
`;

export const Avatar = styled.img`
  margin-right: 12px;
  background-color: ${props => props.theme.colors.primaryBg};
  padding: 5px;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
`;
