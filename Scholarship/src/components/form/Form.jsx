import React, { useState, useEffect } from 'react';
import "./Form.css";

// Reusable component for approval checkboxes
const ApprovalCheckboxes = ({ fieldName, onChange, userType }) => {
  const isOfficerLevel1 = userType === 'officerLevel1';
  const isOfficerLevel2 = userType === 'officerLevel2';

  return (
    <div className="approval-checkboxes">
      <label>
        Institution Approval:
        <input
          type="checkbox"
          name={`institution${fieldName}Approved`}
          onChange={onChange}
          disabled={!isOfficerLevel1} // Disabled for everyone except Officer Level 1
        />
      </label>

      <label>
        Regional Approval:
        <input
          type="checkbox"
          name={`regional${fieldName}Approved`}
          onChange={onChange}
          disabled={!isOfficerLevel2} // Disabled for everyone except Officer Level 2
        />
      </label>
    </div>
  );
};

export const Form = ({ userType, fetchData }) => {
  const [inputs, setInputs] = useState({});
  const [approvals, setApprovals] = useState({});

  useEffect(() => {
    if (userType !== 'student') {
      fetchData().then(data => {
        setInputs(data.inputs);
        setApprovals(data.approvals);
      }).catch(error => {
        console.error('Failed to fetch data:', error);
      });
    }
  }, [userType, fetchData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleApprovalChange = (event) => {
    const { name, checked } = event.target;
    setApprovals(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Inputs:', inputs);
    console.log('Approvals:', approvals);
    // Submit to backend
  };

  return (
    <>
    <div>
      <h1>APPLICATION FORM</h1>
    </div>
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
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="Name" onChange={handleApprovalChange} userType={userType} />}
          </div>
          <div className="form-row">
            <label>
              Father's Name:
              <input
                name="fathersName"
                type="text"
                value={inputs.fathersName || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="FathersName" onChange={handleApprovalChange} userType={userType} />}
            
          </div>
          <div className="form-row">
            <label>
              Mother's Name:
              <input
                name="mothersName"
                type="text"
                value={inputs.mothersName || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="MothersName" onChange={handleApprovalChange} userType={userType} />}
            
          </div>
          <div className="form-row">
            <label>
              Aadhaar No:
              <input
                name="aadhaarNo"
                type="text"
                value={inputs.aadhaarNo || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="Aadhaar" onChange={handleApprovalChange} userType={userType} />}
          </div>
          <div className="form-row">
            <label>
              Mobile No:
              <input
                name="mobileNo"
                type="text"
                value={inputs.mobileNo || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="Mobile" onChange={handleApprovalChange} userType={userType} />}
            
          </div>
          <div className="form-row">
            <label>
              DOB:
              <input
                name="DOB"
                type="date"
                value={inputs.DOB || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="DOB" onChange={handleApprovalChange} userType={userType} />}
            
          </div>
          <div className="form-row">
            <label>
              Email Id:
              <input
                name="email"
                type="email"
                value={inputs.email || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="Email" onChange={handleApprovalChange} userType={userType} />}
            
          </div>
          <div className="form-row">
            <label>
              Enter Your Age:
              <input
                name="userAge"
                type="number"
                value={inputs.userAge || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="Age" onChange={handleApprovalChange} userType={userType} />}
            
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
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            
            {userType !== 'student' && <ApprovalCheckboxes fieldName="Age" onChange={handleApprovalChange} userType={userType} />}

          </div>
          <div className="form-row">
            <label>
              Scholarship Category:
              <select
                name="ScholarshipCategory"
                value={inputs.ScholarshipCategory || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              >
                <option value="">Select Category</option>
                <option value="Pre Matric">Pre Matric</option>
                <option value="Post Matric">Post Matric</option>
              </select>
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="ScholarshipCategory" onChange={handleApprovalChange} userType={userType} />}
            
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
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="AccountNo" onChange={handleApprovalChange} userType={userType} />}
           
          </div>
          <div className="form-row">
            <label>
              IFSC Code:
              <input
                name="ifscCode"
                type="text"
                value={inputs.ifscCode || ""}
                onChange={handleChange}
                disabled={userType !== 'student'} // Only editable for the student
              />
            </label>
            {userType !== 'student' && <ApprovalCheckboxes fieldName="IFSC" onChange={handleApprovalChange} userType={userType} />}
            
          </div>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

// Example usage
// Render this component and pass the userType as a prop based on the current logged-in user
// <Form userType="student" /> for student
// <Form userType="officerLevel1" /> for officer level 1
// <Form userType="officerLevel2" /> for officer level 2
