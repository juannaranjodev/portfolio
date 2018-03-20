import React, { Component } from 'react';

import styles from './ContactsPage.css';
import axios from 'axios';
import Background from '../../components/UI/Background/Background';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';

const createInput = (tag, type, placeholder, required = true) => {
  return {
    elementType: tag,
    elementConfig: {
      type,
      placeholder
    },
    value: '',
    validation: {
      required
    },
    valid: false,
    touched: false
  };
};

const emptyForm = {
  name: createInput('input', 'text', 'Your Name *'),
  company: createInput('input', 'text', 'Company Name', false),
  email: createInput('input', 'email', 'Your Email *'),
  phone: createInput('input', 'tel', 'Phone Number', false),
  message: createInput('textarea', null, 'Your Message *')
};

class ContactsPage extends Component {
  state = {
    form: emptyForm, 
    showModal: false,
    error: false
  }

  checkValidity(value, rules) {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== '';
    }
    return isValid;
  }

  inputChangedHandler = (e, inputField) => {
    const userForm = { ...this.state.form };
    const userFormField = { ...userForm[inputField] };
    userFormField.value = e.target.value;
    userFormField.valid = this.checkValidity(userFormField.value, userFormField.validation);
    userFormField.touched = true;
    userForm[inputField] = userFormField;
    this.setState({ form: userForm });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const userFormData = {};
    for (let inputField in this.state.form) {
      userFormData[inputField] = this.state.form[inputField].value;
    }
    const mail = { userFormData }
    axios.post('https://mail-messages.firebaseio.com/mail.json', mail)
      .then(response => {
        this.setState({ 
          form: emptyForm, 
          showModal: true 
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  closeModalHandler = () => {
    this.setState({ showModal: false });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key]
      });
    }
    return (
      <div className={styles.ContactsPage}>
        <Modal show={this.state.showModal} modalClosed={this.closeModalHandler}>
          <div className={[styles.letter, this.props.time === 'day' ? styles.day : styles.night].join(' ')}>Thank You!</div>
        </Modal>
        <Background time={this.props.time} stars={this.props.stars}>

          <PageHeader title="Let's connect" />
          <p className={[styles.ContactsPage__message, this.props.time === 'night' ? styles.light : styles.dark].join(' ')}>
            If you find my works interesting and
            if I can help you or your team in your project,
            or even if you want to ask a question, send me an email.
            I will reply you within two hours.
          </p>
          <form onSubmit={this.submitHandler} className={[styles.ContactsPage__form, this.props.time === 'night' ? styles.light : styles.dark].join(' ')} method="GET">
            {
              formElementsArray.map(formElement => (
                <Input key={formElement.id}
                  changed={(e) => this.inputChangedHandler(e, formElement.id)}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value} 
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation.required}
                  touched={formElement.config.touched}
                />
              ))
            }
            <p className={styles.ContactsPage__instruction}>* &mdash; required</p>
            <Button type="submit" size="medium" color="orange">Submit</Button>
          </form>
        </Background>
      </div>
    );
  }
}

export default ContactsPage;