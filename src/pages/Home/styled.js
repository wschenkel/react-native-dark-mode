import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background: ${props => props.theme.background};
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const ContentCards = styled.View`
    display: flex;
    flex-direction: row;
`;

export const Title = styled.Text`
    color: ${props => props.theme.color};
    font-size: 44px;
    margin-bottom: 20px;
`;