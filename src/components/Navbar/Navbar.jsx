import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
// let s = {
//   'nav': "nav",
// 'item': "item"
// }

const Navbar = (props) => {
  const friendsAbonent = props.state.abonentData.filter(pers => { 
    return pers.isFriend === true })
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className={
        ({ isActive, isPending }) =>
          isActive ? s.activeLink : ''}
      > Profile</NavLink>
    </div>

    <div className={s.item}>
      <NavLink to="/dialogs/*" className={
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
    <div className={s.friends}>
      <NavLink to="/friends" className={
        ({ isActive }) =>
          isActive ? s.activeLink : ''}>Friends</NavLink>
      <div className={s.friendsAbonent}>
        {friendsAbonent.map(abonent =>  {
      return <div>
        <div>
          <span> <img src={abonent.img} /> </span>
          </div>
          <div>
          <span> {abonent.name} </span>
          </div>
      </div>
    })}
      </div>

    </div>
  </nav >
}
export default Navbar