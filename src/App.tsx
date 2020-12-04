import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/Header';
import Shows from './pages/shows/Shows';
import ShowDetails from './pages/show-details/ShowDetails';
import EpisodeDetails from './pages/episode-details/EpisodeDetails';
import urlsConfig from './api/urls.json';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
             <Header />
            <Switch>
              <Route exact path='/'>
                <Redirect to={`/shows/${urlsConfig.DEFAULT_SHOW_ID}`} />
              </Route>
              <Route exact path='/shows' component={Shows} />
              <Route path='/shows/:id' component={ShowDetails} />
              <Route exact path='/episodes/:id' component={EpisodeDetails} />
            </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;
