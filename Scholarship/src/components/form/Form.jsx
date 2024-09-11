import React, { useState } from 'react';
import "./Form.css";

// Reusable component for approval checkboxes
const ApprovalCheckboxes = ({ fieldName, onChange }) => {
  return (
    <div className="approval-checkboxes">
      <label>Institution
        <input type="checkbox" name={`institution${fieldName}Approved`} onChange={onChange} />
      </label>
      <label>Regional
        <input type="checkbox" name={`regional${fieldName}Approved`} onChange={onChange} />
      </label>
      <label>District
        <input type="checkbox" name={`district${fieldName}Approved`} onChange={onChange} />
      </label>
    </div>
  );
};

export const Form = () => {
  const [inputs, setInputs] = useState({});
  const [approvals, setApprovals] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleApprovalChange = (event) => {
    const { name, checked } = event.target;
    setApprovals((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(approvals);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        
        {/* Personal Info Section */}
        <fieldset className="section personal-info">
          <legend>Personal Info</legend>
          
          <div className="form-row">
            <label>
              Enter Your Name:
              <input
                name="username"
                type="text"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="Name" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Fathers Name:
              <input
                name="fathersName"
                type="text"
                value={inputs.fathersName || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="FathersName" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Mothers Name:
              <input
                name="mothersName"
                type="text"
                value={inputs.mothersName || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="MothersName" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Aadhaar No:
              <input
                name="aadhaarNo"
                type="text"
                value={inputs.aadhaarNo || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="Aadhaar" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Mobile No:
              <input
                name="MobileNo"
                type="text"
                value={inputs.MobileNo || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="Mobile" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              DOB:
              <input
                name="DOB"
                type="date"
                value={inputs.DOB || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="DOB" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Email Id:
              <input
                name="email"
                type="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="Email" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Enter Your Age:
              <input
                name="userAge"
                type="number"
                value={inputs.userAge || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="Age" onChange={handleApprovalChange} />
          </div>
        </fieldset>

        {/* Academic Details Section */}
        <fieldset className="section academic-info">
          <legend>Academic Details</legend>

          <div className="form-row">
            <label>
              Enter Your State of Domicile:
              <input
                name="userState"
                type="text"
                value={inputs.userState || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="State" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              Scholarship Category:
              <select name="ScholarshipCategory" value={inputs.ScholarshipCategory || ""} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Pre Matric">Pre Matric</option>
                <option value="Post Matric">Post Matric</option>
              </select>
            </label>
            <ApprovalCheckboxes fieldName="ScholarshipCategory" onChange={handleApprovalChange} />
          </div>
        </fieldset>

        {/* Bank Details Section */}
        <fieldset className="section bank-info">
          <legend>Bank Details</legend>

          <div className="form-row">
            <label>
              Bank Account No:
              <input
                name="accountNo"
                type="text"
                value={inputs.accountNo || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="AccountNo" onChange={handleApprovalChange} />
          </div>

          <div className="form-row">
            <label>
              IFSC Code:
              <input
                name="ifscCode"
                type="text"
                value={inputs.ifscCode || ""}
                onChange={handleChange}
              />
            </label>
            <ApprovalCheckboxes fieldName="IFSC" onChange={handleApprovalChange} />
          </div>
        </fieldset>
        
        <input type="submit" />
      </form>
    </div>
  );
};
