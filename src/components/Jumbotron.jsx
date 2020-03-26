import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import img from "../assets/MSG.jpg";

const Styled = styled.div`
    .jumbo {
        background: url(${img}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styled>
        <Jumbo fluid className="jumbo">
            <div className="overlay" />
            <Container>
                <h1>Welcom</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum, unde.
                </p>
            </Container>
        </Jumbo>
    </Styled>
);

export default Jumbotron;
