import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #E5E5E5;
    margin-top: 67px;
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

export const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    img {
        width: 130px;
        height: 190px;
        margin-left: 40px;
        margin-bottom: 30px;
    }
`