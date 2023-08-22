import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return <div className={s.content}>
    <div className={s.img}>
      <img src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" />
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWSR-bANXE5sNDP3dyPJrFlCvku1OQ-gyTg&usqp=CAU" />
      Discription
    </div>
    <MyPosts hey='yo' />
  </div>
}
export default Profile