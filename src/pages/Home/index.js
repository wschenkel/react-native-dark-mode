import React from 'react';
import { Wrapper, Title, ContentCards} from './styled';

import Card from '../../components/Card';

export default function Home() {

    const dataCards = [{
        id: 1,
        text: '01'
    },{
        id: 2,
        text: '02'
    },{
        id: 3,
        text: '03'
    },{
        id: 4,
        text: '04'
    }]

    return (
        <Wrapper>
            <Title>
                Dark mode cards
            </Title>

            <ContentCards>
                { dataCards.map(cardItem => (
                    <Card 
                        key={cardItem.id} 
                        id={cardItem.id} 
                        text={cardItem.text}
                    />
                ))}
            </ContentCards>
        </Wrapper>
    )
}