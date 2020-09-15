import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from 'js-cookie';

class CandidateForm extends React.Component {
  state = {
    nombresApellidos: '',
    cedula: '',
    email: '',
    github: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // let userValues = Object.values(this.state);
    Object.keys(this.state).map((key, index) =>
      Cookies.set(key, Object.values(this.state)[index], { expires: 2 })
    );
    //console.log(Cookies.get()); // Visualizar cookies actuales
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
            name='nombresApellidos'
            onChange={this.handleChange}
            type='text'
            placeholder='Ej. Alberto Emilio Correa Zapata'
            value={this.state.nombresApellidos}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCC'>
          <Form.Label>Cedula</Form.Label>
          <Form.Control
            name='cedula'
            onChange={this.handleChange}
            type='number'
            placeholder='Ej. 103746282'
            value={this.state.cedula}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control
            name='email'
            onChange={this.handleChange}
            type='email'
            placeholder='Ej. aberto@seven4n.com'
            value={this.state.email}
          />
        </Form.Group>
        <Form.Group controlId='formBasicGithub'>
          <Form.Label>Github</Form.Label>
          <Form.Control
            name='github'
            onChange={this.handleChange}
            type='text'
            placeholder='Ej. albertodev52'
            value={this.state.github}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Guardar
        </Button>
      </Form>
    );
  }
}

export default CandidateForm;
