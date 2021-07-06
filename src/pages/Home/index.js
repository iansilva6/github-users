import React, {useState, useEffect} from 'react';

// Libs
import axios from 'axios';

// Components
import Topbar from '../../components/Topbar';
import User from '../../components/User';
import Spinner from 'react-bootstrap/Spinner';

// Styles
import { Container, UsersSection, LoadSection } from './styles';

const Home = (props) => {

    const [usersList, setUsersList] = useState([]);

    // First effect when page load
    useEffect(() => {
        getUsers();
    }, []);

    // API Request
    const getUsers = () => {
        axios.get('https://api.github.com/users')
        .then(response => {
            if (response.data) {
                setUsersList(response.data);
            }
        })
    }

    return (
            <Container>
                {/* Header */}
                <Topbar
                />
                {/* Section */}
                <UsersSection>
                    {/* Render Users List */}
                    {
                        usersList
                        ?
                        usersList.map((item) => {
                            return (
                                <User
                                    key={item.id}
                                    avatar={item.avatar_url}
                                    name={item.login}
                                />
                            )
                        })
                        :
                        // Load Component
                        <LoadSection>
                            <Spinner animation="border" variant="dark" />
                        </LoadSection>
                    }
                </UsersSection>
            </Container>
    )
}

export default Home;