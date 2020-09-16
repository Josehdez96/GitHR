import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import * as reposDataActions from '../actions/reposDataActions';

const FilterRepos = (props) => {
  const [query, setQuery] = useState('');
  let filteredRepositories = props.immutableData.filter((repo) =>
    query.length >= 3
      ? repo.name.toLowerCase().includes(query.toLowerCase())
      : repo
  );

  useEffect(() => {
    props.filterRepositories(filteredRepositories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Form>
      <Form.Group controlId='formBasicFilterRepos'>
        <Form.Label>Filtrar repositorios</Form.Label>
        <Form.Control
          type='text'
          placeholder='Digita el repositorio'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.reposDataReducer;
};

export default connect(mapStateToProps, reposDataActions)(FilterRepos);
