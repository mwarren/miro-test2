import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles.less';

function Root() {
  const [state, setState] = React.useState({});

  return (
    <div className="container">
      <h1>NetSys SAFe Assistant</h1>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById('netsys-safe-assistant'))
