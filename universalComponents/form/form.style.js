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
        position: absolute;
        text-align: center;
        width: 100%;
        bottom: 0;
        /* margin: 40px 0px 0px 0px; */
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
        width: 100%;
        position: absolute;
        bottom: 0;
        margin: 20px 0px 15px 0px;
        padding: 10px 0px;
        .submitradioclass {
            .submitradioitem {
                font-weight: 800;
            }
        }
    }
    .select-container {
        .css-1nrlq1o-MuiFormControl-root {
            width: 96%;
            text-align: left;
        }
        .errorcheck {
            padding: 0px 15px;
            color: red;
            text-align: left;
        }
    }
`;
