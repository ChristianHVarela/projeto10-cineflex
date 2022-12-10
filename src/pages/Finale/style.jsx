import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background: #FFFFFF;
    margin-top: 67px;
    padding-bottom: 117px;
    p {
        width: calc(100vw - 220px);
        height: 67px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #247A6B;
        margin-top: 20px;
    }
`

export const Title = styled.h1`
    width: 100vw;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-left: 50px;
    margin-top: 30px;
`
export const Content = styled.h2`
    width: 100vw;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-left: 50px;
`
export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`
export const ButtonSubmit = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: hidden;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-top: 38px;
    &:hover {
        filter: brightness(0.8);
    }
    &:active {
        filter: brightness(1.2);
    }
`
export const ContainerContent = styled.div`
    div {
        margin-top: 10px;
    }
`