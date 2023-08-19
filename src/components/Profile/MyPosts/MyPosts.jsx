import s from './MyPosts.module.css'
const MyPosts = () => {
  console.log('myposts', s)
  return <div> 
    My posts
      <div className={s.posts}>
        New posts
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
    </div>
     
}
export default MyPosts