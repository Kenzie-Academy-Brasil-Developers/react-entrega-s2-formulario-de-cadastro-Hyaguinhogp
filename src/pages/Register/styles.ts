import styled, { css } from "styled-components";

export const Style = css`
    h2 {
        padding: 0;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;

    h1 {
        margin: 0;
    }
`;

export const ReturnButton = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    padding: 10px;
    color: white;
    border-radius: 4px;
    background-color: #212529;
    font-family: 'Inter', sans-serif;
    font-weight: 600;

    &:hover {
        cursor: pointer;
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
