import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import AboutButton from './AboutButton';
import LoginButton from './LoginButton';
import LeadText from './LeadText';
import Stores from './Stores';
import Footer from './Footer';
import Logo from './Logo';
import { LeadHeader1, LeadHeader2, Header1 } from './TextHeaders';

const Homepage = () => (
    <div>
        <HomepageHeader />
        <Description />
        <StoresCatalog />
        <Footer />
    </div>
);

const DescriptionCover = styled.img.attrs({
    src: "img/picpizzaaa.jpg"
}) `
    width: 100%;
`;

const StyledHeader = styled.header`
    background-image: url(img/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`;

const HomepageHeader = () => (
    <StyledHeader>
        <Grid>
            <Row center="xs">
                <Col lg={3}>
                    <Logo src="img/logowhite.png" />
                </Col>
                <Col lgOffset={5}>
                </Col>
                <Col lg={3}>
                    <LoginButton>Вход / Регистрация</LoginButton>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <LeadHeader1>
                        Меняйте баллы
                    </LeadHeader1>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <LeadHeader2>
                        на призы
                    </LeadHeader2>
                </Col>
            </Row>
            <Row center="xs" top="xs">
                <Col xs={12}>
                    <AboutButton>Подробнее</AboutButton>
                </Col>
            </Row>
        </Grid>
    </StyledHeader>
);

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
    </Grid>
);

const StoresCatalog = () => (
    <Grid>
        <Row>
            <Col sm={12}>
                <Header1>
                    Рестораны
                </Header1>
            </Col>
        </Row>
        <Row>
            <Stores />
        </Row>
        <Row center="xs">
            <Link to="/catalog">
                <Button>Все рестораны</Button>
            </Link>
        </Row>
    </Grid>
);

export default Homepage;