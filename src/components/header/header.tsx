import { Link } from 'react-router-dom'
import bookmark from '../../assets/images/Bookmark.svg'
import avatar from '../../assets/images/avatar.png'
import '../../assets/styles/header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <Link to="/">
                            <svg width="81" height="18" viewBox="0 0 81 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8 5.09668C10.3363 3.63294 9.1165 2.98239 7.57144 2.98239C6.27034 2.98239 4.72528 3.4703 4.72528 5.01536C4.72528 6.80437 7.00221 7.12965 9.27913 7.7802C11.5561 8.43075 13.833 9.40657 13.833 12.578C13.833 15.8308 11.3121 17.8637 7.57144 17.8637C4.88792 17.8637 2.36704 16.8879 0.740662 15.1802L2.61099 12.7406C4.07473 14.2044 5.94506 14.9363 7.57144 14.9363C8.95386 14.9363 10.4989 14.367 10.4989 12.822C10.4989 11.0329 8.22199 10.545 5.94506 9.89449C3.66814 9.16262 1.39121 8.18679 1.39121 5.178C1.39121 2.08788 3.74946 0.13623 7.4088 0.13623C10.011 0.13623 12.2066 1.11206 13.6704 2.81975L11.8 5.09668Z" fill="white" />
                                <path d="M19.0044 0.13623V7.12965H21.4439L26.2418 0.13623H29.7385L24.1275 8.34943L30.0637 17.1319H26.4044L21.6066 10.0571H19.0044V17.1319H15.8329V0.13623H19.0044Z" fill="white" />
                                <path d="M41.9034 0.13623V2.81975H38.5693V14.367H41.9034V17.1319H32.0638V14.367H35.4792V2.81975H32.0638V0.13623H41.9034Z" fill="white" />
                                <path d="M47.0748 0.13623V14.2857H53.9056V17.1319H43.9034V0.13623H47.0748Z" fill="white" />
                                <path d="M58.9957 0.13623V14.2857H65.9078V17.1319H55.9056V0.13623H58.9957Z" fill="white" />
                                <path d="M78.9671 5.09668C77.5034 3.63294 76.2836 2.98239 74.7386 2.98239C73.4375 2.98239 71.8924 3.4703 71.8924 5.01536C71.8924 6.80437 74.1693 7.12965 76.4462 7.7802C78.7232 8.43075 81.0001 9.40657 81.0001 12.578C81.0001 15.8308 78.4792 17.8637 74.7386 17.8637C72.055 17.8637 69.5342 16.8879 67.9078 15.1802L69.7781 12.7406C71.2418 14.2044 73.1122 14.9363 74.7386 14.9363C76.121 14.9363 77.666 14.367 77.666 12.822C77.666 11.0329 75.3891 10.545 73.1122 9.89449C70.8353 9.16262 68.5583 8.18679 68.5583 5.178C68.5583 2.08788 70.9166 0.13623 74.5759 0.13623C77.1781 0.13623 79.3737 1.11206 80.8375 2.81975L78.9671 5.09668Z" fill="white" />
                            </svg>
                        </Link>
                        <div className="header__menu">
                            <Link to="/course" className="nav__link">Каталог курсов</Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <div className="header__nav">
                            <a href="#!" className="nav__link none">
                                <img src={bookmark} />
                            </a>
                            <a href="#!" className="nav__link none">
                                <img src={bookmark} />
                            </a>
                            <a href="#!" className="nav__link none">
                                <img src={bookmark} />
                            </a>
                            <div className="nav__link none avatar">
                                <Link to="/hero">
                                    <img src={avatar} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
