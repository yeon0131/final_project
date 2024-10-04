import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FundPaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 결제가 완료되었다는 메시지 표시
    alert('결제가 완료되었습니다.');

    // 2초 후 Fund.js 페이지로 이동
    setTimeout(() => {
      navigate('/fund');
    }, 2000);  // 2초 대기 후 이동
  }, [navigate]);

  return (
    <div>
      <h1>결제가 완료되었습니다!</h1>
      <p>잠시 후에 메인 페이지로 이동합니다...</p>
    </div>
  );
};

export default FundPaymentSuccess;
