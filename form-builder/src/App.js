import React, { useState } from 'react';
import FormSelector from './components/formselector';
import ChunkSelector from './components/chunkselector';
import Previewer from './components/previewer';
import Outputter from './components/outputter';
import './App.css';

function App() {
  const [formType, setFormType] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [attachmentAdded, setAttachmentAdded] = useState(false);

  const MAILBOX_TEMPLATE = `<form action="/app/secureForms/submitFormAsMessage" method="POST" enctype="multipart/form-data" name="form_name_goes_here">`;

  const NORMAL_TEMPLATE = `<form action="/app/secureForms/submit" method="POST" enctype="multipart/form-data" name="form_name_goes_here">`;

  const HIDDEN_INPUTS = `
    <!-- COMMON HIDDEN INPUTS - Always required -->
    <input type="hidden" value="form_name_goes_here" name="sf:form_name" />
    <input type="hidden" name="sf:success_page" value="/success_page_link_goes_here" />
    <input type="hidden" name="sf:failure_page" value="/failure_pge_link_goes_here" />
  `;

  const MAILBOX_HIDDEN_INPUT = `<input type="hidden" name="sf:recipient_mailbox" value="mailbox_id_number_goes_here">`;

  const SUBMIT_BUTTON = `
    <div class="submit_btn">
      <input type="submit" value="Submit">
    </div>
  </form>
  `;

  const ATTACHMENT_SECTION = `
    <script src="/lib/secureForms/attachments.js"></script>
    <div id="sf:attachmentsContainer"></div>
    <button id="sf:addAttachment" class="btn">Add Attachment</button>
`;

  const toggleAttachment = () => {
    setAttachmentAdded(!attachmentAdded);
  };

  const handleFormSelect = (type) => {
    setFormType(type);
    setChunks([]);
  };

  const handleChunkSelect = (chunk) => {
    setChunks(prevChunks => [...prevChunks, { editableContent: chunk, originalContent: chunk }]);
  };

  const handleChunkContentChange = (index, newContent) => {
    setChunks(prevChunks => {
      const updatedChunks = [...prevChunks];
      updatedChunks[index].editableContent = newContent;
      return updatedChunks;
    });
  };

  const handleRemoveLastChunk = () => {
    if (chunks.length > 0) {
      const updatedChunks = [...chunks];
      updatedChunks.pop();
      setChunks(updatedChunks);
    }
  };

  const generateCode = () => {
    let formStart = formType === 'mailbox' ? MAILBOX_TEMPLATE : NORMAL_TEMPLATE;
    let hiddenInputs = HIDDEN_INPUTS + (formType === 'mailbox' ? MAILBOX_HIDDEN_INPUT : '');
    let formBody = chunks.map(chunk => chunk.editableContent).join('\n');
    
    let attachmentSection = attachmentAdded ? ATTACHMENT_SECTION : '';
    
    return formStart + hiddenInputs + formBody + attachmentSection + SUBMIT_BUTTON;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-section">
          <FormSelector onSelect={handleFormSelect} />
          {formType && (
            <ChunkSelector
              onChunkSelect={handleChunkSelect}
              onRemoveLastChunk={handleRemoveLastChunk}
              hasChunks={chunks.length > 0}
            />
          )}
        </div>

        {formType && (
          <div className="middle-section">
            <Previewer chunks={chunks} onContentChange={handleChunkContentChange} />
            <Outputter 
              code={generateCode()} 
              toggleAttachment={toggleAttachment} 
              attachmentAdded={attachmentAdded}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
