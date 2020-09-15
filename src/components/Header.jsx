import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <section>
      <h4>{Object.keys(props.candidateData)}</h4>
      <h4>{Object.values(props.candidateData)}</h4>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.candidateFormReducer;
};

export default connect(mapStateToProps)(Header);
