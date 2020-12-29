import React, { useState } from 'react';
import axios from 'axios';


import styles from './styles.scss';

const FormSample = () => {
  const [fields, setFields] = useState({
    name: '',
    description: '',
    length: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://vtys-conference-5gh8b.ondigitalocean.app/api/session', {
      sessionName: fields.name,
      sessionDescription: fields.description,
      sessionLength: parseInt(fields.length),
    })
      .then(function (response) {
        console.log(response);
        window.location.href = '/sessions';
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
        <label className={styles.label}>Session Name</label>
        <input className={styles.input} value={fields.name} onChange={(e) => handleKeyUp(e.target.value, 'name')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Description</label>
        <input className={styles.input} value={fields.description} onChange={(e) => handleKeyUp(e.target.value, 'description')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Session Length(min)</label>
        <input className={styles.input} value={fields.length} onChange={(e) => handleKeyUp(e.target.value, 'length')} />
      </div>
      <button className={styles.button}>SEND</button>
    </form>
  </div>;
};


export default FormSample;
