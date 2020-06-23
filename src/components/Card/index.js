import React from 'react';

import { CardWrapper, Title } from './styled';

export default Card = ({ id, text }) => {
    return (
        <CardWrapper>
            <Title>{ text }</Title>
        </CardWrapper>
    )
}
