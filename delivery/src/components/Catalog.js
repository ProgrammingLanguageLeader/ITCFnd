import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Button from './Button';
import Header from './Header';
import { Header1 } from './TextHeaders';
import Footer from './Footer';
import { fetchStoresData } from '../API';
import StoreCard from './StoreCard';

const Catalog = () => (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
);

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
            limit: 16,
            offset: 0,
            availableMore: true, 
        };
    }

    componentDidMount() {
        this.loadMoreStores();
    }

    async loadMoreStores() {
        let newStores = await fetchStoresData(this.state.offset, this.state.limit);
        this.setState({
            stores: this.state.stores.concat(newStores),
            offset: this.state.offset + newStores.length,
            availableMore: newStores.length === this.state.limit,
        });
    }

    render() {
        let stores = this.state.stores.map(store => {
            let categories = store.categories.map(categoryData => {
                return categoryData.name;
            });
            return (
                <Col lg={3} md={6} sm={12} key={store.uuid}>
                    <StoreCard 
                        link={store.link}
                        img={store.heroImageUrl}
                        title={store.title}
                        categories={categories}
                        priceBucket={store.priceBucket}
                        etaRange={store.etaRange}
                        sellsAlcohol={store.sellsAlcohol}
                    />
                </Col>
            );
        });

        return (
            <Grid>
                <Row>
                    <Col sm={12}>
                        <Header1>Рестораны</Header1>
                    </Col>
                </Row>
                <Row>
                    {stores}
                </Row>
                <Row center="xs">
                    <Button disabled={!this.state.availableMore}>Больше ресторанов</Button>
                </Row>
            </Grid>
        );
    }

    
}

export default Catalog;