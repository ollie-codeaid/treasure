import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CluePage from './pages/CluePage.tsx';
import Skeleton from './skeleton/Skeleton.tsx';

import * as data from './data.json';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

function Routes(){
  return (
  <Router>
    <div>
      <Switch>
         <Route path="/begin">
           <Skeleton>
            <CluePage
              clue={{
                title: data.name,
                text: data.landingPageText,
                hint: data.landingPageHint,
                answer: data.landingPageAnswer
              }}
              isLandingPage={true}
            />
           </Skeleton>
         </Route>
         {Object.entries(data.clues).map(([clueSlug, clue], index) => (
          <Route path={`/${clueSlug}/`} key={`${index}`}>
            <Skeleton>
              <CluePage clue={clue} isLandingPage={false}/>
            </Skeleton>
          </Route>
         ))}
      </Switch>
    </div>
  </Router>
  )
}