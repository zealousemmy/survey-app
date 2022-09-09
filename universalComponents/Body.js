import styled from "styled-components";

export const Body = styled.div`
    .header {
        color: ${({ color }) => color.Gold};
        padding: 5px 5px;
        margin: 5px 0px;

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
