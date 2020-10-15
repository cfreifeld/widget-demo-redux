import React from 'react'
import Widget from "../components/Widget";
import {connect} from "react-redux";

const WidgetComponent = connect()(Widget)
const WidgetList = ({widgets}) => (
    <ul>
      {widgets.map(widget =>
          <WidgetComponent key={widget._id}
                           widget={widget}/>)}
    </ul>)

const mapStateToProps = state => ({
  widgets: state.widgets
})

const WidgetListContainer = connect(mapStateToProps)(WidgetList)

export default WidgetListContainer