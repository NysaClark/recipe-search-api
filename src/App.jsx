import {Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import SingleRecipe from './Pages/SingleRecipe';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path="/movies/:id">
        <SingleRecipe />
      </Route>
    </Switch>
  );
}

export default App;
