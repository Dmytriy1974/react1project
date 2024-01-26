import Header from './Header'
import axios from 'axios';
import React from "react";
import { connect } from 'react-redux';
import { getAuthUserData, setAuthUserData } from "../../redax/auth-reduser"
import { authApi } from '../../api/api';

class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  isLoggin: state.auth.isLoggin,
  login: state.auth.login,
})
export default connect(mapStateToProps, { setAuthUserData, getAuthUserData })(HeaderComponent)