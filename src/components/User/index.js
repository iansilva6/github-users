/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// Styles
import { Container, Avatar, Info } from './styles';

// Images and Icons

function User(props) {
    return (
        <Container>
            <Avatar url={props.avatar}/>
            <Info>
                <h2>@{props.name}</h2>
            </Info>
        </Container>
    );
}

export default User;