import React, { useState } from 'react';
import '../../assets/styles/leaderboard.scss';

const LeaderBoard = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const leaderboardData = Array.from({ length: 100 }, (_, i) => ({
        place: i + 1,
        nickname: `Player${i + 1}`,
        level: Math.floor(Math.random() * 50) + 1,
    }));

    return (
        <div className="leader">
            <div className="container">
                <div className="board">
                    <div className="board__inner">
                        <button className="btn board__btn" onClick={toggleModal}>
                            Посмотреть полный список
                        </button>
                        <div className="board__list">
                            {leaderboardData.slice(0, 3).map((player, index) => (
                                <div className="board__item" key={player.place}>
                                    <div className={`board__num ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`}>
                                        <span>{player.place}</span>
                                    </div>
                                    <div className="board__text">{player.nickname}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for full leaderboard */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal__content">
                        <button className="modal__close" onClick={toggleModal}>×</button>
                        <h2>Полный список лидеров</h2>
                        <div className="modal__list">
                            {leaderboardData.map(player => (
                                <div className="modal__item" key={player.place}>
                                    <span className="modal__place">{player.place}</span>
                                    <span className="modal__nickname">{player.nickname}</span>
                                    <span className="modal__level">Level {player.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaderBoard;
