import React from 'react';
import './App.css';
import WidgetListContainer from "./containers/WidgetList";
import {combineReducers, createStore} from "redux";
import widgets from "./reducers";
import {Provider} from "react-redux";
import AddWidget from "./components/AddWidget";

const rootReducer = combineReducers({widgets})
const store = createStore(rootReducer)

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <WidgetListContainer/>
          <AddWidget  />
        </div>
      </Provider>
  );
}

export default App;
