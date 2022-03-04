import React, { Fragment } from 'react';
import { connect } from 'react-redux';
const Counterone = (p) => {
  //console.log(p)
  return (
    <Fragment>
      counter one{p.c.count}
      <button
        onClick={() => {
          p.dispatch({ type: 'inc' });
        }}
      >
        inc
      </button>
    </Fragment>
  );
};
export default connect((lovestre) => lovestre)(Counterone);
