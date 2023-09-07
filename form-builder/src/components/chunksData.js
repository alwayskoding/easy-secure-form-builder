// chunksData.js
export const chunks = [{
        name: 'Text Input',
        code: `
  <div class="input-group">
      <label for="sfval:textInputName">Your Name:</label>
      <input type="text" id="sfval:textInputName" name="sfval:textInputName" placeholder="Enter your full name">
  </div>
      `
    },
    {
        name: 'Email Input',
        code: `
  <div class="input-group">
      <label for="sfval:emailInputName">Your Email:</label>
      <input type="email" id="sfval:emailInputName" name="sfval:emailInputName" placeholder="you@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">
  </div>
      `
    },
    {
        name: 'Telephone Input',
        code: `
  <div class="input-group">
      <label for="sfval:telInputName">Phone Number:</label>
      <input type="tel" id="sfval:telInputName" name="sfval:telInputName" placeholder="(123) 456-7890" pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}">
  </div>
      `
    },
    {
        name: 'Date Input',
        code: `
  <div class="input-group">
      <label for="sfval:dateInputName">DOB:</label>
      <input type="text" class="jsDate" id="sfval:dateInputName" name="sfval:dateInputName" placeholder="MM/DD/YYYY">
  </div>
      `
    },
    {
        name: 'Text Area',
        code: `
  <div class="input-group">
      <label for="sfval:textareaName">Feedback:</label>
      <textarea id="sfval:textareaName" name="sfval:textareaName" rows="4" cols="50" placeholder="Share your thoughts with us..."></textarea>
  </div>
      `
    },
    {
        name: 'Select Dropdown',
        code: `
  <div class="input-group">
      <label for="sfval:dropdownName">Preference:</label>
      <select id="sfval:dropdownName" name="sfval:dropdownName">
          <option value="" disabled selected>Select an option...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
      </select>
  </div>
      `
    },
    {
        name: 'Checkbox Group',
        code: `
        <fieldset class="input-group">
            <legend>Medical Coverage Preferences:</legend>
            <div class="input-label-pair">
                <input type="checkbox" id="sfval:checkboxOption1" name="sfval:checkboxGroupName" value="generalHealth">
                <label for="sfval:checkboxOption1">General Health & Wellness</label>
            </div>
            <div class="input-label-pair">
                <input type="checkbox" id="sfval:checkboxOption2" name="sfval:checkboxGroupName" value="dentalCoverage">
                <label for="sfval:checkboxOption2">Dental Coverage</label>
            </div>
            <div class="input-label-pair">
                <input type="checkbox" id="sfval:checkboxOption3" name="sfval:checkboxGroupName" value="visionCoverage">
                <label for="sfval:checkboxOption3">Vision Coverage</label>
            </div>
            <div class="input-label-pair">
                <input type="checkbox" id="sfval:checkboxOption4" name="sfval:checkboxGroupName" value="prescriptionDrug">
                <label for="sfval:checkboxOption4">Prescription Drug Coverage</label>
            </div>
            <div class="input-label-pair">
                <input type="checkbox" id="sfval:checkboxOption5" name="sfval:checkboxGroupName" value="specialistCare">
                <label for="sfval:checkboxOption5">Specialist Care & Referrals</label>
            </div>
        </fieldset>
        `
    },
    {
        name: 'Radio Button Group',
        code: `
        <fieldset class="input-group">
            <legend>Preferred Communication Method:</legend>
            <div class="input-label-pair">
                <input type="radio" id="sfval:radioOption1" name="sfval:radioGroupName" value="email">
                <label for="sfval:radioOption1">Email Updates</label>
            </div>
            <div class="input-label-pair">
                <input type="radio" id="sfval:radioOption2" name="sfval:radioGroupName" value="postalMail">
                <label for="sfval:radioOption2">Postal Mail</label>
            </div>
            <div class="input-label-pair">
                <input type="radio" id="sfval:radioOption3" name="sfval:radioGroupName" value="sms">
                <label for="sfval:radioOption3">SMS Notifications</label>
            </div>
        </fieldset>
        `
    }

];