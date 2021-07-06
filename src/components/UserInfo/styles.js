import styled from 'styled-components';

export const Container = styled.div`
    margin: 1em;
    padding: 1em;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    }
    p {
        width: 100%;
        text-align: center;
    }
`;

export const Info = styled.div`
    width: 100%;
    
`;