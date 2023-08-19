import s from './Navbar.module.css'
// let s = {
//   'nav': "nav",
// 'item': "item"
// }

const Navbar = () => {
  console.log(s.item)
  // console.log({s.item})
  
    return    <nav className={s.nav}>
  <div className={s.item}>
      <a href="s"> Profile</a>
    </div>
    <div className={s.item}>
      <a href="s">Messages</a>
    </div>
    <div className={s.item}>
      <a href="s">News</a>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <a className={`${s.item} ${s.active}`} href="s" >Music</a>
    </div>
    <div className={s.item}>
      <a href="s">Settings</a>
    </div>
  </nav>
}
export default Navbar