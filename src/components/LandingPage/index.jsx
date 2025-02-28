import React, { Suspense } from "react";
import { Container } from "./styles";
import LandingSearch from "../LandingSearch";
import Loading from "../Loading";
import AnimeListContainer from "../AnimeListContainer";
import { useSelector } from "react-redux";
import { getAnimeList } from "../../utils/api";

export default function LandingPage() {
  const { filter } = useSelector(store => ({ filter: store.filter }));
  const getList = getAnimeList(filter);
  return <Container>
    <LandingSearch />
    <Suspense fallback={<Loading />} >
      <AnimeListContainer getList={getList} />
    </Suspense>
  </Container>
}