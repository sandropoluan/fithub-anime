import styled from "styled-components";

export const Sticker = styled.img`
    width: 700px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -99;
    
    @media (max-width: 900px){
        display: none;
    }
`;
