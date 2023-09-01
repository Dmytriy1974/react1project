import s from "./ProfileInfo.module.css"
const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img className={s.img}src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" />
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWSR-bANXE5sNDP3dyPJrFlCvku1OQ-gyTg&usqp=CAU" />
                Description
            </div>
        </div>

    )
}

export default ProfileInfo