import styled from 'styled-components'

export const Fade = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ccc;
    opacity: .3;
` 

export const Modal = styled.div`
    max-width: 500px;
    height: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 10px;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`