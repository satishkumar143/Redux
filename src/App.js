import React from 'react';

import lovestore from './redux/store';
import Country from './Country';

import { Provider } from 'react-redux';
import Counterone from './Counterone';
import {
  BrowserRouter as Routers,
  Link
} from 'react-router-dom';
const App = () => {
  return (
    <Provider store={lovestore}>
      <Routers>
        <div>
         
          <Link to="/lol" target="_blank">
            Plz... click me go to newtab
          </Link>{' '}
          <br />
          {/* <Route path='/lol' component={Country}></Route> */}
          <Counterone />
          <Country />
        </div>
      </Routers>
    </Provider>
  );
};
export default App;
