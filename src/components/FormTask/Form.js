import styled from 'styled-components'

export const Form = styled.form`
    width: 90%;
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
    margin-top: 8px;
    padding: 5px;
    font-size: 1.2rem;
    outline: 0;
` 

export const Error = styled.span`
    font-size: .8rem;
    margin-top: 5px;
    margin-bottom: 8px;
    color: #ff0045;
`

export const SubmitButton = styled.button`
    padding: 5px;
    margin-top: 8px;
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