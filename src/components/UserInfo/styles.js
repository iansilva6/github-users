import styled from 'styled-components';

export const Container = styled.div`
    margin: 1em;
    padding: 1em;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.black};
    }
`;

export const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
        margin-bottom: 10px;
    }
    h2 {
        width: 100%;
        text-align: center;
        font-weight: 900;
        margin-bottom: 0;
    }
    h3 {
        width: 100%;
        text-align: center;
        font-weight: 400;
        color: #777;
        margin-bottom: 0;
    }
    p {
        width: 100%;
        text-align: center;
        margin: 0;
    }
`;

export const GithubLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px 0px;
    background: ${props => props.theme.colors.lightGrey};
    font-weight: 600;
    transition: 0.3s;
    svg {
        margin-right: 10px;
    }
    :hover {
        transition: 0.3s;
        background: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
    }
`;