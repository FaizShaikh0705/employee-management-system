import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/home/Home'
import Login from "./component/login/Login";
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        {/* <Route exact path="*" component={Home} /> */}
      </Switch>
    </Router>
  </AuthProvider>
   
  );
}

export default App;
