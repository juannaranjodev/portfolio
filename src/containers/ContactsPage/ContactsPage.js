import React from 'react';

import styles from './ContactsPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';

const contactsPage = () => (
  <div className={styles.ContactsPage}>
    <PageHeader title="Let's connect" />
    <p>
      If you find that my works are interesting for you and 
      if I can help you or your team in frontend development, 
      or even if you want to ask a question, send me an email. 
      I'll give you response as soon as possible.
    </p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />

      <textarea placeholder="Your Message" required />
    </form>
  </div>
);

export default contactsPage;