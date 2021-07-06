import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    margin: 1em;
    flex: 0 0 30%;
    cursor: pointer;
    transition: 0.3s;
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.black};
    }
    @media(max-width: 1100px) {
        flex: 0 0 45%;
    }
    @media(max-width: 800px) {
        flex: 0 0 100%;
    }
    :hover {
        opacity: 0.7;
        transition: 0.3s;
    }
`;

export const Avatar = styled.div`
    width: 100%;
    height: 200px;
    background: url(${props => props.url})center no-repeat;
`;

export const Info = styled.div`
    width: 100%;
    padding: 10px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 2px 36px -21px rgba(0,0,0,0.75);
    h2 {
        margin: 0;
        font-weight: 900;
    }
`;