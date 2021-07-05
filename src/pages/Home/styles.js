import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.lightGrey};
    flex-wrap: wrap;
`;

export const UsersSection = styled.div`
    width: 100%;
    height: 100%;
    margin: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;