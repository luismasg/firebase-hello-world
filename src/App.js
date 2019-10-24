import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    user: "",
    password: "",
    todo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.user, this.state.password)
    //   .then(r => console.log("response : ", r));

    const ref = firebase.firestore();
    const collection = ref.collection("todo");
    collection
      .add({ todo: this.state.todo })
      .then(response => console.log("que paso?  ,", response));
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submit}>
          <input
            type="text"
            value={this.state.user}
            onChange={this.handleChange}
            name="user"
          />

          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
          />
          <button type="submit">sign in</button>
          <input
            type="text"
            value={this.state.todo}
            name="todo"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
