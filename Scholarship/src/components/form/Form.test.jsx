import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Form } from './Form'; // adjust the import based on your file structure

describe('Form Component Interaction Test', () => {
  it('should allow officerLevel1 to check boxes and officerLevel2 to see them as checked and disabled', () => {
    // Render the form as officerLevel1
    const { getByLabelText, rerender } = render(<Form userType="officerLevel1" />);

    // Simulate checking the checkbox by officerLevel1
    const institutionCheckbox = getByLabelText(/Institution Approval:/i);
    fireEvent.click(institutionCheckbox);
    
    // Assume changes are saved and reflected in a state or API, mock this:
    const mockApprovals = {
      institutionNameApproved: institutionCheckbox.checked
    };

    // Rerender the component as officerLevel2 with the updated approvals state
    rerender(<Form userType="officerLevel2" approvals={mockApprovals} />);
    
    // Validate that officerLevel2 sees the checkbox as checked and disabled
    expect(institutionCheckbox).toBeChecked();
    expect(institutionCheckbox).toBeDisabled();
  });
});
