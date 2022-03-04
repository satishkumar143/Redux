const intilState = {
    count: 1,
  };
  
  const Reducer = (state = intilState, action) => {
   
    if (action.type === 'inc') {
      return {
        count: state.count + 1,
      };
    }
    return state;
  };
  
  export default Reducer;
  