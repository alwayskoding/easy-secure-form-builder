import React, { useState, useEffect } from 'react';

const containerStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '20px',
  width: '100%'
};

const formPreviewStyle = {
  backgroundColor: '#f5f5f5',
  padding: '20px',
  borderRadius: '5px',
  minHeight: '100px'
};

const editableLabelStyle = {
  backgroundColor: '#e6e6e6',
  border: 'none',
  outline: 'none'
};

const labelContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const inputContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const inputStyle = {
  marginRight: '5px'
};

const Previewer = ({ chunks }) => {
  const [updatedChunks, setUpdatedChunks] = useState([]);

  useEffect(() => {
    setUpdatedChunks([...chunks]);
  }, [chunks]);

  const renderChunk = (chunk, index) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(chunk.editableContent, 'text/html');
    const elements = Array.from(htmlDoc.body.children);
  
    return (
      <div key={index}>
        {elements.map((element, elementIndex) => (
          <div
            key={elementIndex}
            style={element.tagName === 'LABEL' ? labelContainerStyle : inputContainerStyle}
          >
            {element.tagName === 'INPUT' && element.type !== 'radio' && element.type !== 'checkbox' && (
              <label>
                <input
                  type={element.getAttribute('type')}
                  value={element.getAttribute('value')}
                  style={inputStyle}
                  readOnly
                />
                <span>{element.nextElementSibling?.textContent}</span>
              </label>
            )}
            {element.tagName === 'LABEL' && (
              <label style={editableLabelStyle}>
                <input type="hidden" value="" />
                <span>{element.textContent}</span>
              </label>
            )}
            {element.tagName !== 'INPUT' && element.tagName !== 'LABEL' && (
              <div dangerouslySetInnerHTML={{ __html: element.outerHTML }} />
            )}
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div style={containerStyle}>
      <h2>Form Preview</h2>
      <div className="formPreview" style={formPreviewStyle}>
        {updatedChunks.map((chunk, index) => renderChunk(chunk, index))}
      </div>
    </div>
  );
};

export default Previewer;
