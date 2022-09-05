import styled from "styled-components";

export const SuccessfulDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .iconbody {
    .icon {
      font-size: 200px;
      font-weight: 800;
      background-color: "#002953";
    }
  }

  .bodydetails {
    h2 {
      font-size: 42px;
      font-weight: 600;
      color: ${({ color }) => color.companyBackground};
    }
  }

  .footer {
    p {
      font-size: 18px;
      font-weight: 600;
      color: ${({ color }) => color.companyBackground};
    }
  }
`;
