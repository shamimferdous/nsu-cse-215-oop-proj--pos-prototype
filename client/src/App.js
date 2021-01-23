import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//importing all components
import Landing from './Views/Landing';
import Orders from './Views/Orders';

function App() {
  return (
    <Router>
      <Route path='/' component={Landing} exact />
      <Route path='/orders' component={Orders} exact />
    </Router>
  );
}

export default App;
