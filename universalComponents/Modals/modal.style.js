import styled from "styled-components";

export const ModalStyles = styled.div`
    z-index:3;
    padding:50px 0px 0px 0px;
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow:auto;
    margin: auto;
    background-color:rgb(0,0,0);
    background-color:rgba(0,0,0,0.4)};

    .modal-component{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        .modal-content{
            background-color: #fff;
            width: 50%;
            margin: 0px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            padding: 30px 10px;
            
            .content{
                padding: 20px 10px;

                .button{
                    margin: 100px 0px 10px 0px;
                }

            }
        }
    }
    

`;
