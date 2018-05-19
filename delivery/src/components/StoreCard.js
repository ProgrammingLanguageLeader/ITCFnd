import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: block;
    margin-bottom: 48px;
    text-decoration: inherit;
    color: inherit;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 16px;
`;

const Title = styled.h2`
    margin: 6px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    color: #333333;
`;

const Text = styled.p`
    font-size: 18px;
    margin: 6px 0 6px 0;
`;

const OrderInfo = styled.div`
    display: inline-block;
    border-radius: 10px;
    margin: 3px;
    padding: 2px 4px 2px 4px;
    font-size: 24px;
    background-color: #3b3b3b;
    color: #ffffff;
`;

const StoreCard = ({ link, img, title, categories, sellsAlcohol, priceBucket, etaRange }) => (
    <div>
        <Link href={link}>
            <Image src={img} />
            <Title>{title}</Title>
            <Text>
                {categories.join(', ')}
                {sellsAlcohol ? ', Алкоголь' : ''}
            </Text>
            <OrderInfo>{priceBucket}</OrderInfo>
            <OrderInfo>{etaRange.min}-{etaRange.max} минут</OrderInfo>
        </Link>
    </div>
);

export default StoreCard;