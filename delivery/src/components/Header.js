import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import Logo from './Logo';

const StyledHeader = styled.header`
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`;

const Header = () => (
    <StyledHeader>
        <Grid>
            <Row center="xs">
                <Col lg={3}>
                    <Link to="/">
                        <Logo src="img/logoblack.png" />
                    </Link>
                </Col>
                <Col lgOffset={5}>
                </Col>
                <Col lg={3}>
                    <LoginButton>Вход / Регистрация</LoginButton>
                </Col>
            </Row>
        </Grid>
    </StyledHeader>
);

export default Header;