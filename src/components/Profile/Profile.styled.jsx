import styled from '@emotion/styled';

export const UserCard = styled.div`
  width: 300px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Avatar = styled.img`
  margin-bottom: 30px;
  width: 100px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.secondaryBg};
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryText};
`;

export const Tag = styled.p`
  margin-bottom: 8px;
  line-height: 1.5;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Location = styled.p`
  line-height: 1.5;
  font-size: 16px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  background-color: ${props => props.theme.colors.primaryBg};
  border-top: 1px solid rgb(220, 220, 220);

  :not(:last-child) {
    border-right: 1px solid rgb(220, 220, 220);
  }
`;

export const Label = styled.span`
  margin-bottom: 4px;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondaryText};
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5;
  color: ${props => props.theme.colors.primaryText};
`;
