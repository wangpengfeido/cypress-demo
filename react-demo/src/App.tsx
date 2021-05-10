import { Switch, Route } from 'react-router-dom';
import Base from './pages/base/base';
import ChartsBase from './pages/charts-base/charts-base';
import ChartsAdvanced from "./pages/charts-advanced/charts-advanced";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/base" component={Base}></Route>
        <Route path="/charts-base" component={ChartsBase}></Route>
        <Route path="/charts-advanced" component={ChartsAdvanced}></Route>
      </Switch>
    </div>
  );
}

export default App;
