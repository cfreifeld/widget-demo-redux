import React from 'react'
import {connect} from "react-redux";
import axios from "axios";
//import {addWidget} from "../actions";

const AddWidgetComponent = ({addWidget}) => {
  let input
  return (<div>
    <input ref={node => input = node}/>
    <button type="submit" onClick={e => {
      addWidget(input.value)
      input.value = ''
    }}>Add Widget
    </button>
  </div>)
}
let serverBaseUrl = 'https://wbdv-generic-server.herokuapp.com/api/ccf/widgets'
const dispatchToPropertyMapper = (dispatch) => {
  return {
    addWidget: (text) => {
      axios.post(
          serverBaseUrl,
          {
            //type: 'ADD_WIDGET',
            //id: nextWidgetId++,
            text: text,
            editing: false
          }).then(() => axios.get(serverBaseUrl))
      .then(resp => dispatch({type: 'CREATE_WIDGET', widgets: resp.data})
      )
    }
  }
}

const AddWidget = connect(null, dispatchToPropertyMapper)(AddWidgetComponent)
export default AddWidget