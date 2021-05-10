import { Switch, Route } from 'react-router-dom';
import Base from './pages/base/base';
import ChartsBase from './pages/charts-base/charts-base';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/base" component={Base}></Route>
        <Route path="/charts-base" component={ChartsBase}></Route>
      </Switch>
    </div>
  );
}

export default App;
