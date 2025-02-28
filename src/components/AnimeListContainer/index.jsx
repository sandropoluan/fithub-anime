"use-strict"
import React, { use, useEffect } from "react";
import { setPaginationData } from "../../states/slices/pagination";
import { Container, NoData } from './styles';
import { setList } from "../../states/slices/animeList";
import { useDispatch } from "react-redux";
import AnimeCard from "../AnimeCard";



export default function AnimeListContainer({getList}){
    const dispatch = useDispatch()
    const {data, pagination} =  use(getList);
    useEffect(() => {
        dispatch(setPaginationData(pagination));
        dispatch(setList(data));
    })

    return <Container>
        {!data.length ? <NoData>No Data</NoData> : null}
        {
            data.map((item, i)=> {
                return <AnimeCard key={`${item.mal_id}-${item.title}-${i}`} data={item} />
            })
        }
    </Container>
}