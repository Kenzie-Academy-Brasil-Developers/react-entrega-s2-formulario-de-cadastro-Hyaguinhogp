import styled from "styled-components";

interface IContentProps {
    isSuccess: Boolean;
}

export const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 286px;
    height: 70px;
    padding: 5px;
    border-bottom: 6px solid ${({isSuccess}: IContentProps) => isSuccess ? '#3FE864' : '#E83F5B'} ;
    border-radius: 4px;
    background-color: #343B41;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: white;
    animation: enterExit 2s;
    animation-fill-mode: both;

    svg {
        box-sizing: border-box;
        background-color: ${({isSuccess}: IContentProps) => isSuccess ? '#3FE864' : '#E83F5B'};
        padding:5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    @keyframes enterExit {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 1;
        }
        75% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;