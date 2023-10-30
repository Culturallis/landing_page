import {styled, css} from 'styled-components'

export const SloganSection = styled('section')(() => css`
    height: 40vh;
    width: 100%;

    background-color: #06A73B;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 670px){
        width: 100vh;
    }
`)

export const SloganText = styled('h2')(() => css`
    font-size: 4rem;
    font-weight: 600;
    color: #f1f1f1;
    @media (max-width: 1060px){
        font-size: 3rem;
    }
    @media (max-width: 800px){
        font-size: 2rem;
    }
    @media (max-width: 550px){
        font-size: 1..3rem;
    }
`)