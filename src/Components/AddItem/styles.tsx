import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #444;
    border-radius: 10px;

    .image {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        padding: 10px;
    }

    input {
        flex: 1;
        background-color: transparent;
        outline: 0;
        border: 0;
        font-size: 1.3rem;
        color: #FFF;
    }
`;