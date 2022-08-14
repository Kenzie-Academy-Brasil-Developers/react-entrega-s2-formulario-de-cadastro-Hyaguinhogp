import styled from "styled-components";

export const Container = styled.li`
    display: flex;
    width: 100%;
    padding: 12px;
    background-color: #121214;
    border-radius: 4px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const LeftContent = styled.div``;

export const RightContent = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #868E96;

    button {
        background-color: transparent;
        border: 0;
        color: white;
    }

`;