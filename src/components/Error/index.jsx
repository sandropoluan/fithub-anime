import React, { useCallback } from "react";
import { Container, Image, Description, Reload } from "./styles";

import img from '../../images/header.png'

export default function Error(){

    const onClick = useCallback(() => {
        window.location.reload();
    }, []);

    return <Container>
        <Image src={img} />
        <Description>
            Opps.. Something went wrong.
        </Description>
        <Reload onClick={onClick}>Please reload</Reload>
    </Container>
}