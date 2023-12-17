import Preloader from "../../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div >
                <img className={s.img} src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" />
            </div>
            <div className={s.descriptionBlock}>
                <span>
                    <img src={props.profile.photos.small} />
                    <span>   </span>

                    {props.profile.aboutMe}
                    <span>   </span>

                </span>
                {props.profile.lookingForAJob ?  <span className={s.spanJob}>
                        looking for a JOB: YES
                    </span>:                    
                    <span className={s.spanJob}>
                    looking for a JOB:
                    <span>   </span>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbU-18kx749vd3oP2FSqZhbopz7iGtQI6iQA&usqp=CAU' />
                </span>
                }
            </div>
        </div>
    )
}

export default ProfileInfo