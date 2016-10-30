import React from 'react';
import Deal from './Deal';
import dealData from '../../../sampleData/sampleData.json';

var App = React.createClass({

    getInitialState: function() {
        return {deals: [], merchant: ''};
    },

    loadDealData: function() {
        var url = '';

        // Loading data from API - Sample Data Loaded from Local json

        this.state.merchant = dealData.deals[0].merchant;
        this.state.deals = dealData.deals;

    },

    render: function() {

        this.loadDealData();

        var displayDeals = [];
        for (let i = 0; i < this.state.deals.length; i++) {
            if (this.state.merchant == this.state.deals[i].merchant) {
                displayDeals.push(
                    <Deal merchant={this.state.deals[i].merchant} dealTitle={this.state.deals[i].title} targetUrl={this.state.deals[i].link} key={i.toString()}></Deal>
                )
            }
        }

        console.log('DisplayDeals: ', displayDeals.length);

        return (
            <div>
                <h1>Deals for: {this.state.merchant}</h1>
                <div className='DealsTable'>{displayDeals}
                </div>
            </div>
        )
    }

});

export default App;
