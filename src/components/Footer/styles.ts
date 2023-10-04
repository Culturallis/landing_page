import {styled, css} from 'styled-components'
import Typography from '@mui/material/Typography'

export const Footer = styled.footer(() => css`
    width: 100%;
    height: 35vh;
    background-color: #F5E6FD;
    padding: 4rem 5rem 2rem 5rem;
`)

export const Container = styled.section(() => css`
    display: flex;
    justify-content: space-between;
`)

export const LinksBox = styled.div(() => css`
    width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
`)

export const LogoBox = styled.div(() => css`
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0;
`)

export const TextLogo = styled.p(() => css`
    font-size: 1rem;
    font-weight: 600;
    color: #000;
`)

export const ImageLogo = styled.img(() => css`
    height: 60%;
`)

export const Title = styled.h2(() => css`
    font-size: 1.7rem;
    font-weight: 500;
    color: #8802C7;
`)

export const Link = styled.a(() => css`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #313131;
`)

export const Copyright = styled.p(() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 100;
    color: #313131;
`)



