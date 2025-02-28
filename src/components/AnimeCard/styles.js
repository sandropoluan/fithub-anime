import styled from "styled-components";

export const Container = styled.div`
    padding: 8px;
    width: 200px;
    height: 340px;
    background-color: rgba(255,255,255, 0.5);
    margin: 0 8px 24px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 2px #E4C8AE solid;
`;


export const Image = styled.img`
    height: 250px;
    border-radius: 5px 5px 0 0;
`;

export const Title = styled.span`
    width: 100%;
    margin-top: 8px;
    font-weight: 800;
    color:rgb(89, 104, 120);
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 3em; 
    line-height: 1.5em; 
`