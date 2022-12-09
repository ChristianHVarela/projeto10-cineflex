import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #FFFFFF;
    margin-top: 67px;
    padding-bottom: 117px;
    p {
        width: 100vw;
        height: 67px;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #293845;
    }
`
export const ContainerDay = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin-left: 23px;
    p {
        width: 100%;
        height: 35px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        justify-content: left;
        align-items: center;
        text-align: left;
        letter-spacing: 0.02em;
        color: #293845;
    }
`

export const ContainerTimes = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-bottom: 15px;
    a {
        text-decoration: none;
    }
    button {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border: hidden;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        margin-right: 8px;
        &:hover {
            filter: brightness(0.8);
        }
        &:active {
            filter: brightness(1.2);
        }
    }
`

export const NavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 117px;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    div {
        width: 65px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        margin-left: 10px;
    }
    p {
        width: calc(100vw - 75px);
        height: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        justify-content: left;
        align-items: center;
        color: #293845;
        margin-left: 20px;
    }
`

export const ImagePoster = styled.img`
    width: 57px;
    height: 82px;
`