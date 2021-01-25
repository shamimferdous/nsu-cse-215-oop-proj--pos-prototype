import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//importing all components
import Landing from './Views/Landing';
import Orders from './Views/Orders';
import Items from './Views/Items';

function App() {
  return (
    <Router>
      <Route path='/' component={Landing} exact />
      <Route path='/orders' component={Orders} exact />
      <Route path='/items' component={Items} exact />
    </Router>
  );
}

export default App;
