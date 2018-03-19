import React from 'react';

import styles from './ContactsPage.css';
import Background from '../../components/UI/Background/Background';
import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const contactsPage = (props) => (
  <div className={styles.ContactsPage}>
    <Background time={props.time} stars={props.stars}>

    <PageHeader title="Let's connect" />
      <p className={[styles.ContactsPage__message, props.time === 'night' ? styles.light : styles.dark].join(' ')}>
        If you find my works interesting and
        if I can help you or your team in your project,
        or even if you want to ask a question, send me an email.
        I will reply you within two hours.
    </p>
      <form className={[styles.ContactsPage__form, props.time === 'night' ? styles.light : styles.dark].join(' ')} method="GET">
        <Input inputType="input" type="text" name="name" placeholder="Your Name *" required />
        <Input inputType="input" type="text" name="company" placeholder="Company Name" />
        <Input inputType="input" type="email" name="email" placeholder="Your Email *" required />
        <Input inputType="input" type="text" name="phone" placeholder="Phone Number" />
        <Input inputType="textarea" name="message" placeholder="Your Message *" required />
        <p className={styles.ContactsPage__instruction}>* &mdash; required</p>
        <Button type="submit" size="medium" color="orange">Submit</Button>
      </form>
    </Background>
  </div>
);

export default contactsPage;