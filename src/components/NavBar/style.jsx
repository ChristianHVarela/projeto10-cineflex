import styled from "styled-components";

export const NavBarHigher = styled.nav`
    position: absolute;
    width: 100vw;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 39px;
        color: #E8833A;
    }
`

export const ContainerStandart = styled.div`
    background-color: #000000;
    position: fixed;
    top: 0px;
    left: 0px;
`
export const ButtonBack = styled.button`
    background: transparent;
    position: fixed;
    left: 0px;
    top: 4px;
    width: 60px;
    height: 60px;
    border: hidden;
    display: ${props => props.page === 0 ? "none" : "block"};
`