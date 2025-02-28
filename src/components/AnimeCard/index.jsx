import React from "react";
import { Container, Durationtag, Image, RatingTag, Title, TypeTag } from "./styles";

export default function AnimeCard({data}){
    const { images, title, type, rating, duration } = data;
    const { webp } = images;
    return <Container>
        <TypeTag>{type}</TypeTag>
        <RatingTag>{rating}</RatingTag>
        <Durationtag>{duration}</Durationtag>
        <Image src={webp.image_url}/>
        <Title>{title}</Title>
    </Container>
}