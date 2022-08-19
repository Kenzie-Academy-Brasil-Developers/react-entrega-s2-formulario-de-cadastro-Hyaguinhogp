import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #121214;;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const DefaultContent = styled.div`
    
    border-bottom: 1px solid #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div {
        font-family: 'Inter', sans-serif;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        max-width: 800px;
        padding: 30px 15px;
    }
`;

export const Header = styled(DefaultContent)`

    h2 {
        font-size: 24px;
        font-weight: 600;
        color: #FF577F;
    }

    button {
        padding: 10px;
        background-color: #212529;
        width: 15%;
        border: 0;
        color: white;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
    }

    button:hover {
        cursor: pointer;
    }
`;

export const UserInfo = styled(DefaultContent)`

    div {
        flex-direction: column;
        align-items: flex-start;
        color: white;
    }

    h2 {
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 700;
    }

    p {
        font-size: 12px;
        font-weight: 600;
        color: #868E96;
    }

    @media (min-width: 700px) {
        div {
            flex-direction: row;
            align-items: center;
        }

        h2 {
            margin-bottom: 0;
        }
    }
`;