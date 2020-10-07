import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Produtos from './pages/produtos';
import Contato from './pages/contato';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/contato" component={Contato} />
        <Route component={() => <div>Página não encontrada</div>} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
