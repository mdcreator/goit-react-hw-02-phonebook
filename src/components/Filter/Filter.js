import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  //   handleChange = value => {
  //     this.setState({ [name]: value });
  //   };

  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    );
  }
}

export default Filter;
