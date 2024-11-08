import Profile from "../profile/profile";
import '../../assets/styles/hero.scss';
import item1 from '../../assets/images/1.png'
import item2 from '../../assets/images/2.png'
import item3 from '../../assets/images/3.png'
import item4 from '../../assets/images/4.png'
import hat from '../../assets/images/hat.png';
import coinImage from '../../assets/images/coins.png';
import { useState } from "react";
import LeaderBoard from "../generals/leaderboard";

const Hero = () => {
    const [choosen, setChoosen] = useState(null); // Хранение выбранного элемента

    // Функция для обработки клика на элемент
    const handleChoose = (item: any) => {
        setChoosen(item);
    };

    return (
        <div>
            <Profile />
            <div className="constructor">
                <div className="container">
                    <div className="constructor__inner">
                        <div className="skins">
                            <div className="skins__header">
                                <div className="skins__items1">
                                    {[hat, hat, hat, hat].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`skins__item1 ${choosen === item ? "selected" : ""}`}
                                            onClick={() => handleChoose(item)}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="skins__items">
                                {[item1, item2, item3, item4].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`skins__item ${choosen === item ? "selected" : ""}`}
                                        onClick={() => handleChoose(item)}
                                    >
                                        <img src={item} alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="choosen__hero">
                            <div className="choosen__coins">
                                <img src={coinImage} alt="Coin" /> 0
                            </div>
                            <div className="choosen">
                                {choosen && (
                                    <div className="choosen__item">
                                        <img src={choosen} alt="Выбранный элемент" />
                                    </div>
                                )}
                            </div>
                            <button className="btn btn-transparent">
                                Сохрани меня
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <LeaderBoard />
        </div>
    );
};

export default Hero;
