import styled from '@emotion/styled';

export const Table = styled.table`
  max-width: 600px;
  width: 100%;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  & th {
    padding: 5px;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.secondaryBg};

    &:first-of-type {
      border-top-left-radius: 2px;
    }

    &:last-of-type {
      border-top-right-radius: 2px;
    }
  }

  & td {
    padding: 5px;
    background-color: ${props => props.theme.colors.primary};
  }

  & tbody {
    color: ${props => props.theme.colors.secondaryText};

    & tr:nth-of-type(2n) td {
      background-color: ${props => props.theme.colors.primaryBg};
    }

    & tr:last-of-type {
      & td:first-of-type {
        border-bottom-left-radius: 2px;
      }

      & td:last-of-type {
        border-bottom-right-radius: 2px;
      }
    }
  }
`;
