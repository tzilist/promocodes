import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


class Component extends React.Component {
  render() {
    return (
      <App />
   );
  }
}

ReactDOM.render(<Component />, document.getElementById('root'));
