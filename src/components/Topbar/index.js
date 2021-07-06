import React from 'react';

// Libs
import { Link } from 'react-router-dom';

// Styles
import { Container, LeftSection } from './styles';

// Images and Icons
import { AiFillGithub } from 'react-icons/ai';
import { MdArrowBack } from 'react-icons/md';

function Topbar(props) {

    return (
        <Container>
            {
                props.goBackButton
                ?
                // Go to index button
                <LeftSection>
                    <Link to={"/"}>
                        <MdArrowBack
                            size={34}
                        />
                        <h5>Voltar</h5>
                    </Link>
                </LeftSection>
                :
                // Topbar Title
                <LeftSection>
                    <AiFillGithub
                        size={34}
                    />
                    <h5>Github Users</h5>
                </LeftSection>
            }
        </Container>
    );
}

export default Topbar;