import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 2px solid #FFF;
    border-radius: 3px;
`;

export const TextInput = styled.input`
    flex: 1;
    height: 40px;
    border: 2px #E4C8AE solid;
    outline: none;
    padding: 0 12px;
    border-radius: 10px 0 0 10px;
`;

export const Filter = styled.div`
    width: 50px;
    height: 40px;
    background-color: #E4C8AE;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FilterIcon = styled.img`
    width: 25px;
`;

export const Search = styled.div`
    width: 50px;
    height: 40px;
    background-color: #E4C8AE;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const SearchIcon = styled.img`
    width: 25px;
`;