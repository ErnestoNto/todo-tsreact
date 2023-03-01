import styled from 'styled-components'

export const Form = styled.form`
    max-width: 400px;
    margin: 0 auto;

    div{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
`

export const Label = styled.label`
    font-size: 1.2rem;
`

export const Input = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    outline: 0;
    margin-bottom: 8px;
` 

export const SubmitButton = styled.button`
    padding: 5px;
    width: 100%;
    background-color: #0197F6;
    color: #fff;
    padding: 6px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 1.2rem;
    transition: .5s;

    :hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #0197F6;
    }
`