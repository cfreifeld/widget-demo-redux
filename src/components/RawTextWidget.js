import React from 'react'
import {setTextWidget} from "../actions";
import {connect} from "react-redux";

const RawTextWidgetComponent = ({widget, dispatch}) => {
  let textarea, preview
  return (
      <div>
        <h1>Raw Text Widget</h1>
        <textarea ref={node => textarea = node}
                  value={widget.rawtext}
                  onChange={e => {
                    dispatch(setTextWidget(widget.id,
                        textarea.value))
                    preview.innerHTML = textarea.value
                  }}/>
        <p ref={node => preview = node}/>
      </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    widget: state.widgets.find(w => w.editing) || state.widgets[0]
  }
}

const RawTextWidget = connect(mapStateToProps)(RawTextWidgetComponent)
export default RawTextWidget