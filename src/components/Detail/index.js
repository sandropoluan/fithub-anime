import React, { Suspense, use } from "react";
import { useParams } from "react-router-dom";
import { Container, Title, Image, SectionTitle, Synopsis, YoutubeIframe } from "./styles";
import Loading from "../Loading";
import { getAnimeDetail } from "../../utils/api";


export default function Detail() {
    const { id } = useParams();
    const getDetail = getAnimeDetail(id);

    return <Suspense fallback={<Loading />}>
        <DetailComponent getDetail={getDetail} />
    </Suspense>
}


function DetailComponent({ getDetail }) {

    const { data } = use(getDetail);

    const trailerEmbedURL = data?.trailer?.embed_url;

    return <Container>
        <Title>{data.title}</Title>
        <Image src={data.images.webp.large_image_url} />
        <SectionTitle>Synopsis</SectionTitle>
        <Synopsis>{data.synopsis}</Synopsis>
        {!!trailerEmbedURL && <>
            <SectionTitle>Watch Trailer</SectionTitle>

            <YoutubeIframe width="560" height="315" src={trailerEmbedURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></YoutubeIframe>
        </>}
    </Container>
}
