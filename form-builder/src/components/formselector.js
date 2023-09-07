import React from 'react';

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  color: '#fff',
  backgroundColor: '#007BFF',
  borderRadius: '4px',
  transition: '0.3s',
  ':hover': {
    backgroundColor: '#0056b3',
  }
};

const FormSelector = ({ onSelect }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Select Form Type</h2>
      <button style={buttonStyle} onClick={() => onSelect('mailbox')}>Mailbox Version</button>
      <button style={buttonStyle} onClick={() => onSelect('normal')}>Normal Version</button>
    </div>
  );
};

export default FormSelector;
