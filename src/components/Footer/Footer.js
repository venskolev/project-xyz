import React from 'react';

const Footer = () => {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Your Social Network. All rights reserved.</p>
    </footer>
  );
};

export default Footer