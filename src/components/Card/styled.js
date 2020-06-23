import styled from 'styled-components/native';

export const CardWrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.theme.color};
    padding: 25px;
    border-radius: 10px;
    margin: 0 10px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.color};
    font-size: 12px;
`;