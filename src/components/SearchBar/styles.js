import styled from "styled-components";


export const Wrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

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

export const FunMode = styled.div`
    width: 50px;
    height: 40px;
    background-color: #E4C8AE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FunLabel = styled.div`
    font-size: 8px;
    color: #FFFFFF;
`;

export const CheckBox = styled.input`
    width: 18px;
    height: 18px;
    border: none;
    outline: none;
    cursor: pointer;
`