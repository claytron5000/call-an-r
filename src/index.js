import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import App from './components/App';
import ListPicker from './components/ListPicker';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Match exactly pattern="/" component={ListPicker} />
        <Match pattern="/list/:listId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
