import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70vh;
  margin: auto;
  position: relative;
  margin-bottom: 30px;

  @media screen and (max-width: 920px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
