import React, { useCallback, useMemo } from "react";
import { Button, Container, CurrentNumber } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCurrentPageNumber, increaseCurrentPageNumber, setPage } from "../../states/slices/app";

export default function Pagination() {

    const dispatch = useDispatch();

    const currentActivePage = useSelector(state => state.app.currentActivePage);
    const lastPage = useSelector(state => state.pagination.last_visible_page);

    const isFistBtnDisabled = currentActivePage === 1;
    const isPrevBtnDisabled = currentActivePage === 1;
    const isNextBtnDisabled = currentActivePage === lastPage;
    const isLastBtnDisabled = currentActivePage === lastPage;;

    const first = useCallback(() => {
        if(!isFistBtnDisabled){
            dispatch(setPage(1));
        }
    }, [isFistBtnDisabled]);

    const prev = useCallback(() => {
        if(!isPrevBtnDisabled){
            dispatch(decreaseCurrentPageNumber());
        }
    }, [isPrevBtnDisabled]);

    const next = useCallback(() => {
        if(!isNextBtnDisabled){
            dispatch(increaseCurrentPageNumber());
        }
    }, [isNextBtnDisabled]);

    const last = useCallback(() => {
        if(!isLastBtnDisabled){
            dispatch(setPage(lastPage));
        }
    }, [isLastBtnDisabled, lastPage]);


    return <Container>
        <Button className={isFistBtnDisabled ? 'disabled': null} onClick={first}>First Page</Button>
        <Button className={isPrevBtnDisabled ? 'disabled': null} onClick={prev}>Prev</Button>
        <CurrentNumber>{currentActivePage}</CurrentNumber>
        <Button className={isNextBtnDisabled ? 'disabled': null} onClick={next}>Next</Button>
        <Button className={isLastBtnDisabled ? 'disabled': null} onClick={last}>Last Page</Button>
    </Container>
}
