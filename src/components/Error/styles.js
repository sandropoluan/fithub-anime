import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    border-radius: 20px;
`;

export const Description = styled.span``;

export const Reload = styled.span`
    margin-top: 5px;
    cursor: pointer;
    text-decoration: underline;
    color: rgb(89, 104, 120);
    font-weight: 600;
`;