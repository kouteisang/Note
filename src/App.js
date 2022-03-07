import { BrowserRouter as Router,
  Route, 
  Redirect, 
  Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home';
import BookContent from './pages/BookContent';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/book/addBook' component={AddBook}/> 
          <Route path='/book/content' component={BookContent}/>
          <Redirect path='/' to='/home/book'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
