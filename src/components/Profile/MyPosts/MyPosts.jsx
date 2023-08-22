import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
  return <div>
    <textarea>Enter post</textarea>
    <button>Add post</button>

    <div className={s.posts}>
      New posts
      <Post message="Hi, How are you?" likeCounts="15" />
      <Post message="It's my first message" likeCounts="20" />
    </div>
  </div>

}
export default MyPosts