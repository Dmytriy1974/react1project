import s from './Navbar.module.css'
// let s = {
//   'nav': "nav",
// 'item': "item"
// }

const Navbar = () => {
 
  return <nav className={s.nav}>
    <div className={s.item}>
      <a href="/profile"> Profile</a>
    </div>
    <div className={s.item}>
      <a href="/dialogs">Messages</a>
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