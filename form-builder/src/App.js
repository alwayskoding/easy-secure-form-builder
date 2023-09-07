import React, { useState } from 'react';
import FormSelector from './components/formselector';
import ChunkSelector from './components/chunkselector';
import Previewer from './components/previewer';
import Outputter from './components/outputter';
import './App.css';

function App() {
  const [formType, setFormType] = useState(null);
  const [chunks, setChunks] = useState([]);

  const MAILBOX_TEMPLATE = `
<form 
    action="/app/secureForms/submitFormAsMessage"
    method="POST"
    enctype="multipart/form-data"
    name="request_appointment_form"
>
`;

  const NORMAL_TEMPLATE = `
<form 
    action="/app/secureForms/submit"
    method="POST"
    enctype="multipart/form-data"
    name="aspire_claim_reimbursement_request_form"
>
`;

  const HIDDEN_INPUTS = `
<!-- COMMON HIDDEN INPUTS - Always required -->
<input type="hidden" value="form_name_goes_here" name="sf:form_name" />
<input type="hidden" name="sf:success_page" value="/p_page.cfm?pptitle=cmh%5Frequest%5Fappointment%5Fform%5Fsuccess" />
<input type="hidden" name="sf:failure_page" value="/p_page.cfm?pptitle=failure%5Fpage" />
`;

  const MAILBOX_HIDDEN_INPUT = `
<!-- MAILBOX SPECIFIC HIDDEN INPUT -->
<input type="hidden" name="sf:recipient_mailbox" value="117446755">
`;

  const SUBMIT_BUTTON = `
<!-- Submit button -->
<div class="submit_btn">
    <input type="submit" value="Submit">
</div>
</form>
`;

  const handleFormSelect = (type) => {
    setFormType(type);
    setChunks([]);
  };

  const handleChunkSelect = (chunk) => {
    setChunks(prevChunks => [...prevChunks, { editableContent: chunk, originalContent: chunk }]);
    console.log(chunks);
  };
  
  const handleChunkContentChange = (index, newContent) => {
    setChunks(prevChunks => {
      const updatedChunks = [...prevChunks];
      updatedChunks[index].editableContent = newContent;
      return updatedChunks;
    });
    console.log(chunks);
  };
  

  const handleRemoveLastChunk = () => {
    if (chunks.length > 0) {
      const updatedChunks = [...chunks];
      updatedChunks.pop();
      setChunks(updatedChunks);
    }
  };

  const generateCode = () => {
    console.log(chunks); // Check if this logs the chunks data correctly
    let formStart = formType === 'mailbox' ? MAILBOX_TEMPLATE : NORMAL_TEMPLATE;
    let hiddenInputs = HIDDEN_INPUTS + (formType === 'mailbox' ? MAILBOX_HIDDEN_INPUT : '');

    let formBody = chunks.map(chunk => chunk.editableContent).join('\n');

    return formStart + hiddenInputs + formBody + SUBMIT_BUTTON;
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
            <Outputter code={generateCode()} />
          </div>
        )}
      </header>
    </div>
  );
  
}

export default App;
