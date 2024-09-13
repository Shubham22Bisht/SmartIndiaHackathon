import React from 'react';
import './StatusTracker.css';
const StatusTracker = ({ currentStep }) => {
  const steps = [
    { name: 'Order Placed', date: '03 Sep', color: '#FFD700' }, // Gold
    { name: 'Shipped', date: '04 Sep', color: '#FF8C00' },      // Dark orange
    { name: 'Arriving', date: '14 Sep', color: '#1E90FF' },    // Dodger blue
    { name: 'Delivered', date: '17 Sep', color: '#32CD32' }    // Lime green
  ];

  return (
    <div className="status-tracker-container">
      <div className="status-tracker">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${index <= currentStep ? 'active' : ''}`}>
              <div className="step-icon" style={{ backgroundColor: index <= currentStep ? step.color : '#ccc' }}>
                {index <= currentStep ? '✓' : index + 1}
              </div>
              <div className="step-info">
                <div className="step-name">{step.name}</div>
                <div className="step-date">{step.date}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`step-line ${index < currentStep ? 'completed' : ''}`} style={{ backgroundColor: index < currentStep ? step.color : '#ddd' }}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="review-box">
        <textarea
          value="Thank you for your purchase! Please let us know if you have any feedback."
          readOnly
          aria-label="Review"
        ></textarea>
      </div>
    </div>
  );
};

export default StatusTracker;
