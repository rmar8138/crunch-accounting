import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 79.5vh;
  min-width: 60rem;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 1px;
  z-index: 1;
  overflow: scroll;

  button {
    position: fixed;
    top: ${({ theme }) => theme.spacing.md};
    right: ${({ theme }) => theme.spacing.md};
    height: 20px;
    width: 20px;
    padding: 0;
    background-color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: none;
    }

    img {
      height: 15px;
      width: 15px;
    }
  }

  ul {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50%;
    display: flex;
    margin: ${({ theme }) => `${theme.spacing.sm} 0`};

    p {
      width: 50%;
    }

    p.field {
      text-align: right;
      margin-right: ${({ theme }) => theme.spacing.lg};
      color: ${({ theme }) => theme.color.darkGrey2};
    }

    p.value {
      text-align: left;
    }

    &.description {
      width: 100%;

      p.field {
        width: 25%;
      }

      p.value {
        width: 75%;
      }
    }
  }

  .modalHeader {
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    h2 {
      color: ${({ theme }) => theme.color.black};
      margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    p {
      color: ${({ theme }) => theme.color.darkGrey2};
    }
  }
`;
