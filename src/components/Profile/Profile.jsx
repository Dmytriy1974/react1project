import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div >
    <ProfileInfo />
    <MyPosts postsData={props.state.postsData}
      addPosts={props.addPosts}
      newPostText={props.state.newPostText}
      updatePostChange={props.updatePostChange} />

  </div>
}
export default Profile