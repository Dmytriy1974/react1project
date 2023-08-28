import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {

  let postsData=[
    {id:1, message: "Hi, How are you?", likeCounts:15},
    {id:2, message: "It's my first message", likeCounts:20}]
     
    let postsmodifData=postsData.map(pst=> <Post message={pst.message} 
      likeCounts={pst.likeCounts} />)

  return (
    <div className={s.postsBlock}>
      <div>
        <textarea>Enter post</textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>

      <div className={s.posts}>
        <h3>My posts </h3>
        {postsmodifData}
      </div>
    </div>
  )
}
export default MyPosts