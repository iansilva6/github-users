import React from 'react';

// Libs
import { Link } from 'react-router-dom';

// Components
import Image from 'react-bootstrap/Image';

// Styles
import { Container, Profile, GithubLink } from './styles';

// Images and Icons
import { AiFillGithub } from 'react-icons/ai';

function UserInfo(props) {
    return (
        <Container>
            {/* Profile Info */}
            <Profile>
                <Image src={props.data.avatar_url} roundedCircle />
                <h2>@{props.data.login}</h2>
                <h3>{props.data.name}</h3>
                <p>{props.data.bio}</p>
                <p><b>Seguidores:</b> {props.data.followers} | <b>Seguindo:</b> {props.data.following}</p>
                <p><b>Repositórios:</b> {props.data.public_repos} | <b>Gists:</b> {props.data.public_gists}</p>
            </Profile>
            {/* Redirect to Github Page */}
            <Link to={{ pathname: props.data.html_url }} target="_blank">
                <GithubLink>
                    <AiFillGithub
                        size={24}
                    />
                    Ver Perfil
                </GithubLink>
            </Link>
        </Container>
    );
}

export default UserInfo;