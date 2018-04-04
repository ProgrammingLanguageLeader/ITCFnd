import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import AboutButton from './AboutButton';
import LoginButton from './LoginButton';
import Logo from './Logo';
import { LeadHeader1, LeadHeader2 } from './LeadHeader';

const Header = () => (
    <header> 
        <Grid>
            <Row>
                <Col lg={3} center="xs" center="sm" center="md">
                    <Logo/>
                </Col>
                <Col lgOffset={5}>
                </Col>
                <Col lg={3} center="xs" center="sm" center="md">
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
    </header>
);

export default Header;