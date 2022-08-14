import styled from "styled-components";

const DefaultContent = styled.div`
    border-bottom: 1px solid #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const TechnologiesContainer = styled(DefaultContent)`
    display: flex;
`;

export const TechnologiesContent = styled.div`
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    padding: 30px 15px;
`;

export const TechnologiesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    color: white;
    font-weight: 600;

    button {
        width: 32px;
        height: 32px;
        background-color: #212529;
        border: 0;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        cursor: pointer;
    }
`;

export const TechnologiesList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    width: 100%;
    padding: 22px 19px;
    border-radius: 4px;
    background-color: #212529;
    color: white;
`;