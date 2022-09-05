import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

class ReactFormLabel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      lastName: '',
      email: '',
      phone: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    let newState = {}

    newState[e.target.name] = e.target.value

    this.setState(newState)
  }


  handleSubmit = (e, message) => {
    e.preventDefault()

    let formData = {
      formSender: this.state.name,
      formLastName: this.state.lastName,
      formEmail: this.state.email,
      formPhone: this.state.phone,
    }

    if (formData.formSender.length < 1 || formData.formLastName.length < 1 || formData.formEmail.length < 1 || formData.formPhone.length < 1) {
      return false
    }

    //TO DO: implement api backend.
    console.log(this.state)
    alert('Data sent successfully!')


    //Reset State.
    this.setState({
      name: '',
      lastName: '',
      email: '',
      phone: '',
    })
  }

  render() {
    return(
      <form className='react-form' onSubmit={this.handleSubmit}>
        <h1>Contact information</h1>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formName' title='First Name:' />

          <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formLastName' title='Last Name:' />

          <input id='formLastName' className='form-input' name='lastName' type='text' required onChange={this.handleChange} value={this.state.lastName} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formEmail' title='Email:' />

          <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
        </fieldset>

        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formPhone' title='Phone:'/>

          <input id='formPhone' className='form-input' name='phone' type='text' required onChange={this.handleChange} value={this.state.phone} />
        </fieldset>

        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    )
  }
}


const root = createRoot(document.getElementById('root'));
root.render(<ReactForm />);

