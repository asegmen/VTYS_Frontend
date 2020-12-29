import React, { useState } from 'react';
import axios from 'axios';


import styles from './styles.scss';

const FormSample = () => {
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    department: '',
    phone: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://vtys-conference-5gh8b.ondigitalocean.app/api/employee', {
      fistName: fields.name,
      lastName: fields.surname,
      mailAddress: fields.email,
      department: fields.department,
      phone: fields.phone,
    })
      .then(function (response) {
        console.log(response);
        window.location.href = '/employees';
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
        <label className={styles.label}>Department</label>
        <input className={styles.input} value={fields.department} onChange={(e) => handleKeyUp(e.target.value, 'department')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Phone</label>
        <input className={styles.input} value={fields.phone} onChange={(e) => handleKeyUp(e.target.value, 'phone')} />
      </div>
      <button className={styles.button}>SEND</button>
    </form>
  </div>;
};


export default FormSample;
