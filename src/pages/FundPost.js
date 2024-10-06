import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css'; // 토스트 UI 에디터의 CSS
import { Editor } from '@toast-ui/react-editor';

// Styled components
const Main = styled.main`

  width: 100%;  /* Main 태그의 전체 너비 설정 */
  box-sizing: border-box; /* 전체적으로 박스 사이즈를 관리 */
  padding: 0; /* Main 안의 여백 제거 */

  
  .post-form {
    padding: 1.2rem;
  }

  .post-input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.35rem;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .editor-container {
    margin-bottom: 1.5rem;
  }

  .submit-btn {
    height: 3.5rem;
    width: 100%;
    border: none;
    border-radius: 0.35rem;
    background-color: #3A76E9;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: 0.5px;
    cursor: pointer;
  }

  .separator {
    border-top: 0.5rem solid #dfdfdf;
    margin: 0.4rem 0;
  }

  /* 반응형 쿼리 */
  //toast ui 기본값 때문에 560px이하로 너비가 줄지 않음. 
  //이거 해결 어케함용.. !important줘도 안됨여
  @media (max-width: 600px) {
    
    .post-form, .post-input, .editor-container, .submit-btn {
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem;
    }

    .toastui-editor-defaultUI {
      width: 100% !important; /* 에디터 UI 강제 100% */
    }

  }
`;


const FundPost = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [team, setTeam] = useState('');
    const [fundPeriod, setFundPeriod] = useState('');
    const [businessPeriod, setBusinessPeriod] = useState('');
    const [targetAmount, setTargetAmount] = useState('');
    const editorRef = useRef();

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        // 에디터에서 작성된 내용
        const content = editorRef.current?.getInstance().getHTML();

        const postData = {
            title,
            content, // HTML 형태로 저장(사용자가 작성한 폰트 스타일 저장됨)
            team,
            fundPeriod,
            businessPeriod,
            targetAmount,
        };

        console.log('작성된 글:', postData);

        // navigate를 직접 호출하지 않고 useEffect에서 처리
        setTimeout(() => {
            navigate('/fund', { state: postData });
        }, 0); // navigate 실행 시 약간의 지연을 추가

        // navigate('/fund', { state: { postData } });
        // 왜 이렇게 하면 무한 렌더링 오류가 나는지. 
        // 그리고 해결책이 setTimeout이 맞는지 물어보깅
    };

    return (
        <Main>
            <form className="post-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="post-input"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                {/* Toast UI 에디터를 사용하여 글 작성 */}
                <div className="editor-container">
                    <Editor
                        ref={editorRef}
                        initialValue=""
                        previewStyle="vertical"
                        height="300px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={true}
                        placeholder="내용을 입력하세요"
                    />
                </div>

                <input
                    type="text"
                    className="post-input"
                    placeholder="프로젝트팀을 입력하세요"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    required
                />

                <input
                    type="text"
                    className="post-input"
                    placeholder="모금 기간을 입력하세요 (예: 2024.07.26 - 2024.10.26)"
                    value={fundPeriod}
                    onChange={(e) => setFundPeriod(e.target.value)}
                    required
                />

                <input
                    type="text"
                    className="post-input"
                    placeholder="사업 기간을 입력하세요 (예: 2024.11.07 - 2024.11.28)"
                    value={businessPeriod}
                    onChange={(e) => setBusinessPeriod(e.target.value)}
                    required
                />

                <input
                    type="number"
                    className="post-input"
                    placeholder="목표 금액을 입력하세요"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    required
                />

                <button type="submit" className="submit-btn">
                    작성 완료
                </button>
            </form>
        </Main>
    );
};

export default FundPost;
