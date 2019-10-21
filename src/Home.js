import React from 'react';
import Header from './Header';
import ToDosId from './TodosId';
import CommentsId from './CommentsId';
import { Button } from 'reactstrap';
import spinner from './spinner.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { CSSTransitionGroup } from 'react-transition-group';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: null,
      showLabel: true
    }
  }

  listOfUsers = (data) => {
    console.log(data);
    this.setState({
      list: data,
      error: null
    })
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => response.json())
      .then(this.listOfUsers)
      .catch(error => {
        this.setState({ error })
      })
    this.setState({ showLabel: false })
  }

  loadToDos = (e) => {
    console.log("ID Parent: " + e.target.id);
    this.props.history.push(`/todosId/${e.target.id}`, { name: e.target.value });
    return (<ToDosId />);
  }

  loadComments = (e) => {
    console.log("ID Parent: " + e.target.id);
    this.props.history.push(`/commentsId/${e.target.id}`, { name: e.target.value });
    return (<CommentsId />);
  }

  render() {
    return (
      <div>
        <Header />
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={800}
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          {this.state.showLabel &&
            <div className="App"><img src={spinner} alt="spinner" height="50px" width="50px" /></div>}
        </CSSTransitionGroup>

        {this.state.list.length > 0 &&
          this.state.list.map((item) => (
            <div key={item.id} className="card bg-light m-1">
              <div className="card-body p-2">
                <div className="d-flex p-2">
                  <div className="justify-content-start">
                    <h4 className="card-title">Name: {item.name}</h4>
                    <p className="card-text">User: {item.username}</p>
                    <p className="card-text">e-Mail: {item.email}</p>
                  </div>
                  <div className="d-flex align-items-start flex-column ml-auto">
                    <div className="mb-auto">
                      <Button onClick={this.loadToDos} value={item.name} id={item.id} className="btn btn-info" style={{ width: 100 }}>To Dos</Button>
                    </div>
                    <div >
                      <Button onClick={this.loadComments} value={item.name} id={item.id} className="btn btn-info" style={{ width: 100 }}>Comments</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {this.state.list.length === 0 &&
          <h1 className="error">User List is Empty</h1>}
        {this.state.error &&
          <h3 className="error">{this.state.error}</h3>}
      </div>
    );
  }
}

export default Home;