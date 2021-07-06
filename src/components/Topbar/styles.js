import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.black};
    @media(max-width: 800px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;

export const LeftSection = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
    }
    svg {
        color: ${props => props.theme.colors.white};
        margin-right: 10px;
    }
    h5 {
        color: ${props => props.theme.colors.white};
        margin: 0;
    }
`;