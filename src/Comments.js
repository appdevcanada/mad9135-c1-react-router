import React from 'react';
import Header from './Header';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      error: null
    }
  }

  listOfComments = (data) => {
    console.log(data);
    this.setState({
      list: data,
      error: null
    })
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
      .then(response => response.json())
      .then(this.listOfComments)
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.list.length === 0 &&
          <h1 className="error">Albums List is Empty</h1>}
        {this.state.list.length > 0 &&
          this.state.list.map((item) => (
            <div key={item.id} className="card bg-light m-1">
              <div className="card-body p-2">
                <div className="d-flex p-2">
                  <div className="justify-content-start">
                    <h5 className="card-title">Name: {item.name}</h5>
                    <p className="card-text">e-Mail: {item.email}</p>
                    <p className="card-text">Comment: {item.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {this.state.error &&
          <h3 className="error">{this.state.error}</h3>}
      </div>
    );
  }
}

export default Comments;