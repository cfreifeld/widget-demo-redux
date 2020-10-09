const widgets = (state = [], action) => {
  let index, newState
  switch (action.type) {
    case 'ADD_WIDGET':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          editing: false
        }
      ]
    case 'DELETE_WIDGET':
      return state.filter(widget => widget.id !== action.id)
    case 'MOVE_UP':
      index = state.indexOf(action.widget);
      state.move(index, index - 1);
      return state.splice(0);
    default:
      return state
    case 'SET_WIDGET_TYPE':
      newState = JSON.parse(JSON.stringify(state))
      index = newState.findIndex(function (widget) {
        return widget.id === action.id})
      newState[index].widgetType = action.widgetType
      return newState
    case 'TOGGLE_EDITING':
      newState = JSON.parse(JSON.stringify(state))
      index = newState.findIndex(
          function (widget) {
            return widget.id === action.id
          })
      newState[index].editing = action.editing
      //console.log(newState)
      return newState
    case 'SET_TEXT_WIDGET':
      newState = JSON.parse(JSON.stringify(state))
      index = newState.findIndex(
          function (widget) { return widget.id === action.id })
      newState[index].rawtext = action.text
      //console.log(newState)
      return newState
  }
}
export default widgets