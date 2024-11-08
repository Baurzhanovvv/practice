import '../../assets/styles/profile.scss'
import coinImage from '../../assets/images/coins.png';

const CourseIntro = () => {
    return (
        <div>
            <div className="intro">
                <div className="container">
                    <div className="intro__inner">
                        <div className="intro__courses">
                            <div className="intro__course">
                                <div className="intro__breadcrumbs">
                                    Мой кабинет {'>'} Мои курсы {'>'} <span className='active'>UI/UX design для начинающих дизайнеров</span>
                                </div>
                                <div className="intro__title">
                                    <span>UI/UX design для начинающих дизайнеров</span>
                                </div>
                            </div>
                            <div className="intro__coins">
                                19/20 <img src={coinImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseIntro