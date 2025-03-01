import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin: auto;

    @media (max-width: 466px) {
      flex-direction: column;
      margin-bottom: 24px;
      align-items: center;
    }
`;