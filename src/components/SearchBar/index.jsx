import React from "react";
import filterIcon from '../../images/icon-filter.png';
import searchIcon from '../../images/search.png';
import FilterPanel from '../../components/FilterPanel';
import { Container, Filter, FilterIcon, Search, SearchIcon, TextInput, Wrapper } from "./styles";

export default function Index() {
    return <Wrapper>
        <Container>
            <TextInput />
            {/* <Filter>
                <FilterIcon src={filterIcon} />
            </Filter> */}
            <Search>
                <SearchIcon src={searchIcon} />
            </Search>
        </Container>
        {/* <FilterPanel /> */}
    </Wrapper>
}