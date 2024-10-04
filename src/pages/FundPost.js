import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react'; // TinyMCE 에디터 사용

// Styled components
const Main = styled.main`
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
`;

const FundPost = () => {
    const navigate = useNavigate();

    // 상태 관리
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); // 에디터에 입력된 내용
    const [team, setTeam] = useState('');
    const [fundPeriod, setFundPeriod] = useState('');
    const [businessPeriod, setBusinessPeriod] = useState('');
    const [targetAmount, setTargetAmount] = useState('');

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            title,
            content, // HTML 형태로 저장된 에디터 내용
            team,
            fundPeriod,
            businessPeriod,
            targetAmount,
        };

        // 나중에 실제 API를 통해 서버에 보낼 수 있도록 준비
        console.log('작성된 글:', postData);

        // 글이 작성된 후, 다른 페이지로 이동 (예: 메인 페이지)
        navigate('/fund');
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

                {/* TinyMCE 에디터를 사용하여 글 작성 */}
                <div className="editor-container">
                    <Editor
                        apiKey="ot6rc0m9nao5iwlvosd8tt8iaj0kym5gg82funidq6o7humx"
                        value={content}
                        init={{
                            height: 300,
                            menubar: true,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount',
                                'placeholder' // placeholder 플러그인 추가
                            ],
                            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                            placeholder: "내용을 입력하세요" // placeholder 내용 설정
                        }}
                        onEditorChange={(newContent) => setContent(newContent)}
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
