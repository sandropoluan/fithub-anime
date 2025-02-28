import React, { useCallback, useMemo } from "react";
import filterIcon from '../../images/icon-filter.png';
import searchIcon from '../../images/search.png';
import FilterPanel from '../../components/FilterPanel';
import { Container, Filter, FilterIcon, Search, SearchIcon, TextInput, Wrapper, FunMode, FunLabel, CheckBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setFunMode } from "../../states/slices/app";
import debounce from "../../utils/debounce";
import { setFilter } from "../../states/slices/filters";

export default function Index() {
    const funMode = useSelector(state => state.app.funMode);
    const dispatch = useDispatch();

    const toggle = useCallback(() => {
        dispatch(setFunMode(!funMode))
    }, [funMode]);

    const onChange = useMemo(() => {
        return debounce((e) => {
            const value = e.target.value;
            dispatch(setFilter({key: 'q', value}))
        }, 1000)
    }, []);

    return <Wrapper>
        <Container>
            <TextInput onChange={onChange}/>
            <FunMode>
                <FunLabel>Fun mode?</FunLabel>
                <CheckBox type="checkbox" checked={funMode} onChange={toggle}/>
            </FunMode>
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