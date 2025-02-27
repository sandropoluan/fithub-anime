import React from "react";
import filterIcon from '../../images/icon-filter.png';
import searchIcon from '../../images/search.png';
import { Container, Filter, FilterIcon, Search, SearchIcon, TextInput } from "./styles";

export default function Index() {
   return <Container>
    <TextInput />
    <Filter>
        <FilterIcon src={filterIcon}/>
    </Filter>
    <Search>
        <SearchIcon src={searchIcon} />
    </Search>
    
   </Container>
}