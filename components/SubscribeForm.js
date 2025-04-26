// src/components/SubscribeForm.js
import React from 'react';

const SubscribeForm = () => {
  return (
    <form>
      <h2>Subscribe to our newsletter</h2>
      <input type="email" placeholder="Your email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;