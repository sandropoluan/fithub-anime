import React from "react";
import { Container, Image, Title } from "./styles";

export default function AnimeCard({data}){
    const { images, title } = data;
    const { webp } = images;
    return <Container>
        <Image src={webp.image_url}/>
        <Title>{title}</Title>
    </Container>
}