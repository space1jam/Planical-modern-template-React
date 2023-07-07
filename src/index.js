import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MissionQuest1 from './views/mission-quest1'
import Personalized from './views/personalized'
import Travel from './views/travel'
import Redeemed from './views/redeemed'
import ClaimReward from './views/claim-reward'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MissionQuest1} exact path="/mission-quest1" />
        <Route component={Personalized} exact path="/personalized" />
        <Route component={Travel} exact path="/travel" />
        <Route component={Redeemed} exact path="/redeemed" />
        <Route component={ClaimReward} exact path="/claim-reward" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
