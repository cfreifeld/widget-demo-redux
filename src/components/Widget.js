import React from 'react'
import {deleteWidget, moveUp, setWidgetType, toggleEditing} from "../actions";
import RawTextWidget from "./RawTextWidget";

const Widget = ({widget, dispatch}) => {
  let select, editing
  return (
      <li>{widget.text}
        <button onClick={() => {
          dispatch(moveUp(widget))
        }}>^
        </button>
        <label>
          <input ref={node => editing = node}
                 type="checkbox"
                 value={widget.editing}
                 onChange={e => {
                   dispatch(toggleEditing(widget.id, editing.checked))}}
                 checked={widget.editing}/> Editing
        </label>
        <select ref={node => select = node}
                value={widget.widgetType}
                onChange={e => {
                  dispatch(setWidgetType(widget.id, select.value))
                }}>
          <option>Heading</option>
          <option>Paragraph</option>
          <option>Raw Text</option>
          <option>HTML</option>
          <option>Link</option>
          <option>iFrame</option>
        </select>
        <button onClick={() => {
          dispatch(deleteWidget(widget.id))
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
export default Widget