import React, { useState } from 'react';
import axios from 'axios';


import styles from './styles.scss';

const FormSample = () => {
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    company: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://vtys-conference-5gh8b.ondigitalocean.app/api/attendee', {
      fistName: fields.name,
      lastName: fields.surname,
      mailAddress: fields.email,
      company: fields.company,
    })
      .then(function (response) {
        console.log(response);
        window.location.href = '/attendees';
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleKeyUp = (value, name) => {
    setFields({
      ...fields,
      [name]: value
    })
  }

  return <div className={styles.wrapper}>
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} value={fields.name} onChange={(e) => handleKeyUp(e.target.value, 'name')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Surname</label>
        <input className={styles.input} value={fields.surname} onChange={(e) => handleKeyUp(e.target.value, 'surname')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email Address</label>
        <input className={styles.input} value={fields.email} onChange={(e) => handleKeyUp(e.target.value, 'email')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Company</label>
        <input className={styles.input} value={fields.company} onChange={(e) => handleKeyUp(e.target.value, 'company')} />
      </div>
      <button className={styles.button}>SEND</button>
    </form>
  </div>;
};


export default FormSample;
