import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
`;

export const CurrentNumber = styled.span`
     font-size: 12px;
     color: #E4C8AE;
     padding: 4px 1px;
     margin-left: 4px;
     font-size: 14px;
    font-weight: 800;
`;

export const Button = styled.span`
    background-color: #E4C8AE;
    padding: 4px 8px;
    color: #FFFFFF;
    font-weight: 800;
    font-size: 12px;
    border-radius: 4px;
    margin-left: 4px;
    cursor: pointer;

    &.disabled {
        background-color:rgb(242, 215, 190);
        cursor: auto
    }
`;
