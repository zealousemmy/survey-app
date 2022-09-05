import styled from "styled-components";

export const Body = styled.div`
    .header {
        color: ${({ color }) => color.Gold};
        padding: 10px 5px;
        margin: 10px 0px;

        h1 {
            font-size: 24px;
            font-weight: 800;
            font-family: "Poppins";
        }

        p {
            font-weight: 500;
        }
    }
`;
