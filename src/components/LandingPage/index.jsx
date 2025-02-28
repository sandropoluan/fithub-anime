import React, { Suspense } from "react";
import { Container } from "./styles";
import LandingSearch from "../LandingSearch";
import Loading from "../Loading";
import AnimeListContainer from "../AnimeListContainer";
import { useSelector } from "react-redux";
import { getAnimeList } from "../../utils/api";
import Pagination from "../Pagination";

export default function LandingPage() {
  const q = useSelector(store => store.filter.q);
  const page = useSelector(store => store.app.currentActivePage);
  const funMode = useSelector(store => store.app.funMode);
  const getList = getAnimeList({q, page, rating: funMode ? 'rx': null});
  
  return <Container>
    <LandingSearch />
    <Suspense fallback={<Loading />} >
      <AnimeListContainer getList={getList} />
    </Suspense>
    <Pagination />
  </Container>
}