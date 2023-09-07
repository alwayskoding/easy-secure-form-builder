import React from 'react';
import { chunks } from './chunksData'; 


const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  color: '#fff',
  backgroundColor: '#28a745',  // green color
  borderRadius: '4px',
  transition: '0.3s',
  ':hover': {
    backgroundColor: '#1e7e34',  // darker green
  }
};

const ChunkSelector = ({ onChunkSelect, onRemoveLastChunk, hasChunks }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Choose Inputs For Your Form</h2>
      {console.log(chunks)}
      {chunks.map(chunk => (
        <button 
          key={chunk.name}
          style={buttonStyle}
          onClick={() => onChunkSelect(chunk.code)}
        >
          {chunk.name}
        </button>
      ))}

      <button style={buttonStyle} onClick={onRemoveLastChunk} disabled={!hasChunks}>Remove Last Chunk</button>
        
    </div>
  );
};

export default ChunkSelector;
