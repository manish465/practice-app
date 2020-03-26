import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import img from "../assets/MSG.jpg";

const Styled = styled.div``;

const Jumbotron = () => (
    <Styled>
        <Jumbo fluid className="jubo">
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
