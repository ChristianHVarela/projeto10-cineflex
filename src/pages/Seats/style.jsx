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
export const ContainerSeats = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100vw - 60px);
`
export const ContainerTags = styled.div`
    width: calc(100vw - 100px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Tag = styled.div`
    width: 90px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        width: 24px;
        height: 24px;
        background: ${props => props.type === 'green' ? "#1AAE9E" : props.type === "yellow" ? "#FBE192" : "#C3CFD9"};
        border: ${props => props.type === 'green' ? "1px solid #0E7D71" : props.type === "yellow" ? "1px solid #F7C52B" : "1px solid #7B8B99"};
        border-radius: 17px;
    }
    p {
        width: 65px;
        height: 35px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`
export const ContainerForm = styled.div`
    display: flex;
    width: calc(100vw - 48px);
    flex-direction: column;
    margin-top: 45px;
    label {
        width: 100%;
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: left;
        align-items: center;
        color: #293845;
    }
    input {
        width: 100%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 20px;
        margin-bottom: 10px;
        ::placeholder{
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #AFAFAF;
        }
    }
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
    footer {
        width: calc(100vw - 75px);
        height: 89px;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        p {
            width: 100%;
            max-height: 45px;
            display: flex;
            justify-content: left;
            text-align: left;
        }
    }
`
export const ImagePoster = styled.img`
    width: 57px;
    height: 82px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`