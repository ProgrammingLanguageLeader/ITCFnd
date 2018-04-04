import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Button from './Button';
import Header1 from './Header1';
import LeadText from './LeadText';
import StoreCard from './StoreCard';

const DescriptionCover = styled.img.attrs({
    src: "img/picpizzaaa.jpg"
})`
    width: 100%;
`;

const Description = () => {
    var storeCardCols = [];
    for (let i = 0; i < 4; i++) {
        storeCardCols.push(
            <Col lg={3} md={6} sm={12} key={i}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
        );
    }

    return (
        <Grid>
            <Row>
                <Col lg={6} md={12}>
                    <Header1>Что мы делаем?</Header1>
                    <LeadText>
                        <p>
                            Delivery Club - это независимый клубный проект, объединивший сотни служб доставки еды и продуктов в Единую Систему Заказов.
                        </p>
                        <p>
                            Цель проекта - обеспечить своим пользователям наилучшие условия для быстрого, удобного и выгодного осуществления заказов.
                            Услуги сайта абсолютно бесплатны, а условия доставки очень простые
                        </p>
                    </LeadText>
                </Col>
                <Col lg={6}>
                    <DescriptionCover aria-hidden="true"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Header1>
                        Рестораны
                    </Header1>
                </Col>
            </Row>
            <Row around="xs">
                { storeCardCols }
            </Row>
            <Row around="xs">
                { storeCardCols }
            </Row>

            <Row center="xs">
                <Button>Все рестораны</Button>
            </Row>
        </Grid>
    )
};

export default Description;