import React from 'react';

var Deal = React.createClass({

    render: function() {

        return (
            <a href={this.props.targetUrl} target='_blank'>
                <div className='Deal' id={this.props.key}>
                    <h2>{this.props.dealTitle}</h2>
                    <h3>{this.props.merchant}</h3>
                </div>
            </a>
        )

    }

})

module.exports = Deal;
