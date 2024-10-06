import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for better styling
const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9fafc;
  text-align: center;
  line-height: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #3A76E9;
  margin-bottom: 1.5rem;
`;

const ThankYouMessage = styled.p`
font-size: 1.5rem;
color: #FFCC00;
font-weight: bold;
margin-bottom: 3rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const FundPaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 2초 후 Fund.js 페이지로 이동
    setTimeout(() => {
      navigate('/fund');
    }, 4000);  // 4초 대기 후 이동
  }, [navigate]);

  return (
    <SuccessContainer>
      <Title>결제가 완료되었습니다!</Title>
      <ThankYouMessage>진심으로 감사드립니다! 💛</ThankYouMessage>
      <Message>기부자님의 기부가 큰 도움이 됩니다. <br />잠시 후에 메인 페이지로 이동합니다...</Message>
    </SuccessContainer>
  );
};

export default FundPaymentSuccess;
