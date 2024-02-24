import React, { Component } from 'react';
import s from './FormInput.module.css';

class FormInput extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addContact({ name, number });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className={s.formInput}>
        <form onSubmit={this.handleSubmit}>
          <p className={s.name}>Name</p>
          <input
            type="text"
            name="name"
            required
            onChange={this.handleChange}
          />
          <input
            type="tel"
            name="number"
            required
            onChange={this.handleChange}
          />
          <p className={s.name}>Number</p>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default FormInput;

// import React from 'react';
// import s from './FormInput.module.css';

// const FormInput = ({ name, number, handleSubmit, handleChange }) => {
//   return (
//     <div className={s.formInput}>
//       <form onSubmit={handleSubmit}>
//         <p className={s.name}>Name</p>
//         <input type="text" name="name" required onChange={handleChange} />
//         <input type="tel" name="number" required onChange={handleChange} />
//         <p className={s.name}>Number</p>
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };

// export default FormInput;
