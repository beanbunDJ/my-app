const initState = {
  layout:[
    {i: 'a', x: 0, y: 0, w: 1, h: 2, type: 'bar',module: 'chart'},
    {i: 'b', x: 1, y: 0, w: 1, h: 2, type: 'line',module: 'chart'},
    {i: 'c', x: 2, y: 0, w: 1, h: 2, type: 'area',module: 'chart'},
    {i: 'd', x: 3, y: 0, w: 1, h: 2, type: 'tabs',module: 'layout'}
  ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState,action) => {
  switch(action.type){
    case 'Add':
      return {
        ...state,
        layout: action.layout
      }
      default:
          return state
  }
}