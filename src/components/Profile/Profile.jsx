import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let postsData=[
    {id:1, message: "Hi, How are you?", likeCounts:15},
    {id:2, message: "It's my first message", likeCounts:20}]
  return <div >
    <ProfileInfo />
    <MyPosts postsData = {props.postsData}/>
  </div>
}
export default Profile