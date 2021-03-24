import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;
    return (
      <div className={s.filter}>
        <label className={s.filterLabel}>Find contacts by name</label>
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </div>
    );
  }
}

export default Filter;
