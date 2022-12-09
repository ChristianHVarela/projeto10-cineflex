import styled from "styled-components";

export const Seat = styled.button`
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    background: ${props => props.selected ? "#1AAE9E" : "#C3CFD9"};
    border: ${props => props.selected ? "1px solid #0E7D71" : "1px solid #808F9D"};
    border-radius: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    margin-right: 7px;
    margin-bottom: 18px;
    :disabled {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
`