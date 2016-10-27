import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test.jsx';


class Component extends React.Component {
  render() {
    return (
      <div>
        hi
        <Test />
      </div>
   );
  }
}

ReactDOM.render(<Component />, document.getElementById('root'));
