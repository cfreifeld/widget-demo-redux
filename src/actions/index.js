import axios from "axios";

// "monkey patch"
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
}

let serverBaseUrl = 'https://wbdv-generic-server.herokuapp.com/api/ccf/widgets'
export const deleteWidget = (id, dispatch) => {
    return axios.delete(`${serverBaseUrl}/${id}`)
    .then(() => axios.get(serverBaseUrl))
    .then(resp => dispatch({type: 'SERVER_RESPONSE', widgets: resp.data}))
  // return {
  //   type: 'DELETE_WIDGET', id: id
  // }
}
let nextWidgetId = 0
// export const addWidget = (text) => {
//   // return (dispatch) => {
//   //   return axios.post(
//   //       serverBaseUrl,
//   //       {
//   //         //type: 'ADD_WIDGET',
//   //         //id: nextWidgetId++,
//   //         text: text,
//   //         editing: false
//   //       }).then(
//   //       () => axios.get(
//   //           serverBaseUrl))
//   //       .then(resp => dispatch({type: 'SERVER_RESPONSE', widgets: resp.data})
//   //   )
//     return {
//      type: 'ADD_WIDGET',
//      id: nextWidgetId++,
//      text: text
//     }
//   //}
// }
export const moveUp = widget => {
  return {
    type: 'MOVE_UP', widget: widget
  }
}
export const setWidgetType = (id, widgetType) => {
  return {
    type: 'SET_WIDGET_TYPE',
    widgetType: widgetType, _id: id
  }
}
export const toggleEditing = (id, checked) => {
  return {
    type: 'TOGGLE_EDITING',
    _id: id,
    editing: checked
  }
}
export const setTextWidget = (id, text) => (
    {type: 'SET_TEXT_WIDGET', _id: id, text: text})
