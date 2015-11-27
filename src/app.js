import './common-css';
import './assets/styles/app.scss';
// lib
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route } from 'react-router';

// Root Page
import Agreement from './components/page/agreement';
import Entry from './components/page/entry';
import Root from './components/page/root';
import Tags from './components/page/tags';
import NotFound from './components/page/not-found';

let Routes;

Routes = (
    <Route path="/" component={Root}>
        <Route path="agreement" component={Agreement} />
        <Route path="entry" component={Entry} />
        <Route path="tags" component={Tags}>
            <Route path="tags/:editId" component={Tags} />
        </Route>
        <IndexRoute component={Agreement} />
        <Route path="*" component={NotFound}/>
    </Route>
);

ReactDOM.render(<Router routes={Routes}/>, document.getElementById('app'));
