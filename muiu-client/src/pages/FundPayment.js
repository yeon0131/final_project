import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // react-router-dom 추가
import { styled as muiStyled } from '@mui/material/styles'; // MUI의 styled
import styled from 'styled-components'; // styled-components의 styled
import DonationDetails from '../components/DonationDetails';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

// Styled components
const Main = styled.main`
  .post-box {
    padding: 1.2rem;
  }

  .post-img {
    width: 100%;
    height: auto;
  }

  .post-title {
    font-family: 'Pretendard-Bold';
    margin-bottom: 0.3rem;
  }

  .fund-recipient {
    font-size: 0.7rem;
    margin-bottom: 0;
  }

  .progress-container {
    width: 100%;
    background-color: #ECECEC;
    border-radius: 25px;
    height: 0.7rem;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
    position: relative;
  }

  .progress-bar {
    height: 100%;
    background-color: #FFCC00;
    border-radius: 25px;
    transition: width 0.5s ease;
  }

  .progress-text {
    font-size: 0.8rem;
    font-family: 'Pretendard-SemiBold';
    color: #FFCC00;
    margin: 0.22rem 0 0 0.3rem;
  }

  .target-text {
    font-size: 0.8rem;
    color: #333;
    float: right;
    margin-right: 0.3rem;
    margin-top: -0.8rem;
  }

  .payment-input-box {
    display: flex;
    justify-content: space-between;
  }

  .fund-txt {
    color: #888888;
    font-family: 'Pretendard-SemiBold';
    margin: 0.3rem;
  }

  .won {
    color: #333;
    font-family: 'Pretendard-SemiBold';
    margin-right: 0.3rem;
  }

  .remove-icon {
    cursor: pointer;
  }

  .fund-underbar {
    border-top: 1.5px solid #333;
  }

  .plus-money-box {
    font-family: 'Pretendard-Regular';
    display: flex;
    flex-wrap: wrap;

    .plus-money {
      color: #7A7A7A;
      background-color: #fff;
      border: 1.3px solid #7A7A7A;
      border-radius: 5px;
      height: 2.2rem;
      width: 6rem;
      text-align: center;
      margin: 1rem 0.2rem;
    }
  }

  .message-container {
    font-family: 'Pretendard-Regular';
    position: relative;
    margin-top: 2rem;
    margin-right: 1rem;

    .message-box {
      width: 100%;
      padding: 1rem;
      padding-right: 0;
      height: 10rem;
      border: 1.3px solid #333;
      border-radius: 5px;
      font-family: 'Pretendard-Regular';
      font-size: 1rem;
    }

    .char-count {
      position: absolute;
      right: 10px;
      bottom: 10px;
      font-size: 0.9rem;
      color: #666;
    }
  }

  .name-input-box {
    font-family: 'Pretendard-Regular';
    color: #7A7A7A;
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;

    .name-input {
      width: 100%;
      border: none;
      border-bottom: 1.5px solid #333;
      padding: 0.5rem 0;
      font-size: 1rem;
    }

    .name-input:focus {
      outline: none;
      border-bottom: 1.5px solid #FFCC00;
    }

    .anonymous-txt {
      font-size: 0.8rem;
      margin-left: 10px;
    }
  }

  .fund-btn {
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 0.35rem;
    background-color: #3A76E9;
    color: #fff;
    font-family: 'Pretendard-SemiBold';
    font-size: 1.2rem;
    margin: 3rem 0 2rem 0;
    cursor: pointer;
  }
`;

// MUI 스타일을 사용하여 반전된 아이콘을 적용
const DeleteIcon = muiStyled(ClearRoundedIcon)`
  filter: invert(100%);
  color: #fff;
  height: 2rem;
  weight: 2rem;
`;

const FundPayment = () => {
    const [percentage, setPercentage] = useState(0);
    const [targetAmount] = useState(1000000);
    const [currentAmount] = useState(400000);

    const navigate = useNavigate(); // useNavigate를 사용해 페이지 이동
  
    useEffect(() => {
      const calculatedPercentage = (currentAmount / targetAmount) * 100;
      setPercentage(calculatedPercentage);
    }, [currentAmount, targetAmount]);

    const [totalAmount, setTotalAmount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    const handleAmountChange = (amount) => {
        setTotalAmount(totalAmount + amount);
    };

    const handleCustomAmount = () => {
        const customAmount = prompt('직접 금액을 입력하세요');
        setTotalAmount(totalAmount + parseInt(customAmount || 0, 10));
    };

    const handleMessageChange = (e) => {
        setCharCount(e.target.value.length);
    };

    const handleResetAmount = () => {
        setTotalAmount(0);
    };

  return (
    <Main>
      {/* DonationDetails 컴포넌트를 재사용하여 동일한 부분을 표시 */}
      <DonationDetails percentage={percentage} targetAmount={targetAmount} />

      <div className="payment-box">
        <div className="payment-input-box">
          <span className="fund-txt">기부금액</span>
          <div>
            <span id="total-amount" className="won">{totalAmount}</span>
            <span className="won">원</span>
            <span className="remove-icon" onClick={handleResetAmount}>
                <DeleteIcon />
            </span>
          </div>
        </div>
        <div className="fund-underbar"></div>
        <div className="plus-money-box">
          <button className="plus-money" onClick={() => handleAmountChange(5000)}>+5천원</button>
          <button className="plus-money" onClick={() => handleAmountChange(10000)}>+1만원</button>
          <button className="plus-money" onClick={() => handleAmountChange(30000)}>+3만원</button>
          <button className="plus-money" onClick={() => handleAmountChange(50000)}>+5만원</button>
          <button className="plus-money" onClick={() => handleAmountChange(100000)}>+10만원</button>
          <button className="plus-money" onClick={() => handleAmountChange(500000)}>+50만원</button>
          <button className="plus-money" onClick={() => handleAmountChange(1000000)}>+100만원</button>
          <button className="plus-money" onClick={handleCustomAmount}>직접입력</button>
        </div>

        <div className="message-container">
          <textarea
            id="encouragement-message"
            className="message-box"
            placeholder="응원의 한마디를 자유롭게 남겨주세요."
            maxLength="300"
            onChange={handleMessageChange}
          ></textarea>
          <div className="char-count">
            <span id="char-count">{charCount}</span>/300
          </div>
        </div>

        <div className="name-input-box">
          <input type="text" className="name-input" placeholder="기부자 성함" />
          <span className="anonymous-txt">익명으로 기부할게요</span>
        </div>

        <button className="fund-btn" id="fund-btn" onClick={() => window.location.href = 'fund-payment-system.html'}>
          기부하기
        </button>
      </div>
    </Main>
  );
};

export default FundPayment;
