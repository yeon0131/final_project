// DonationDetails.js
import React from 'react';
import fundPostImg from '../DMHM-images/fund-post-img.png'; 

const DonationDetails = ({ percentage, targetAmount }) => {
  return (
    <>
      <img className="post-img" src={fundPostImg} alt="호우피해 이미지" />
      <div className="post-box">
        <p className="post-title">폭우가 덮친 밤, 호우피해 주민들의 악몽을 깨워주세요</p>
        <p className="fund-recipient">사랑의열매 사회복지공동모금회</p>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
          <p className="progress-text">{Math.floor(percentage)}% 달성</p>
          <p className="target-text">목표 금액: {targetAmount.toLocaleString()}원</p>
        </div>
      </div>
    </>
  );
};

export default DonationDetails;

