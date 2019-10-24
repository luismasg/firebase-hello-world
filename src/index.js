import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import * as serviceWorker from "./serviceWorker";

firebase.initializeApp({
  apiKey: "AIzaSyBfcaMg-moTyYvgbAwaVQKcRcRBzfIx5mI",
  authDomain: "cosa1-20764.firebaseapp.com",
  databaseURL: "https://cosa1-20764.firebaseio.com",
  projectId: "cosa1-20764",
  storageBucket: "cosa1-20764.appspot.com",
  messagingSenderId: "101323988963",
  appId: "1:101323988963:web:ac72144d38e2a006098ad6"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
