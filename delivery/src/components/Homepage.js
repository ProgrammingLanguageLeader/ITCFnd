import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import Button from './Button';
import Header from './Header';
import Header1 from './Header1';
import LeadText from './LeadText';
import StoreRows from './StoreRows';
import Footer from './Footer';

const Homepage = () => (
    <div>
        <Header />
        <Description />
        <Footer />
    </div>
);

const DescriptionCover = styled.img.attrs({
    src: "img/picpizzaaa.jpg"
}) `
    width: 100%;
`;

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
                <DescriptionCover aria-hidden="true" />
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Header1>
                    Рестораны
                </Header1>
            </Col>
        </Row>
        <StoreRows />
        <Row center="xs">
            <Button>Все рестораны</Button>
        </Row>
    </Grid>
);

export default Homepage;