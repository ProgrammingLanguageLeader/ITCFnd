import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const StyledFooter = styled.footer`
    margin-top: 100px;
    padding-bottom: 64px;
    background-color: #333333;

    @media (max-width: 768px) {
        margin-top: 30px;
    }
`;

const Title = styled.h4`
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #999999;
    margin-top: 40px;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const Navlink = styled.a`
    display: block;
    font-family: "Open Sans", Regular;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    text-decoration: underline;
    color: #cccccc;

    &:hover {
        color: #a3d200;
    }

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const Text = styled.p`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #cccccc;
`;

const SocialIcons = styled.div`
    text-align: center;

    @media (min-width: 768px) {
        text-align: right;
    }
`;

const SocialIconImg = styled.img`
    margin-top: 40px;
    margin-left: 15px;
`;

const SocialIcon = ({ src, href, alt }) => (
    <a href={href}>
        <SocialIconImg src={src} alt={alt} />
    </a>
);

const Copyright = Text.extend`
    text-align: center;
    line-height: 24px;
    margin-top: 40px;

    @media (min-width: 768px) {
        text-align: right;
    }
`;

const Footer = () => {
    const title = "Компания";
    const links = [
        <Navlink key="curier" href="#">Для курьеров</Navlink>,
        <Navlink key="partnership" href="#">Партнерство для ресторанов</Navlink>,
        <Navlink key="conditions" href="#">Условия проведения акций</Navlink>,
        <Navlink key="contacts" href="#">Контакты</Navlink>
    ];

    return (
        <StyledFooter>
            <Grid>
                <Row between="xs">
                    <Col md={6} xs={12} center="xs" start="md">
                        <Title>{title}</Title>
                        {links}
                    </Col>
                    <Col md={6} xs={12}>
                        <SocialIcons>
                            <SocialIcon src="img/ig.png" href="#" alt="Instagram" />
                            <SocialIcon src="img/vk.png" href="#" alt="VK" />
                        </SocialIcons>
                        <Copyright>
                            &copy; 2009-2018 Delivery Club&trade;
              <br />Все права защищены
            </Copyright>
                    </Col>
                </Row>
            </Grid>
        </StyledFooter>
    );
};

export default Footer;