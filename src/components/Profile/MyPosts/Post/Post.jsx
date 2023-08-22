import s from './Post.module.css'
const Post = (props) => {
  return <div>
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVDEKxJUaZwFXdHwZ2HHH_r-QI_wEzQGiUQ&usqp=CAU' />
      {props.message}
      <div>
        <span> like </span> {props.likeCounts}
      </div>
    </div>
  </div>

}
export default Post