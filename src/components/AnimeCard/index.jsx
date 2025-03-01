import React, { useCallback } from "react";
import { useNavigate } from 'react-router';
import { Container, Durationtag, Image, RatingTag, Title, TypeTag } from "./styles";

export default function AnimeCard({data}){
    const { images, title, type, rating, duration, mal_id } = data;
    const { webp } = images;

    const navigate = useNavigate()

    const onClick = useCallback(() => {
        navigate(`/detail/${mal_id}`)
    }, [mal_id]);

    return <Container onClick={onClick}>
        {type && <TypeTag>{type}</TypeTag>}
        <RatingTag>{rating}</RatingTag>
        <Durationtag>{duration}</Durationtag>
        <Image role="img" src={webp.image_url}/>
        <Title>{title}</Title>
    </Container>
}