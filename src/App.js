import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import AirPortDetails from './components/AirPortDetails'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={AirPortDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
