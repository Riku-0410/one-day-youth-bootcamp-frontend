import { createStore } from "redux";

const initialState = {
  tasks: [
    {
      label: "食器洗い",
      isDone: false,
    },
    {
      label: "洗濯",
      complete: false,
    }
  ]
}

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;