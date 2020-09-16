import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

const Header = (props) => {
  return (
    <section className='mainHeaderSection'>
      {Object.keys(props.candidateData).map((item, index) => (
        <p className={`title${index}`} key={`title${index}`}>
          {item}
        </p>
      ))}
      {Object.values(props.candidateData).map((item, index) => (
        <p className={`candidateData${index}`} key={`candidateData${index}`}>
          {item}
        </p>
      ))}
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.candidateFormReducer;
};

export default connect(mapStateToProps)(Header);
