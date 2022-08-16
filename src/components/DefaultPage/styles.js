import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: ${({isModal}) => isModal ? 'fixed' : 'static'};
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    padding: 0 15px;
    background-color: ${({isModal}) => isModal ? 'rgba(0, 0, 0, 0.5)' : '#121214'};

    @media (min-width: 500px) {
        align-items: center;
    }

`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 20px;
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #FF577F;
    }

    @media (min-width: 500px) {
        width: 500px;
    }
`;