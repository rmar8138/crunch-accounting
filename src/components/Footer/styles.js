import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.lightGrey1};
  color: ${({ theme }) => theme.color.darkGrey1};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  display: flex;
  justify-content: space-between;

  a {
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.color.darkGrey2};
    }
  }

  ul {
    display: flex;

    li {
      &:not(:last-child) {
        margin-right: ${({ theme }) => theme.spacing.md};
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};

    ul {
      margin-top: ${({ theme }) => theme.spacing.sm};
    }
  }
`;
