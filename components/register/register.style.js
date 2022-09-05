import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color.primary};
  padding: 20px;
  width: 50%;
  height: 60vh;
  margin: auto;
  border-radius: 8px;

  @media screen and (max-width: 920px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
