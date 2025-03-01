import React, { Suspense, use, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Container, Title, Image, SectionTitle, Synopsis, YoutubeIframe, InfosContainer, InfoTag, Producers, Back, Duration } from "./styles";
import Loading from "../Loading";
import { getAnimeDetail } from "../../utils/api";
import back from '../../images/left-chevron.png';
import Error from "../Error";


export default function Detail() {
    const { id } = useParams();
    const getDetail = getAnimeDetail(id);

    return <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
            <DetailComponent getDetail={getDetail} />
        </Suspense>
    </ErrorBoundary>
}


function DetailComponent({ getDetail }) {

    const { data } = use(getDetail);

    const trailerEmbedURL = data?.trailer?.embed_url;

    const toYear = data.aired.prop.to.year;

    const navigate = useNavigate()

    const onClickBack = useCallback(() => {
        navigate('../');
    }, []);

    return <Container>
        <Back src={back} onClick={onClickBack} />


        <Title>{data.title} - {data.title_japanese} <span className="year">({data.aired.prop.from.year}{!!toYear && ` - ${toYear}`})</span></Title>
        <Producers>
            {data.producers.map(item => item.name).join(', ')}
        </Producers>
        <Image src={data.images.webp.large_image_url} />

        <InfosContainer>
            <InfoTag>{data.type}</InfoTag>

            <InfoTag>{data.source}</InfoTag>

            {!!data.episodes && <InfoTag>Episodes: {data.episodes}</InfoTag>}

            {!!data.rating && <InfoTag>Rating: {data.rating}</InfoTag>}
        </InfosContainer>

        <Duration>{data.duration}</Duration>

        <SectionTitle>Synopsis</SectionTitle>
        <Synopsis>{data.synopsis}</Synopsis>
        {!!trailerEmbedURL && <>
            <SectionTitle>Watch Trailer</SectionTitle>
            <YoutubeIframe  src={trailerEmbedURL} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></YoutubeIframe>
        </>}


    </Container>
}
