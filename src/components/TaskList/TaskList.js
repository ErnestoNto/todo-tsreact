import styled from 'styled-components'

export const TaskContainer = styled.article`
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 8px;
    padding: 6px;
    border-bottom: 1px solid #ccc;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    h4{
        font-size: 1.4rem;
    }
`

export const Action = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    i{
        cursor: pointer;
        background-color: #0197F6;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
    }
`