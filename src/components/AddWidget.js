import React from 'react'
import {connect} from "react-redux";
import {addWidget} from "../actions";

const AddWidgetComponent = ({dispatch}) => {
  let input
  return (<div>
    <input ref={node => input = node}/>
    <button type="submit" onClick={e => {
      dispatch(addWidget(input.value))
      input.value = ''
    }}>Add Widget
    </button>
  </div>)
}

const AddWidget = connect()(AddWidgetComponent)
export default AddWidget