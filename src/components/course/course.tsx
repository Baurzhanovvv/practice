import React, { useState, useRef, useEffect } from 'react';
import CourseIntro from "../courseIntro/courseIntro";
import coinImage from '../../assets/images/coins.png';
import '../../assets/styles/course.scss';
import hero from '../../assets/images/2.png';
import Map from '../lilypad/map';
import { Link } from 'react-router-dom';

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

const Course = () => {
    const [notifications, setNotifications] = useState<number[]>([]);
    const playerRef = useRef<HTMLIFrameElement | null>(null);

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = initializePlayer;
        } else {
            initializePlayer();
        }
    }, []);

    const initializePlayer = () => {
        if (playerRef.current) {
            new window.YT.Player(playerRef.current, {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                }
            });
        }
    };

    const onVideoEnd = () => {
        addNotification(); // Show notification for coins
    };

    const onPlayerReady = (event: any) => {
        event.target.playVideo();
    };

    const onPlayerStateChange = (event: any) => {
        if (event.data === window.YT.PlayerState.ENDED) {
            onVideoEnd();
        }
    };

    const addNotification = () => {
        const newNotificationId = Date.now();
        setNotifications((prev) => [...prev, newNotificationId]);

        // Remove notification after 5 seconds
        setTimeout(() => {
            setNotifications((prev) => prev.filter((id) => id !== newNotificationId));
        }, 5000);
    };

    return (
        <>
            <CourseIntro />
            <div className="container">
                <div className="course__sidebars">
                    <div className="course__sidebar">
                        <iframe
                            ref={playerRef}
                            style={{ marginTop: 20 }}
                            width={800}
                            height={500}
                            src="https://www.youtube.com/embed/8ulA5-cb2po?enablejsapi=1"
                            title="Top 5 Bombaclat"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <h2>
                            Описание
                        </h2>
                        <div className="side__text">
                            <p>
                                Каждый второй вторник у нас проходит вебинар, на котором эксперт по карьере Екатерина Кленова отвечает на важные вопросы:

                                Зачем мы меняем профессии и почему это так сложно
                                Как сменить профессию и остаться в выигрыше: правила безопасности
                                Что мешает смене профессии: страхи и барьеры
                            </p>
                            <p>
                                Каждый второй вторник у нас проходит вебинар, на котором эксперт по карьере Екатерина Кленова отвечает на важные вопросы:

                                Зачем мы меняем профессии и почему это так сложно
                                Как сменить профессию и остаться в выигрыше: правила безопасности
                                Что мешает смене профессии: страхи и барьеры
                            </p>
                        </div>
                    </div>
                    <div className="sidebar">
                        <Link to="/hero">
                            <img src={hero} alt="" />
                        </Link>
                        <Map width={300} height={300} profile={false} />
                    </div>
                </div>
                <div className="course__btn">
                    <button className="btn btn-transparent" onClick={addNotification}>
                        Получить задание
                    </button>
                </div>
            </div>

            {notifications.map((id) => (
                <div key={id} className="coin-notification">
                    <button className="close-btn" onClick={() => setNotifications((prev) => prev.filter((notifId) => notifId !== id))}>×</button>
                    <img src={coinImage} alt="Coin" className="coin-notification__image" />
                    <div className="coin-notification__text">5 монет получено!</div>
                    <div className="progress-bar"></div>
                </div>
            ))}
        </>
    );
};
// https://www.canva.com/design/DAGU1lIrrQo/FKAvUV5CS1qrFVy9cxuTKA/edit?utm_content=DAGU1lIrrQo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
export default Course;
