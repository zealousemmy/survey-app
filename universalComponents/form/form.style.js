import styled from "styled-components";

export const FormDiv = styled.div`
    .textbody {
        margin: 10px 0px;
        padding: 10px 15px;

        .textclass {
            width: 100%;
            .textitem {
                width: 100%;
            }

            .errorcheck {
                width: 100%;
                color: red;
                text-align: left;
            }
        }
    }

    .submitbody {
        margin: 40px 0px 0px 0px;
        padding: 10px 0px;
        .submitclass {
            .submititem {
                /* width: 20%; */
                font-weight: 800;
            }
        }
    }

    .radiobody {
        margin: 5px 0px;
        padding: 5px 15px;
        text-align: left;
    }

    .submitradiobody {
        margin: 20px 0px 0px 0px;
        padding: 10px 0px;
        .submitradioclass {
            .submitradioitem {
                font-weight: 800;
            }
        }
    }
`;
