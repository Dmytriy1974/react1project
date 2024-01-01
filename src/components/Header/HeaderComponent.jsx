import Header from './Header'
import axios from 'axios';
import React from "react";
import { connect } from 'react-redux';
import { setAuthUserData } from "../../redax/auth-reduser"
import { authApi } from '../../api/api';

class HeaderComponent extends React.Component {
  componentDidMount() {
    authApi.getAuthUserData() .then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        this.props.setAuthUserData(id, email, login)
      }
    })
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderComponent)