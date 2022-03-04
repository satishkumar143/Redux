import React from 'react';
import { connect } from 'react-redux';
const Country = (p) => {
 
  const [county, setCountry] = React.useState('');
  React.useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      countries list &nbsp;
      
      <button onClick={() => p.dispatch({ type: 'oo', payload: county })}>
        names
      </button>
      {p.d.Country.map((c, i) => {
        return (
          <ul key={i}>
            <li>{c.name}</li>
          </ul>
        );
      })}
   
    </div>
  );
};
export default connect((store) => store)(Country);
