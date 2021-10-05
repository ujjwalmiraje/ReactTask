const todoDetail = {
  data: []
};
function Data(state = todoDetail, action) {
  console.log(action);
  switch (action.type) {
    case "SHOW":
      return { ...state, data: action.data };
    default:
      return state;
  }
}
export default Data;
