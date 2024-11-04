import '../../assets/styles/profile.scss'
import avatar from '../../assets/images/avatar.png'

const Profile = () => {
    return (
        <div>
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className='intro__banner'>
                            <div className="intro__image">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="intro__text">
                                <div className="intro__title">Привет, Амир!</div>
                                <div className="intro__text">
                                    Вся информация о курсах и учебных материалах вы всегда можете найти в кабинете
                                </div>
                            </div>
                        </div>
                        <div className="intro__btn">
                            Редактировать профиль
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="container">
                    <div className="hero__title">
                        Мой персонаж
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Profile