import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleOnSubmit}>
        <div className={s.formField}>
          <label className={s.formLabel}>Name</label>
          <input
            className={s.formInput}
            type="text"
            placeholder=""
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>

        <div className={s.formField}>
          <label className={s.formLabel}>Number</label>
          <input
            className={s.formInput}
            type="text"
            placeholder=""
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
