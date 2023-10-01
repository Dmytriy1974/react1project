import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsmodifData = props.postsData.map(pst => <Post key={pst.id} message={pst.message}
    likeCounts={pst.likeCounts} />)

  // let newPostElement = React.createRef();
  let onAddPost = () => {
    // let text=document.getElementById('new-text').value
    // let text = newPostElement.current.value
    // props.dispatch(addPostActionCreator ())
    props.addPosts()
  }
  let onPostChange = (event) => {
    let text = event.target.value
    // props.dispatch(updadePostChangeActionCreator (text))
    props.updatePostChange(text)
  }
  return (
    <div className={s.postsBlock}>
      <div>
        <textarea onChange={onPostChange} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>

      <div className={s.posts}>
        <h3>My posts </h3>
        {postsmodifData}
      </div>
    </div>
  )
}
export default MyPosts