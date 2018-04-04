import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from './Button';
import Logo from './Logo';
import { LeadHeader1, LeadHeader2 } from './LeadHeader';
import Header1 from './Header1';
import LeadText from './LeadText';
import DescriptionCover from './DescriptionCover';
import StoreCard from './StoreCard';

const Description = () => (
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
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
        </Row>
        <Row around="xs">
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
            <Col lg={3} md={6} sm={12}>
                <StoreCard 
                    name="Il Patio" 
                    img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice={900}
                    deliveryPrice={0}
                    deliveryTime={90}
                />
            </Col>
        </Row>

        <Row center="xs">
            <Button>Все рестораны</Button>
        </Row>
    </Grid>
);

export default Description;