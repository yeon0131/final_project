import React, { useState } from 'react';
import styled from 'styled-components';

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
    padding: 1rem;
`;

const Card = styled.div`
    width: 100%;
    padding-top: 100%; /* 1:1 비율 유지 */
    position: relative;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const ModalOverlay = styled.div`
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 1rem;
    border-radius: 10px;
    width: 50vw;
    height: 50vh;
    position: relative;
    max-width: 50rem;
    max-height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
    }

    .close-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1.5rem;
        background: none;
        border: none;
        color: #333;
        cursor: pointer;
    }
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    ${(props) => (props.right ? 'right: 1rem;' : 'left: 1rem;')}
`;

const PageNumber = styled.div`
    position: absolute;
    bottom: 1rem;
    font-size: 1rem;
    color: #555;
    width: 100%;
    text-align: center;
`;

export const MindColumn = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImages, setSelectedImages] = useState([]);

    // 각 카드별 이미지 리스트 정의
    const imageList1 = [
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night.png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(1).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(2).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(3).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(4).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(5).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(6).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(7).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(8).png`,
        `${process.env.PUBLIC_URL}/MC_images/sleepless_night(9).png`
    ];

    const imageList2 = [
        `${process.env.PUBLIC_URL}/MC_images/ptsd.png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(1).png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(2).png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(3).png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(4).png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(5).png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(6).png`,
        `${process.env.PUBLIC_URL}/MC_images/ptsd(7).png`
    ];

    const imageList3 = [
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder.png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(1).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(2).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(3).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(4).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(5).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(6).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(7).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(8).png`,
        `${process.env.PUBLIC_URL}/MC_images/panic_disorder(9).png`
    ];

    const imageList4 = [
        `${process.env.PUBLIC_URL}/MC_images/social_psychology.png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(1).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(2).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(3).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(4).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(5).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(6).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(7).png`,
        `${process.env.PUBLIC_URL}/MC_images/social_psychology(8).png`
    ];

    const openModal = (images) => {
        setSelectedImages(images);
        setCurrentImageIndex(0);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
    };

    const showPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedImages.length) % selectedImages.length);
    };

    return (
        <>
            <Cards>
                <Card onClick={() => openModal(imageList1)}>
                    <img src={imageList1[0]} alt="이미지 1" />
                </Card>
                <Card onClick={() => openModal(imageList2)}>
                    <img src={imageList2[0]} alt="이미지 2" />
                </Card>
                <Card onClick={() => openModal(imageList3)}>
                    <img src={imageList3[0]} alt="이미지 3" />
                </Card>
                <Card onClick={() => openModal(imageList4)}>
                    <img src={imageList4[0]} alt="이미지 4" />
                </Card>
            </Cards>

            <ModalOverlay visible={isModalOpen}>
                <ModalContent>
                    <button className="close-button" onClick={closeModal}>×</button>
                    <img src={selectedImages[currentImageIndex]} alt="모달 이미지" />
                    {currentImageIndex > 0 && <NavButton onClick={showPrevImage}>{"<"}</NavButton>}
                    {currentImageIndex < selectedImages.length - 1 && (
                        <NavButton right onClick={showNextImage}>{">"}</NavButton>
                    )}
                    <PageNumber>{`${currentImageIndex + 1} / ${selectedImages.length}`}</PageNumber>
                </ModalContent>
            </ModalOverlay>

        </>
    );
};

export default MindColumn;
