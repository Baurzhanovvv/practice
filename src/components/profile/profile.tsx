import { useState, useEffect } from 'react';
import '../../assets/styles/profile.scss';
import avatar from '../../assets/images/avatar.png';
import Map from '../lilypad/map';

const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOptOutClick = () => {
        setShowModal(true);
    };

    const handleConfirmOptOut = () => {
        console.log("User opted out of the game.");
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 5000); // Auto-close modal after 5 seconds
            return () => clearTimeout(timer); // Clear timeout on component unmount or when modal is closed
        }
    }, [showModal]);

    return (
        <div>
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className='intro__banner'>
                            <div className="intro__image">
                                <img src={avatar} alt="User Avatar" />
                            </div>
                            <div className="intro__text">
                                <div className="intro__title">Привет, Амир!</div>
                                <div className="intro__text">
                                    Вся информация о курсах и учебных материалах вы всегда можете найти в кабинете
                                </div>
                            </div>
                        </div>
                        <div className="intro__btn">Редактировать профиль</div>
                        <div className="intro__btn" onClick={handleOptOutClick}>
                            Отказаться от игры
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="optout-modal">
                    <div className="optout-modal__content">
                        <h2>Вы уверены, что хотите отказаться от игры?</h2>
                        <p>Ваши данные будут удалены, и вы не сможете больше участвовать в игре.</p>
                        <div className="optout-modal__actions">
                            <button className="optout-modal__confirm" onClick={handleConfirmOptOut}>
                                Я отказываюсь
                            </button>
                            <button className="optout-modal__cancel" onClick={handleCloseModal}>
                                Отмена
                            </button>
                        </div>
                        <div className="optout-modal__progress-bar">
                            <div className="optout-modal__progress" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
