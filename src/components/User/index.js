import React from 'react';

// Libs
import { Link } from 'react-router-dom';

// Styles
import { Container, Avatar, Info } from './styles';

function User(props) {
    return (
        <Container>
            <Link to={`/${props.name}`}>
                <Avatar url={props.avatar}/>
                <Info>
                    <h2>@{props.name}</h2>
                </Info>
            </Link>
        </Container>
    );
}

export default User;