import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 34px 18px;
    border-radius: 3px;
    background-color: #212529;

`;
export const Content = styled.form`

    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Inter', sans-serif;

    h2 {
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        &.margin{margin-bottom: 22px};
    }

    label {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 18px;
    }

    input, select {
        padding: 14px;
        border: 1px solid transparent;
        border-radius: 3px;
        background-color: #343B41;
        color: white;
    }

    input::placeholder {
        color: #868E96;
    }

    input:focus {
        outline: none;
        border: 1px solid #F8F9FA;
    }

    span {
        display: flex;
        align-items: center;
        height: 22px;
        color: #FF577F;
        font-size: 10px;
    }

    button {
        padding: 10px;
        color: white;
        border-radius: 4px;
        background-color: #868E96;
        font-size: 18px;
    }

    button:hover {
        cursor: pointer;
    }

    .submit-button {
        background-color: #FF577F;
    }

    p {
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        color: #868E96;
        margin-top: 24px;

        &.margin{margin-bottom: 15px;};
    }

`;