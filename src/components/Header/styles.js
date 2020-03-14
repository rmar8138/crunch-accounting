import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.xs};

  img {
    width: 12.5rem;
  }
`;
