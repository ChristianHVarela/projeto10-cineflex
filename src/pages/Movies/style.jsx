import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #FFFFFF;
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
    `
export const Movie = styled.div`
    width: 145px;
    height: 205px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 40px;
    margin-bottom: 30px;
    img {
        width: 130px;
        height: 190px;
    }
`