import React from 'react';
import '../global.css';

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} NovaCred. Tutti i diritti riservati. |
        Telefono: <a href="tel:+390212345678" style={{ color: '#fff', textDecoration: 'underline' }}>+39 02 123 45678</a> |
        Fax: +39 02 987 65432 |
        Email: <a href="mailto:info@novacred.com" style={{ color: '#fff', textDecoration: 'underline' }}>info@novacred.com</a> |
        Partita IVA: 01234567890 |
        Sede legale: Via Roma, 123, 20100 Milano, Italia
      </p>
    </footer>
  );
}

export default Footer;
