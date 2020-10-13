import React from 'react'
import {deleteWidget, moveUp, setWidgetType, toggleEditing} from "../actions";
import RawTextWidget from "./RawTextWidget";
import axios from "axios";
import {connect} from "react-redux";

const WidgetComponent = ({widget, deleteWidget, moveUp, toggleEditing, setWidgetType}) => {
  let select, editing
  return (
      <li>{widget.text}
        <button onClick={() => {
          moveUp(widget)
        }}>^
        </button>
        <label>
          <input ref={node => editing = node}
                 type="checkbox"
                 value={widget.editing}
                 onChange={e => {
                   toggleEditing(widget._id, editing.checked)}}
                 checked={widget.editing}/> Editing
        </label>
        <select ref={node => select = node}
                value={widget.widgetType}
                onChange={e => {
                  setWidgetType(widget._id, select.value)
                }}>
          <option>Heading</option>
          <option>Paragraph</option>
          <option>Raw Text</option>
          <option>HTML</option>
          <option>Link</option>
          <option>iFrame</option>
        </select>
        <button onClick={() => {
          deleteWidget(widget._id)
        }}>
          Delete
        </button>
        <div style={{display: widget.editing ? 'block': 'none'}}>
          Widget Editor
        </div>
        <div style={{display: widget.editing ? 'block': 'none'}}>
          <div style={{display: widget.widgetType === 'Heading' ? 'block': 'none'}}>
            Heading
          </div>
          <div style={{display: widget.widgetType === 'Paragraph' ? 'block': 'none'}}>
            Paragraph
          </div></div>
        {widget.editing && widget.widgetType === 'Raw Text' &&
            <RawTextWidget/>}
      </li>
  )
}

let serverBaseUrl = 'https://wbdv-generic-server.herokuapp.com/api/ccf/widgets'

const dispatchToPropertyMapper = (dispatch) => {
  return {
    deleteWidget: (id) => deleteWidget(id, dispatch),
    // deleteWidget: (id) => {
    //   return axios.delete(`${serverBaseUrl}/${id}`
    //   ).then(() => axios.get(serverBaseUrl))
    //   .then(resp => dispatch({type: 'SERVER_RESPONSE', widgets: resp.data}))
    // },
    moveUp: (widget) => dispatch(moveUp(widget)),
    toggleEditing: (id, isEditing) => dispatch(toggleEditing(id, isEditing)),
    setWidgetType: (id, type) => dispatch(setWidgetType(id, type))
  }
}

const Widget = connect(null, dispatchToPropertyMapper)(WidgetComponent)

export default Widget