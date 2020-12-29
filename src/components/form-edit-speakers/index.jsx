import React, { useState } from 'react';
import axios from 'axios';


import styles from './styles.scss';

const FormSample = ({ datas, userId }) => {
  console.log(datas);
  const [fields, setFields] = useState({
    firstName: datas.firstName,
    lastName: datas.lastName,
    bio: datas.bio,
    company: datas.company,
    title: datas.title,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://vtys-conference-5gh8b.ondigitalocean.app/api/speakers/${userId}`, {
      firstName: fields.firstName,
      lastName: fields.lastName,
      bio: fields.bio,
      company: fields.company,
      title: fields.title,
    })
      .then(function (response) {
        console.log(response);
        window.location.href = "/speakers";
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
        <label className={styles.label}>First Name</label>
        <input className={styles.input} value={fields.firstName} onChange={(e) => handleKeyUp(e.target.value, 'firstName')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Last Name</label>
        <input className={styles.input} value={fields.lastName} onChange={(e) => handleKeyUp(e.target.value, 'lastName')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title</label>
        <input className={styles.input} value={fields.title} onChange={(e) => handleKeyUp(e.target.value, 'title')} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Biography</label>
        <input className={styles.input} value={fields.bio} onChange={(e) => handleKeyUp(e.target.value, 'bio')} />
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
