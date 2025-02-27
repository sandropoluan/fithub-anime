import React from "react";
import { Container } from "./styles";
import Mascot from "../Mascot";
import SearchBar from "../SearchBar";

export default function LandingSearch(){
    return <Container>
        <Mascot/>
        <SearchBar />
    </Container>
}