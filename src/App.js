import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import ToDos from './Todos'
import ToDosId from './TodosId'
import Comments from './Comments'
import CommentsId from './CommentsId'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={ToDos} />
          <Route path="/todosId/:userId" component={ToDosId} />
          <Route path="/comments" component={Comments} />
          <Route path="/commentsId/:userId" component={CommentsId} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

class NotFound extends React.Component {
  render() {
    return (
      <h1 className="error">&nbsp;Error 404 - URL Not Found</h1>
    );
  }
}

export default App;
