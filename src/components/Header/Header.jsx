import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <section className='mainHeaderSection'>
      <h5>Encabezados: {Object.keys(props.candidateData) + '-'}</h5>
      <h6>Candidato: {Object.values(props.candidateData) + '-'}</h6>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.candidateFormReducer;
};

export default connect(mapStateToProps)(Header);
