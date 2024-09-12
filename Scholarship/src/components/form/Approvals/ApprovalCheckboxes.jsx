import React, { useState } from 'react';

export const ApprovalCheckboxes = ({ fieldName, onChange, userType }) => {
    const isOfficerLevel1 = userType === 'officerLevel1';
    const isOfficerLevel2 = userType === 'officerLevel2';
    return (
      <div className="approval-checkboxes">
        {/* Officer Level 1 Checkbox */}
        <label>
          Institution Approval:
          <input
            type="checkbox"
            name={`institution${fieldName}Approved`}
            onChange={onChange}
            disabled={!isOfficerLevel1} // Disabled for everyone except Officer Level 1
          />
        </label>
  
        {/* Officer Level 2 Checkbox */}
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