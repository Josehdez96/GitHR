import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import * as candidateFormActions from '../actions/candidateFormActions';

class CandidateForm extends React.Component {
  state = {
    NombresApellidos: '',
    Cédula: '',
    Nacimiento: '',
    Email: '',
    Github: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(this.state).map((key, index) =>
      Cookies.set(key, Object.values(this.state)[index], { expires: 2 })
    );
    this.props.saveCandidateData(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='formBasicName'>
          <Form.Label>Nombres y apellidos</Form.Label>
          <Form.Control
            name='NombresApellidos'
            onChange={this.handleChange}
            type='text'
            placeholder='Ej. Alberto Emilio Correa Zapata'
            value={this.state.NombresApellidos}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCC'>
          <Form.Label>Cédula</Form.Label>
          <Form.Control
            name='Cédula'
            onChange={this.handleChange}
            type='number'
            placeholder='Ej. 1037462829'
            value={this.state.Cédula}
          />
        </Form.Group>
        <Form.Group controlId='formBasicBirthDate'>
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control
            name='Nacimiento'
            onChange={this.handleChange}
            type='date'
            placeholder='DD/MM/AAAA'
            value={this.state.Nacimiento}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control
            name='Email'
            onChange={this.handleChange}
            type='email'
            placeholder='Ej. aberto@seven4n.com'
            value={this.state.Email}
          />
        </Form.Group>
        <Form.Group controlId='formBasicGithub'>
          <Form.Label>Github</Form.Label>
          <Form.Control
            name='Github'
            onChange={this.handleChange}
            type='text'
            placeholder='Ej. albertodev52'
            value={this.state.Github}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Consultar
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.candidateFormReducer.candidateData;
};
export default connect(mapStateToProps, candidateFormActions)(CandidateForm);
