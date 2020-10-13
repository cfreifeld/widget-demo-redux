import React from 'react';
import './App.css';
import WidgetListContainer from "./containers/WidgetList";
import {combineReducers, createStore} from "redux";
import widgets from "./reducers";
import {Provider} from "react-redux";
import AddWidget from "./components/AddWidget";
import axios from "axios";

const rootReducer = combineReducers({widgets})
//const store = createStore(rootReducer)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialState: {},
      loaded: false,
      error: false
    }
  }

  componentDidMount() {
    axios.get('https://wbdv-generic-server.herokuapp.com/api/ccf/widgets')
    .then(res => {
      // set state, which will re-render,
      // and create the store with the new initialState
      this.setState({
        initialState: {widgets: res.data},
        loaded: true
      });
    })
  }

  render() {
    if(!this.state.loaded) {
      return "Loading";
    }
    return (
        <Provider store={createStore(rootReducer, this.state.initialState)}>
          <div className="App">
            <WidgetListContainer/>
            <AddWidget/>
          </div>
        </Provider>
    )
  }
}

export default App;
