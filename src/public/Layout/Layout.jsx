import React from 'react';


export default class Layout extends React.Component {
  render() {
    return (
      <html lang="en-US">
        <head>
          <title>Promo Codes</title>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: this.props.children }}></div>
          <script src="bundle.js" charSet="utf-8" />
        </body>
      </html>
      );
  }
}
