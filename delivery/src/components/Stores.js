import React from 'react';
import { Col } from 'react-flexbox-grid';

import { fetchStoresData } from '../API';
import StoreCard from './StoreCard';

class Stores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        };
    }

    async componentDidMount() {
        let storesData = await fetchStoresData();
        let stores = await storesData.map(store => {
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
        })

        await this.setState({
            stores: stores
        });
    }

    render() {
        return this.state.stores;
    };
}

export default Stores;