import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateMovie from "./components/CreateMovie";
import MovieList from "./components/MovieList";
 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={CreateMovie} />
        <Route exact path="/movie/list" component={MovieList} />
           
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
