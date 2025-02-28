import React from "react";
import img from '../../images/loading.gif';
import { Container, Image } from "./styles";

export default function Loading(){
    return <Container>
        <Image src={img} />

    </Container>;
}
