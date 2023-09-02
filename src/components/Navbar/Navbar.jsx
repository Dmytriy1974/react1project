import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
// let s = {
//   'nav': "nav",
// 'item': "item"
// }

const Navbar = (props) => {

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
        ({ isActive}) =>
          isActive ? s.activeLink : ''}>Friends</NavLink>
const index = props.state.abonentData.findIndex (pers => {
 return pers.isFriend =='yes'}) 
          <div>
          <span> <img src={props.state.abonentData[index].img} /> </span>
          </div>
          <div>
          <span> {props.state.abonentData[index].name} </span>

          </div>

    </div>
  </nav >
}
export default Navbar