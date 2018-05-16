import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import StoreCard from './StoreCard';

class StoreRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storeCards: []
        };
    }

    componentWillMount() {
        this.fetchStoreCards()
            .then(storeCards => {
                this.setState({
                    storeCards: storeCards
                });
            });
    }

    render() {
        let rowsNumber = this.state.storeCards.length / 4 + (this.state.storeCards.length % 4 ? 1 : 0);
        let rowsContent = Array(rowsNumber);
        for (let i = 0; i < rowsNumber; i++) {
            rowsContent[i] = Array(4);
        }

        this.state.storeCards.forEach( (storeCard, storeCardIndex) => {
            let rowNumber = Math.floor(storeCardIndex / 4);
            rowsContent[rowNumber].push(
                <Col lg={3} md={6} sm={12} key={storeCardIndex}>
                    {storeCard}
                </Col>
            );
        });

        let rows = [];
        rowsContent.forEach( (rowContent, rowIndex) => {
            rows.push(
                <Row around="xs" key={rowIndex}>
                    {rowContent}
                </Row>
            );
        });

        return (
            <div>{rows}</div>
        );
    };

    fetchStoreCards(offset=0, limit=8) {
        return this.fetchStoreUUIDs(offset, limit)
            .then(uuids => {
                let storeCards = [];
                uuids.forEach(uuid => {
                    storeCards.push(
                        <StoreCard uuid={uuid} />
                    );
                });
                return storeCards;
            })
    }

    fetchStoreUUIDs(offset=0, limit=8) {
        const url = `https://itc-web1-server.now.sh/stores?limit=${limit}&offset=${offset}`;
        return fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                }
                return response.json();
            })
            .then(data => {
                const UUIDs = [];
                data.payload.stores.forEach(store => {
                    UUIDs.push(store.uuid);
                });
                return UUIDs;
            });
    }
}

export default StoreRows; 