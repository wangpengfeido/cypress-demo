import { Switch, Route } from "react-router-dom";
import Base from "./pages/Base";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/base" component={Base}></Route>
      </Switch>
    </div>
  );
}

export default App;
