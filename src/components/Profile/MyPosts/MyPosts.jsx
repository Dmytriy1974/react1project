import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updadePostChangeActionCreator } from '../../../redax/profile-reduser';
const MyPosts = (props) => {
    
  let postsmodifData = props.postsData.map(pst => <Post message={pst.message}
    likeCounts={pst.likeCounts} />)

  // let newPostElement = React.createRef();
  let addPost = () => {
    // let text=document.getElementById('new-text').value
    // let text = newPostElement.current.value
    props.dispatch(addPostActionCreator ())
  }
  let onPostChange = (event) => {
    let text = event.target.value
    props.dispatch(updadePostChangeActionCreator (text))
  }
  return (
    <div className={s.postsBlock}>
      <div>
        <textarea onChange={onPostChange} value={props.newPostText} />
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