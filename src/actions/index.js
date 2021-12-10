import store from "../store";

export const Add = (layout) => (dispatch, getState) => {
  store.dispatch({
      type: 'Add',
      layout
  });
}