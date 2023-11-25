import Preloader from "../../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    if (!props.profile) {
    return <Preloader/>}

    return (
         <div>
            <div >
                <img className={s.img}src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" />
            </div>
            <div className={s.descriptionBlock}>

                <img src={props.profile.photos.small}/>

                
                Description
            </div>
        </div>

    )
}

export default ProfileInfo