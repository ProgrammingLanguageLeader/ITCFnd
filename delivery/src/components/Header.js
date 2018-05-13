import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import AboutButton from './AboutButton';
import LoginButton from './LoginButton';
import Logo from './Logo';

const LeadHeader = styled.span`
  font-family: "Pacifico", cursive;
`;

const LeadHeader1 = LeadHeader.extend`
  font-size: 77.32px;
  text-align: left;
  letter-spacing: 2.97px;
  color: #fff;
  margin-top: 96px;
  margin-left: 200px;
  
  @media (max-width: 1200px) {
    display: block;
    width: 100%;
    margin-left: 0;
    text-align: center;
    line-height: 84px;
    font-size: 60px;
  }
`;

const LeadHeader2 = LeadHeader.extend`
  font-size: 182.75px;
  text-align: left;
  line-height: 37px;
  letter-spacing: 6.49px;
  color: #b7e611;
  margin-left: 260px;

  @media (max-width: 1200px) {
    display: block;
    width: 100%;
    margin-left: 0;
    text-align: center;
    line-height: 84px;
    font-size: 100px;
  }
`;

const Header = () => (
  <header>
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
  </header>
);

export default Header;