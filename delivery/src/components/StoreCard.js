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

class StoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: '',
            img: '',
            title: '',
            categories: [],
            priceBucket: '',
            etaRange: {
                min: 0,
                max: Number.MAX_SAFE_INTEGER,
            },
            sellsAlcohol: false,
        };
    }

    componentWillMount() {
        this.fetchStoreInfo(this.props.uuid)
            .then(storeInfo => {
                console.log(storeInfo);
                let categories = [];
                storeInfo.categories.forEach(category => {
                    categories.push(category.keyName);
                });
                this.setState({
                    link: storeInfo.link,
                    img: storeInfo.heroImageUrl,
                    title: storeInfo.title,
                    categories: categories,
                    priceBucket: storeInfo.priceBucket,
                    etaRange: {
                        min: storeInfo.etaRange.min,
                        max: storeInfo.etaRange.max,
                    },
                    sellsAlcohol: Boolean(storeInfo.sellsAlcohol),
                });
            });
    }

    render() {
        return (
            <Link href={this.state.link}>
                <Image src={this.state.img} />
                <Title>{this.state.title}</Title>
                <Text>
                    {this.state.categories.join(', ')}
                    {this.state.sellsAlcohol ? ', Алкоголь' : ''}
                </Text>
                <OrderInfo>{this.state.priceBucket}</OrderInfo>
                <OrderInfo>{this.state.etaRange.min}-{this.state.etaRange.max} минут</OrderInfo>
            </Link>
        );
    }

    fetchStoreInfo(uuid) {
        const url = `https://itc-web1-server.now.sh/store?uuid=${uuid}`;
        return fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                }
                return response.json();
            })
            .then(data => {
                return data.payload;
            });
    }
}

export default StoreCard;