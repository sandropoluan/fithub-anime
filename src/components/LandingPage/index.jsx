import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Container } from "./styles";
import LandingSearch from "../LandingSearch";
import Loading from "../Loading";
import AnimeListContainer from "../AnimeListContainer";
import { useSelector } from "react-redux";
import { getAnimeList } from "../../utils/api";
import Pagination from "../Pagination";
import Error from "../Error";

export default function LandingPage() {
  useSelector(store => store.app.lastForceUpdate);
  const q = useSelector(store => store.filter.q);
  const page = useSelector(store => store.app.currentActivePage);
  const funMode = useSelector(store => store.app.funMode);
  const getList = getAnimeList({ q, page, rating: funMode ? 'rx' : null });

  return <Container>
    <LandingSearch />
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />} >
        <AnimeListContainer getList={getList} />
      </Suspense>
      <Pagination />
    </ErrorBoundary>
  </Container>
}