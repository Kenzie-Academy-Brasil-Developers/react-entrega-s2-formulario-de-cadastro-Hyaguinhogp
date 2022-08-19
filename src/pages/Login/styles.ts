import styled from "styled-components";

export const Container = styled.div`


`;
export const Content = styled.div`

    h1 {
        color: black;
    }
`;

export const LoadingContainer = styled.div`

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background-color: black;
        color: #FF577F;  
    }
`;