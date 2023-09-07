import React from 'react';

const containerStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px', 
  width: '100%'
};

const textareaStyle = {
  width: '100%',
  minHeight: '200px',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  margin: '10px 0',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  color: '#fff',
  backgroundColor: '#007BFF',
  borderRadius: '4px',
  transition: '0.3s',
  ':hover': {
    backgroundColor: '#0056b3'
  }
};

const Outputter = ({ code }) => {
  return (
    <div style={containerStyle}>
      <h2>Output</h2>
      <textarea style={textareaStyle} value={code} />
      <div>
        <button style={buttonStyle} onClick={() => navigator.clipboard.writeText(code)}>
          Copy Code
        </button>
      </div>
    </div>
  );
};

export default Outputter;