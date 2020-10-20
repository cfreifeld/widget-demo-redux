
const widgetReducer = (state = [], action) => {
  let index, newState
  switch (action.type) {
    case 'CREATE_WIDGET':
    case 'DELETE_WIDGET':
    case 'SERVER_RESPONSE':
      return action.widgets // possibly integrate local state
    case 'MOVE_UP':
      index = state.indexOf(action.widget);
      state.move(index, index - 1);
      return state.splice(0);
    case 'TOGGLE_EDITING':
      newState = JSON.parse(JSON.stringify(state))
      index = newState.findIndex(
          function (widget) {
            return widget._id === action._id
          })
      newState[index].editing = action.editing
      //console.log(newState)
      return newState
    case 'SET_TEXT_WIDGET':
      newState = JSON.parse(JSON.stringify(state))
      index = newState.findIndex(
          function (widget) { return widget._id === action._id })
      newState[index].rawtext = action.text
      //console.log(newState)
      return newState
    default:
      return state
  }
}

export const otherReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_WIDGET':
      console.log("create widget action handled in otherReducer")
      return state
    default:
      return state
  }
}

export default widgetReducer