import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
// let s = {
//   'nav': "nav",
// 'item': "item"
// }

const Navbar = () => {

  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className={
        ({ isActive, isPending }) =>
          isActive ? s.activeLink : ''}
      > Profile</NavLink>
    </div>

    <div className={s.item}>
      <NavLink to="/dialogs" className={
        ({ isActive, isPending }) =>
          isActive ? s.activeLink : ''}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" className={
        ({ isActive, isPending }) =>
          isActive ? s.activeLink : ''}>News</NavLink>
    </div>
    <div className={s.item} >
      <NavLink to="/music" className={
        ({ isActive, isPending }) =>
          isActive ? s.activeLink : ''}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings" className={
        ({ isActive, isPending }) =>
          isActive ? s.activeLink : ''}>Settings</NavLink>
    </div>
  </nav >
}
export default Navbar