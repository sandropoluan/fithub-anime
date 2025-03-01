import styled from "styled-components";

export const Container = styled.div`
    position: relative;
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
    transition: all 0.2s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 466px) {
      flex: 45%;
      margin: 0 0px 8px 4px;
      &:hover{
        transform: none;
      }
    }
`;


export const Image = styled.div`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    background-image: url(${props => props.src});
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: auto 250px;
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

export const TypeTag = styled.span`
    padding: 4px 6px;
    background-color: #000;
    font-size: 12px;
    color: #FFF;
    position: absolute;
    top: 8px;
    left: 12px;
    font-weight: 800;
    border-radius: 4px;
`;

export const RatingTag = styled.span`
    padding: 4px 6px;
    background-color: rgba(255,255,255, 0.7);
    font-size: 9px;
    color: #000000;
    position: absolute;
    top: 32px;
    right: -3px;
    font-weight: 800;
    border-radius: 4px;
`;

export const Durationtag = styled.span`
    padding: 4px 6px;
    font-size: 9px;
    color: #000000;
    position: absolute;
    bottom: 4px;
    right: -3px;
    font-weight: 800;
    border-radius: 4px;
`;