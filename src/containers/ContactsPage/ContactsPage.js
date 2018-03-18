import React from 'react';

import styles from './ContactsPage.css';
import Background from '../../components/UI/Background/Background';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/UI/Button/Button';

const contactsPage = (props) => (
  <div className={styles.ContactsPage}>
    <Background time={props.time} stars={props.stars}>

    <PageHeader title="Let's connect" />
      <p className={styles.message}>
        If you find my works interesting and
        if I can help you or your team in your project,
        or even if you want to ask a question, send me an email.
        I will reply you within two hours.
    </p>
      <form className={styles.form} method="GET">
        <input className={styles.form__inputField} type="text" placeholder="Your Name" required />
        <input className={styles.form__inputField} type="email" placeholder="Your Email" required />
        <textarea className={styles.form__messageField} placeholder="Your Message" required />
        <Button color="Action">Submit</Button>
      </form>
    </Background>
  </div>
);

export default contactsPage;