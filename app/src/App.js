import React, { Component } from "react";
import Main from "./components/main/Main";
import { Provider } from "react-redux";
import store from "./store/store";
import "./assets/css/common.css";
import "./assets/css/reset.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
