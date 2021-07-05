/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

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
                <LeftSection>
                    <MdArrowBack
                        size={34}
                    />
                    <h5>Voltar</h5>
                </LeftSection>
                :
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