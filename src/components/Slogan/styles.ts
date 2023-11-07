import {styled, css} from 'styled-components'

export const SloganSection = styled('section')(() => css`
    height: 55vh;
    width: 100%;
    background-color: #06A73B;
    padding: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 670px){
        width: 100vh;
    }
`)

export const SloganText = styled('h2')(() => css`
    font-size: 4rem;
    color: #f1f1f1;
    @media (max-width: 800px){
        font-size: 3.5rem;
    }
`)