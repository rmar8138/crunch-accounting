import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.xs};

  img {
    width: 12.5rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      width: 10.5rem;
    }
  }
`;
