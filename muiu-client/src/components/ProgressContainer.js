import React from 'react';

const ProgressContainer = ({ percentage, targetAmount }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <p className="progress-text">{Math.floor(percentage)}% 달성</p>
      <p className="target-text">목표 금액: {targetAmount.toLocaleString()}원</p>
    </div>
  );
};

export default ProgressContainer;