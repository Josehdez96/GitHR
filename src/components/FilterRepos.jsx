import React from 'react';
import Form from 'react-bootstrap/Form';

const FilterRepos = (props) => {
  return (
    <Form>
      <Form.Group controlId='formBasicFilterRepos'>
        <Form.Label>Filtrar repositorios</Form.Label>
        <Form.Control
          type='text'
          placeholder='Digita el repositorio'
          value=''
          onChange={(e) => console.log(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default FilterRepos;
