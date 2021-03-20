import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CluePage from './pages/CluePage.tsx';
import Skeleton from './skeleton/Skeleton.tsx';

import * as data from './data.json';
import WelcomePage from './pages/WelcomePage';
import FinalPage from './pages/FinalPage';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

function Routes(){
  const firstClueSlug = data.firstClue;
  const lastAnswerSlug = Object.values(data.clues).slice(-1)[0].answer;

  return (
  <Router>
    <Skeleton>
      <Switch>
         {Object.entries(data.clues).map(([clueSlug, clue], index) => (
          <Route path={`/treasure/${clueSlug}/`} key={`${index}`}>
            <CluePage clue={clue}/>
          </Route>
         ))}
         <Route path={`/treasure/${lastAnswerSlug}`}>
          <FinalPage
            text={data.finalPageText}
          />
         </Route>
         <Route path="/">
          <WelcomePage
            text={data.landingPageText}
            firstClueSlug={firstClueSlug}
          />
         </Route>
      </Switch>
    </Skeleton>
  </Router>
  )
}