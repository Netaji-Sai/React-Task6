import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} <br/>Netaji Sai Suru</p>
      </div>
    </footer>
  );
}

export default Footer;