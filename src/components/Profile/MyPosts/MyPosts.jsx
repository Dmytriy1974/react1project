import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {

  // let postsData=[
  //   {id:1, message: "Hi, How are you?", likeCounts:15},
  //   {id:2, message: "It's my first message", likeCounts:20}]

  let postsmodifData = props.postsData.map(pst => <Post message={pst.message}
    likeCounts={pst.likeCounts} />)

  let newPostElement = React.createRef();
  let addPost = () => {
    // let text=document.getElementById('new-text').value
    let text = newPostElement.current.value
    props.addPosts(text)
    props.updatePostChange('')

  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updatePostChange(text)
  }
  return (
    <div className={s.postsBlock}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.posts}>
        <h3>My posts </h3>
        {postsmodifData}
      </div>
    </div>
  )
}
export default MyPosts