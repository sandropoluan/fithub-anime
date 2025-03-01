import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.6);
`;

export const Title = styled.div`
    margin-top: 20px;
    font-size: 24px;
    font-weight: 800;

    > .year{
        color: rgba(0, 0, 0, 0.5);
    }
`;

export const Image = styled.img`
    width: 300px;
    max-width: 100%;
    border: 5px #E4C8AE solid;
    border-radius: 5px;
`;

export const SectionTitle = styled.h2`
    margin-top: 24px;
    font-size: 18px;
    color:rgb(221, 170, 123);
`

export const Synopsis = styled.div``
export const YoutubeIframe = styled.iframe``;

export const InfosContainer = styled.div`
    margin-top: 12px;
    width: 100%;
    display: flex;
`;

export const InfoTag = styled.span`
    padding: 4px 6px;
    background-color: rgb(89, 104, 120);;
    font-size: 12px;
    color: #FFF;
    font-weight: 800;
    border-radius: 4px;
    margin-right: 8px;
`;

 export const Producers = styled.div`
    margin-bottom: 24px;
    font-size: 12px;
    padding-left: 8px;
 `;


export const Back = styled.img`
    width: 50px;
    cursor: pointer;
`;