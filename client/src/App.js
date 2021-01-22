import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//importing all components
import Landing from './Views/Landing';

function App() {
  return (
    <Router>
      <Route path='/' component={Landing} exact />
    </Router>
  );
}

export default App;
