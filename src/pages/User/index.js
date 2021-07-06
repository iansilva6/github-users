/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

// Libs
import axios from 'axios';

// Components
import Topbar from '../../components/Topbar';
import UserInfo from '../../components/UserInfo';
import Spinner from 'react-bootstrap/Spinner';

// Styles
import { Container, UserSection, LoadSection } from './styles';

const Home = (props) => {

    const [user, setUser] = useState([]);

    // First effect when page load
    useEffect(() => {
        getUserInfo();
    }, []);

    // API Request
    const getUserInfo = () => {
        axios.get(`https://api.github.com/users/${props.match.params.id}`)
        .then(response => {
            if (response.data) {
                setUser(response.data);
            }
        })
    }

    return (
            <Container>
                {/* Header */}
                <Topbar
                    goBackButton
                />
                {/* Section */}
                <UserSection>
                    {
                        user
                        ?
                        <UserInfo 
                            data={user}
                        />
                        :
                        // Load Component
                        <LoadSection>
                            <Spinner animation="border" variant="dark" />
                        </LoadSection>
                    }
                </UserSection>
            </Container>
    )
}

export default Home;