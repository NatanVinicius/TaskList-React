import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(( { done }: ContainerProps ) => (`
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
    align-items: center;
    background-color: #20212C;
    border-radius: 10px;
    color: #ccc;

    input {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    label {
        letter-spacing: 1px;
        font-size: 1.2rem;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }
`))