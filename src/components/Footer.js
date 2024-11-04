import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#282c34',
        color: '#fff',
        display: 'flex',
        justifyContent:'space-around',
        textAlign: 'center',
        padding: '1.5rem 0',
        position: 'relative',
        bottom: '0',
        width: '100%',
        zIndex: '1000', // Ensures footer stays above other elements
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3b5998',
            margin: '0 1rem',
            transition: 'transform 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#4267B2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#3b5998';
          }}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#00acee',
            margin: '0 1rem',
            transition: 'transform 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#1DA1F2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#00acee';
          }}
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#C13584',
            margin: '0 1rem',
            transition: 'transform 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#E1306C';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#C13584';
          }}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0e76a8',
            margin: '0 1rem',
            transition: 'transform 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#0077B5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#0e76a8';
          }}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://himanshu8868.github.io/TextUtils/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#121213',
            margin: '0 1rem',
            transition: 'transform 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.color = '#6e5494';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.color = '#121213';
          }}
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} HDC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
