/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

// Components
import Image from 'react-bootstrap/Image';

// Styles
import { Container, Profile, Info } from './styles';

// Images and Icons

function UserInfo(props) {
    return (
        <Container>
            <Profile>
                <Image src={props.data.avatar_url} roundedCircle />
                <h2>@{props.data.login}</h2>
                <h3>{props.data.name}</h3>
                <p>{props.data.bio}</p>
            </Profile>
            <Info>
                
            </Info>
        </Container>
    );
}

export default UserInfo;