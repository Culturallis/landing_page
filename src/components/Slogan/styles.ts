import {styled, css} from 'styled-components'

export const Section = styled.section(() => css`
    width: 100%;
    height: 100vh;
    background-color: #06A73B;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`)

export const Text = styled.p(() => css`
    text-align: center;
    width: 90%;
    font-size: 4em;
    font-weight: 900;
    color: #f1f1f1;
`)