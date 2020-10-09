// "monkey patch"
Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
}

export const deleteWidget = id => {
  return {
    type: 'DELETE_WIDGET', id: id
  }
}
let nextWidgetId = 0
export const addWidget = text => {
  return {
    type: 'ADD_WIDGET',
    id: nextWidgetId++,
    text: text
  }
}
export const moveUp = widget => {
  return {
    type: 'MOVE_UP', widget: widget
  }
}
export const setWidgetType = (id, widgetType) => {
  return {
    type: 'SET_WIDGET_TYPE',
    widgetType: widgetType, id: id
  }
}
export const toggleEditing = (id, checked) => {
  return {
    type: 'TOGGLE_EDITING',
    id: id,
    editing: checked
  }}
export const setTextWidget = (id, text) => (
    {type: 'SET_TEXT_WIDGET', id: id, text: text})
