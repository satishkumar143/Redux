const intilState = {
    Country: [],
  };
  const Reducer = (state = intilState, action) => {
    if (action.type === 'oo') {
      return { Country: action.payload };
    }
    return state;
  };
  export default Reducer;
  