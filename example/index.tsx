import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageHomeComingSoon } from '../.';

const App = () => {
  return (
    <div>
      <PageHomeComingSoon />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
