/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';

// Libs
import axios from 'axios';

// Components
import Topbar from '../../components/Topbar';
import User from '../../components/User';

// Styles
import { Container, UsersSection } from './styles';

const Home = (props) => {

    const [users, setUsers] = useState([]);

    // Start request when page open
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.get('https://api.github.com/users')
        .then(response => {
            if (response.data) {
                setUsers(response.data);
                console.log(response.data);
            }
        })
    }

    return (
            <Container>
                <Topbar
                />
                <UsersSection>
                    {
                        users
                        ?
                        users.map((item) => {
                            return (
                                <User
                                    avatar={item.avatar_url}
                                    name={item.login}
                                />
                            )
                        })
                        :
                        ""
                    }
                </UsersSection>
            </Container>
    )
}

export default Home;