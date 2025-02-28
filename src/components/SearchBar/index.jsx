import React, { useCallback, useMemo } from "react";
import searchIcon from '../../images/search.png';
import { Container, Search, SearchIcon, TextInput, Wrapper, FunMode, FunLabel, CheckBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { forceUpdate, setFunMode, setPage } from "../../states/slices/app";
import debounce from "../../utils/debounce";
import { setFilter } from "../../states/slices/filters";

export default function Index() {
    const funMode = useSelector(state => state.app.funMode);
    const dispatch = useDispatch();

    const toggle = useCallback(() => {
        dispatch(setFunMode(!funMode));
        dispatch(setPage(1));
    }, [funMode]);

    const onChange = useMemo(() => {
        return debounce((e) => {
            const value = e.target.value;
            dispatch(setFilter({ key: 'q', value }))
            dispatch(setPage(1));
        }, 1000)
    }, []);

    const onSearch = useCallback(() => {
        dispatch(forceUpdate());
        dispatch(setPage(1));
    }, []);

    return <Wrapper>
        <Container>
            <TextInput onChange={onChange} />
            <FunMode>
                <FunLabel>Fun mode?</FunLabel>
                <CheckBox type="checkbox" checked={funMode} onChange={toggle} />
            </FunMode>
            <Search onClick={onSearch}>
                <SearchIcon src={searchIcon} />
            </Search>
        </Container>
    </Wrapper>
}